import styled from "styled-components";

import ClipboardIconUnstyled from "./clipboard.svg";

export const Base = styled.button`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: hsl(255, 0%, 100%);
  color: hsl(210, 8%, 48%);
  border-radius: 0.5rem;
  font-size: 2rem;
  padding: 0 1rem;
  outline: 0;
  padding: 0;
  border: 0;

  :hover {
    background-color: hsl(255, 0%, 95%);
  }

  :active {
    background-color: hsl(255, 0%, 90%);
  }
`;

export const Code = styled.span`
  width: 100%;
  flex-grow: 1;
  padding: 0 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ClipboardIcon = styled(ClipboardIconUnstyled)`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0 1rem;
  box-sizing: content-box;
  fill: currentColor;
`;
