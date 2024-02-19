import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/art-pieces">Art Pieces</StyledLink>
      <StyledLink href="/favorites">Favorites</StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: gray;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
`;

const StyledLink = styled(Link)`
  flex-grow: 1;
  padding: 15px;
  text-align: center;
  color: #000000;
  text-decoration: none;
  &:hover {
    background-color: aquamarine;
  }
`;
