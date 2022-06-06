export interface MessageProps {
  item: MessageItem;
}

export interface MessageItem {
  id: string;
  name: string;
  avatar: string;
  msg: string;
  createdAt: string;
  updatedAt: string;
}
