import React from 'react';
import './GoBack.css'
import NotefulContext from '../NotefulContext'
import PropTypes from 'prop-types';


class GoBack extends React.Component {
    static contextType = NotefulContext;

    getFolderName() {
        let folder = {};
        const {folders, notes} = this.context.data.selected
        let singleNote = notes.filter(note =>
            this.props.match.params.id === note.id)
        folder = folders.filter(folder => 
            folder.id === singleNote[0].folderId);
        return folder[0]?.name
    }

    render() {
            return (
                <div>
                    <button 
                        onClick={() => this.props.history.goBack()}
                        className="go-back-btn">
                            Go Back
                    </button>
                        <h4>Folder: {
                         this.getFolderName()
                        
                        } </h4>
                </div>
            )
    }
}
GoBack.propTypes = {
    props : PropTypes.object
}


export default GoBack