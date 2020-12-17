export const UPDATE_USER_LIST = 'UPDATE_USER_LIST'

const updateUserList = (users) => ({
    type: UPDATE_USER_LIST,
    payload: users,
});

export const fetchUserList = () => (dispatch, getState) => {
    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => data.reduce((acc, user) => ({
            ...acc,
            [user.id]: {
                id: user.id,
                login: user.login,
                avatarUlr: user.avatar_url,
                profileUrl: user.html_url,
            }
        }), {}))
        .then(users => dispatch(updateUserList(users)));
};
