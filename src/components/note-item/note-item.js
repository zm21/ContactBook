import React, { Component, Fragment } from 'react';
import './note-item.css';

class NoteItem extends Component {

    state = {
        id: this.props.id,
        title: this.props.title,
        text: this.props.text,
    }

    delete = () => {
        console.log(this.state.id + 'to delete')
        var note = {
            id: this.state.id,
            title: this.state.title,
            text: this.state.text     
        }
        this.props.removeNote(note);
    }

    render() {
        const { title, text } = this.state
        return (
            <Fragment>
                <div className="note-card-cont col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="card contact-card">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{text}</p>
                        </div>
                        <div className="card-footer">
                        <i onClick={this.delete} className="trash fas fa-trash"></i> 
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default NoteItem;