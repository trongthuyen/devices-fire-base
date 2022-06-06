import styled, { css } from "styled-components";
import { ModeType } from "../../utils/theme";

interface StyledTypographyType {
  type: string;
  mode?: ModeType;
}

export const StyledTypography = styled.div`
  font-weight: bold;

  ${({ type, mode }: StyledTypographyType) => {
    switch (type) {
      case "h1":
        if (mode?.type) {
          return css`
            color: #222;
            font-size: 36px;
          `;
        } else {
          return css`
            color: #ddd;
            font-size: 36px;
          `;
        }
      case "h2":
        if (mode?.type) {
          return css`
            color: #444;
            font-size: 30px;
          `;
        } else {
          return css`
            color: #eee;
            font-size: 30px;
          `;
        }
      case "h3":
        return mode?.type
          ? css`
              color: #666;
              font-size: 26px;
            `
          : css`
              color: #fff;
              font-size: 26px;
            `;
      case "h4":
        return mode?.type
          ? css`
              color: #666;
              font-size: 22px;
            `
          : css`
              color: #fff;
              font-size: 22px;
            `;
      case "h5":
        return css`
          color: #888;
          font-size: 18px;
        `;
      case "h6":
        return css`
          color: #999;
          font-size: 16px;
        `;
      case "p":
        return css`
          color: #333;
          font-size: 16px;
        `;
      default:
        return css`
          color: #333;
          font-size: 16px;
          margin: 0;
          display: inline;
          font-weight: normal;
        `;
    }
  }}
`;
