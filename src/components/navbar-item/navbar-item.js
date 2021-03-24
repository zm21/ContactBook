import React, { Component, Fragment, Navbar, Brand } from 'react';
import './navbar-item.css';
import { Link, Redirect } from 'react-router-dom'

class NavbarItem extends Component {

  state = {
    query: '',
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
    this.props.search(this.state.query);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="#">ContactBook</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/">Home</Link>
              <Link className="nav-item nav-link" to="/contacts">Contacts</Link>
              <Link className="nav-item nav-link " to="/favorite-contacts">Favorite contacts</Link>
              <Link className="nav-item nav-link" to="/add-contact">Add new contact</Link>
              <Link className="nav-item nav-link " to="/notes">Notes</Link>
            </div>
            <form onSubmit={this.submitForm} className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" name="query" type="search" onChange={this.handlerChangeInput} placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavbarItem;