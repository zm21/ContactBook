import React, { Component, Fragment } from 'react';
import './group-item.css';

class GroupItem extends Component {

    state = {
        id: this.props.id,
        name: this.props.name
    }


    delete = () => {
        console.log(this.state.id + 'to delete')
        var group = {
            id: this.state.id,
            name: this.state.name
        }
        this.props.removeGroup(group);
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
                                <i onClick={this.delete} className="trash fas fa-trash"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default GroupItem;