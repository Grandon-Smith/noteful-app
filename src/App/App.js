// import logo, { ReactComponent } from '../logo.svg';
import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import { Switch, Route } from 'react-router-dom';
import Folders from '../Folders/Folders';
import Notes from '../Notes/Notes';
import AddNoteButton from '../AddNoteButton/AddNoteButton';
import AddFolderButton from '../AddFolderButton/AddFolderButton';
import GoBack from '../GoBack/GoBack';
import NotefulContext from '../NotefulContext';
import AddFolder from '../AddFolder/AddFolder';
import AddNote from '../AddNote/AddNote';
import ErrorBoundary from '../ErrorBoundary'
import PropTypes from 'prop-types';



class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            selected: {
                folders: [],
                notes: [],
            },
        }
    }

    componentDidMount() {
        Promise.all([
            fetch(`http://localhost:9090/notes`),
            fetch(`http://localhost:9090/folders`)
        ])
            .then(([notesRes, foldersRes]) => {
                if (!notesRes.ok)
                    return notesRes.json().then(e => Promise.reject(e));
                if (!foldersRes.ok)
                    return foldersRes.json().then(e => Promise.reject(e));

                return Promise.all([notesRes.json(), foldersRes.json()]);
            })
            .then(([notes, folders]) => {
                this.setState({
                    selected: {notes, folders}
                })
            })
            .catch(error => {
                console.error({error});
            });
    }

    deleteNote = id => {
        let notes = this.state.selected.notes.filter(note => note.id !== id)
        this.setState({
            selected: {
                folders: [...this.state.selected.folders],
                notes: notes,
            }
        });
    };

    addFolder = (id, name) => {
        console.log('ADD FOLDER RAN')
        let newFolder = {
            id: id,
            name: name,
        };
        this.setState({
            selected: {
                folders:[...this.state.selected.folders, newFolder],
                notes: [...this.state.selected.notes]
            }
        })
    }

    addNote = (id, name, folderId, content, modified) => {
        console.log(name)
        let newNote = {
            id: id,
            name: name.value,
            folderId: folderId,
            content: content.value,
            modified: modified,
        };
        this.setState({
            selected: {
                folders:[...this.state.selected.folders],
                notes: [...this.state.selected.notes, newNote]
            }
        })
    }

    render() {
        const value = {
            data: this.state,
            deleteNote: this.deleteNote,
            addFolder: this.addFolder,
            addNote: this.addNote,
        }
        return (
            <NotefulContext.Provider value={value}>
            <div className="App">
                <Switch>
                    <Route
                        exact path='/'
                        render={(props) => {
                            return (
                                <>
                                    <Header/>
                                    <div className="group">
                                    <nav className="folder-list">
                                        <ErrorBoundary>
                                            <Folders />
                                        </ErrorBoundary>
                                        <AddFolderButton/>
                                    </nav>
                                    <section className="note-list">
                                        <ErrorBoundary>
                                            <Notes
                                                {...props}
                                            />
                                        </ErrorBoundary>
                                        <AddNoteButton/>
                                    </section>
                                    </div>
                                </>
                            )
                        }}
                    />

                    <Route
                        exact path='/folders/:folderid'
                        render={(props) => {
                            return(
                                <>
                                    <Header/>
                                    <div className="group">
                                    <nav className="folder-list">
                                        <ErrorBoundary>
                                            <Folders />
                                        </ErrorBoundary>
                                        <AddFolderButton/>
                                    </nav>
                                    <section className="note-list">
                                        <ErrorBoundary>
                                            <Notes
                                                {...props}
                                            />
                                        </ErrorBoundary>
                                        <AddNoteButton/>
                                    </section>
                                    </div>
                                </>
                            )
                        }}
                    />
                    <Route
                        exact path='/notes/:noteid'
                        render={(props) => {
                            return(
                                <>
                                    <Header/>
                                    <div className="group">
                                    <nav className="folder-list">
                                        <GoBack
                                            {...props}
                                        />
                                    </nav>
                                    <section className="note-list">
                                        <ErrorBoundary>
                                            <Notes
                                                {...props}
                                            />
                                        </ErrorBoundary>
                                    </section>
                                    </div>
                                </>
                            )
                        }}
                    />
                    <Route
                        path='/addFolderForm'
                        component={AddFolder}
                    />
                    <Route
                        path='/addNoteForm'
                        component={AddNote}
                    />
                </Switch>
            </div>
            </NotefulContext.Provider>
        );
    }
}

export default App;
 