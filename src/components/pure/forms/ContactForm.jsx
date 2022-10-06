import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const ContactForm = ({add}) => {

    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const telephoneRef = useRef('');
    

    const addContact = (e) => {
        e.preventDefault();
        const newContact = new Contact(
            firstNameRef.current.value,
            lastNameRef.current.value,
            telephoneRef.current.value,
            false
        )
        add(newContact);
    }

    return (
        <div>
            <form onSubmit={addContact}>
                <div>
                    <input
                    ref={firstNameRef}
                    id='inputFirstName'
                    type="text"
                    className='mt-4 form-control-lg'
                    placeholder='First Name'
                    required 
                    autoFocus
                    />
                    <input
                    ref={lastNameRef}
                    id='inputLastName'
                    type="text"
                    className='my-4 ms-2 form-control-lg'
                    placeholder='Last Name'
                    required 
                    />
                    <input
                    ref={telephoneRef}
                    id='inputTelephone'
                    type="text"
                    className='my-4 ms-2 form-control-lg'
                    placeholder='Number Phone'
                    required
                    />
                </div>
                <div>
                    <button 
                    type='submit'
                    className='btn btn-success btn-lg'
                    >
                        Add Contact
                    </button>
                </div>
            </form>
        </div>
    );
};


ContactForm.propTypes = {
    add: PropTypes.func.isRequired
};


export default ContactForm;
