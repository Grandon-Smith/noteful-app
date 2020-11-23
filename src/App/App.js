// import logo, { ReactComponent } from '../logo.svg';
import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import Body from '../Body/Body';
import data from '../STORE';
import { BrowserRoute, Switch, Route, Link } from 'react-router-dom';
import Folders from '../Folders/Folders'
import Notes from '../Notes/Notes'
import AddNote from '../AddNote/AddNote'
import AddFolder from '../AddFolder/AddFolder'
import GoBack from '../GoBack/GoBack'
import NotefulContext from '../NotefulContext'


class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data: data,
            selected: {
                folders: [],
                notes: [],
            }
        }
    }

    render() {
        const value = {
            data: this.state,
        }
        return (
            <NotefulContext.Provider value={value}>
            <div className="App">
                <Switch>
                    <Route
                        exact path='/'
                        render={(props) => (
                        <>
                            <Header/>
                            <div className="group">
                            <nav className="folder-list">
                                
                                <Folders 
                                    data={this.state}
                                />
                                <AddFolder/>
                            </nav>
                            <section className="note-list">
                                <Notes 
                                    data={this.state}
                                />
                                <AddNote/>
                            </section>
                            </div>
                        </>
                        )}
                    />

                    <Route
                        exact path='/folders/:folderid'
                        render={(props) => {
                            return(
                                <>
                                    <Header/>
                                    <div className="group">
                                    <nav className="folder-list">
                                        <Folders 
                                            data={this.state}
                                        />
                                        <AddFolder/>
                                    </nav>
                                    <section className="note-list">
                                        <Notes 
                                            {...props}
                                            data={this.state}
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
                                            data={this.state}
                                            {...props}
                                        />
                                    </nav>
                                    <section className="note-list">
                                        <Notes 
                                            {...props}
                                            data={this.state}
                                        />
                                    </section>
                                    </div>
                                </>
                            )
                        }}
                    />
                </Switch>
            </div>
            </NotefulContext.Provider>
        );
    }
}


export default App;
 