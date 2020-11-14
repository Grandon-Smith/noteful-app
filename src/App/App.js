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
              folderId: data.folders,
              noteId: data.notes,
              noteContent: null,
              passGoBack: null,
              folder: 0,
            }
        }
    }

    
    handleFolderClick = (id) => {

      // folder.push(this.state.data.folders.find(folder => folder.id === id))
      const shownNotes = this.state.data.notes.filter(note => note.folderId === id)
      // console.log(shownNotes)
      this.setState({
        selected: {
          folderId: this.state.data.folders,
          noteId: shownNotes,
          noteContent: null,
          passGoBack: null,
          folder: id,
        }
      })

      console.log(this.state.selected)
  }


  handleHeaderClick = () => {
    this.setState({
      selected: {
        folderId: this.state.data.folders,
        noteId: this.state.data.notes,
        noteContent: null,
        passGoBack: null,
      }
    })
  }





  handleNoteClick = (id) => {
    const shownNotes = this.state.data.notes.filter(note => note.id === id)
    const shownContent = shownNotes[0].content
    const folder = this.state.data.folders.filter(folder => folder.id === shownNotes[0].folderId)
    // console.log(folder)
    this.setState({
      selected: {
        folderId: folder[0],
        noteId: shownNotes,
        noteContent: shownContent,
        passGoBack: folder[0].name,
      }
    })
  }

  handleGoBackClick = () => {
    const shownNotes = this.state.data.notes.filter(note => note.folderId === this.state.selected.folder)

    this.setState({
      selected: {
        folderId: this.state.data.folders,
        noteId: shownNotes,
        noteContent: null,
        passGoBack: null,
        }
    })
    console.log(this.state.selected)

  }

//   <Route
//   path={`/folders/:folderId`} 
//   render={(props) => 
//       <Folders
//           {...props}
//       />}
// />


 






    render() {

      console.log(this.state.data.folders)

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
                path='/folders/:folderId'
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
                    {/* <Folders
                      {...props}
                      data={this.state}
                      folderClick={id => this.handleFolderClick(id)}/>
                       <Notes 
                    data={this.state}
                    noteClick={id => this.handleNoteClick(id)}/>
                       */}
                  </>
                )}
              />

              
            </Switch>
          </div>
        );
    }
}

       // <div className="App">
            //       <Header
            //           headerClick={this.handleHeaderClick} 
            //           title={"Noteful"}/>

            //       <Body 
            //           data={this.state}
            //           folderClick={id => this.handleFolderClick(id)}
            //           noteClick={id => this.handleNoteClick(id)}
            //           backClick={() => this.handleGoBackClick()}
            //       />
            // </div>

export default App;
 