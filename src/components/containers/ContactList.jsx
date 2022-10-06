import React, {useState} from 'react';
import '../../styles/contactComponent.scss'
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/ContactComponent';
import ContactForm from '../pure/forms/ContactForm';


const ContactList = () => {
    const contact1 = new Contact('Miguel Angel', 'Jurado', '687851354', true)
    const contact2 = new Contact('Antonio', 'Rodriguez', '6878513474', true)
    const contact3 = new Contact('Bernardo', 'Antón', '687781354', true)

    // Estado del componente
    const [contacts, setContacts] = useState([contact1, contact2, contact3]);

    const contactConnected = (contact) => {
        const index = contacts.indexOf(contact);
        const newContacts = [...contacts];
        newContacts[index].connected = !newContacts[index].connected;
        setContacts(newContacts);
    }
    /**
    * Function that deletes a contact
    */
    const removeContact = (contact) => {
        const index = contacts.indexOf(contact);
        const newContacts = [...contacts];
        newContacts.splice(index,1);
        setContacts(newContacts);
    }
    /**
    * Function that add a contact
    */
   const addContact = (contact) => {
        const newContacts = [...contacts];
        newContacts.push(contact);
        setContacts(newContacts);
   }

    return (
        <div className='container'>
            <div className='card'>
                {/* Header (title) */}
                <div className='card-header'>
                    <h1>Contacts List</h1>
                </div>
                {/* Card Body (Contact List) */}
                <div className='card-body contact-scrooll body-card'>
                    <table className='table table-dark table-striped'>
                        <thead>
                            <tr>
                                <th scope='col'> First Name </th>
                                <th scope='col'> Last Name </th>
                                <th scope='col'> Number Telephone </th>
                                <th scope='col'> Connected </th>
                                <th scope='col'>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, index) => {
                                return( 
                                    <ContactComponent 
                                        key={index}
                                        contact={contact}
                                        contactConnected={contactConnected}
                                        removeContact={removeContact}
                                    />
                                )
                            })}
                        </tbody>
                    </table>   
                </div>
            </div>
            <ContactForm add={addContact}/>
        </div>
    );
};

export default ContactList;
