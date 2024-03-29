import Head from "next/head";
import DynamicComponent from "../components/DynamicComponent";
import Storyblok from "../utils/stroyblok";

export default function Home({ story }) {
  return (
    <div>
      <DynamicComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  let slug = "home";

  let sbParams = {
    version: "published",
    resolve_relations: ["featured-posts.posts", "more-posts.posts"],
  };

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  if (preview) {
    (sbParams.version = "draft"), (sbParams.cv = Date.now());
  }

  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
  };
}
