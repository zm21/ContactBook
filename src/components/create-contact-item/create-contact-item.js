import React, { Component, Fragment } from 'react';
import './create-contact-item.css';

class CreateContactItem extends Component {

  render() {
    return (
      <Fragment>
        <div className="container">

          <form>
            <h2>Add contact</h2>
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">PhoneNumber</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phone" />
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Image</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter image" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default CreateContactItem;