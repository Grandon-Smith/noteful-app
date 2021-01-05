import React from 'react';
import './Folders.css'
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext'


class Folders extends React.Component {

    static contextType = NotefulContext;

    render() {
        let folder = this.context.data.selected.folders
        let folderList = folder.map((obj, idx) => {
                return (
                    <div className="folder" key={idx} id={obj.folder_id}>
                        <Link to={`/folders/${obj.folder_id}`}>
                            <button
                                type="button"
                                className="folder-button"
                                id={obj.folder_id}
                            >
                                    {obj.folder_name}
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
}


export default Folders