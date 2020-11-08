// import logo, { ReactComponent } from '../logo.svg';
import React, {Component} from 'react'
import './App.css';
import Header from '../Header/Header'
import Body from '../Body/Body'
import data from '../STORE'
import { Route } from 'react-router-dom'




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
            }
        }
    }

    
    handleFolderClick = (id) => {
      // const folder = []
      // folder.push(this.state.data.folders.find(folder => folder.id === id))
      const shownNotes = this.state.data.notes.filter(note => note.folderId === id)
      // console.log(shownNotes)
      this.setState({
        selected: {
          folderId: this.state.data.folders,
          noteId: shownNotes,
          noteContent: null,
          passGoBack: null,
        }
      })
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

  handleGoBackClick = (e) => {
    console.log('i')
  }

    render() {

        return (
            <div className="App">
                <Header
                    headerClick={this.handleHeaderClick} 
                    title={"Noteful"}/>
                <Body 
                    data={this.state}
                    folderClick={id => this.handleFolderClick(id)}
                    noteClick={id => this.handleNoteClick(id)}
                    backClick={e => this.handleGoBackClick(e)}
                />
            </div>
        );
    }
}

export default App;
 