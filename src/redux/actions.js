export const addNewContactBtnHandler = (value) => ({
  type: "contactList/addNewContact",
  payload: value,
});

export const deleteContactBtnHandler = (value) => ({
  type: "contactList/deleteContact",
  payload: value,
});
