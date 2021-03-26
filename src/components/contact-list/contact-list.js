import React, {Fragment} from 'react';
import ContactItem from '../contact-item/contact-item';
import { v4 as uuidv4 } from 'uuid';

const ContactList = ({contacts, removeContact, updateContact, editContact, groups}) => {
    var ContactsTemplateVisible
    var ContactsTemplateHidden
    if(contacts !== null)
    {
        var visibleContacts = contacts.filter(function(contact) {
            return contact.isHidden===false;
          });

        var hiddenContacts = contacts.filter(function(contact) {
            return contact.isHidden===true;
          });

          ContactsTemplateVisible = visibleContacts.map(item=>
            {
                return (
                <ContactItem removeContact={removeContact} updateContact={updateContact} editContact={editContact}
                    key={uuidv4()}
                    id={item.id}
                    name={item.name}
                    number={item.number}
                    gender={item.gender}
                    image={item.image}
                    isFavorite={item.isFavorite}
                    groupId={item.groupId}
                    groups={groups}
                    isHidden={item.isHidden}
                ></ContactItem>)
            })

            ContactsTemplateHidden = hiddenContacts.map(item=>
                {
                    return (
                    <ContactItem removeContact={removeContact} updateContact={updateContact} editContact={editContact}
                        key={uuidv4()}
                        id={item.id}
                        name={item.name}
                        number={item.number}
                        gender={item.gender}
                        image={item.image}
                        isFavorite={item.isFavorite}
                        groupId={item.groupId}
                        groups={groups}
                        isHidden={item.isHidden}
                    ></ContactItem>)
                })
    }
    return(
        <Fragment>
            <div className="row">
                {ContactsTemplateVisible} {/*contactItem collection */}
            </div>
            <h3>Hidden contacts:</h3>
            <div className="row">
                {ContactsTemplateHidden}
            </div>
        </Fragment>
    )
}

// class ContactList extends Comment{
//     state ={
//         contacts: this.props.contacts
//     }
// }

export default ContactList