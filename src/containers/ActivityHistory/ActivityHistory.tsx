import { Switch } from 'antd';
import { useState } from 'react';
import { ActivityLog } from '../../components/ActivityLog/ActivityLog';
import { Typography } from '../../components/Typography/Typography';
import { ThemeEnum, THEME_MODE } from '../../utils/contants';
import { theme } from '../../utils/theme';
import { StyledActivityHistory } from './style'

export function ActivityHistory() {
	const [checkedSwitch, setCheckedSwitch] = useState(localStorage.getItem(THEME_MODE) === ThemeEnum.DARK ? false : true)
	const handleChangeSwitch = (checked: boolean) => {
		setCheckedSwitch(checked)
		localStorage.setItem(THEME_MODE, checked ? ThemeEnum.LIGHT : ThemeEnum.DARK);
	}

	return (
		<StyledActivityHistory mode={theme[localStorage.getItem(THEME_MODE) || ThemeEnum.LIGHT]}>
			<div>
				<Switch checkedChildren='Light' unCheckedChildren='Dark' defaultChecked={checkedSwitch} onChange={handleChangeSwitch} />
			</div>
			<Typography
				type="h1"
				text='Activity History'
			/>
			<ActivityLog />
		</StyledActivityHistory>
	)
}
