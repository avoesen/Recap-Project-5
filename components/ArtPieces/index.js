import ArtPiecePreview from "../ArtPiecePreview";
import styled from "styled-components";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <StyledUl>
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            artist={piece.artist}
            title={piece.name}
            height={piece.dimensions.height}
            width={piece.dimensions.width}
          />
        ))}
      </StyledUl>
    </>
  );
}

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
`;
