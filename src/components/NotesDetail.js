import React from "react";
import PropTypes from "prop-types";
import { showFormattedDateID } from "../utils/format-time";
import DeleteButton from "./DeleteButton";

function NotesDetail({ id, title, createdAt, body, onDelete }) {
  return (
    <div className="detail-page">
      <h2 className="detail-page_title">{title}</h2>
      <p className="detail-page_createdAt">Created At: {showFormattedDateID(createdAt)}</p>
      <p className="detail-page_body">{body}</p>
      <DeleteButton id={id} onDelete={onDelete}/>
    </div>
  );
}

NotesDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default NotesDetail;