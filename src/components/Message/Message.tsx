import { Avatar } from 'antd';
import { MessageProps } from '../../types';

export function Message({ item }: MessageProps) {

    return (
        <div className='msg'>
            <Avatar src={item.avatar && ''} size='small' style={{ marginRight: 12 }}>{item.name[0].toUpperCase()}</Avatar>
            <div className="content">{item.msg || 'Lorem la mot ngay dep troi nen toi quyet dinh di ngu'}</div>
        </div>
    )
}
