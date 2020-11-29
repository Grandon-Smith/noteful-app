import React from 'react';
import { render } from 'react-dom';
import './Notes.css'
import { BrowserRoute, Switch, Route, Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext'


class Notes extends React.Component {

    static contextType = NotefulContext;


    handleDelete = e => {
        e.preventDefault()
        let id = (e.target.id)
        fetch(`http://localhost:9090/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(response => {
                if(!response.ok) 
                    return response.json().then(e => Promise.reject(e))
                return response.json()
            .then(() => {
                this.context.deleteNote(id)
                console.log(this.props)
            })
            .then(() => {
                this.props.history.push('/')
            })
            .catch(error => {
                console.error({ error })
            })
        })
    }

    render() {
        let notes = [];
        
        if(this.props.match.path === '/') {
            notes = [...this.context.data.selected.notes];
        } 
        else if (this.props.match.path === "/notes/:noteid") {
            notes = this.context.data.selected.notes.filter(item => item.id === this.props.match.params.noteid)
        } 
        else {
            notes = this.context.data.selected.notes.filter(note => note.folderId === this.props.match.params.folderid);
        }
        const noteList = notes.map((obj, idx) => {
            return(
                <div className="wrapper" id={obj.folderId} key={idx}>
                    <Link to={`/notes/${obj.id}`}>
                        <button 
                            type="button"
                            className="note-btn"
                            >
                            <h3 className="note-title" id={obj.id}>
                                    {obj.name} 
                            </h3>
                        </button>
                    </Link>

                    <div className="note-bottom">
                        <h5 className="note-date">{obj.modified}</h5>
                        <button type="button"
                            className="delete-btn"
                            key={obj.id}
                            id={obj.id}
                            onClick = {e => this.handleDelete(e)}>
                                Delete Note
                        </button>
                    </div>
                    <div className="note-content">
                        { notes.length !== 1 
                        ? ""
                        : notes[0].content}
                    </div>
                    
                </div>
            )
        })

        return (

            <div className="note-container">
                {noteList}
            </div>
        )
    }

}

export default Notes