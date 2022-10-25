import React from 'react';
import { addNote } from '../utils/network-data';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';
import { LocaleConsumer } from '../contexts/LocaleContext';

function AddPage() {
    const navigate = useNavigate()

    async function onAddNoteHandler(notes) {
        await addNote(notes);
        navigate('/');
    }

    return (
        <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <section>
                            <div>
                                <h2>{locale === 'id' ? 'Tambah Catatan' : 'Add Note'}</h2>
                                <NoteInput addNote={onAddNoteHandler} />
                            </div>
                        </section>
                    )
                }
            }
        </LocaleConsumer>

    )
}

export default AddPage;
