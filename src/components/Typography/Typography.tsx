import { useEffect } from "react";
import { ThemeEnum, THEME_MODE } from "../../utils/contants";
import { theme } from "../../utils/theme";
import { StyledTypography } from "./style";

interface TypographyProps {
	type: string;
	text: any;
}

export const Typography = ({ type, text }: TypographyProps) => {

	return (
		<StyledTypography
			type={type}
			mode={theme[localStorage.getItem(THEME_MODE) || ThemeEnum.LIGHT]}
		>
			{text}
		</StyledTypography>
	)
}

