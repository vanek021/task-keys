import React, { useState } from 'react';
import { IItem } from './index';

export function Item(props: { item: IItem }) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState(props.item.name);
    const [editName, setEditName] = useState(props.item.name);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setName(editName);
            setIsEditMode(false);
        } else if (e.key === 'Escape') setIsEditMode(false);
    };

    if (!isEditMode)
        return <div onClick={() => setIsEditMode(true)}>{name}</div>;
    else
        return (
            <input
                type="text"
                onKeyDown={handleKeyDown}
                defaultValue={name}
                onChange={(e) => setEditName(e.target.value)}
            />
        );
}
