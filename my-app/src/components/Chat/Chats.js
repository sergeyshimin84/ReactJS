const createChatMock = (i) => ({
    id: Date.now(),
    name: `name ${i}`
});

export const CHATS = Array.from({length: 10}).map((_, i) => 
    createChatMock(i)
);