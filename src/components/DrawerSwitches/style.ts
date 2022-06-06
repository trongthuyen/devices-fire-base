import styled from "styled-components";

export const StyledDrawer = styled.div.attrs(({ mode }: { mode: any }) => ({
  mode: mode,
}))`
  .drawer-component * {
    color: ${(mode: any) => mode.colorText};
  }
`;

export const StyledDrawerSwitches = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  div {
    margin-bottom: 3px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakPoints.sm}) {
    justify-content: space-evenly;
    align-items: unset;
  }
  @media screen and (min-width: ${(props) => props.theme.breakPoints.md}) {
    justify-content: flex-start;
  }
`;
