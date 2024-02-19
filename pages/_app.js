import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  //console.log(data);
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} pieces={data} />
      </Layout>
    </>
  );
}
