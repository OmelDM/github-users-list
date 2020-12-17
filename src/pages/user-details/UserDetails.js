import React from 'react';
import {useParams} from 'react-router-dom';

export const UserDetails = () => {
    let {id} = useParams();

    return (
        <div>
            User Details {id}
        </div>
    );
};
