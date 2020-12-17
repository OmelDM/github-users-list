import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {fetchUserList} from "../../store/actions";
import {userListSelector} from "../../store/selectors";
import {User} from "./User";
import {Table} from "../../components/Table";

export const UserList = () => {
    const dispatch = useDispatch();
    const userList = useSelector(userListSelector);
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchUserList());
    }, [dispatch]);

    const handleSelectUser = user => {
        history.push(`/users/${user.id}`)
    }

    if (!userList) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <Table items={userList} itemCell={User} onRowClick={handleSelectUser}/>
        </div>
    );
};
