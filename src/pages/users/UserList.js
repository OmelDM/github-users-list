import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserList} from "../../store/actions";
import {userListSelector} from "../../store/selectors";
import {UserRow} from "./UserRow";
import {Table} from "../../components/Table";

export const UserList = () => {
    const dispatch = useDispatch();
    const userList = useSelector(userListSelector);

    useEffect(() => {
        dispatch(fetchUserList());
    }, [dispatch]);

    if (!userList) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <Table items={userList} itemCell={UserRow}/>
        </>
    );
};