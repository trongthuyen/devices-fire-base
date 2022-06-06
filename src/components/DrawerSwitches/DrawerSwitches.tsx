import React, { useEffect, useState } from 'react';
import { Drawer, Button, Space } from 'antd';
import { SwitchBox } from '../SwitchBox/SwitchBox';
import { StyledDrawer, StyledDrawerSwitches } from './style';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { theme } from '../../utils/theme';

export const DrawerSwitches = (props: any) => {
	const { mode, onClick } = props;
	const [visible, setVisible] = useState(false);
	const [switchData, setSwitchData] = useState<any>([]);
	const [widthDrawer, setWidthDrawer] = useState(Math.floor(window.screen.width * 0.75));

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
		const wsw = window.screen.width;
		if (wsw > parseInt(theme.breakPoints.xs, 10) && wsw <= parseInt(theme.breakPoints.md, 10)) {
			setWidthDrawer(Math.floor(wsw * 0.6));
		} else if (wsw > parseInt(theme.breakPoints.md, 10)) {
			setWidthDrawer(Math.floor(wsw * 0.5));
		} else {
			setWidthDrawer(Math.floor(wsw * 0.75));
		}
	}, [window.screen.width])

	return (
		<StyledDrawer mode={mode}>
			<Space>
				<Button type="primary" onClick={() => setVisible(true)}>
					Open other switches
				</Button>
			</Space>
			<Drawer
				title={`Control Board`}
				placement="right"
				onClose={onClose}
				visible={visible}
				width={widthDrawer}
				headerStyle={{ ...mode, color: mode.colorText }}
				bodyStyle={{ ...mode, color: mode.colorText }}
				className='drawer-component'
			>
				<StyledDrawerSwitches>
					{switchData.map((item: any) => (<div key={item.id}>
						<SwitchBox onClick={onClick} title={item.name} data={item} />
					</div>
					))}
				</StyledDrawerSwitches>
			</Drawer>
		</StyledDrawer >
	);
};
