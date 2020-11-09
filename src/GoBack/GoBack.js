import React from 'react';
import { render } from 'react-dom';
import './GoBack.css'
import { BrowserRoute, Switch, Route, Link } from 'react-router-dom';


function GoBack(props) {
    // console.log(props.backClick)
    if(props.data.selected.passGoBack !== null) {
        return (
            <div>
                <button 
                    onClick={e => props.backClick()}
                    className="go-back-btn">
                        Go Back
                </button>
                <h3>Folder: {props.data.selected.passGoBack}</h3>
            </div>
        )
    } else {
        return (
            ""
        )
    }
}

export default GoBack