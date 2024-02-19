import { useRouter } from "next/router";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import Link from "next/link";

const ArtPiecesDetailsPage = ({
  pieces,
  onToggleFavorite,
  setArtPiecesInfo
}) => {
  const router = useRouter();
  const { slug } = router.query;
  const piece = pieces.find((piece) => piece.slug === slug);

  function handleSubmit(event) {
    event.preventDefault();
    const commentInput = event.target.comment.value;
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setArtPiecesInfo(
      pieces.map((piece) =>
        piece.slug === slug
          ? {
              ...piece,
              comments: [...piece.comments, { comment: commentInput, date }],
            }
          : piece
      )
    );
    console.log(pieces)
  }
  const pieceComment = pieces.find((piece) => piece.slug === slug)

  const commentLength = pieceComment.comments.length 
  console.log(commentLength)
 
  return (
    <div>
      <Link href="/art-pieces">back to all art pieces</Link>
      <h1>Art Pieces Details</h1>
      <ArtPiecePreview pieces={piece} onToggleFavorite={onToggleFavorite} />
      <h4>Year: {piece.year}</h4>
      <h4>Genre: {piece.genre}</h4>
      <h3>Comments</h3>
      <ul>{pieceComment.comments.map((piece) => (<li key={piece.slug}> {piece.comment} - {piece.date}</li>))}</ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">write your comment here:</label>
        <input id="comment" name="comment" required type="text"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ArtPiecesDetailsPage;
