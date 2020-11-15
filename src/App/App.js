// import logo, { ReactComponent } from '../logo.svg';
import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import Body from '../Body/Body';
import data from '../STORE';
import { BrowserRoute, Switch, Route, Link } from 'react-router-dom';
import Folders from '../Folders/Folders';
import Notes from '../Notes/Notes'




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
      console.log('header clicked')
      e.preventDefault()
      this.setState({
          selected: {
              folders: [],
              notes: [],
          }
      })
  }

    handleFolderClick = (id) => {
        let shownNotes = this.state.data.notes.filter(note => note.folderId === id)
        this.setState({
            selected: {
                folders: [],
                notes: shownNotes,
            }
        })
    }

    handleNoteClick = (id) => {
        let noteContent = this.state.data.notes.filter(note => note.id === id)
        let matchFolder = this.state.data.folders.filter(folder => folder.id === noteContent[0].folderId)
        this.setState({
            selected: {
                folders: matchFolder,
                notes: noteContent
            }
        })

    }

    handleGoBackClick = () => {
        console.log('go back clicked')
        
    }

    folderRoutes = () => {
      const {notes, folders} = this.state.selected;
        return (
            <>
                {['/', '/folder/:folderId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        render={routeProps => (
                            <Body
                                folders={folders}
                                notes={notes}
                                {...routeProps}
                            />
                        )}
                    />
                ))}
            </>
        )
    }




    render() {
        return (
            <div className="App">
                {/* <Header
                    headerClick={e => this.handleHeaderClick(e)} 
                    title={"Noteful"}
                />

                <Body 
                    data={this.state}
                    folderClick={id => this.handleFolderClick(id)}
                    noteClick={id => this.handleNoteClick(id)}
                    backClick={() => this.handleGoBackClick()}
                /> */}
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
                        <Body {...props} 
                          data={this.state}
                          folderClick={id => this.handleFolderClick(id)}
                          noteClick={id => this.handleNoteClick(id)}
                          backClick={() => this.handleGoBackClick()}
                        />
                      </>
                    )}
                  />
                  
                  <Route
                    path='/folders/:folderid'
                    render={(props) => (
                      <>
                        <Header 
                          {...props} 
                          title={"Noteful"} 
                          headerClick={this.handleHeaderClick}
                        />
                        <Body {...props} 
                          data={this.state}
                          folderClick={id => this.handleFolderClick(id)}
                          noteClick={id => this.handleNoteClick(id)}
                          backClick={() => this.handleGoBackClick()}
                        />
                      </>
                    )}
                  />

                  <Route
                    path='/notes/:noteid'
                    render={(props) => (
                      <>
                        <Header 
                          {...props} 
                          title={"Noteful"} 
                          headerClick={this.handleHeaderClick}
                        />
                        <Body {...props} 
                          data={this.state}
                          folderClick={id => this.handleFolderClick(id)}
                          noteClick={id => this.handleNoteClick(id)}
                          backClick={() => this.handleGoBackClick()}
                        />
                      </>
                    )}
                  />




                </Switch>
            </div>
        );
    }
}


export default App;
 