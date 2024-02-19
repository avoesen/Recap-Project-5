import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ pieces, onToggleFavorite }) {
  return (
    <>
      <Spotlight pieces={pieces} onToggleFavorite={onToggleFavorite} />
    </>
  );
}
