import React, { Component, Fragment } from 'react';
import NoteItem from '../note-item/note-item';
import { v4 as uuidv4 } from 'uuid';


class NoteList extends Component {
    state = {
        notes: this.props.notes
    }

    render() {
        const { notes } = this.state
        var NotesTemplate
        if (notes !== null) {
            NotesTemplate = notes.map(item => {
                return (<NoteItem
                    key={uuidv4()}
                    title={item.title}
                    text={item.text}
                ></NoteItem>)
            })
        }
        return (
            <Fragment>
                {NotesTemplate} {/*contactItem collection */}
            </Fragment>
        )
    }
}

export default NoteList