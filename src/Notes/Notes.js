import React from 'react';
import { render } from 'react-dom';
import './Notes.css'

function Notes() {

        // const Notes = props.data.notes.map((key, idx) => {
        // <div className="folder" key={idx}>
        //     <button 
        //         className="folder-button"
        //         id={idx}>
        //             {key}
        //     </button>
        // </div>
    // });

    return (
        <div className="wrapper">
            <h3 className="note-title">NOte Title</h3>
            <div className="note-bottom">
                <h5 className="note-date">date modified timestamp</h5>
                <button className="delete-btn">Delete Note</button>
            </div>
            
        </div>
       
    )

}

export default Notes