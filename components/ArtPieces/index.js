import ArtPiecePreview from "../ArtPiecePreview";
import styled from "styled-components";

export default function ArtPieces({ pieces, onToggleFavorite }) {
  return (
    <>
      <StyledUl>
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            onToggleFavorite={onToggleFavorite}
            pieces={piece}
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
