import React from 'react';
import { Link } from 'react-router-dom';
import './AddNote.css'

function AddNoteButton() {
    return (
        <Link to="/addNoteForm">
            <button 
                className="add-note-btn">
                    Add Note
            </button>
        </Link>
    )

}

export default AddNoteButton