import { createStore } from "redux";

const initialState = {
  contactListArr: [
    { name: "Alex", surname: "Tax", number: "123" },
    { name: "Sandy", surname: "Mon", number: "456" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "contactList/addNewContact":
      return state;
    case "contactList/deleteContact":
      return state;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
