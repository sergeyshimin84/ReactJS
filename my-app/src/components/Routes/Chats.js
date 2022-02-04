import { useCallback, useEffect } from "react";
import { ChatList, Messages, CHATS } from "..";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { removeMessagesByChatID } from "../../store/messages/actions";
import { createChat, setChats, removeChat } from "../../store/chats/actions";
import { getChatList } from "../../store/chats/selectors";

const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "200px 1fr"
    }
});

export const Chats = () => {
    const chats = useSelector(getChatList);
    const dispatch = useDispatch();
    const classes = useStyles();

    const onCreate = useCallback(() => {
        dispatch(createChat({
            id: nanoid(),
            name: 'chatName'
        }))
    }, []);

    const onDelete = (chatId) => {
        dispatch(removeChat(chatId))
        dispatch(removeMessagesByChatID(chatId))
    };

    useEffect(() => {
        dispatch(setChats(CHATS))
    }, []);

    return (
        <div className={classes.wrapper}>
            <div>
                <ChatList onDelete={onDelete} list={chats}/>
                <Button onClick={onCreate}>Create chat</Button>
            </div>
            <div>
                <Switch>
                    <Route component={Messages} path="/chats/:chatId" />
                </Switch>
            </div>
        </div>
    );
};