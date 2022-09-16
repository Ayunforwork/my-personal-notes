import React from "react";
import NotesItemBody from "./NotesItemBody";

function NotesList({ notes, onDelete }) {
    return (
        <div className="notes-list">
            {notes.length !== 0 ? notes.map((note) => (
					<NotesItemBody
						key={note.id}
						id={note.id}
						onDelete={onDelete}
						{...note}
					/>)) : <p className='notes-list-empty'>Tidak ada catatan</p>
			}
        </div>
    );
}

export default NotesList;

