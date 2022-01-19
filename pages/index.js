import axios from "axios";
import Head from "next/head";
import DynamicComponent from "../components/DynamicComponent";
import Storyblok from "../utils/stroyblok";

export default function Home({ story, devtoArticles }) {
  return (
    <div>
      <Head>
        <title>Blog | Gerald Maboshe</title>
        <meta
          name="description"
          content="Developer, Community Lead, Technical Writer"
        />
      </Head>
      <DynamicComponent blok={story.content} devtoArticles={devtoArticles} />
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  let slug = "home";

  let sbParams = {
    version: "published",
    resolve_relations: ["featured-posts.posts", "post-list.posts"],
  };

  if (preview) {
    (sbParams.version = "draft"), (sbParams.cv = Date.now());
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  let devtoArticles = await axios.get("https://dev.to/api/articles/me", {
    headers: {
      api_key: process.env.DEV_TO_API_KEY,
    },
  });

  return {
    props: {
      story: data ? data.story : null,
      devtoArticles: devtoArticles.data ? devtoArticles.data : null,
      preview,
    },
  };
}
