import { React } from "react";
import { connect } from "react-redux";
import * as actions from "redux/actions";
import uuid from "react-uuid";
import { NavLink } from "react-router-dom";
import styles from "styles/ContactList.module.css";

function ContactsView({
  value,
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
        {value.map((contact) => (
          <li key={uuid()}>
            <NavLink to="/contact">
              <p>{contact.name}</p>
              <p>{contact.surname}</p>
              <p>{contact.number}</p>
            </NavLink>
            <button type="button" onClick={deleteContactBtnHandler}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { value: state.contactListArr };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewContactBtnHandler: () => dispatch(actions.addNewContactBtnHandler(5)),
    deleteContactBtnHandler: () => dispatch(actions.deleteContactBtnHandler(5)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
