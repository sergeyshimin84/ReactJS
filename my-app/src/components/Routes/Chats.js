import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { ChatList, CHATS } from "..";
import { Children } from "react";

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
            <div>{Children}</div>
        </div>
    );

};