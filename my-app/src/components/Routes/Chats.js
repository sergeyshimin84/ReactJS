import React from "react";
import { ChatList, CHATS } from "..";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "200px 1fr"
    }
});

export const Chats = ({Children}) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <ChatList list={CHATS}></ChatList>
            <div>{Children}</div>
        </div>
    );

};