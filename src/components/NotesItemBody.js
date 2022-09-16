import React from "react";
import { Link } from 'react-router-dom';
import DeleteButton from "./DeleteButton";

function NotesItemBody({ title, createdAt, body, id, onDelete }) {
    return (
        <div className="note-item">
            <h3 className="note-item__title">
                <Link to={`/notes/${id}`}>{title}</Link>
            </h3>
            <p className="note-item__createdAt">{createdAt}</p>
            <p className="note-item__body">{body}</p>
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

export default NotesItemBody;