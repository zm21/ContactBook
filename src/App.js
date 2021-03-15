import React, { Component, Fragment } from 'react';
import './App';
import ContactItem from './components/contact-item/contact-item'
import NavbarItem from './components/navbar-item/navbar-item'
import CreateContactItem from './components/create-contact-item/create-contact-item'
class App extends Component {

  render() {
    return (
      <Fragment>
        <NavbarItem></NavbarItem>
        
        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-3 col-md-3 col-sm-12">
              <CreateContactItem></CreateContactItem>
            </div>

            <div className="col-lg-9 col-md-9 col-sm-12">
              <div className="row">

                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <ContactItem> </ContactItem>
                </div>
                
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <ContactItem> </ContactItem>
                </div>

              </div> 
            </div>

          </div>
        </div>
      </Fragment>
    )
  }
}

export default App;