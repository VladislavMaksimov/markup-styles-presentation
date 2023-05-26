import { styled } from "styled-components";
import { Card } from "./Card/Card";

const StyledCards = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  > :nth-child(odd) {
    background-color: rgb(179, 237, 179);
  }

  > :nth-child(even) {
    background-color: rgb(230, 237, 179);
  }
`;

const StyledHeading = styled.h2`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Cards = () => (
  <StyledCards>
    <StyledHeading>Cards</StyledHeading>
    <Card text="Meat 1" />
    <Card text="Vodka 1" />
    <Card text="Meat 2" />
    <Card text="Vodka 2" />
  </StyledCards>
);
