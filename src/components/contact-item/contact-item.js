import React, { Component, Fragment } from 'react';
import './contact-item.css';
import { v4 as uuidv4 } from 'uuid';

class ContactItem extends Component {

    state = {
        id: this.props.id,
        name: this.props.name,
        number: this.props.number,
        image: this.props.image,
        gender: this.props.gender,
        isFavorite: this.props.isFavorite,
        groupId: this.props.groupId,
        grous: this.props.groups,
        isHidden: this.props.isHidden
    }

    setRandomImage = () => {
        var randmomAvatar = Math.floor(Math.random() * Math.floor(99));
        var contact = {
            id: this.state.id,
            name: this.state.name,
            number: this.state.number,
            image: randmomAvatar,
            gender: this.state.gender,
            isFavorite: this.state.isFavorite,
            groupId: this.state.groupId,
            isHidden: this.state.isHidden
        }
        this.props.updateContact(contact);
        this.setState({
            image: randmomAvatar
        })
    }

    setIsFavorite = () => {

        var contact = {
            id: this.state.id,
            name: this.state.name,
            number: this.state.number,
            image: this.state.image,
            gender: this.state.gender,
            isFavorite: !this.state.isFavorite,
            groupId: this.state.groupId,
            isHidden: this.state.isHidden
        }
        this.props.updateContact(contact);

        this.setState({
            isFavorite: !this.state.isFavorite
        })
    }

    delete = () => {
        console.log(this.state.id + 'to delete')
        var contact = {
            id: this.state.id,
            name: this.state.name,
            number: this.state.number,
            image: this.state.image,
            gender: this.props.gender,
            isFavorite: this.state.isFavorite,
            groupId: this.state.groupId,
            isHidden: this.state.isHidden
        }
        this.props.removeContact(contact);
    }

    edit = () => {
        var contact = {
            id: this.state.id,
            name: this.state.name,
            number: this.state.number,
            image: this.state.image,
            gender: this.props.gender,
            isFavorite: this.state.isFavorite,
            groupId: this.state.groupId,
            isHidden: this.state.isHidden
        }
        console.log('to edit ' + contact)
        this.props.editContact(contact);
    }

    selectGroup = (e) => {
        // this.setState({ groupId: e.target.value })
            var contact = {
                id: this.state.id,
                name: this.state.name,
                number: this.state.number,
                image: this.state.image,
                gender: this.state.gender,
                isFavorite: this.state.isFavorite,
                groupId: e.target.value,
                isHidden: this.state.isHidden
            }
            this.props.updateContact(contact);
            this.setState({
                groupId:parseInt(e.target.value)
            })
    }

    removeFromGroup = () =>{
        var contact = {
            id: this.state.id,
            name: this.state.name,
            number: this.state.number,
            image: this.state.image,
            gender: this.state.gender,
            isFavorite: this.state.isFavorite,
            groupId: 0,
            isHidden: this.state.isHidden
        }
        this.props.updateContact(contact);
    }

    hideUnhide = () =>{
        var contact = {
            id: this.state.id,
            name: this.state.name,
            number: this.state.number,
            image: this.state.image,
            gender: this.state.gender,
            isFavorite: this.state.isFavorite,
            groupId: this.state.groupId,
            isHidden: !this.state.isHidden
        }
        this.props.updateContact(contact);
    }

    render() {
        const { name, number, image, gender, isFavorite } = this.state
        const image_URL = `https://randomuser.me/api/portraits/${gender}/${image}.jpg`
        var star = `far fa-star star`
        if (isFavorite == true) {
            star = `fa fa-star star`
        }

        var groups = this.props.groups.slice();
        var groupId = this.props.groupId
        if (groupId == 0)
            groups.splice(0, 0, { id: 0, name: "Select group" })

        var eyeClass = "eye fas fa-eye-slash"
        if(this.state.isHidden===true)
            eyeClass="eye far fa-eye"

        return (
            <Fragment>
                <div className="contcat-card-cont col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card contact-card">
                        <img className="card-img-top" src={image_URL} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{number}</li>
                            <li className="list-group-item">
                                <select className="form-control" value={this.state.groupId}
                                    onChange={this.selectGroup}>
                                    {groups.map((group) => <option key={uuidv4()} value={group.id}>{group.name}</option>)}
                                </select>
                            </li>
                        </ul>
                        
                            <button onClick={this.setRandomImage} className="btn btn-info rect-btn">Random image</button>
                       
                        <div className=" card-footer">
                            <div className="card-buttons">
                                <i className={star} onClick={this.setIsFavorite}></i> 
                                <i onClick={this.delete} className="trash fas fa-trash"></i> 
                                <i onClick={this.edit} className="edit fas fa-edit"></i>
                                <i onClick={this.removeFromGroup} className="minus far fa-minus-square"></i>
                                <i onClick={this.hideUnhide} className={eyeClass}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ContactItem;