import React, { Component, Fragment } from 'react';
import './create-contact-item.css';

class CreateContactItem extends Component {

  state = {
    isFirstRender: true,
    id: 0,
    name: '',
    number: '',
    image: 0,
    gender: 'women',
    ErrorMessage: ''
  }

  handlerChangeInput = (e) => {
    var target = e.target;
    this.setState({
      [target.name]: target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log("Form submit")

    if (this.isValid()) {
      this.setState({
        ErrorMessage: ""
      })
      var Contact = {
        id: 0,
        name: this.state.name,
        number: this.state.number,
        image: this.state.image,
        gender: this.state.gender,
        isFavorite: false,
        groupId: 0,
        isHidden: false
      };
      if (this.props.isEditMode) {
        Contact.isFavorite = this.props.contactToEdit.isFavorite
        Contact.id = this.props.contactToEdit.id
        Contact.groupId = this.props.contactToEdit.groupId
        Contact.isHidden = this.props.contactToEdit.isHidden
        this.props.updateContact(Contact);
      }
      else
        this.props.addContact(Contact);
    }
    else {
      this.setState({
        ErrorMessage: "Please, Enter all fields!"
      })
    }
  }

  isValid = () => {
    if (this.state.name === '' || this.state.number === '') {
      return false;
    }
    else {
      return true;
    }

  }


  render() {
    console.log(this.state)
    
    const { name, number, image, gender } = this.props.contactToEdit
    var header = 'Add new contact:'
    var btnHeader = 'Add contact'
    if (this.props.isEditMode === true) {
      btnHeader = 'Save changes'
      header = 'Edit contact: '
    }
    const { ErrorMessage, isFirstRender} = this.state
      return (
        <Fragment>
          <h2>{header}</h2>
          <form onSubmit={this.submitForm}>
            <div className="form-group">
              <label>Contact name*</label>
              <input type="text" className="form-control" name="name" onChange={this.handlerChangeInput} placeholder={name} />
            </div>
            <div className="form-group">
              <label>Contact number*</label>
              <input type="text" className="form-control" name="number" onChange={this.handlerChangeInput} placeholder={number} />
            </div>
            <div className="form-group">
              <label>Contact number image</label>
              <input type="number" max="99" min="0" name="image" onChange={this.handlerChangeInput} className="form-control" placeholder={image} />
            </div>
            <div className="form-group">
              <label>Contact gender</label>
              <select name="gender" onChange={this.handlerChangeInput} className="form-control">
                <option value="women">Women</option>
                <option value="men">Men</option>
              </select>
            </div>
            <p className="text-danger">{ErrorMessage}</p>
            <button type="submit" className="btn btn-primary">{btnHeader}</button>
          </form>
        </Fragment>
      )
    
  }
}

export default CreateContactItem;