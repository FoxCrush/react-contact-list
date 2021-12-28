import { React } from "react";
import { NavLink } from "react-router-dom";

const ContactListItemView = () => {
  return (
    <div>
      <h2>Contact list item view</h2>
      <NavLink to="/react-contact-list">Back to contact list</NavLink>
    </div>
  );
};

export default ContactListItemView;
