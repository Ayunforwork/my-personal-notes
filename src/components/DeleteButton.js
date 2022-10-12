import React from 'react';
import PropTypes from 'prop-types';
import { BiTrash, BiArchive } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { deleteNote } from '../utils/local-data';

function DeleteButton({ id, onDelete }) {
    const navigate = useNavigate();

    function onDeleteHandler(noteId) {
        onDelete(noteId)
    }

    function onArchiveHandler(noteId) {
        onArchiveHandler(noteId)
    }

    return (
        <div className='detail-page_action'>

            <button className='action' onClick={() => {
                onDeleteHandler(id);
                navigate("/");
            }}
            >
                <BiTrash />
            </button>
            <button className='action' onClick={() => {
                onArchiveHandler(id);
                navigate("/archive")
            }}>
                <BiArchive />
            </button>
        </div>

    );
}

DeleteButton.prototypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;