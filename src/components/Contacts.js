import React from 'react';

const Contacts = ({ contact }) => (
    <div>
        <ul>
            {Object.keys(contact).map(key => <li key={key}>{`${key}: ${contact[key]}`}</li>)}
        </ul>    
    </div>
)

export default Contacts;