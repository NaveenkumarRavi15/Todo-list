
import React from 'react';
import { IoTrash } from "react-icons/io5";

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)} 
                                checked={item.checked}
                                aria-label={`Toggle ${item.item}`}
                            />
                            <label 
                                style={item.checked ? { textDecoration: 'line-through' } : null} 
                                onDoubleClick={() => handleCheck(item.id)}
                            >
                                {item.item}
                            </label>
                            <IoTrash
                                role="button"
                                onClick={() => handleDelete(item.id)}
                                tabIndex="0"
                                aria-label={`Delete ${item.item}`}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your list is empty</p>
            )}
        </main>
)}

export default Content;
