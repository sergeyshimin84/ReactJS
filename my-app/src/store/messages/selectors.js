export const getMessagesReducer = (state) => state.messages || {};
export const getMessages = (state) => getMessagesReducer(state)[chatId] || {};
export const getChatMessagesById = (chatId) => (state) => getMessages(state) [chatId] || {};
export const getChatMessagesListById = (chatId) => (state) => Object.values(getChatMessagesById(chatId)(state));