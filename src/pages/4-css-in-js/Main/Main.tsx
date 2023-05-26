import { styled } from "styled-components";
import { Article } from "./Article/Article";
import { Cards } from "./Cards/Cards";
import { Figure } from "./Figure/Figure";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;

  > :not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Main = () => (
  <StyledMain>
    <Article />
    <Figure />
    <Cards />
  </StyledMain>
);
