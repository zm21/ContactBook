import React, { Component, Fragment } from 'react';
import './create-contact-item.css';

class CreateContactItem extends Component {

  render() {
    return (
      <Fragment>
          <form>
            <div class="form-group">
              <label>Contact name</label>
              <input type="text" class="form-control" placeholder="Enter name" />
            </div>
            <div class="form-group">
              <label>Contact number</label>
              <input type="text" class="form-control" placeholder="Enter number" />
            </div>
            <div class="form-group">
              <label>Contact number image</label>
              <input type="number" max="100" min="0" class="form-control" placeholder="Enter image number" />
            </div>
            <div class="form-group">
              <label>Contact gender</label>
              <select value="Select gender" className="form-control">
                  <option value="women">Women</option>
                  <option value="men">Men</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
      </Fragment>
    )
  }
}

export default CreateContactItem;