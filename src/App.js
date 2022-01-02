import { Route, Routes } from "react-router-dom";
import ContactsView from "views/ContactList";
import ContactListItemView from "views/ContactListItemView";
import NotFoundPage from "views/NotFoundPage";
import "./App.css";

const App = () => (
  <>
    <Routes>
      <Route path="/react-contact-list" element={<ContactsView />} />
      <Route path="/contact/:contactId" element={<ContactListItemView />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);

export default App;
