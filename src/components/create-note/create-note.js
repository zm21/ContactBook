import React, { Component, Fragment } from 'react';

class CreateNoteItem extends Component {

  state = {
    id: 0,
    title: '',
    text: '',
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
      var note = {
        id: 0,
        title: this.state.title,
        text: this.state.text,
      };
        this.props.addNote(note);
    }
    else {
      this.setState({
        ErrorMessage: "Please, Enter all fields!"
      })
    }
  }

  isValid = () => {
    if (this.state.title === '' || this.state.text === '') {
      return false;
    }
    else {
      return true;
    }

  }


  render() {
    console.log(this.state)
    
    const { ErrorMessage} = this.state
      return (
        <Fragment>
          <h2>Create new note:</h2>
          <form onSubmit={this.submitForm}>
            <div className="form-group">
              <label>Title*</label>
              <input type="text" className="form-control" name="title" onChange={this.handlerChangeInput} placeholder="Enter title" />
            </div>
            <div className="form-group">
              <label>Text*</label>
              <input type="text" className  ="form-control" name="text" onChange={this.handlerChangeInput} placeholder="Enter text" />
            </div>
            <p className="text-danger">{ErrorMessage}</p>
            <button type="submit" className="btn btn-primary">Create note</button>
          </form>
        </Fragment>
      )
    
  }
}

export default CreateNoteItem;