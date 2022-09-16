import React from 'react';
import { FiDelete } from 'react-icons/fi';

function DeleteButton({ id, onDelete }) {
    return <button className='note-item__delete-button' onClick={() => onDelete(id)}><FiDelete /></button>
}

export default DeleteButton;