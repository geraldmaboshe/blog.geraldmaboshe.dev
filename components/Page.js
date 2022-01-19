import DynamicComponent from "./DynamicComponent";

const Page = ({ blok, devtoArticles }) => (
  <main>
    {blok.body
      ? blok.body.map((blok) => (
          <DynamicComponent
            blok={blok}
            key={blok._uid}
            devtoArticles={devtoArticles}
          />
        ))
      : null}
  </main>
);

export default Page;
