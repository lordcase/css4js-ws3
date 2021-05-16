import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <IconWrapper>
        <Icon id="chevron-down" size="20" />
      </IconWrapper>
      <select value={value} onChange={onChange}>
        {children}
      </select>
    </SelectWrapper>
  );
};

export default Select;

const SelectWrapper = styled.div`
  select {
    appearance: none;
    background: none;
    border: none;
    padding: 12px;
    padding-right: 52px;
    font-size: 16px;
    font-weight: 400;
    color: ${COLORS.gray700};
    position: relative;
    &:hover {
      color: ${COLORS.black};
    }
  }
  position: relative;
  border: 0;
  display: inline-block;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
`;

const IconWrapper = styled.div`
  display: inline-block;
  position: absolute;
  right: 16px;
  top: 12px;
  color: ${COLORS.gray700};
  ${SelectWrapper}:hover & {
    color: ${COLORS.black};
  }
`;
