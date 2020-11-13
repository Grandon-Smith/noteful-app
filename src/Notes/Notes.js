import React from 'react';
import { render } from 'react-dom';
import './Notes.css'
import { BrowserRoute, Switch, Route, Link } from 'react-router-dom';


function Notes(props) {


    // {console.log(props.data.selected.noteId)}

     const note = props.data.selected.noteId.map((obj, idx) => {
        return(
            <div className="wrapper" id={obj.folderId} key={idx}>
                <button 
                    type="button"
                    className="note-btn"
                    onClick={e => props.noteClick(e.target.id)}
                    >
                    <h3 className="note-title" id={obj.id}>
                        {/* <Link to={`/note/${obj.id}`}> */}
                            {obj.name} 
                        {/* </Link> */}
                    </h3>
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