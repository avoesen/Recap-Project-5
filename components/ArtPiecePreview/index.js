import Image from "next/image";
import styled from "styled-components";

export default function ArtPiecePreview({
  width,
  height,
  image,
  title,
  artist,
}) {
  //console.log(artist, title, image);
  return (
    <Card>
      <StyledImage src={image} width={width} height={height} alt={title} />
      <StyledTitle>{title}</StyledTitle>
      <h4>by {artist}</h4>
    </Card>
  );
}

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
