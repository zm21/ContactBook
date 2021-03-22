import React, {Fragment} from 'react';
import ContactItem from '../contact-item/contact-item';

const ContactList = ({contacts, removeContact, updateContact}) => {
    var ContactsTemplate
    if(contacts !== null)
    {
        ContactsTemplate = contacts.map(item=>
            {
                return (<ContactItem  removeContact={removeContact} updateContact={updateContact}
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
           {ContactsTemplate} {/*contactItem collection */}
        </Fragment>
    )
}

// class ContactList extends Comment{
//     state ={
//         contacts: this.props.contacts
//     }
// }

export default ContactList