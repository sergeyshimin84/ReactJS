import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MessageInput, MessageList, CHATS } from "./components";

export function Messages() {
    const { chatId } = useParams();
    const [messageList, setMessageList] = useState([]);

    const sendMessage = (author, text) => {
        const newMessageList = [...messageList];
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
        <>
            <MessageList messageList={messageList}></MessageList>
            <MessageInput onSend={onSendMessage}></MessageInput>
        </>
    );

};