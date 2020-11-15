import React from 'react';
import { render } from 'react-dom';
import './AddFolder.css'

function AddFolder(props) {
    if(props.data.selected.notes.length === 1) {
        return ""
    } else {
        return (
            <button className="add-folder-btn">Add Folder</button>
            
        )
    }
}

export default AddFolder