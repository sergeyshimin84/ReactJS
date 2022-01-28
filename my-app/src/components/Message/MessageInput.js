import React from "react";
import { useEffect, useState, useRef } from "react";
import propTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, InputBase, Paper } from "@material-ui/core";
import { Send } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: theme.spacing(1)
    },
    input: {
        flexGrow: 1
    }
}));

export const MessageInput = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState("");

    const inputRef = useRef(null);

    const resetForm = () => {
        setValue("");
    };

    const onSubmitMessage = (event) => {
        event.preventDefault();
        props.onSend(value);
        resetForm();
    };

    const onChangeMessageInput = (event) => {
        setValue(event.target.value);
    };
    
    useEffect(() => {
        inputRef.current.focus();
    });
    
    return (
        <Paper 
            className={classes.paper}
            component='form'
            onSubmit={onSubmitMessage}
        >
            <InputBase>
                inputRet={inputRef}
                className={classes.input}
                onChange={onChangeMessageInput}
                placeholder={props.placeholder}
                value={value}
                type='text'    
            </InputBase>
            <IconButton type="submit">
                <Send></Send>
            </IconButton>
        </Paper>
    )
};