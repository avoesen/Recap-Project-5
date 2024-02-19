import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecePreview({ onToggleFavorite, pieces }) {
  const { name, imageSource, artist, isFavorite, slug, dimensions } = pieces;
  //const { width, height } = dimensions;
  console.log(pieces);

  return (
    <Card>
      <StyledLink href={`/art-pieces/${slug}`}>
        <StyledImage src={imageSource} width={350} height={350} alt={name} />
        <StyledTitle>{name}</StyledTitle>
      </StyledLink>
      <h4>by {artist}</h4>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        isFavorite={isFavorite}
      />
    </Card>
  );
}

const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: none;
`;

const StyledTitle = styled.h3`
  align-self: center;
  font-style: italic;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Card = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style-type: none;
  background-color: lightgrey;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
  padding: 1.5rem;
`;
