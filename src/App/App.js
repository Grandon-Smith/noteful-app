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
              
            }
        }
    }

    
    handleFolderClick = (id) => {
      // const folder = []
      // folder.push(this.state.data.folders.find(folder => folder.id === id))
      // console.log(folder)
      const shownNotes = this.state.data.notes.filter(note => note.folderId === id)
      console.log(shownNotes)
      // console.log(this.state.selected.noteId)
      this.setState({
        selected: {
          folderId: this.state.data.folders,
          noteId: shownNotes
        }
      })
      console.log(this.state.selected)
  }

  handleHeaderClick = () => {
    this.setState({
      selected: {
        folderId: this.state.data.folders,
        noteId: this.state.data.notes
      }
    })
  }

  handleNoteClick = () => {

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
                />
            </div>
        );
    }
}

export default App;
 