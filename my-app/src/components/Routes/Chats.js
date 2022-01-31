import React from "react";
import { ChatList, Messages, CHATS } from "..";
import { makeStyles } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

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
            <ChatList list={CHATS} />
            <div>
                <Switch>
                    <Route component={Messages} path="/chats/:chatId" />
                </Switch>
            </div>
        </div>
    );
};