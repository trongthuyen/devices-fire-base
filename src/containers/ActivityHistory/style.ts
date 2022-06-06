import styled, { css } from "styled-components";

export const StyledActivityHistory = styled.div.attrs(
  ({ mode }: { mode: any }) => ({
    mode: mode,
  })
)`
  ${({ mode }: any) => css`
    background: ${() => mode.backgroundColor};
    color: ${() => mode.colorText};
  `}
  * {
    ${({ mode }: any) => css`
      color: ${() => mode.colorText};
    `}
  }

  min-height: 100vh;

  @media screen and (min-width: ${(props) => props.theme.breakPoints.sm}) {
    padding: 16px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakPoints.md}) {
    padding: 16px;
  }
`;
