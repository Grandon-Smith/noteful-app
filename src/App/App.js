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
    componentDidMount = () => {
        function focusFolder(){
            let focusFolder = document.getElementById(this.state.selected.folders[0].id)
            focusFolder.focus()
        }
    }
    

    handleGoBackClick = () => {
        console.log('go back clicked')
    }



    // folderRoutes = () => {
    //   const {notes, folders} = this.state.selected;
    //     return (
    //         <>
    //             {['/', '/folder/:folderId'].map(path => (
    //                 <Route
    //                     exact
    //                     key={path}
    //                     path={path}
    //                     render={routeProps => (
    //                         <Body
    //                             folders={folders}
    //                             notes={notes}
    //                             {...routeProps}
    //                         />
    //                     )}
    //                 />
    //             ))}
    //         </>
    //     )
    // }




    render() {
        return (
            <div className="App">
              
                {/* <Body 
                    data={this.state}
                    folderClick={id => this.handleFolderClick(id)}
                    noteClick={id => this.handleNoteClick(id)}
                    backClick={() => this.handleGoBackClick()}
                /> */}

                {/* <Header
                    headerClick={e => this.handleHeaderClick(e)} 
                    title={"Noteful"}
                />

                



                <div className="group">
                    <nav className="folder-list">

                        
                        <Folders 
                            data={this.state}
                            folderClick={id => this.handleFolderClick(id)}
                        />

                        <AddFolder
                            data={this.state}
                            />

                        <GoBack
                            data={this.state}
                            backClick={() => this.handleGoBackClick()}
                        />
                    </nav>
                    <section className="note-list">
                        <Notes 
                            data={this.state}
                            noteClick={id => this.handleNoteClick(id)}
                            />
                        
                        <AddNote/>
                    </section>
                </div> */}
               








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

                              <AddFolder
                                  data={this.state}
                                  />

                              <GoBack
                                  data={this.state}
                                  backClick={() => this.handleGoBackClick()}
                              />
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
                    path='/folders/:folderid'
                    render={(props) => (
                        <>
                      
                        <div className="group">
                          <nav className="folder-list">

                              
                              <Folders 
                                  data={this.state}
                                  folderClick={id => this.handleFolderClick(id)}
                                  {...props}
                              />

                          </nav>
                          <section className="note-list">
                              <Notes 
                                  data={this.state}
                                  noteClick={id => this.handleNoteClick(id)}
                                  {...props}
                              />
                            
                          </section>
                        </div>
                      </>
                      )
                    }

                  />
                </Switch>


            </div>
        );
    }
}


export default App;
 