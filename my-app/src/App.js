import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { ChatList, MessageList, MessageInput } from "./components";

const useStyles = makeStyles ({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '200px 1fr'
  }
});

export const App = () => {
  const classes = useStyles();
  const [messageList, setMessageList] = useState ([]);

  const sendMessage = (author, text) => {
    const newMessageList =  [...messageList];
    const newMessage = {
      id: Date.now(),
      author,
      text,
    };
  };

  const onSendMessage = (value) => {
    sendMessage('user', value);
  };

  useEffect(() => {
    if (messageList.length === 0) {
      return;
    }

    const tail = messageList[messageList.length - 1];
    if (tail.author === 'bot') {
      return;
    }

    sendMessage('bot', 'hello');

  }, [messageList]);

  return (
    <div className="classes.wrapper">
      <ChatList>
        list={[
          {
            name: 'name',
            id: '1'
          },
          {
            name: 'name',
            id: '2'
          },
          {
            name: 'name',
            id: '3'
          }
        ]}
      </ChatList>
      <div>
        <MessageList messageList={messageList}></MessageList>
        <MessageInput onSend={onSendMessage}></MessageInput>
      </div>
    </div>
  );
};

export default App;