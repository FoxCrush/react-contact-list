import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  contactListArr: [
    { name: "Alex", surname: "Tax", number: "123", id: "new_id_1" },
    { name: "Sandy", surname: "Mon", number: "456", id: "new_id_2" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "contactList/addNewContact":
      return {
        contactListArr: [...state.contactListArr, action.payload],
      };
    case "contactList/deleteContact":
      console.log(action.payload, state);
      return {
        contactListArr: state.contactListArr.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
