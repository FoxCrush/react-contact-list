import { connect } from "react-redux";
import styles from "styles/ContactListItem.module.css";
import { React } from "react";
import { NavLink, useParams } from "react-router-dom";

function ContactListItemView(state) {
  const { contactId } = useParams();
  const currentContact = state.contactListArr.find(
    (contact) => contact.id === contactId
  );
  return (
    <div className={styles.container}>
      <h2>Contact list item view</h2>
      <form>
        <label>
          Name
          <input type="text" defaultValue={currentContact.name}></input>
        </label>
        <label>
          Surname
          <input type="text" defaultValue={currentContact.surname}></input>
        </label>
        <label>
          Number
          <input type="number" defaultValue={currentContact.number}></input>
        </label>
      </form>
      <NavLink to="/react-contact-list">Back to contact list</NavLink>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contactListArr: state.contactListArr,
  };
};

export default connect(mapStateToProps)(ContactListItemView);

// export default ContactListItemView;

// class ContactListItemView extends Component {
//   state = {};
//   componentDidMount() {
//     const contactId = this.props.match.params;
//     console.log(this.parentElement);
//     console.log("~ contactId", contactId);
//   }
//   render() {
//     return (
//       <div className={styles.container}>
//         <h2>Contact list item view</h2>
//         <form>
//           <label>
//             Name
//             <input type="text" defaultValue={"contact name"}></input>
//           </label>
//           <label>
//             Surname
//             <input type="text" defaultValue={"contact surname"}></input>
//           </label>
//           <label>
//             Number
//             <input type="number" defaultValue={"123456"}></input>
//           </label>
//         </form>
//         <NavLink to="/react-contact-list">Back to contact list</NavLink>
//       </div>
//     );
//   }
// }
