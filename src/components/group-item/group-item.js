import React, { Component, Fragment } from 'react';
import './group-item.css';

class GroupItem extends Component {

    state = {
        id: this.props.id,
        name: this.props.name
    }


    delete = () => {
        console.log(this.state.id + 'to delete')
        var contact = {
            id: this.state.id,
            name: this.state.name
        }
        this.props.removeGroup(contact);
    }

    edit = () => {
        var contact = {
            id: this.state.id,
            name: this.state.name,
            number: this.state.number,
            image: this.state.image,
            gender: this.props.gender,
            isFavorite: this.state.isFavorite
        }
        console.log('to edit '+contact)
        this.props.editContact(contact);
    }

    render() {
        const { name } = this.state

      
        return (
            <Fragment>
                <div className="contcat-card-cont col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="card contact-card">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                        </div>
                        <div className="card-body card-footer">
                            <div>
                                <i onClick={this.delete} className="trash fas fa-trash"></i> <i onClick={this.edit} className="edit fas fa-edit"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default GroupItem;