import { StyledTypography } from "./style";

interface TypographyProps {
	type: string;
	text: any;
	mode?: any;
}

export const Typography = ({ type, text, mode }: TypographyProps) => {
	return (
		<StyledTypography type={type} mode={mode}>{text}</StyledTypography>
	)
}

