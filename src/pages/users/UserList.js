import React from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {userListSelector} from "../../store/selectors";
import {User} from "./User";
import {Table} from "../../components/Table";

export const UserList = () => {
    const userList = useSelector(userListSelector);
    const history = useHistory();

    const handleSelectUser = user => {
        history.push(`/users/${user.id}`)
    }

    return (
        <div>
            <Table items={userList} itemCell={User} onRowClick={handleSelectUser}/>
        </div>
    );
};
