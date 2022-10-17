import React from 'react';
import PropTypes from 'prop-types';
import { BiTrash, BiArchive } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function DeleteButton({ id, onDelete }) {
    const navigate = useNavigate();

    function onDeleteHandler(id) {
        onDelete(id)
    }

    function onArchiveHandler(id) {
        onArchiveHandler(id)
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
                navigate("/arsip")
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