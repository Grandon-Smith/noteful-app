import React from 'react';
import NotefulContext from '../NotefulContext'
import './AddNote.css'
import ValidationError from './Validation';
import ErrorBoundary from '../ErrorBoundary'
import PropTypes from 'prop-types';


class AddNote extends React.Component {
    static contextType = NotefulContext

    constructor(props) {
        super(props)
        this.state = {
            name: {
                value: '',
                touched: false,
            },
            content:{
                value: '',
                touched: false,
            },
            folderName: {
                value: '',
                id: '',
                touched: false,
            },
        }
    }
    updateName(name) {
        this.setState({name: {value: name, touched: true}});
    }  
    updateContent(content) {
        this.setState({content: {value: content, touched: true}});
    }
    updateFolderName(folderName) {
        let folderId = this.context.data.selected.folders.filter(folder => folder.folder_name === folderName)
        let id = folderId[0].folder_id
        this.setState({ 
            folderName: { value: folderName, id: id, touched: true } 
        });
    }
    validateTextInput() {
        const name = this.state.name.value.trim()
        const content = this.state.content.value.trim()
        if(name.length === 0 || content.length === 0) {
            return "All notes must have a name and content."
        }
    }
    validateFolder() {
        const folder = this.state.folderName.value;
        if(folder === "") {
            return "please choose a folder"
        }
    }
    getRandomString(length) {
        //used to create a unique folderid
        var randomChars = '0123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }
    generateFolderOptions() {
        return this.context.data.selected.folders.map((folder, idx) => {
            return(
            <option 
                value={folder.folder_name} 
                key={idx}
                id={folder.folder_id}
            >
                    {folder.folder_name}
            </option>
            )
        })
    }

    handleAddNote = e => {
        e.preventDefault();
        const newIdChars = this.getRandomString(4)
        const {name, content, folderName} = this.state
        const noteId = `${newIdChars}`
        const noteName = name.value
        const noteContent = content.value
        const f_Id =folderName.id
        let body = {
            id: parseInt(noteId),
            name: noteName,
            content: noteContent,
            folder_id: f_Id,
            modified: "2019-01-03T00:00:00.000Z"
        };
        fetch(`http://localhost:8000/notes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then(response => {
                if(!response.ok) {
                    return response.json().then(e => Promise.reject(e)) 
                }
                return response.json()
            .then(() => {
                // this.context.addNote(noteId, name.value, folderName.id, content, body.modified)
                this.context.addNote({body})
            })
            .then(() => {
                this.props.history.push('/')
            })
            .catch(error => {
                <ErrorBoundary error={error}/>
            })
        })
    }

    render() {
        return (
            <form 
                onSubmit={e => this.handleAddNote(e)}
            >
                <fieldset className='note-field'>
                    <legend>Add Note:</legend>
                    <div className='input'>

                        <label htmlFor='noteName'>Note Name: </label>
                        <input type="text" id="noteName" 
                            name="noteName"
                            onChange={e => this.updateName(e.target.value)}
                        />
                        {this.state.name.touched && ( <ValidationError message={this.validateTextInput()}/> )}
                    </div>
                    <div className='input'>

                        <label htmlFor='noteContent'>Note Content: </label>
                        <textarea id="noteContent" 
                            name="noteContent"
                            onChange={e => this.updateContent(e.target.value)}
                        />
                    </div>

                    <div className='input'>

                        <label htmlFor='selectedFolder'>Folder: </label>
                        <select 
                            name="selectedFolder"
                            onChange={e => this.updateFolderName(e.target.value)}
                        >
                            <option value="">--</option>
                            {this.generateFolderOptions()}
                        </select>
                        {this.state.folderName.touched && ( <ValidationError message={this.validateFolder()}/> )}

                    </div>
                </fieldset>
                <button onClick={() => this.props.history.push('/')}>Cancel</button>
                <button type='submit'
                    disabled={this.validateTextInput() || this.validateFolder()}>
                        Submit
                </button>
                
            </form>
        )
    }
}
AddNote.propTypes ={
    history: PropTypes.object.isRequired
}

export default AddNote