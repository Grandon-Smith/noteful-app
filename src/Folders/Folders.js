import React from 'react';
import { render } from 'react-dom';
import './Folders.css'


function Folders(props) {
    {console.log(props.data.folders)}
    const folders = Object.entries(props.data.folders)
    {console.log(folders)}
    // const folder = props.data.folders.map((key, idx) => {
        // <div className="folder" key={idx}>
        //     <button 
        //         className="folder-button"
        //         id={idx}>
        //             {key}
        //     </button>
        // </div>
    // });
    return (
        
        <div className="folder" >
            <button 
                className="folder-button"
                >
                    folder
            </button>
        </div>
    )

}

export default Folders