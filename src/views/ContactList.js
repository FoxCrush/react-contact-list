import { React } from "react";
import { connect } from "react-redux";
import * as actions from "redux/contactList/contactList-actions";
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
            <NavLink to="/contact">
              <p>{contact.name}</p>
              <p>{contact.surname}</p>
              <p>{contact.number}</p>
            </NavLink>
            <button
              type="button"
              onClick={() => {
                console.log("btn pressed", contact.id);
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

const mapStateToProps = (state) => {
  return { contactListArr: state.contactListArr };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewContactBtnHandler: () => dispatch(actions.addNewContactBtnHandler()),
    deleteContactBtnHandler: () => dispatch(actions.deleteContactBtnHandler(5)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
