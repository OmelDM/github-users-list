import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {lastIdSelector} from "../../store/selectors";
import {fetchUserList} from "../../store/actions";
import './LoadMore.css';

export const LoadMore = () => {
    const lastId = useSelector(lastIdSelector);
    const dispatch = useDispatch();

    const handleLoadMore = () => {
        dispatch(fetchUserList({lastId}));
    }

    return (
        <button className='load-more' onClick={handleLoadMore}>
            Load More
        </button>
    );
};
