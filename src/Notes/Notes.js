import React from 'react';
import { render } from 'react-dom';
import './Notes.css'
import { BrowserRoute, Switch, Route, Link } from 'react-router-dom';


function Notes(props) {

    let noteData = [];
    if(props.match === undefined) {
        noteData = props.data.data.notes;
    } else {
        noteData = props.data.data.notes.filter(note => note.folderId === props.match.params.folderid);
    }

    console.log(props)
    const note = noteData.map((obj, idx) => {
        return(
            <div className="wrapper" id={obj.folderId} key={idx}>
                {/* <Link to={`/note/${obj.id}`}> */}
                    <button 
                        type="button"
                        className="note-btn"
                        onClick={e => props.noteClick(e.target.id)}
                        >
                        <h3 className="note-title" id={obj.id}>
                                {obj.name} 
                        </h3>
                    </button>
                {/* </Link> */}
                <div className="note-bottom">
                    <h5 className="note-date">{obj.modified}</h5>
                    <button className="delete-btn" key={idx}>Delete Note</button>
                </div>
                <div className="note-content">
                    {props.data.selected.notes.length !== 1 
                    ? "" 
                    : props.data.selected.notes[0].content}
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