import { styled } from "styled-components";
import meat from "../../../../assets/photos/pexels-photo-65175.jpeg";

const StyledMeat = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;

  > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const StyledMeatPicture = styled.img`
  width: 400px;
  height: 266px;
`;

const StyledMeatCaption = styled.figcaption`
  color: gray;
`;

export const Figure = () => (
  <StyledMeat>
    <StyledMeatPicture alt="Meat" src={meat} />
    <StyledMeatCaption>Picture 1. That's definitely meat</StyledMeatCaption>
  </StyledMeat>
);
