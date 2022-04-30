import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  return (
    <div className="main">
      <h2>Contact List</h2>
      <Link to="/add">
        <button className="ui blue button">Add Contact</button>
      </Link>
      <div className="ui celled list">
        {props.contacts.map((contact) => (
          <ContactCard
            contact={contact}
            key={contact.id}
            clickHander={deleteContactHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
