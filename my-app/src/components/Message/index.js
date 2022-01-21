import React from "react";

export const sendMessage = (author, text) => {

    const newMessageList = [...messageList];
    const newMessage = {
        author,
        text,
    };
    newMessageList.push(newMessage);
    setMessageList(newMessageList);

};

export const onSubmitMessage = (event) => {

    event.preventDefault();
    sendMessage("user", value);
    resetForm();

};

export const onChangeMessageInput = (event) => {

    setValue(event.target.value);

};