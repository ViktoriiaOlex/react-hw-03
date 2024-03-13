import Contact from '../Contact/Contact';


import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={css.contactsList}>
      {contacts.map((contact) => (
        <Contact
          contact={contact}
          key={contact.id}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;