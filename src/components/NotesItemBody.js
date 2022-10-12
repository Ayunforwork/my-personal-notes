import React from "react";
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';

function NotesItemBody({ createdAt, body }) {
    return (
        <div className="note-item__body">
            <p className="note-item__username">{showFormattedDate(createdAt)}</p>
            <p className="note-item__username">{body}</p>
        </div>
    );
}

NotesItemBody.prototypes = {
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NotesItemBody;