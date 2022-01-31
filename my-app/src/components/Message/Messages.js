import React from "react";
import { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { CHATS, MessageInput, MessageList } from "..";

export const Messages = () => {
    const { chatId } = useParams();
    const [messageList, setMessageList] = useState([]);

    const sendMessage = (author, text) => {
        const newMessageList = [...messageList];
        const newMessage = {
            author,
            text
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
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
        return <Redirect to="/chats" />;
    }

    return (
        <>
            <MessageList messageList={messageList} />
            <MessageInput onSend={onSendMessage} />
        </>
    );
};