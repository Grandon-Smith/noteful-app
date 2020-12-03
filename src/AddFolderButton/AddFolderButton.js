import React from 'react';
import { Link } from 'react-router-dom';
import './AddFolder.css'

function AddFolderButton(props) {
        return (
            // <NotefulContext.Consumer>
            <Link to='/addFolderForm'>
                <button 
                    className="add-folder-btn"
                >
                        Add Folder
                </button>
            </Link>
            // </NotefulContext.Consumer>
        )
}

export default AddFolderButton