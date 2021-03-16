import React, {Fragment} from 'react';
import ContactItem from '../contact-item/contact-item';

const ContactList = ({contacts}) => {
    var ContactsTemplate
    if(contacts !== null)
    {
        ContactsTemplate = contacts.map(item=>
            {
                return (<ContactItem
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