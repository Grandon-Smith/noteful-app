import { render } from '@testing-library/react';
import React from 'react';
import './Header.css'

function Header(props) {
        return (
            <header className="header">
                <h1>
                    {props.title}
                </h1>
            </header>
        )
}

export default Header