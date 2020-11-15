// import { render } from '@testing-library/react';
import React from 'react';
import './Header.css'
import {Route, Link} from 'react-router-dom'


function Header(props) {
        return (
            <header className="header">
                <h1
                    onClick={() => props.headerClick()}>
                    <a href ={props.title}>{props.title}</a>
                </h1>
            </header>
        )
} 

export default Header