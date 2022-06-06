import type { ColumnsType } from 'antd/lib/table';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/config';
import { DrawerSwitches } from '../DrawerSwitches/DrawerSwitches';
import { Table } from '../Table/Table';
import { Typography } from '../Typography/Typography';
import { StyledActivityLog } from './style';

interface DataType {
	name: string;
	type: string;
	status: string;
	changeTime: string;
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		className: 'table-cell-design'
	},
	{
		title: 'Type',
		dataIndex: 'type',
		key: 'type',
		className: 'table-cell-design'
	},
	{
		title: 'Status',
		dataIndex: 'status',
		key: 'status',
		className: 'table-cell-design'
	},
	{
		title: 'Time',
		dataIndex: 'updateTime',
		key: 'time',
		className: 'table-cell-design'
	},
];

export const ActivityLog = ({ mode }: any) => {
	const [historyData, setHistoryData] = useState<any>([]);
	const [typeHistory, setTypeHistory] = useState('door');
	const handleClickSwitchBox = (type: string) => {
		setTypeHistory(type);
	}
	useEffect(() => {
		const q = query(collection(db, "iothistories"), orderBy('updateTime'), where('type', '==', typeHistory));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const dH: any[] = [];
			querySnapshot.forEach((doc) => {
				dH.push(doc.data());
			});
			setHistoryData(dH);
		});
		return function () {
			unsubscribe();
		}
	}, [typeHistory])

	return (
		<StyledActivityLog>
			<Typography mode={mode} type='h2' text={typeHistory} />
			<DrawerSwitches mode={mode} onClick={handleClickSwitchBox} />
			<Table
				mode={mode}
				columns={columns}
				dataSource={historyData}
				pagination={{ pageSize: 10 }}
				className='table-design'
			/>
		</StyledActivityLog>
	)
}
