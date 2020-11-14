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
              notes:[],
            }
        }
    }




    render() {
        return (
            <div className="App">
                <Header
                    headerClick={this.handleHeaderClick} 
                    title={"Noteful"}
                />

                <Body 
                    data={this.state}
                    folderClick={id => this.handleFolderClick(id)}
                    noteClick={id => this.handleNoteClick(id)}
                    backClick={() => this.handleGoBackClick()}
                />
            </div>
        );
    }
}


export default App;
 