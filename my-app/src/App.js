import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { ChatList } from "./components";
import { MassageList } from "./components";

const useStyles = makeStyles ({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '200px 1fr'
  }
});

const App = () => {
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
    <div>
      <ChatList>
        list={
          [

          ]
        }
      </ChatList>
      <div>
        <MassageList></MassageList>
        <MessageInput></MessageInput>
      </div>
    </div>
  );
};

export default App;