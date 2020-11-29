// import logo, { ReactComponent } from '../logo.svg';
import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import { BrowserRoute, Switch, Route, Link } from 'react-router-dom';
import Folders from '../Folders/Folders'
import Notes from '../Notes/Notes'
import AddNote from '../AddNote/AddNote'
import AddFolder from '../AddFolder/AddFolder'
import GoBack from '../GoBack/GoBack'
import NotefulContext from '../NotefulContext'
import addFolderForm from '../AddFolderForm/AddFolderForm'


class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            // data: data,
            selected: {
                folders: [],
                notes: [],
            },
            // deleteNote: () => {},
            // addFolder: () => {},
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

    render() {
        const value = {
            data: this.state,
            deleteNote: this.deleteNote,
            // addFolder: this.addFolder
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
                                        
                                        <Folders />
                                        <AddFolder/>
                                    </nav>
                                    <section className="note-list">
                                        <Notes
                                            {...props}
                                        />
                                        <AddNote/>
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
                                        <Folders />
                                        <AddFolder/>
                                    </nav>
                                    <section className="note-list">
                                        <Notes 
                                            {...props}
                                        />
                                        <AddNote/>
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
                                        <Notes 
                                            {...props}
                                        />
                                    </section>
                                    </div>
                                </>
                            )
                        }}
                    />
                    <Route
                        path='/addFolderForm'
                        component={addFolderForm}
                    />

                </Switch>
            </div>
            </NotefulContext.Provider>
        );
    }
}


export default App;
 