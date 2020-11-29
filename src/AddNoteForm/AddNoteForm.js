import React from 'react';
import NotefulContext from '../NotefulContext'

class AddNoteForm extends React.Component {
    static contextType = NotefulContext

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        console.log(this.props)
        return (
            <form onSubmit={e => this.handleAddFolder(e)}>
                <fieldset>
                    <legend>Add Note:</legend>
                    <label htmlFor='noteName'>Note Name: </label>
                    <input type="text" id="folderName" 
                        name="folderName"
                        // ref={this.folderName}
                    />
                    <label htmlFor='noteName'>Note Name: </label>
                    <input type="text" id="folderName" 
                        name="folderName"
                        // ref={this.folderName}
                    />
                    <label htmlFor='noteName'>Note Name: </label>
                    <input type="text" id="folderName" 
                        name="folderName"
                        // ref={this.folderName}
                    />
                </fieldset>
                <button onClick={() => this.props.history.push('/')}>Cancel</button>
                <button type='submit'>Submit</button>
                
            </form>
        )
    }
}

export default AddNoteForm