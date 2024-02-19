import { useRouter } from "next/router";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import Link from "next/link";

const ArtPiecesDetailsPage = ({ pieces }) => {
  const router = useRouter();
  const { slug } = router.query;
  const piece = pieces.find((piece) => piece.slug === slug);
  //   console.log(piece);
  const { dimensions, imageSource, name, artist, year, genre } = piece;
  return (
    <div>
      <Link href="/art-pieces">back to all art pieces</Link>
      <h1>Art Pieces Details</h1>
      <ArtPiecePreview
        width={dimensions.width}
        height={dimensions.height}
        image={imageSource}
        title={name}
        artist={artist}
      />
      <h4>Year: {year}</h4>
      <h4>Genre: {genre}</h4>
    </div>
  );
};

export default ArtPiecesDetailsPage;
