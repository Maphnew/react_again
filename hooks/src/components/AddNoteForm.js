import React, {useContext, useState} from 'react';
import NoteContext from '../context/notes-context'
import useMousePosition from '../hooks/useMousePosition'

const AddNoteForm = () => {
    const { dispatch } = useContext(NoteContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const position = useMousePosition()

    const addNote = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_NOTE',
            title,
            body
        })
        setTitle('')
        setBody('')
    }
    return (
        <div>
            <p>Add note {position.x} - {position.y}</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button>add note</button>
            </form>
        </div>
    )
}

export { AddNoteForm as default }