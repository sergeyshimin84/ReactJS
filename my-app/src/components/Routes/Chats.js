import React from "react";
import { ChatList, Messages, CHATS } from "..";
import { makeStyles } from "@material-ui/core";
import { Route } from "react-router-dom";
import { Routes } from 'react-router-dom';

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
                <Routes>
                    <Route component={Messages} path="/chats/:chatId"></Route>
                </Routes>
            </div>
        </div>
    );
};