import React from 'react';
import './GoBack.css'
import NotefulContext from '../NotefulContext'
import PropTypes from 'prop-types';




class GoBack extends React.Component {
    static contextType = NotefulContext;

    // getFolderName = setTimeout(() => {
    //     let folder = {};
    //     let singleNote = this.context.data.selected.notes.filter(note =>
    //     this.props.match.params.noteid === note.id)
    //     folder = this.context.data.selected.folders.filter(folder => folder.id === singleNote[0].folderId);
    //     return folder[0].name
    // }, 1000)
    getFolderName() {
    //     console.log('started')
    //     setTimeout(() => {
    //         console.log('going')

    //     }, 2000);

        let folder = {};
        let singleNote = this.context.data.selected.notes.filter(note =>
            parseInt(this.props.match.params.note_id) === note.id)
        folder = this.context.data.selected.folders.filter(folder => folder.folder_id === singleNote[0].folder_id);
        return folder[0].folder_name
    }

    render() {
            return (
                <div>
                    <button 
                        onClick={() => this.props.history.goBack()}
                        className="go-back-btn">
                            Go Back
                    </button>
                        <h4>Folder: { this.getFolderName()}</h4>
                </div>
            )
    }
}
GoBack.propTypes = {
    props : PropTypes.object
}


export default GoBack