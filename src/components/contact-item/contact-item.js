import React, { Component, Fragment } from 'react';
import './contact-item.css';

class ContactItem extends Component {

    state = {
        name: "Mykola Zaiets",
        number: "+38 (096) 52 88 026",
        image: "https://cdn.dribbble.com/users/5275935/screenshots/11304128/media/7436b926cd31564c6c2fab3130479cd1.jpg?compress=1&resize=400x300"
    }

    render() {
        const { name, number, image } = this.state
        return (
            <Fragment>
                <div className="contcat-card-cont">

                <div className="card contact-card">
                <img className="card-img-top" src={image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{number}</li>
                    </ul>
                </div>
                </div>

            </Fragment>
        )
    }
}

export default ContactItem;