import styled from "styled-components";

export const StyledSwitchBox = styled.div`
  padding: 24px 12px;
  /* width: 230px; */
  width: 100%;
  height: 240px;
  font-size: 18px;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: none;
  p {
    margin: 0;
    display: flex;
    justify-content: space-between;
    span {
      text-align: center;
    }
  }

  div.btn-switch {
    text-align: center;
  }

  @media screen and (min-width: ${(props) => props.theme.breakPoints.sm}) {
    /* width: 200px; */
    padding: 6px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakPoints.md}) {
    zoom: 0.6;
  }
`;
