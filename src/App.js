import React, { Component, Fragment } from 'react';
import './App';
import NavbarItem from './components/navbar-item/navbar-item'
import CreateContactItem from './components/create-contact-item/create-contact-item'
import ContactList from './components/contact-list/contact-list';
import NoteList from './components/note-list/note-list';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from './components/home/home'
import Page404 from './components/page404/page404'
import Test from './components/test/test'
import GroupList from './components/group-list/group-list';
import GroupCreate from './components/group-create/group-create';
import CreateNoteItem from './components/create-note/create-note';
import { v4 as uuidv4 } from 'uuid';
import { push } from 'connected-react-router';



class App extends Component {

  state = {
    searchQuery: '',
    isSearch: false,
    isEditMode: false,
    statusDelete: false,
    contacts: [
      {
        id: 1,
        name: "Mykola Zaiets",
        number: "+38 (096) 52 88 026",
        image: 21,
        gender: "men",
        isFavorite: true,
        groupId: 0,
        isHidden: false
      },
      {
        id: 2,
        name: "Andrii Riabii",
        number: "+38 (095) 41 66 765",
        image: 5,
        gender: "men",
        isFavorite: false,
        groupId: 1,
        isHidden: false
      },
      {
        id: 3,
        name: "Vitaliy Oleksiychuk",
        number: "+38 (097) 77 88 999",
        image: 70,
        gender: "men",
        isFavorite: false,
        groupId: 1,
        isHidden: false
      },
      {
        id: 4,
        name: "Vika Zakotyuk",
        number: "+38 (097) 77 77 777",
        image: 21,
        gender: "women",
        isFavorite: false,
        groupId: 0,
        isHidden: false
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
    groups: [
      {
        id: 1,
        name: "test"
      }
    ],
    contactToEdit: {
      id: 0,
      name: '',
      number: '',
      image: 0,
      gender: '',
      isFavorite: false,
      groupId: 0,
      isHidden: false 
    },
  }

  URL_Contacts = "https://contactbook-5ecdd-default-rtdb.firebaseio.com/contacts.json"
  URL_Notes = "https://contactbook-5ecdd-default-rtdb.firebaseio.com/contacts.json"

  getContact() {
    fetch(this.URL_Contacts, { method: "GET" })
      .then(data => {
        return data.json();
      })
      .then(contacts => {
        console.log("contacts from firebase: ", contacts)
        this.setState({
          contacts: contacts
        })
      })
      .catch(error => {
        console.log("Error: ", error)
      })
  }

  getNotes() {
    fetch(this.URL_Notes, { method: "GET" })
      .then(data => {
        return data.json();
      })
      .then(notes => {
        console.log("notes from firebase: ", notes)
        this.setState({
          notes: notes
        })
      })
      .catch(error => {
        console.log("Error: ", error)
      })
  }



  addContact = (newContact) => {
    var tempContacts = [];
    if (this.state.contacts != null) {
      tempContacts = this.state.contacts.slice();//coppy array
    }
    newContact.id = uuidv4();
    tempContacts.push(newContact);
    this.setState({
      contacts: tempContacts
    })
    // this.saveChanges(tempContacts, this.URL_Contacts);

   
  }

  addGroup = (newGroup) => {
    var tempGroups = [];
    if (this.state.groups != null) {
      tempGroups = this.state.groups.slice();
    }
    newGroup.id = uuidv4();
    tempGroups.push(newGroup);


    this.setState({
      groups: tempGroups
    })
  }

  addNote = (newNote) => {
    var tempNotes = [];
    if (this.state.notes != null) {
      tempNotes = this.state.notes.slice();
    }
    newNote.id = uuidv4();
    tempNotes.push(newNote);


    this.setState({
      notes: tempNotes
    })
  }

  saveChanges(collection, URL) {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": 'application/json'
      },
      body: JSON.stringify({ 'collection': collection })
    })
      .then(data => {
        console.log("data from firebase: ", data)
      })
      .catch(error => {
        console.log("Error from firebase: ", error)
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
        isEditMode: false,
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

  removeNote = (note) => {
    console.log('removing: ');
    console.log(note);
    if (this.state.notes != null) {
      var foundIndex = this.state.notes.findIndex(x => x.id == note.id);
      this.state.notes.splice(foundIndex, 1);
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

  search = (search) => {
    this.setState({
      searchQuery: search,
      isSearch: true
    })
  }

  removeGroup = (group) => {
    if (this.state.groups != null) {
      if (this.state.contacts != null) {
        var newContacts = this.state.contacts.filter(function(contact) {
          return contact.groupId!=group.id;
        });
        var foundIndex = this.state.groups.findIndex(x => x.id == group.id);
        this.state.groups.splice(foundIndex, 1);
        this.setState({
          statusDelete: true,
          contacts: newContacts
        });
      }
    }

  }


  componentDidMount() {
    //this.getContact();
  }

  render() {
    console.log('=========')
    console.log(this.state)
    console.log('=========')
    var favorite_contacts;
    if (this.state.contacts != null) {

      favorite_contacts = this.state.contacts.filter(obj => {
        return obj.isFavorite === true
      })
    }

    console.log('search: ' + this.state.searchQuery)
    if (this.state.isSearch === true) {
      this.state.isSearch = false;
      push('/contacts')
    }
    var contacts;
    if (this.state.contacts != null) {
      contacts = this.state.contacts.filter(obj => {
        return obj.name.includes(this.state.searchQuery) || obj.number.includes(this.state.searchQuery)
      })
      this.state.searchQuery = ''
    }

    return (
      <Fragment>
        <Router>
          <NavbarItem search={this.search}></NavbarItem>

          <div className="container">


            <Switch>

              <Route
                path="/"
                exact
                render={() => <Home></Home>}
              ></Route>

              <Route
                path="/contacts"
                exact
                render={() => <ContactList groups={this.state.groups} editContact={this.editContact} removeContact={this.removeContact} updateContact={this.updateContact} contacts={contacts}></ContactList>}
              ></Route>


              <Route
                path="/groups"
                exact
                render={() => <GroupList removeGroup={this.removeGroup} editContact={this.editContact} removeContact={this.removeContact} updateContact={this.updateContact} groups={this.state.groups}></GroupList>}
              ></Route>

              <Route
                path="/favorite-contacts"
                exact
                render={() => <ContactList groups={this.state.groups} editContact={this.editContact} removeContact={this.removeContact} updateContact={this.updateContact} contacts={favorite_contacts}></ContactList>}
              ></Route>

              <Route
                path="/add-contact"
                exact
                render={() => <CreateContactItem updateContact={this.updateContact} isEditMode={this.state.isEditMode} contactToEdit={this.state.contactToEdit} addContact={this.addContact}></CreateContactItem>}
              ></Route>


              <Route
                path="/add-group"
                exact
                render={() => <GroupCreate addGroup={this.addGroup}></GroupCreate>}
              ></Route>

              <Route
                path="/notes"
                exact
                render={() => <NoteList removeNote={this.removeNote} notes={this.state.notes}></NoteList>}
              ></Route>

              <Route
                path="/add-note"
                exact
                render={() => <CreateNoteItem addNote={this.addNote}></CreateNoteItem>}
              ></Route>

              <Route
                path="/test/:id"
                component={Test}
              ></Route>


              <Route
                path="*"
                render={() => <Page404></Page404>}
              ></Route>

              {this.state.isRedirect && <Redirect to="/contacts" />}

            </Switch>

          </div>

        </Router>

      </Fragment>
    )
  }
}

export default App;