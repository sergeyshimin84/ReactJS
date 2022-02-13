import { CREATE_MESSAGE, REMOVE_MESSAGES_BY_CHAT_ID } from "./actions";

const initiatialState = {
    messages: {},
}

export const messagesReducer = (state = initiatialState, action) => {

    switch (action.type) {
        case CREATE_MESSAGE: {
            const {
                message,
                chatId,
            } = action.payload;

            const newMessage = {...state.messages};

            newMessage[chatId] = [
                ...(newMessages[chatId] || []),
                message,
            ]

            return {
                message: newMessages
            }
        }

        case REMOVE_MESSAGES_BY_CHAT_ID: {

            if (!state.messages.hasOwnProperty(action.peyload)) {
                return state
            }

            const newMessages = {...state.messages};
            delete newMessages[action.payload];

            return {
                messages: newMessages
            }
        }

        default: {
            return state;
        }
    }
}