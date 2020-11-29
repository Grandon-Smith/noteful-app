import React from 'react';

class AddFolderForm extends React.Component {

    handleAddFolder = e => {
        e.preventDefault()
        
        fetch(`http://localhost:9090/folders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({}),
        })
    }

    render() {
        return (
            <form onSubmit={e => this.handleAddFolder(e)}>
                <fieldset>
                    <legend>Add Folder:</legend>
                    <label htmlFor='folderName'>Folder Name: </label>
                    <input type="text" id="folderName" name="folderName"></input>
                </fieldset>
            </form>
        )
    }
}

export default AddFolderForm