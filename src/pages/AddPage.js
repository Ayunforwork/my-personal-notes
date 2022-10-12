import React from 'react';
//import { addNote } from '../utils/local-data';
import { addNote } from '../utils/network-data';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';

function AddPage() {
    const navigate = useNavigate()

   async function onAddNoteHandler(notes) {
        await addNote(notes);
        navigate('/');
    }

    return (
        <section>
            <div>
                <h2>Tambah Catatan</h2>
                <NoteInput addNote={onAddNoteHandler} />
            </div>
        </section>

    )
}

export default AddPage;
