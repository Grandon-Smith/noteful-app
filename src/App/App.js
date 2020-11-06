import logo, { ReactComponent } from '../logo.svg';
import React, {Component} from 'react'
import './App.css';
import Header from '../Header/Header'
import Body from '../Body/Body'
import data from '../STORE'


class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data
        }
  }

    render() {
        return (
            <div className="App">
                <Header title={"TITLE HERE"}/>
                <Body data={this.state.data}/>
            </div>
        );
    }
}

export default App;
 