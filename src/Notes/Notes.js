import React from 'react';
import { render } from 'react-dom';
import './Notes.css'

function Notes(props) {


    // {console.log(props.data.selected.noteId)}

     const note = props.data.selected.noteId.map((obj, idx) => {
        return(
            <div className="wrapper" id={obj.folderId} key={idx}>
                <button 
                    type="button"
                    className="note-btn"
                    onClick={e => props.noteClick(e.target.id)}>
                    <h3 className="note-title" id={obj.id}> {obj.name} </h3>
                </button>
                
                <div className="note-bottom">
                    <h5 className="note-date">{obj.modified}</h5>
                    <button className="delete-btn" key={idx}>Delete Note</button>
                </div>
                
            </div>
        )
    })


    return (

        <div className="note-container">
            {note}
        </div>
    )

}

export default Notes