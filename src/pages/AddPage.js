import React from 'react';
import { addNote } from '../utils/local-data';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';

function AddPage() {
    const navigate = useNavigate()

    function onAddNoteHandler(notes) {
        addNote(notes);
        navigate('/');
    }

    return (
        <section>
            <div className='add-new-page__input'>

                <h2>Tambah Catatan</h2>
                <NoteInput addNote={onAddNoteHandler} />
            </div>
        </section>

    )
}

export default AddPage;
