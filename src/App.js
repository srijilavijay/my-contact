import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";

function App() {

  const [contacts, setContacts] = useState([]);

  const formSub = (data) => {
    //console.log(data);
    setContacts([...contacts, data]);
  }
    //delete contact
   
    const deleteContact = (id) => {

      let newContact = contacts.filter((singleContact) => {
        return singleContact.id !== id;
      });
      setContacts(newContact);
    
  };

  const favToggle = (id) => {

    let updatedContact = contacts.map((singleContact) => {
      return singleContact.id === id
      ? {...singleContact, fav: !singleContact.fav}
      : singleContact;
    });
    setContacts(updatedContact);
  
};

  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home formSub={formSub} contacts={contacts} deleteContact={deleteContact} favToggle={favToggle}/>}
        />
        <Route path="/Favourite" element={<Favourite contacts={contacts} deleteContact={deleteContact} favToggle={favToggle} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
