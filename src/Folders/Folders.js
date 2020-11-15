import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './Folders.css'
import { BrowserRoute, Switch, Route, Link } from 'react-router-dom';


function Folders(props) {
    console.log(props)


    if(props.data.selected.notes.length === 1) {
        return ""
    } else {
    
        const folder = props.data.data.folders.map((obj, idx) => {
            return (
                
                    <div className="folder" key={idx} id={obj.id}>
                        <Link to={`/folders/${obj.id}`}>
                            <button
                                type="button"
                                className="folder-button"
                                id={obj.id}
                                onClick={e => props.folderClick(e.target.id)}
                            >
                                
                                    {obj.name}
                                
                            </button>
                        </Link>
                    </div>
               
            )
        });

        return (
            
            <div className="folder-container" >
                {folder}
            </div>
        )
    }
}

export default Folders