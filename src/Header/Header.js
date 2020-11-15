// import { render } from '@testing-library/react';
import React from 'react';
import './Header.css'
import {Route, Link} from 'react-router-dom'


function Header(props) {
        return (
            <header className="header">
                <h1
                    onClick={(e) => props.headerClick(e)}>
                    <Link to='/'> {props.title} </Link>
                </h1>
            </header>
        )
} 

export default Header