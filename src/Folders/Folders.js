import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './Folders.css'
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext'


class Folders extends React.Component {

    static contextType = NotefulContext;

    render() {
        console.log(this.context.data.selected)
        let folder = this.context.data.selected.folders

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
}


export default Folders