// import { render } from '@testing-library/react';
import React from 'react';
import './Header.css'
import {Route, Link} from 'react-router-dom'


function Header() {
        return (
            <header className="header">
                <h1>
                    <Link to='/'> Noteful </Link>
                </h1>
            </header>
        )
} 

export default Header