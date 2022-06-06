import { Switch } from 'antd'
import moment from 'moment';
import { db } from '../../firebase/config';
import { sendData } from '../../services/iotApi';
import { StatusEnum } from '../../utils/contants';
import { Typography } from '../Typography/Typography';
import { StyledSwitchBox } from './style';

export function SwitchBox(props: any) { //define SB Props
	const { onClick, title, data } = props;

	const handleChange = (checked: boolean) => {
		const updateTime = `${moment().date()}-${moment().month()}-${moment().year()} ${moment().hour()}:${moment().minute()}`;
		const payload = {
			id: data.id,
			name: data.name,
			type: data.type,
			oldStatus: data.status,
			status: data.type === 'motion' ? Math.floor(Math.random() * 1000) : checked ? 1 : 0,
			updateTime: updateTime,
		}
		sendData(payload, db);
	};
	const handleClick = (checked: boolean, event: Event) => {
		event.stopPropagation();
	}

	return (
		<StyledSwitchBox onClick={() => onClick(data.type)}>
			<Typography type='h4' text={title} />
			<p><b>{data.type === 'motion' ? `${data.status} ${StatusEnum.LUX}` : data.status ? StatusEnum.OPEN : StatusEnum.CLOSE}</b></p>
			<p>Since: <span>{data.updateTime}</span></p>
			<div className='btn-switch'>
				{data.type !== "motion" &&
					<Switch
						defaultChecked={data.status}
						onClick={handleClick}
						onChange={handleChange}
					/>
				}
			</div>
		</StyledSwitchBox>
	)
}
