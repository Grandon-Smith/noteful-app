import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './Folders.css'
import { BrowserRoute, Switch, Route, Link } from 'react-router-dom';


function Folders(props) {
    // {console.log(props.data.selected.folderId)}
    console.log(props)
    if(props.data.selected.passGoBack !== null) {
        return ""
    } else {
        const folder = props.data.selected.folderId.map((obj, idx) => {
            return (
                
                    <div className="folder" key={idx} id={obj.id}>
                        <button
                            type="button"
                            className="folder-button"
                            id={obj.id}
                            onClick={e => props.folderClick(e.target.id)}
                        >
                            <Link to={`/folders/`}>
                                {obj.name}
                            </Link>
                        </button>
                    </div>
               
            )
        });
    //${obj.id}

        return (
            
            <div className="folder-container" >
                {folder}
            </div>
        )
    }
}

export default Folders