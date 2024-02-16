import ArtPiecePreview from "../ArtPiecePreview";

export default function Spotlight({pieces}) {
    function getRandomSlug() {
        return Math.floor(Math.random() * pieces.length);
    }
    const randomPiece = pieces[getRandomSlug()]
    
    const {imageSource, artist, name } = randomPiece
    return (
      <>
        <ArtPiecePreview
          image={imageSource}
          artist={artist}
          title={name}
          height={randomPiece.dimensions.height}
          width={randomPiece.dimensions.width}
        />
      </>
    );
}