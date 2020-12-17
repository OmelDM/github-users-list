export const userListSelector = (state) => state.userList ? Object.values(state.userList) : [];

export const lastIdSelector = (state) => {
    const users = userListSelector(state);
    const lastUser = users[users.length - 1];

    return lastUser ? lastUser.id : 0;
};
