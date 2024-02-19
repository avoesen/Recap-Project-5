import ArtPieces from "@/components/ArtPieces";
export default function Favorites({ pieces, onToggleFavorite }) {
  const favoritePieces = pieces.filter((piece) => {
    return piece.isFavorite;
  });
  if (favoritePieces.length === 0) {
    return <h2>No favoritePieces found!</h2>;
  } else {
    return (
      <>
        <ArtPieces
          pieces={favoritePieces}
          onToggleFavorite={onToggleFavorite}
        />
      </>
    );
  }
  console.log(favoritePieces);
}
