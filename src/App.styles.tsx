import styled, { createGlobalStyle, css } from "styled-components";
import Loader from "./loader.svg";

export const Global = createGlobalStyle`
  * {
    box-sizing: inherit;
  }
  html {
    height: 100%;
    font-size: 16px;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    height: 100%;
    background-color: #191c1f;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Header = styled.header`
  height: 36px;
  -webkit-app-region: drag;
`;

export const Main = styled.main`
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
`;

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !["loading"].includes(prop),
})<{ loading: boolean }>`
  width: 100%;
  height: 6rem;
  padding: 0 2rem;
  font-size: 2rem;
  position: relative;
  background-color: hsl(220, 100%, 64%);
  border-radius: 0.5rem;
  transition: 200ms ease;
  margin-bottom: 1rem;
  color: #ffffff;
  outline: 0;
  border: 0;

  ${({ loading }) =>
    loading &&
    css`
      color: transparent;
    `}

  :hover {
    background-color: hsl(220, 100%, 60%);
    box-shadow: 0rem 0rem 0rem 0.25rem hsla(220, 100%, 56%, 0.5);
  }

  :active {
    background-color: hsl(220, 100%, 56%);
  }
`;

export const ButtonLoader = styled(Loader).withConfig({
  shouldForwardProp: (prop) => !["loading"].includes(prop),
})<{ loading: boolean }>`
  width: 4rem;
  height: 4rem;
  position: absolute;
  fill: #ffffff;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  ${({ loading }) =>
    !loading &&
    css`
      display: none;
    `}
`;

export const Messages = styled.div`
  margin-bottom: 2rem;
  font-size: 1.125rem;
`;

export const SuccessMessage = styled.div`
  color: #ffffff;
`;

export const ErrorMessage = styled.div`
  color: hsl(5, 80%, 65%);
`;
