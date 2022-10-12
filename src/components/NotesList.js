import React from "react";
import { PropTypes } from "prop-types";
import NoteItem from "./NoteItem";

function NotesList({ notes }) {
    return (
        <div className="notes-list">
      {notes.length
        ? notes.map((note) => <NoteItem key={note.id} {...note} />)
        : "Tidak ada catatan"}
    </div>
    );
}

NotesList.propTypes = {
	notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NotesList;

