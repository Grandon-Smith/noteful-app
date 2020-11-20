import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './Folders.css'
import { BrowserRoute, Switch, Route, Link } from 'react-router-dom';


function Folders(props) {
    let folder = props.data.data.folders

    let folderList = folder.map((obj, idx) => {
            return (
                <div className="folder" key={idx} id={obj.id}>
                    <Link to={`/folders/${obj.id}`}>
                        <button
                            type="button"
                            className="folder-button"
                            id={obj.id}
                        >
                                {obj.name}
                        </button>
                    </Link>
                </div>
            )
        });

    return (
        <div className="folder-container" >
            {folderList}
        </div>
    )
}


export default Folders