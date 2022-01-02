import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ContactListReducer from "redux/contactList/components/ContactList/contactList-reducer";

const rootReducer = ContactListReducer;

const store = createStore(rootReducer, composeWithDevTools());

export default store;
