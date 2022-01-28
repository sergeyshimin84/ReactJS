import React from 'react';
import { List } from '@material-ui/core';
import { Message } from './Message';
import propTypes from 'prop-types';

export const MessageList = ({ props }) => {
    return (
        <List>
            {props.messageList.map((item) => (
                <Message key={item.id} {...item}></Message>
            ))}
        </List>
    );
}

MessageList.propTypes = {
    messageList: propTypes.arrayOf (
        propTypes.shape ({
           id: propTypes.string,
           text: propTypes.string,
           author: propTypes.string,
        })
    )
};

MessageList.defaultProps = {
    messageList: []
};