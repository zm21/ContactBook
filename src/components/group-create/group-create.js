import React, { Component, Fragment } from 'react';
import './group-create.css';

class GroupCreate extends Component {

  state = {
    id: 0,
    name: '',
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
      var group = {
        id: 0,
        name: this.state.name,
      };
        this.props.addGroup(group);
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
    
    var header = 'Add new group:'
    var btnHeader = 'Add group'
    if (this.props.isEditMode === true) {
      btnHeader = 'Save changes'
      header = 'Edit group: '
    }
    const { ErrorMessage } = this.state
      return (
        <Fragment>
          <h2>{header}</h2>
          <form onSubmit={this.submitForm}>
            <div className="form-group">
              <label>Group name*</label>
              <input type="text" className="form-control" name="name" onChange={this.handlerChangeInput} placeholder="Group name" />
            </div>
            <p className="text-danger">{ErrorMessage}</p>
            <button type="submit" className="btn btn-primary">{btnHeader}</button>
          </form>
        </Fragment>
      )
    
  }
}

export default GroupCreate;