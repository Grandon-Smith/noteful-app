import React from 'react';
import { render } from 'react-dom';
import './GoBack.css'
import { BrowserRoute, Switch, Route, Link } from 'react-router-dom';


function GoBack(props) {
    console.log(props)
    let folder = {};
    if(props.match.path === "/notes/:noteid" ) {
        console.log("hfdskfsdjfl")
        let singleNote = props.data.data.notes.filter(note => props.match.params.noteid === note.id)
        folder = props.data.data.folders.filter(folder => folder.id === singleNote[0].folderId);
        console.log(folder)

    } 
        return (
            <div>
                <button 
                    // onClick={e => props.backClick()}
                    onClick={() => props.history.goBack()}
                    className="go-back-btn">
                        Go Back
                </button>
                <h4>Folder: {folder[0].name}</h4>
            </div>
        )
}

export default GoBack