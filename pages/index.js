import Head from "next/head";
import DynamicComponent from "../components/DynamicComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gerald Maboshe</title>
        <meta
          name="description"
          content="Developer, Community Lead, Technical Writer"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <DynamicComponent />
    </div>
  );
}
