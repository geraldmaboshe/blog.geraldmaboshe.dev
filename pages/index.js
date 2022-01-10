import Head from "next/head";
import DynamicComponent from "../components/DynamicComponent";
import Storyblok from "../utils/stroyblok";

export default function Home({ story }) {
  return (
    <div>
      <Head>
        <title>Gerald Maboshe</title>
        <meta
          name="description"
          content="Developer, Community Lead, Technical Writer"
        />
      </Head>
      <DynamicComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  let slug = "home";

  let sbParams = {
    version: "published",
    resolve_relations: ["featured-posts.post"],
  };

  if (preview) {
    (sbParams.version = "draft"), (sbParams.cv = Date.now());
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
  };
}
