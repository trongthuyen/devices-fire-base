import { Button, Input } from "antd";
import { useState } from "react";
import { db } from "../../firebase/config";
import { sendMessage } from "../../services";

export function MessageInput() {
	const [messageText, setMessageText] = useState('');

	const handleSubmit = () => {
		sendMessage({
			name: Math.random().toString(36).substring(2, 7),
			avatar: 'https://tophinhanh.com/wp-content/uploads/2021/12/anh-avatar-dep-cho-con-gai.jpg',
			msg: messageText || '👌',
			createdAt: new Date().toString(),
			updatedAt: new Date().toString(),
		}, db);
		setMessageText('');
	}

	return (
		<div style={{ display: 'flex' }}>
			<Input placeholder="Enter..." value={messageText} onChange={(e) => setMessageText(e.target.value)} />
			<Button type='primary' onClick={() => handleSubmit()}>Send</Button>
		</div>
	)
}
