import { Redirect } from "react-router-dom"
import { MessageInput, MessageList } from "../../components";
import { withChatMessages } from "../../hocs/withChatMessages";

export const MessagesRender = ({
    messageList,
    hasChat,
    onSendMessage,
}) => {
    if (!hasChat) {
        return <Redirect to="/chats"/>;
    }

    return (
        <>
            <MessageList messageList={messageList}/>
            <MessageInput onSend={onSendMessage}/>
        </>
    );
};

export const Messages = withChatMessages(MessagesRender);
