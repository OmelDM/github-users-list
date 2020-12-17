import React from 'react';

export const Table = ({items, itemCell: Cell}) => {
    return (
        <>
            {items.map(item => <Cell key={item.id} {...item}/>)}
        </>
    );
};
