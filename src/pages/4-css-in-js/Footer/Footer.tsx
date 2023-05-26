import { styled } from "styled-components";

const StyledFooter = styled.footer({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 30,
  backgroundColor: "aliceblue",
});

const StyledContacts = styled.section<{ marginBottom: number }>(
  ({ marginBottom }) => ({
    display: "flex",
    flexDirection: "column",
    "> :not(:last-child)": {
      marginBottom,
    },
  })
);

export const Footer = () => (
  <StyledFooter>
    <StyledContacts marginBottom={15}>
      <p>tel: 000000</p>
      <p>mail: vodka@meat.ru</p>
    </StyledContacts>
  </StyledFooter>
);
