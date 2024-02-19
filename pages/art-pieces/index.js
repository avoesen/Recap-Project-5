import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecePage({ pieces, onToggleFavorite }) {
  return <ArtPieces pieces={pieces} onToggleFavorite={onToggleFavorite} />;
}
