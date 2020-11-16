import React from 'react';
import { render } from 'react-dom';
import './GoBack.css'
import { BrowserRoute, Switch, Route, Link } from 'react-router-dom';


function GoBack(props) {

    if(props.data.selected.notes.length === 1) {
        return (
            <div>
                <button 
                    onClick={e => props.backClick()}
                    className="go-back-btn">
                        Go Back
                </button>
                <h4>Folder: {props.data.selected.folders[0].name}</h4>
            </div>
        )
    } else {
        return (
            ""
        )
    }
}

export default GoBack