import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const iconSize = size === "small" ? 16 : 21;
  return (
    <InputWrapper className={size}>
      <Icon id={icon} size={iconSize} className="icon" />
      <input type="text" placeholder={placeholder} size={iconSize} />
    </InputWrapper>
  );
};

export default IconInput;

const InputWrapper = styled.div`
  & .icon {
    position: absolute;
    color: ${COLORS.gray700};
  }
  &:hover {
    color: black;
    .icon {
      color: black;
    }
    input {
      color: black;
    }
  }
  & input {
    border: none;
    isolation: isolate;
    background: transparent;
    border-bottom: 1px solid black;
    padding-left: 35px;
    padding-bottom: 3px;
    font-weight: 700;
    font-size: 18px;
    outline-offset: 4px;
    color: ${COLORS.gray700};
    &::placeholder {
      color: ${COLORS.gray500};
      font-weight: 400;
    }
  }
  &.small input {
    font-size: 14px;
    padding-left: 25px;
    padding-bottom: 3px;
  }
`;
