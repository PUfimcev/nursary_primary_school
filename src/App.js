import { 
	BrowserRouter as Router
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export const DataContacts = React.createContext();

function App() {

const [dataContact, setDataContact] =  useState([]);
// eslint-disable-next-line
const [getDataContact, setgetDataContact] =  useState([]);
const [dataApply, setDataApply] =  useState([]);
const [getDataApply, setGetDataApply] =  useState([]);

useEffect(() => {
  if (dataContact.length > 0) {
    (async ()=>{
      const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...dataContact})
      };
    let response = await fetch('http://localhost:3000/contacts', requestOptions);
    let data = await response.json();
    setgetDataContact(data);
    setDataContact([]);
    })();
  }
},[dataContact]);

useEffect(() => {
    fetch('http://localhost:3000/contacts')
    .then(response => response.json())
    .then(data => {
      setgetDataContact(data);
    });
},[dataContact]);

console.log(getDataContact);
console.log(getDataApply);

useEffect(() => {
    if (dataApply.length > 0) {
       const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...dataApply})
    };
    fetch('http://localhost:3000/applications', requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setDataApply([]);
    });
  }
},[dataApply]);

useEffect(() => {
  fetch('http://localhost:3000/applications')
  .then(response => response.json())
  .then(data => {
    setGetDataApply(data);
  });
},[dataApply]);

  return (
    <>
    <DataContacts.Provider value={{dataContact, setDataContact, dataApply, setDataApply }}>
        <Router>
            <Header/>
            <Main/>
            <Footer/>
		    </Router>
    </DataContacts.Provider>
    </>
  );
}

export default App;
