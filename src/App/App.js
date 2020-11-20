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

    
    handleHeaderClick = (e) => {
      e.preventDefault()
      this.setState({
          selected: {
              folders: [],
              notes: [],
          }
      })
  }

    handleGoBackClick = () => {
        console.log('go back clicked')
    }


    render() {
        return (
            <div className="App">

                <Switch>
                    <Route
                        exact path='/'
                        render={(props) => (
                        <>
                            <Header 
                            {...props} 
                            title={"Noteful"} 
                            headerClick={this.handleHeaderClick}
                            />
                            <div className="group">
                            <nav className="folder-list">
                                
                                <Folders 
                                    data={this.state}
                                    folderClick={id => this.handleFolderClick(id)}
                                />
                                <AddFolder/>
                            </nav>
                            <section className="note-list">
                                <Notes 
                                    data={this.state}
                                    noteClick={id => this.handleNoteClick(id)}
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
                                    <Header 
                                    title={"Noteful"} 
                                    headerClick={this.handleHeaderClick}
                                    />
                                    <div className="group">
                                    <nav className="folder-list">
                                        <Folders 
                                            data={this.state}
                                            folderClick={id => this.handleFolderClick(id)}
                                            // {...props}
                                        />
                                        <AddFolder/>
                                    </nav>
                                    <section className="note-list">
                                        <Notes 
                                            {...props}
                                            data={this.state}
                                            noteClick={id => this.handleNoteClick(id)}
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
                                    <Header 
                                    title={"Noteful"} 
                                    headerClick={this.handleHeaderClick}
                                    />
                                    <div className="group">
                                    <nav className="folder-list">
                                        <GoBack
                                            data={this.state}
                                            backClick={() => this.handleGoBackClick()}
                                            {...props}
                                        />
                                    </nav>
                                    <section className="note-list">
                                        <Notes 
                                            {...props}
                                            data={this.state}
                                            noteClick={id => this.handleNoteClick(id)}
                                        />
                                    </section>
                                    </div>
                                </>
                            )
                        }}
                    />
                </Switch>


            </div>
        );
    }
}


export default App;
 