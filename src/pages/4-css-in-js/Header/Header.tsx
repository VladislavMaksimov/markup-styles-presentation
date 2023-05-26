import styled from "styled-components";
import vodka from "../../../assets/icons/vodka-russia-svgrepo-com.svg";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: rgb(205, 255, 255);
`;

const StyledH1 = styled.h1<{ $fontSize?: string }>`
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "60px")};
  line-height: 60px;
  font-weight: 400;
  text-transform: uppercase;
`;

const StyledVodka = styled.img`
  width: 70px;
  height: 70px;
`;

export const Header = () => (
  <StyledHeader>
    <StyledH1 $fontSize="30px">Best page ever</StyledH1>
    <StyledVodka alt="Best drink ever" src={vodka} />
  </StyledHeader>
);
