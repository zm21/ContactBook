import React, { Component, Fragment } from 'react';
import './contact-item.css';

class ContactItem extends Component {

    state = {
        name: this.props.name,
        number: this.props.number,
        image: this.props.image,
        gender: this.props.gender,
        isFavorite: this.props.isFavorite
    }

    setRandomImage = () => {
        var randmomAvatar = Math.floor(Math.random()*Math.floor(99));
        this.setState({
            image: randmomAvatar
        })
    }

    setIsFavorite = () => {
        this.setState({
            isFavorite : !this.state.isFavorite
        })
    }

    render() {
        const { name, number, image, gender, isFavorite } = this.state
        const image_URL = `https://randomuser.me/api/portraits/${gender}/${image}.jpg`
        var star = `far fa-star star`
        if(isFavorite==true)
        {
            star=`far fa-star fa star`
        }
        return (
            <Fragment>
                <div className="contcat-card-cont col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="card contact-card">
                        <img className="card-img-top" src={image_URL} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{number}</li>
                        </ul>
                    <div className="card-body card-footer">
                        <button onClick={this.setRandomImage} className="btn btn-info">Random image</button>
                        <i className={star} onClick={this.setIsFavorite}></i>
                    </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ContactItem;