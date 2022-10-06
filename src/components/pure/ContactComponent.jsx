import React from 'react';
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class';
import '../../styles/contactComponent.scss'

const ContactComponent = ({contact, contactConnected, removeContact }) => {
    /**
     * Function thats returns icons depending on completion of the task 
     */
    const contactConnectedIcon = () => {
        if (contact.connected) {
            return (<i onClick={() => contactConnected(contact)}
                    className="bi bi-check-circle text-success connected-icon"></i>)
        } else {
            return (<i onClick={() => contactConnected(contact)}
                    className="bi bi-x-circle-fill text-danger connected-icon"></i>)
        }
    }
    
    return (
        <>
            <tr>
                <th> {contact.firstName} </th>
                <th> {contact.lastName} </th>
                <th> {contact.telephone} </th>
                <th>{contactConnectedIcon()}</th>
                <th><i onClick={() => removeContact(contact)} className="bi bi-trash text-white remove-icon"></i></th>
            </tr>
        </>
    );

};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    contactConnected: PropTypes.func.isRequired,
    removeContact: PropTypes.func.isRequired,
}
export default ContactComponent;
