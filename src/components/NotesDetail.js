import React from "react";
import PropTypes from "prop-types";
import { showFormattedDateID } from "../utils/format-time";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton"

function NotesDetail({ id, title, createdAt, body, onDelete, onArchiveHandler }) {
  return (
    <div className="detail-page">
      <h2 className="detail-page_title">{title}</h2>
      <p className="detail-page_createdAt">{showFormattedDateID(createdAt)}</p>
      <p className="detail-page_body">{body}</p>
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton onArchiveHandler={onArchiveHandler} />
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