import { render } from '@testing-library/react';
import React from 'react';
import './Body.css'
import Folders from '../Folders/Folders'
import Notes from '../Notes/Notes'

function Body() {

    return (
        <div>
            <nav>
                <Folders/>
                <Folders/>
                <Folders/>
            </nav>
            <section>
                <Notes/>
                <Notes/>
                <Notes/>
            </section>
            
        </div>
    )
}

export default Body