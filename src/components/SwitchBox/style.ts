import styled from "styled-components";

export const StyledSwitchBox = styled.div`
  padding: 24px 12px;
  width: 230px;
  height: 240px;
  font-size: 18px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 0 3px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  p {
    margin: 0;
    display: flex;
    justify-content: space-between;
  }
  p span {
    text-align: right;
  }
  div.btn-switch {
    text-align: right;
  }

  @media screen and (min-width: ${(props) => props.theme.breakPoints.sm}) {
    width: 200px;
    /* height: 200px; */
    padding: 6px;
    margin: 0 px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakPoints.md}) {
    margin-right: 16px;
    zoom: 0.5;
  }
`;
