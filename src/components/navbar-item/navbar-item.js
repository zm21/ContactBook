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
      // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      //   <div className="container">
      //     <Link className="navbar-brand" to="#">ContactBook</Link>
      //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      //       <span className="navbar-toggler-icon"></span>
      //     </button>
      //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      //       <div className="navbar-nav">
      //         <Link className="nav-item nav-link active" to="/">Home</Link>
      //         <Link className="nav-item nav-link" to="/contacts">Contacts</Link>
      //         <Link className="nav-item nav-link " to="/favorite-contacts">Favorite contacts</Link>
      //         <Link className="nav-item nav-link" to="/add-contact">Add new contact</Link>
      //         <Link className="nav-item nav-link " to="/notes">Notes</Link>
      //         <Link className="nav-item nav-link " to="/groups">Groups</Link>
      //         <Link className="nav-item nav-link " to="/add-group">Add new group</Link>
      //       </div>
      //       <form onSubmit={this.submitForm} className="form-inline my-2 my-lg-0">
      //         <input className="form-control mr-sm-2" name="query" type="search" onChange={this.handlerChangeInput} placeholder="Search" aria-label="Search" />
      //         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      //       </form>
      //     </div>
      //   </div>
      //   </nav>


      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">ContactBook</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              <Link className="nav-item nav-link active" to="/">Home</Link>
              <li className="nav-item dropdown">
                <Link className="nav-link " to="/contacts" data-toggle="dropdown">Contacts</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/favorite-contacts">Favorite contacts</Link></li>
                  <li><Link className="dropdown-item" to="/add-contact">Add new contact</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link  " to="/groups" data-toggle="dropdown">Groups</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/add-group">Add new group</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link " to="/notes" data-toggle="dropdown">Notes</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/add-note">Add new note</Link></li>
                </ul>
              </li>
            </ul>
          </div>
          <form onSubmit={this.submitForm} className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" name="query" type="search" onChange={this.handlerChangeInput} placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>



    )
  }
}

export default NavbarItem;