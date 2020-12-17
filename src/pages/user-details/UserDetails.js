import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import {fetchUserDetails, clearCurrentUser} from "../../store/actions";
import {currentUserSelector} from "../../store/selectors";
import {Loader} from "../../components/Loader";
import './UserDetails.css';

export const UserDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const user = useSelector(currentUserSelector);

    useEffect(() => {
        dispatch(fetchUserDetails(id));

        return () => dispatch(clearCurrentUser());
    }, [dispatch, id]);

    if (!user) {
        return <Loader/>
    }

    return (
        <div className='user-details'>
            <img className='user-details__avatar' src={user.avatarUrl} alt=''/>
            <div className='user-details__name'>
                {user.name}
            </div>
            <div className='user-details__login'>
                {user.login}
            </div>
            <div className='user-details__bio'>
                {user.bio}
            </div>
            <div className='user-details__details'>
                {user.followers} followers
                •
                {user.following} following
            </div>
            <div className='user-details__email'>
                {user.email}
            </div>
            <div className='user-details__location'>
                {user.location}
            </div>
        </div>
    );
};
