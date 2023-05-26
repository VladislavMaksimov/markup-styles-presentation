import { styled } from "styled-components";
import { Metric } from "./Metric/Metric";

const StyledMetrics = styled.dl`
  width: 200px;

  > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Metrics = () => (
  <StyledMetrics>
    <Metric name="Amount of vodka" value={100} />
    <Metric name="Amount of bacon" value={200} />
    <Metric name="Amount of pork" value={1000} />
  </StyledMetrics>
);
