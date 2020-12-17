export const UPDATE_USER_LIST = 'UPDATE_USER_LIST'
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER'
export const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER'

const updateUserList = (users) => ({
    type: UPDATE_USER_LIST,
    payload: users,
});

const updateCurrentUser = (user) => ({
    type: UPDATE_CURRENT_USER,
    payload: user,
});

export const clearCurrentUser = () => ({
    type: CLEAR_CURRENT_USER,
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

export const fetchUserDetails = (id) => (dispatch, getState) => {
    fetch(`https://api.github.com/users/${id}`)
        .then(response => response.json())
        .then(data => ({
            id: data.id,
            login: data.login,
            name: data.name,
            avatarUrl: data.avatar_url,
            followers: data.followers,
            following: data.following,
            createdAt: data.created_at,
            company: data.company,
            email: data.email,
            location: data.location,
            blog: data.blog,
            bio: data.bio
        }))
        .then(user => dispatch(updateCurrentUser(user)));
}
