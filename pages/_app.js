import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState();
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  useEffect(() => {
    if (data) {
      setArtPiecesInfo(data.map((piece) => ({ ...piece, isFavorite: false })));
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function onToggleFavorite(id) {
    setArtPiecesInfo(
      artPiecesInfo.map((piece) =>
        piece.slug === id ? { ...piece, isFavorite: !piece.isFavorite } : piece
      )
    );
  }

  if (artPiecesInfo) {
    return (
      <>
        <Layout>
          <GlobalStyle />
          <Component
            {...pageProps}
            pieces={artPiecesInfo}
            onToggleFavorite={onToggleFavorite}
          />
        </Layout>
      </>
    );
  }
}
