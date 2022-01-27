import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { ChatList, Message, CHATS } from "..";

const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "200px 1fr"
    }
});

export const Chats = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <ChatList list={CHATS}></ChatList>
            <div>
                <Switch>
                    <Route component={Message} path="/chats/:chatId"></Route>
                </Switch>
            </div>
        </div>
    );

};