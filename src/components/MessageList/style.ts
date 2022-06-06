import styled from "styled-components";

export const StyledMessageList = styled.div`
  display: flex;
  height: 80vh;
  .ant-list {
    display: flex;
    flex-direction: column-reverse;
    overflow-y: scroll;
    width: 100%;
    .ant-list-items {
      padding: 0 64px;
      width: 600px;
    }
  }
  .msg {
    display: flex;
    align-items: center;
    .avatar {
      border-radius: 40px;
      width: 20px;
      height: 20px;
      margin-right: 16px;
    }
    .content {
      border: 1px solid #e4e6eb;
      background-color: #e4e6eb;
      border-radius: 12px;
      padding: 6px 12px;
      margin: 12px 0;
      margin-right: 12px;
      width: fit-content;
    }
    .datetime {
      display: none;
    }
    .action-msg {
      color: blue;
      cursor: pointer;
      margin-right: 12px;
    }
  }
`;
