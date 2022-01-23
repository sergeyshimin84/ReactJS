import React from 'react';
import styles from './message.css';

export const Message = ({firstName, lastName}) => (
    <div className='greetings'>
        Hey you! {firstName} {lastName}!
    </div>
);