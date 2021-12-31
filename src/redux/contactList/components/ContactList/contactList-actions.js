import uuid from "react-uuid";
import actionTypes from "./contactList-types";

export const addNewContactBtnHandler = () => ({
  type: actionTypes.ADD_NEW_CONTACT,
  payload: {
    id: uuid(),
    name: "Name",
    surname: "Surname",
    number: "Phone number",
  },
});

export const deleteContactBtnHandler = (id) => ({
  type: actionTypes.DELETE_CONTACT,
  payload: id,
});
