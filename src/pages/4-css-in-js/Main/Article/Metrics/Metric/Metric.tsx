import { FC } from "react";
import { styled } from "styled-components";

interface MetricProps {
  name: string;
  value: number;
}

const StyledMetric = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledMetricName = styled.dt`
  color: gray;
`;

export const Metric: FC<MetricProps> = ({ name, value }) => (
  <StyledMetric>
    <StyledMetricName>{name}</StyledMetricName>
    <dd>{value}</dd>
  </StyledMetric>
);
