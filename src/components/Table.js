import React from 'react';

export const Table = ({items, itemCell: Cell, onRowClick}) => {
    const handleRowClick = (item) => () => {
        if (onRowClick) {
            onRowClick(item);
        }
    }

    return (
        <>
            {items.map(item => (
                <div key={item.id} onClick={handleRowClick(item)}>
                    <Cell {...item}/>
                </div>
            ))}
        </>
    );
};
