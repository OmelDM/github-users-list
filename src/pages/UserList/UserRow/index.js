import React from 'react';

export const UserRow = ({user}) => {
    return (
        <li key={user.id}>{user.login}</li>
    );
};
