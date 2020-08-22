import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

// function createCard(contact) {
//   return (
// <Card
//   name={contact.name}
//   img={contact.imgURL}
//   tel={contact.phone}
//   email={contact.email}
// />
//   );
// }

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://avatars2.githubusercontent.com/u/24975326?s=460&u=95470c58edf65201755a40424c894d8b6e56b24c&v=4" />
      {contacts.map((contact) => (
        <Card
          name={contact.name}
          img={contact.imgURL}
          tel={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
