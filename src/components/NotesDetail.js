import React from "react";
import PropTypes from 'prop-types';

function NotesDetail({ title, createdAt, body }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{createdAt}</p>
            <p>{body}</p>
        </div>
    );
}

NotesDetail.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default NotesDetail;