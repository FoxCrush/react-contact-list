import uuid from "react-uuid";

export const addNewContactBtnHandler = () => ({
  type: "contactList/addNewContact",
  payload: {
    id: uuid(),
    name: "Name",
    surname: "Surname",
    number: "Phone number",
  },
});

export const deleteContactBtnHandler = (value) => ({
  type: "contactList/deleteContact",
  payload: value,
});
