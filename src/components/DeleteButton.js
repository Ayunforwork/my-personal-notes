import React from 'react';
import PropTypes from 'prop-types';
import { BiTrash } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function DeleteButton({ id, onDelete, onArchiveHandler }) {
    const navigate = useNavigate();

    async function onDeleteHandler(id) {
        await onDelete(id)
    }

   
    return (
        <div className='detail-page_action'>

            <button className='action' onClick={async () => {
                await onDeleteHandler(id);
                navigate("/");
            }}
            >
                <BiTrash />
            </button>
            
        </div>

    );
}

DeleteButton.prototypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;