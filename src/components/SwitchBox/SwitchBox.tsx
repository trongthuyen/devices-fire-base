import { Switch } from 'antd'
import moment from 'moment';
import { db } from '../../firebase/config';
import { sendData } from '../../services/iotApi';
import { Typography } from '../Typography/Typography';
import { StyledSwitchBox } from './style';

export function SwitchBox(props: any) {
	const { mode, onClick, title, data } = props;

	const handleChange = (checked: boolean, event: Event) => {
		const payload = {
			id: data.id,
			name: data.name,
			type: data.type,
			oldStatus: data.status,
			status: data.type === 'motion' ? Math.floor(Math.random() * 1000) : checked ? 1 : 0,
			updateTime: moment().format('hh:mm dd:mm:yyyy'),
		}
		sendData(payload, db);
	};
	const handleClick = (checked: boolean, event: Event) => {
		event.stopPropagation();
	}

	return (
		<StyledSwitchBox onClick={() => onClick(data.type)}>
			<Typography mode={mode} type='h2' text={title} />
			<p>Status: <span>{data.type === 'motion' ? `${data.status} LUX` : data.status ? 'OPEN' : 'CLOSE'}</span></p>
			<p>Since: <span>{data.updateTime}</span></p>
			<div className='btn-switch'>
				<Switch
					// disabled={data.status > 1 ? true : false}
					defaultChecked={data.status ? true : false}
					onClick={handleClick}
					onChange={handleChange}
				/>
			</div>
		</StyledSwitchBox>
	)
}
