import FeaturedPosts from "./FeaturedPosts";
import Page from "./Page";
import MorePosts from "./MorePosts";

const Components = {
  page: Page,
  "featured-posts": FeaturedPosts,
  "more-posts": MorePosts,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok?.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} key={blok._uid} />;
  }

  return (
    <p>
      The component <strong>{blok?.component}</strong> has not been created yet.
    </p>
  );
};

export default DynamicComponent;
