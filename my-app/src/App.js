import './App.css';
import './components';
import { useEffect, useState } from 'react';

export const Message = () => {

  const [messageList, setMessageList] = useState ([]);
  const [value, setValue] = useState("");

  const sendMessage = (author, text) => {

    const newMessageList = [...messageList];
    const newMessage = {
        author,
        text,
    };
    newMessageList.push(newMessage);
    setMessageList(newMessageList);

  };

  const resetForm = () => {

    setValue("");

  }

  const onSubmitMessage = (event) => {

    event.preventDefault();
    sendMessage("user", value);
    resetForm();

  };

  const onChangeMessageInput = (event) => {

    setValue(event.target.value);

  };

  useEffect(() => {

    if (messageList.length === 0) {
      return;
    }

    const tail = messageList[messageList.length - 1];
    if (tail.author === "bot") {
      return
    }

    sendMessage("bot", "hello");

  }, [messageList]);

  return (
    <div>
      <form onSubmit={onSubmitMessage}>
        <input
          className='input'
          onChange={onChangeMessageInput}
          placeholder='введите сообщение'
          value={value}
          type="text">
        </input>
        <button className='button'>отправить</button>
      </form>
      <ul>
        {messageList.map((item, index) => (
          <li 
            className='list' 
            key={index}>
            {item.author} - {item.text}
          </li>
        ))}
      </ul>
    </div>
  )

};


