import React from 'react';
import './GoBack.css'
import NotefulContext from '../NotefulContext'



class GoBack extends React.Component {
    static contextType = NotefulContext;

    render() {
    console.log(this.context.data.selected)
    console.log(this.props)
        let folder = {};
        if(this.props.match.path === "/notes/:noteid" ) {
            let singleNote = this.context.data.selected.notes.filter(note =>
                     this.props.match.params.noteid === note.id)
            folder = this.context.data.selected.folders.filter(folder => folder.id === singleNote[0].folderId);
            console.log(folder)
        } 
            return (
                <div>
                    <button 
                        onClick={() => this.props.history.goBack()}
                        className="go-back-btn">
                            Go Back
                    </button>
                    <h4>Folder: {folder[0].name === undefined ? "" : folder[0].name}</h4>
                </div>
            )
    }
}

export default GoBack