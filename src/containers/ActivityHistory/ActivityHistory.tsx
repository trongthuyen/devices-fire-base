import { Switch } from 'antd';
import { useEffect, useState } from 'react';
import { ActivityLog } from '../../components/ActivityLog/ActivityLog';
import { Typography } from '../../components/Typography/Typography';
import { THEME_MODE } from '../../utils/contants';
import { theme } from '../../utils/theme';
import { StyledActivityHistory } from './style'

export function ActivityHistory() {
  const [themeMode, setThemeMode] = useState(JSON.parse(localStorage.getItem(THEME_MODE) || '') || theme.light);

  const handleChangeSwitch = (checked: boolean) => {
    setThemeMode(checked ? theme.light : theme.dark);
    console.log(themeMode);
  }

  useEffect(() => {
    localStorage.setItem(THEME_MODE, JSON.stringify(themeMode));
  }, [themeMode])

  return (
    <StyledActivityHistory mode={themeMode}>
      <div>
        <Switch checkedChildren='Light' unCheckedChildren='Dark' defaultChecked={themeMode.type} onChange={handleChangeSwitch} />
      </div>
      <Typography mode={themeMode} type="h1" text='Activity History' />
      <ActivityLog mode={themeMode} />
    </StyledActivityHistory>
  )
}
