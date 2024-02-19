import styled from "styled-components"
import Heart from "../../assets/heart.svg"

export default function FavoriteButton({isFavorite, onToggleFavorite, slug}) {
    // console.log(slug)
    return (
      <>
        <StyledButton onClick={() => onToggleFavorite(slug)}>
          <StyledHeart isFavorite={isFavorite} width={40} />
        </StyledButton>
      </>
    );
}

const StyledHeart = styled(Heart)`
fill: ${(props) => (props.isFavorite? "black": "white")}; 

&:hover {
    fill: aquamarine; 
}

`
const StyledButton = styled.button`
    background-color: transparent;
    border: none; 
`
