import React from 'react';
import {UserList} from "./UserList";
import {LoadMore} from "./LoadMore";
import './Users.css';

export const Users = () => {
    return (
        <div className='users'>
            <UserList/>
            <LoadMore/>
        </div>
    );
};
