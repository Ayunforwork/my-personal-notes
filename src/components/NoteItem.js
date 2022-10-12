import React from "react";
import PropTypes from 'prop-types';
import NotesItemBody from "./NotesItemBody";
import { Link } from "react-router-dom";

function NoteItem({ id, title, createdAt, body }) {
    return (
        <div className="note-item" key={id}>
            <Link to={`/notes/${id}`}>{title}</Link>
            <NotesItemBody createdAt={createdAt} body={body} />
        </div>
    );
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NoteItem;