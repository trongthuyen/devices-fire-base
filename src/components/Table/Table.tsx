import { Table as AntTable, TableProps as AntTableProps } from "antd";
import styled, { css } from "styled-components";

interface TableProps extends AntTableProps<any> {
	mode?: number;
}

export const Table = (props: TableProps) => {
	return <StyledTable {...props} />
}

const StyledTable = styled(AntTable).attrs(
	({ mode }: { mode: any }) => ({
		mode: mode,
	})
)`
	.ant-table-cell,
	.ant-table-cell.table-cell-design.ant-table-cell-row-hover {
		${({ mode }: any) => css`
			background: ${() => mode.backgroundColor};
			color: ${() => mode.colorText};
		`}
	}
	.ant-table-cell.table-cell-design.ant-table-cell-row-hover {
		opacity: 0.8;
	}
`;
