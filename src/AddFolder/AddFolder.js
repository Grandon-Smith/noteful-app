import React from 'react';
import NotefulContext from '../NotefulContext'
import PropTypes from 'prop-types';



class AddFolder extends React.Component {

    static contextType = NotefulContext;

    getRandomString(length) {
        //used to create a unique folderid
        var randomChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }

    handleAddFolder = e => {
        e.preventDefault();
        const newIdChars = this.getRandomString(15)

        const folderId = newIdChars;
        console.log(folderId)
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
        console.log(this.context)

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

AddFolder.propTypes ={
    history: PropTypes.object.isRequired
}

export default AddFolder