import { styled } from "styled-components";
import { Metrics } from "./Metrics/Metrics";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const StyledH2 = styled.h2`
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  text-transform: uppercase;
`;

const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledDescription = styled.p`
  max-width: 50%;
`;

export const Article = () => (
  <StyledArticle>
    <StyledH2>Meat and vodka</StyledH2>
    <StyledInfo>
      <StyledDescription>
        Bacon ipsum dolor amet pancetta salami ball tip hamburger sirloin
        ribeye, pastrami tri-tip shankle pork chop ground round capicola sausage
        pork belly frankfurter. Venison ball tip corned beef strip steak
        shoulder leberkas sausage kevin tri-tip drumstick buffalo burgdoggen
        andouille salami. Ground round jowl burgdoggen, pig flank tail beef ribs
        venison landjaeger porchetta t-bone fatback. Chuck landjaeger short loin
        turducken spare ribs pork loin pork chop t-bone sirloin kevin boudin
        porchetta shankle meatball. Bacon bresaola pancetta burgdoggen hamburger
        tenderloin doner. Buffalo pork belly pork chop kielbasa t-bone short
        loin burgdoggen tail brisket.
      </StyledDescription>
      <Metrics />
    </StyledInfo>
  </StyledArticle>
);
