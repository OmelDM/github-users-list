import React from 'react';
import {UserList} from "./UserList";
import {LoadMore} from "./LoadMore";

export const Users = () => {
    return (
        <div>
            <UserList/>
            <LoadMore/>
        </div>
    );
};
