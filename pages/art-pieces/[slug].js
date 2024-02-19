import { useRouter } from "next/router";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import Link from "next/link";

const ArtPiecesDetailsPage = ({ pieces, onToggleFavorite }) => {
  const router = useRouter();
  const { slug } = router.query;
  const piece = pieces.find((piece) => piece.slug === slug);
  //   console.log(piece);
  return (
    <div>
      <Link href="/art-pieces">back to all art pieces</Link>
      <h1>Art Pieces Details</h1>
      <ArtPiecePreview pieces={piece} onToggleFavorite={onToggleFavorite} />
      <h4>Year: {piece.year}</h4>
      <h4>Genre: {piece.genre}</h4>
    </div>
  );
};

export default ArtPiecesDetailsPage;
