import React from 'react';
import NotefulContext from '../NotefulContext'


class AddFolder extends React.Component {

    static contextType = NotefulContext;

    getRandomString(length) {
        //used to create a unique folderid
        let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for ( let i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }

    handleAddFolder = e => {
        e.preventDefault();
        const newIdChars = this.getRandomString(3)
        const folderId = `b0715${newIdChars}-ffaf-11e8-8eb2-f2801f1b9fd1`;
        const folderName = e.target.folderName.value;
        if(folderName.length < 1) {
            alert('folders must be named!')
        } else {
            let body = {
                id: folderId,
                name: folderName,
            };
            
            fetch(`http://localhost:9090/folders`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(body),
            })
                .then(response => {
                    if(!response.ok)
                        return response.json().then(e => Promise.reject(e))
                    return response.json()
                .then(() => {
                    this.context.addFolder(folderId, folderName)
                })
                .then(() => {
                    this.props.history.push('/')
                })
                .catch(error => {
                    console.error({ error })
                })
            })
        }
    }


    render() {
        console.log(this.props)
        return (
            <form onSubmit={e => this.handleAddFolder(e)}>
                <fieldset>
                    <legend>Add Folder:</legend>
                    <label htmlFor='folderName'>Folder Name: </label>
                    <input type="text" id="folderName" 
                        name="folderName"
                    />
                </fieldset>
                <button onClick={() => this.props.history.push('/')}>Cancel</button>
                <button type='submit'>Submit</button>
                
            </form>
        )
    }
}

export default AddFolder