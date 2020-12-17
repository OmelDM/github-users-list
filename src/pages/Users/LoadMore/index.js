import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {lastIdSelector} from "../../../store/selectors";
import {fetchUserList} from "../../../store/actions";

export const LoadMore = () => {
    const lastId = useSelector(lastIdSelector);
    const dispatch = useDispatch();

    const handleLoadMore = () => {
        dispatch(fetchUserList({lastId}));
    }

    return (
        <div onClick={handleLoadMore}>
            Load More {lastId}
        </div>
    );
};
