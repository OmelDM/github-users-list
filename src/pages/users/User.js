import React from 'react';
import './User.css';

export const User = ({login, avatarUlr, profileUrl}) => {
    return (
        <div className='user'>
            <img  className='user__avatar' src={avatarUlr} alt=''/>
            <div className='user__details'>
                <div className='user__login'>{login}</div>
                <div className='user__profile'>{profileUrl}</div>
            </div>
        </div>
    );
};
