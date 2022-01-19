import FeaturedPosts from "./FeaturedPosts";
import Page from "./Page";
import PostList from "./PostList";

// resolve Storyblok components to Next.js components
const Components = {
  page: Page,
  "featured-posts": FeaturedPosts,
  "post-list": PostList,
};

const DynamicComponent = ({ blok, devtoArticles }) => {
  // check if component is defined above

  if (typeof Components[blok?.component] !== "undefined") {
    const Component = Components[blok.component];
    return (
      <Component blok={blok} key={blok._uid} devtoArticles={devtoArticles} />
    );
  }

  // fallback if the component doesn't exist
  return (
    <p>
      The component <strong>{blok?.component}</strong> has not been created yet.
    </p>
  );
};

export default DynamicComponent;
