import React from "react";
// import DynamicComponent from "../components/DynamicComponent";
import Head from "next/head";
import axios from "axios";

import Storyblok, { useStoryblok } from "../utils/stroyblok";
import SelectedPost from "../components/SelectedPost";

export default function Page({ story = null, devtoArticle = null }) {
  const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // enable bridge only in prevew mode
  story = useStoryblok(story, enableBridge);

  return (
    <div>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SelectedPost post={story ? story : devtoArticle} />
    </div>
  );
}

export async function getStaticProps({ params = null, preview = false }) {
  // join the slug array used in Next.js catch-all routes
  let slug = params.slug ? params.slug.join("/") : "home";
  let storyblokSlug = slug;
  if (
    slug == "build-a-fullstack-app-with-strapi-and-next-js-5d8p" ||
    slug == "how-to-use-redux-with-hooks-in-a-react-typescript-project-4j50"
  ) {
    storyblokSlug = "/";
  }

  let sbParams = {
    // change to `published` to load the published version
    version: "draft", // or published
  };

  if (preview) {
    // set the version to draft in the preview mode
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let devtoArticles = await axios.get("https://dev.to/api/articles/me", {
    headers: {
      api_key: process.env.DEV_TO_API_KEY,
    },
  });

  let singleArticle = devtoArticles.data.find(
    (article) => article.slug == `${slug}`
  );

  let { data } = await Storyblok.get(`cdn/stories/${storyblokSlug}`, sbParams);

  return {
    props: {
      devtoArticle: singleArticle ? singleArticle : null,
      story: data.story ? data.story : null,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export async function getStaticPaths() {
  // get all links from Storyblok
  let { data } = await Storyblok.get("cdn/links/");

  let devtoArticles = await axios.get("https://dev.to/api/articles/me", {
    headers: {
      api_key: process.env.DEV_TO_API_KEY,
    },
  });

  let paths = [];
  // create a routes for every link
  Object.keys(data.links).forEach((linkKey) => {
    // do not create a route for folders or the home (index) page
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    // cretes all the routes
    paths.push({ params: { slug: splittedSlug } });
  });

  devtoArticles.data.map((article) => {
    paths.push({ params: { slug: article.slug.split("/") } });
  });

  //paths.shift();

  return {
    paths: paths || [],
    fallback: false,
  };
}
