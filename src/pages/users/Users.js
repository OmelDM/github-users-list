import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserList} from "../../store/actions";
import {Loader} from "../../components/Loader";
import {userListSelector} from "../../store/selectors";
import {UserList} from "./UserList";
import {LoadMore} from "./LoadMore";
import './Users.css';

export const Users = () => {
    const dispatch = useDispatch();
    const userList = useSelector(userListSelector);

    useEffect(() => {
        dispatch(fetchUserList());
    }, [dispatch]);

    if (!userList || userList.length === 0) {
        return <Loader/>
    }

    return (
        <div className='users'>
            <UserList/>
            <LoadMore/>
        </div>
    );
};
