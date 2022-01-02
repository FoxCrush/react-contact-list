import initialState from "data/Initial-contact-list";

const ContactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contactList/addNewContact":
      return {
        contactListArr: [...state.contactListArr, action.payload],
      };
    case "contactList/deleteContact":
      return {
        contactListArr: state.contactListArr.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default ContactListReducer;
