// import { render } from '@testing-library/react'
import React from 'react'
import './Body.css'
import Folders from '../Folders/Folders'
import Notes from '../Notes/Notes'
import AddNote from '../AddNote/AddNote'
import AddFolder from '../AddFolder/AddFolder'


function Body(props) {



//  console.log(props.folderClick)
// {console.log(props.data)}
    return (
        <div className="group">
            <nav className="folder-list">
                <Folders 
                    data={props.data}
                    folderClick={props.folderClick}
                />
                
                <AddFolder/>
            </nav>
            <section className="note-list">
                <Notes 
                    data={props.data}/>
                
                <AddNote/>
            </section>
            
        </div>
    )

}

export default Body