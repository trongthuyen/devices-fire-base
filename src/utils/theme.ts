export interface ModeType {
  type: boolean;
  backgroundColor: string;
  colorText: string;
}

interface KeyType {
  [key: string]: any;
}
export interface ThemeType extends KeyType {
  dark: ModeType;
  light: ModeType;
  breakPoints: any;
  widthDrawer: number;
}

export const theme: ThemeType = {
  dark: {
    type: false,
    backgroundColor: "#333",
    colorText: "#eee",
  },
  light: {
    type: true,
    backgroundColor: "#eee",
    colorText: "#333",
  },
  breakPoints: {
    xs: "360px",
    sm: "768px",
    md: "992px",
    lg: "1024px",
    xl: "1120px",
    xxl: "1280px",
  },
  widthDrawer: 320,
};
