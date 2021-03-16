import React, { Component, Fragment } from 'react';
import './App';
import NavbarItem from './components/navbar-item/navbar-item'
import CreateContactItem from './components/create-contact-item/create-contact-item'
import ContactList from './components/contact-list/contact-list';
import NoteList from './components/note-list/note-list';
class App extends Component {

  state = {
    contacts: [
      {
        name: "Mykola Zaiets",
        number: "+38 (096) 52 88 026",
        image: 21,
        gender: "men",
        isFavorite: true
      },
      {
        name: "Andrii Riabii",
        number: "+38 (095) 41 66 765",
        image: 5,
        gender: "men",
        isFavorite: false
      },
      {
        name: "Vitaliy Oleksiychuk",
        number: "+38 (097) 77 88 999",
        image: 70,
        gender: "men",
        isFavorite: false
      },
      {
        name: "Vika Zakotyuk",
        number: "+38 (097) 77 77 777",
        image: 21,
        gender: "women",
        isFavorite: false
      },
    ],
    notes:[
      {
        title: "First note",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        title: "Second note",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        title: "Third note",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        title: "Fourth note",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        title: "Fifth note",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }
    ]
  }

  render() {
    return (
      <Fragment>
        <NavbarItem></NavbarItem>

        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-2 col-md-2 col-sm-12">
              <h2>Add new contact:</h2>
              <CreateContactItem></CreateContactItem>
            </div>

            <div className="col-lg-10 col-md-10 col-sm-12">
              <div className="row">
                <ContactList contacts={this.state.contacts}></ContactList>
              </div>
            </div>

          </div>

          <h2>Notes:</h2>
          <div className="row">
            <NoteList notes={this.state.notes}></NoteList>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App;