import { List } from 'antd';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../../firebase/config';
import { saveMessage } from '../../redux/slices';
import { MessageItem } from '../../types';
import { Message } from '../Message';
import { StyledMessageList } from './style';

export function MessageList() {
    const dispatch = useDispatch();
    const { messageList } = useSelector((state: any) => state.message)

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy('createdAt'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages: any[] = [];

            querySnapshot.forEach((doc) => {
                messages.push(doc.data());
            });
            dispatch(saveMessage(messages));
        });

        return function () {
            unsubscribe();
        }
    }, [])
    return (
        <StyledMessageList>
            <List
                dataSource={messageList}
                // loading={isLoading}
                renderItem={(item: MessageItem) => <Message item={item} />}
            />
        </StyledMessageList>
    )
}
