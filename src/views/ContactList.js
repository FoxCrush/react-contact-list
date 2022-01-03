import { React } from "react";
import { connect } from "react-redux";
import * as actions from "redux/contactList/components/ContactList/contactList-actions";
import { NavLink } from "react-router-dom";
import styles from "styles/ContactList.module.css";

function ContactsView({
  contactListArr,
  deleteContactBtnHandler,
  addNewContactBtnHandler,
}) {
  return (
    <div>
      <h2 className={styles.contactList}>Contact List</h2>
      <button type="button" onClick={addNewContactBtnHandler}>
        Add contact
      </button>
      <ul>
        {contactListArr.map((contact) => (
          <li key={contact.id}>
            <NavLink to={`/contact/${contact.id}`}>
              <p>{contact.name}</p>
              <p>{contact.surname}</p>
              <p>{contact.number}</p>
            </NavLink>
            <button
              type="button"
              onClick={() => {
                deleteContactBtnHandler(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

//throw state from store as props
const mapStateToProps = (state) => {
  return { contactListArr: state.contactListArr };
};
//throw functions from actions as props
const mapDispatchToProps = (dispatch) => {
  return {
    addNewContactBtnHandler: () => dispatch(actions.addNewContactBtnHandler()),
    deleteContactBtnHandler: (value) =>
      dispatch(actions.deleteContactBtnHandler(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
