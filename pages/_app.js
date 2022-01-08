import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {typeof window !== "undefined" ? <Component {...pageProps} /> : null}
    </Layout>
  );
}

export default MyApp;
