import React from 'react';
import { MessageInput } from '../../components/MessageInput';
import { MessageList } from '../../components/MessageList';
import { StyledChatBox } from './style';

export function ChatBox() {
	return (
		<StyledChatBox>
			<MessageList />
			<MessageInput />
		</StyledChatBox>
	)
}
