import React, { Component, Fragment } from 'react';
import './App';
import NavbarItem from './components/navbar-item/navbar-item'
import CreateContactItem from './components/create-contact-item/create-contact-item'
import ContactList from './components/contact-list/contact-list';
import NoteList from './components/note-list/note-list';
class App extends Component {

  state = {
    isEditMode: false,
    statusDelete: false,
    contacts: [
      {
        id: 1,
        name: "Mykola Zaiets",
        number: "+38 (096) 52 88 026",
        image: 21,
        gender: "men",
        isFavorite: true
      },
      {
        id: 2,
        name: "Andrii Riabii",
        number: "+38 (095) 41 66 765",
        image: 5,
        gender: "men",
        isFavorite: false
      },
      {
        id: 3,
        name: "Vitaliy Oleksiychuk",
        number: "+38 (097) 77 88 999",
        image: 70,
        gender: "men",
        isFavorite: false
      },
      {
        id: 4,
        name: "Vika Zakotyuk",
        number: "+38 (097) 77 77 777",
        image: 21,
        gender: "women",
        isFavorite: false
      },
    ],
    notes: [
      {
        id: 1,
        title: "First note",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: 2,
        title: "Second note",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: 3,
        title: "Third note",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: 4,
        title: "Fourth note",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: 5,
        title: "Fifth note",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }
    ],
    contactToEdit: {
      id: 0,
      name: '',
      number: '',
      image: 0,
      gender: '',
      isFavorite: false
    }
  }

  addContact = (newContact) => {
    var tempContacts = [];
    if (this.state.contacts != null) {
      tempContacts = this.state.contacts.slice();//coppy array
    }
    newContact.id = tempContacts.length;
    tempContacts.push(newContact);
    this.setState({
      contacts: tempContacts
    })
  }

  updateContact = (contact) => {
    var tempContacts = [];
    if (this.state.contacts != null) {
        tempContacts = this.state.contacts.slice();
        var foundIndex = tempContacts.findIndex(x => x.id == contact.id);

        tempContacts.splice(foundIndex, 1, contact);
        this.setState({
         contacts: tempContacts,
          isEditMode:false,
          contactToEdit: {
          id: 0,
          name: '',
          number: '',
          image: 0,
          gender: '', 
          isFavorite: false
        }
      })
    }

    console.log('update: ')
    console.log(tempContacts)


    

  }

  removeContact = (contact) => {
    var tempContacts = [];
    console.log('removing: ');
    console.log(contact);
    if (this.state.contacts != null) {
      var foundIndex = this.state.contacts.findIndex(x => x.id == contact.id);
      this.state.contacts.splice(foundIndex, 1);
      this.setState({
        statusDelete: true
      });
    }
  }

  editContact = (contact) => {
    this.setState({
      isEditMode: true,
      contactToEdit: contact
    })
  }



  render() {
    console.log('=========')
    console.log(this.state)
    console.log('=========')
    return (
      <Fragment>
        <NavbarItem></NavbarItem>

        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-2 col-md-2 col-sm-12">
              <CreateContactItem updateContact={this.updateContact} isEditMode={this.state.isEditMode} contactToEdit={this.state.contactToEdit} addContact={this.addContact}></CreateContactItem>
            </div>

            <div className="col-lg-10 col-md-10 col-sm-12">
              <div className="row">
                <ContactList editContact={this.editContact} removeContact={this.removeContact} updateContact={this.updateContact} contacts={this.state.contacts}></ContactList>
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