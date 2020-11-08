import React from 'react';
import { render } from 'react-dom';
import './GoBack.css'

function GoBack(props) {
    {console.log(props.backClick())}
    if(props.data.selected.passGoBack !== null) {
        return (
            <div>
                <button 
                    onClick={e => props.GoBack(e)}
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