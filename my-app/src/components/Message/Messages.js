import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { MessageInput } from "..";
import { MessageList } from "..";
import {CHATS} from "..";

export const Messages = () => {
    const {chatId} = useParams();
    const [MessageList, setMessageList] = useState([]);

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

    if (!CHATS.find(({ id }) => id === chatId)) {
        return <Redirect to="/chats"></Redirect>;
    }

    return (
        <>
            <MessageList messageList={messageList}></MessageList>
            <MessageInput onSend={onSendMessage}></MessageInput>
        </>
    );

};