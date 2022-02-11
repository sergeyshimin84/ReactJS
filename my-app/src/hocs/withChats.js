import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createChat } from "../helpers/createChat";
import { removeChat } from "../store/chats/actions";
import { removeMessagesByChatID } from "../store/messages/actions";

export const withChats = (Component) => {

    return (props) => {
        const chats = useSelector(getChatList);
        const dispatch = useDispatch();

        const onCreateChat = useCallback(() => {
            dispatch(addChat(createChat('chat name')))
        }, []);

        const onDeleteChat = useCallback((chatId) => {
            dispatch(removeChat(chatId))
            dispatch(removeMessagesByChatID(chatId))
        }, [])

        return <Component
            {...props}
            chats={chats}
            onCreateChat={onCreateChat}
            onDeleteChat={onDeleteChat}
        />
    }
}