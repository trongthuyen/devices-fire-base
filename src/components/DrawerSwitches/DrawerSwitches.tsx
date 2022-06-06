import React, { useEffect, useState } from 'react';
import { Drawer, Button, Space, Row, Col } from 'antd';
import { SwitchBox } from '../SwitchBox/SwitchBox';
import { StyledDrawer, StyledDrawerSwitches } from './style';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { theme } from '../../utils/theme';
import { ThemeEnum, THEME_MODE } from '../../utils/contants';

export const DrawerSwitches = (props: any) => {
	const { onClick } = props;
	const [mode, setMode] = useState(theme[localStorage.getItem(THEME_MODE) || ThemeEnum.LIGHT]);
	const [visible, setVisible] = useState(false);
	const [switchData, setSwitchData] = useState<any>([]);
	const [widthDrawer, setWidthDrawer] = useState(Math.floor(window.screen.width * 0.75));
	const [configGrid, setConfigGrid] = useState({
		colCount: 1,
		gutter: 8,
		vgutter: 8,
	});

	const onClose = () => {
		setVisible(false);
	};

	useEffect(() => {
		const q = query(collection(db, "iotswitches"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const sd: any[] = [];

			querySnapshot.forEach((doc) => {
				sd.push({ id: doc.id, ...doc.data() });
			});
			setSwitchData(sd)
		});

		return function () {
			unsubscribe();
		}
	}, [])

	useEffect(() => {
		setMode(theme[localStorage.getItem(THEME_MODE) || ThemeEnum.LIGHT]);
	}, [localStorage.getItem(THEME_MODE)])

	useEffect(() => {
		const wsw = window.screen.width;
		if (wsw > parseInt(theme.breakPoints.xs, 10) && wsw <= parseInt(theme.breakPoints.md, 10)) {
			setWidthDrawer(Math.floor(wsw * 0.6));
			setConfigGrid(prev => ({
				...prev,
				colCount: 2,
				gutter: 16,
				vgutter: 16,
			}))
		} else if (wsw > parseInt(theme.breakPoints.md, 10)) {
			setWidthDrawer(Math.floor(wsw * 0.5));
			setConfigGrid(prev => ({
				...prev,
				colCount: 4,
				gutter: 12,
				vgutter: 12,
			}))
		} else {
			setWidthDrawer(Math.floor(wsw * 0.75));
			setConfigGrid(prev => ({
				...prev,
				colCount: 1,
				gutter: 8,
				vgutter: 8,
			}))
		}
	}, [window.screen.width])

	return (
		<StyledDrawer mode={mode}>
			<Space>
				<Button style={{ marginBottom: 12 }} type="primary" onClick={() => setVisible(true)}>
					Open other switches
				</Button>
			</Space>
			<Drawer
				title="Control Board"
				placement="right"
				onClose={onClose}
				visible={visible}
				width={widthDrawer}
				headerStyle={{ ...mode, color: mode.colorText }}
				bodyStyle={{ ...mode, color: mode.colorText }}
				className='drawer-component'
			>
				{/* <StyledDrawerSwitches> */}
				<Row justify='space-evenly' gutter={[configGrid.gutter, configGrid.vgutter]}>
					{switchData.map((item: any) => (
						<Col span={24 / configGrid.colCount}>
							<SwitchBox key={item.id} onClick={onClick} title={item.name} data={item} />
						</Col>
					))}
				</Row>
				{/* </StyledDrawerSwitches> */}
			</Drawer>
		</StyledDrawer >
	);
};
