import React from 'react';
import { Chat } from '..';
import { List } from '@material-ui/core';
import propTypes from 'prop-types';

export const ChatList = ({ list }) => {
    return (
        <List> 
            {list.map((item) => (
                <Chat key={item.id} {...item}></Chat>
            ))}
            <Chat id="1" name="fake"></Chat>   
        </List>
    );
};

ChatList.propTypes = {
    list: propTypes.arrayOf (
        propTypes.shape ({
           id: propTypes.string.isRequired,
           name: propTypes.string.isRequired
        })
    )
};
