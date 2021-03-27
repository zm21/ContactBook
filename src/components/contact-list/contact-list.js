import React, { Fragment, Component } from 'react';
import ContactItem from '../contact-item/contact-item';
import { v4 as uuidv4 } from 'uuid';
import ContactFilterItem from '../contact-filter/contact-filter'


class ContactList extends Component {
    state = {
        filters: []
    }

    addFilter = (groupId) => {
        var tempFilters= [];
        if (this.state.filters != null) {
            tempFilters = this.state.filters.slice();
        }
        tempFilters.push(groupId);
        this.setState({
            filters: tempFilters
        })
    }

    removeFilter = (groupId) =>{
        var tempFilters = [];
        if (this.state.filters != null) {
            tempFilters = this.state.filters.slice();
            var foundIndex = tempFilters.findIndex(x => x == groupId);
            tempFilters.splice(foundIndex, 1);
            this.setState({
                filters: tempFilters
            });
          }
    }    

    render() {
        var ContactsTemplateVisible
        var ContactsTemplateHidden
        var contacts
        var filters = this.state.filters.slice();
        if(filters!=null && filters.length>0){
            contacts = this.props.contacts.filter(function (contact) {
                return filters.includes(contact.groupId.toString());
            })
        }
        else{
            contacts = this.props.contacts.slice()
        }
         
        
        if (this.props.contacts !== null) {
            var visibleContacts = contacts.filter(function (contact) {
                return contact.isHidden === false;
            });

            var hiddenContacts = contacts.filter(function (contact) {
                return contact.isHidden === true;
            });

            ContactsTemplateVisible = visibleContacts.map(item => {
                return (
                    <ContactItem removeContact={this.props.removeContact} updateContact={this.props.updateContact} editContact={this.props.editContact}
                        key={uuidv4()}
                        id={item.id}
                        name={item.name}
                        number={item.number}
                        gender={item.gender}
                        image={item.image}
                        isFavorite={item.isFavorite}
                        groupId={item.groupId}
                        groups={this.props.groups}
                        isHidden={item.isHidden}
                    ></ContactItem>)
            })

            ContactsTemplateHidden = hiddenContacts.map(item => {
                return (
                    <ContactItem removeContact={this.props.removeContact} updateContact={this.props.updateContact} editContact={this.props.editContact}
                        key={uuidv4()}
                        id={item.id}
                        name={item.name}
                        number={item.number}
                        gender={item.gender}
                        image={item.image}
                        isFavorite={item.isFavorite}
                        groupId={item.groupId}
                        groups={this.props.groups}
                        isHidden={item.isHidden}
                    ></ContactItem>)
            })
        }
        return (
            <Fragment>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                        <ContactFilterItem addFilter={this.addFilter} removeFilter={this.removeFilter} groups={this.props.groups}></ContactFilterItem>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12 col-12">
                        <div className="row">
                            {ContactsTemplateVisible} {/*contactItem collection */}
                        </div>
                        <h3>Hidden contacts:</h3>
                        <div className="row">
                            {ContactsTemplateHidden}
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default ContactList

