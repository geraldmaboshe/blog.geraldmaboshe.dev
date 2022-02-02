import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
import SEO from "@bradgarropy/next-seo";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO
        title="Gerald Maboshe | Blog - Developer, Community Lead, Technical Writer"
        description="Developer, Community Lead, Technical Writer"
        keywords={[
          "web development",
          "programming",
          "open-source",
          "technical writing",
          "community",
          "blog",
          "portfolio",
          "javascript",
          "react",
          "nextjs",
        ]}
        twitter={{
          site: "@geraldmaboshe",
          card: "summary",
        }}
      />
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
