import React from 'react';
import { render } from 'react-dom';
import './Notes.css'

function Notes(props) {


    {console.log(props.data.selected.noteId)}

     const note = props.data.selected.noteId.map((obj, idx) => {
        return(
            <div className="wrapper" id={obj.folderId} key={idx}>
                <h3 className="note-title">{obj.name}</h3>
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