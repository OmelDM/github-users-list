export const UPDATE_USER_LIST = 'UPDATE_USER_LIST'

const updateUserList = (users) => ({
    type: UPDATE_USER_LIST,
    payload: users,
});

export const fetchUserList = ({perPage = 20, lastId = 0} = {}) => (dispatch, getState) => {
    fetch(`https://api.github.com/users?per_page=${perPage}&since=${lastId}`)
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
