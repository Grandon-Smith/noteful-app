import React from 'react';
import { render } from 'react-dom';
import './Folders.css'


function Folders(props) {
    // {console.log(props.data.selected.folderId)}
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
                    {obj.name}
                </button>
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