/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: { "--barHeight": +8 + "px", "--innerPadding": 0 },
  medium: { "--barHeight": +12 + "px", "--innerPadding": 0 },
  large: { "--barHeight": +24 + "px", "--innerPadding": 4 + "px" },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      style={{ ...SIZES[size], "--progress": value }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      <InnerWrapper>
        <Bar></Bar>
      </InnerWrapper>
    </Wrapper>
  );
};
const InnerWrapper = styled.div`
  border-radius: 6px;
  height: 100%;
  overflow: hidden;
`;
const Bar = styled.div`
  height: 100%;
  display: inline-block;
  width: calc((370px / 100) * var(--progress));
  // width: calc(var(--barHeight) / 100 * var(--progress)));
  background: ${COLORS.primary};
`;
const Wrapper = styled.div`
  padding: var(--innerPadding);
  height: var(--barHeight);
  width: 370px;
  background: rgba(128, 128, 128, 0.15);
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: 8px;
`;

export default ProgressBar;
