import { Table as AntTable, TableProps as AntTableProps } from "antd";
import styled, { css } from "styled-components";
import { ThemeEnum, THEME_MODE } from "../../utils/contants";
import { ModeType, theme } from "../../utils/theme";

interface TableProps extends AntTableProps<any> {
	mode?: ModeType;
}

export const Table = (props: TableProps) => {
	return <StyledTable mode={theme[localStorage.getItem(THEME_MODE) || ThemeEnum.LIGHT]} {...props} />
}

const StyledTable = styled(AntTable).attrs(
	({ mode }: { mode: ModeType }) => ({
		mode: mode,
	})
)`
	.ant-table-cell,
	.ant-table-cell.table-cell-design.ant-table-cell-row-hover {
		${({ mode }: { mode: ModeType }) => css`
			background: ${() => mode.backgroundColor};
			color: ${() => mode.colorText};
		`}
	}
	.ant-table-cell.table-cell-design.ant-table-cell-row-hover {
		opacity: 0.8;
	}
`;
