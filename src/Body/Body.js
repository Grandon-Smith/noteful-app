// import { render } from '@testing-library/react'
import React from 'react'
import './Body.css'
import Folders from '../Folders/Folders'
import Notes from '../Notes/Notes'
import AddNote from '../AddNote/AddNote'
import AddFolder from '../AddFolder/AddFolder'
import GoBack from '../GoBack/GoBack'


function Body(props) {

    

    return (
        <div className="group">
            <nav className="folder-list">
                <Folders 
                    data={props.data}
                    folderClick={props.folderClick}
                />
                
                <AddFolder
                    data={props.data}/>

                <GoBack
                    data={props.data}
                    backClick={props.backClick}/>
            </nav>
            <section className="note-list">
                <Notes 
                    data={props.data}
                    noteClick={props.noteClick}/>
                <div>
                    {props.data.selected.noteContent}
                </div>
                <AddNote/>
            </section>
            
        </div>
    )

}

export default Body