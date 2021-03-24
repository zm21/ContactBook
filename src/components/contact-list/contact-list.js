import React, {Fragment} from 'react';
import ContactItem from '../contact-item/contact-item';
import { v4 as uuidv4 } from 'uuid';

const ContactList = ({contacts, removeContact, updateContact, editContact}) => {
    var ContactsTemplate
    if(contacts !== null)
    {
        ContactsTemplate = contacts.map(item=>
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
                ></ContactItem>)
            })
    }
    return(
        <Fragment>
            <div className="row">
                {ContactsTemplate} {/*contactItem collection */}
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