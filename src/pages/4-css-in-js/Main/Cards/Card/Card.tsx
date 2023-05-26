import { FC } from "react";
import { styled } from "styled-components";

interface CardProps {
  text: string;
}

const StyledCard = styled.section`
  padding: 20px;
  border-radius: 8px;
`;

const StyledCardName = styled.span`
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const Card: FC<CardProps> = ({ text }) => (
  <StyledCard>
    <StyledCardName>{text}</StyledCardName>
  </StyledCard>
);
