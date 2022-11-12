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

const [homeActive, setHomeActive] = useState(false);
const [aboutActive, setAboutActive] = useState(false);
const [nursaryActive, setNursaryActive] = useState(false);
const [schoolActive, setSchoolActive] = useState(false);
const [pricesActive, setPricesActive] = useState(false);
const [contactsActive, setContactsActive] = useState(false);

const [screenWidth, setScreenWidth] = useState(0);

useEffect(()=>{
  window.addEventListener("resize", handleScreenWidth);
},[])

useEffect(()=>{
  const screenWidth = window.screen.width;
  if (!screenWidth) return;
  setScreenWidth(screenWidth);
},[])

function handleScreenWidth() {
  const screenWidth = window.screen.width;
  if (!screenWidth) return;
  setScreenWidth(screenWidth);
}

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
    if (data) {
      setgetDataContact(data);
      setDataContact([]);
    }
    })();
  }
},[dataContact]);

useEffect(() => {
  if (getDataContact.length === 0 || getDataContact === [])  {

    fetch('http://localhost:3000/contacts')
    .then(response => response.json())
    .then(data => {
      if (data) {setgetDataContact(data);}
    });
  }
},[dataContact, getDataContact]);

// console.log(getDataContact);
// console.log(getDataApply);

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
      if (data) {
        console.log(data);
        setDataApply([]);
      }
    });
  }
},[dataApply]);

useEffect(() => {
  if (getDataApply.length === 0 || getDataApply === []) {
    fetch('http://localhost:3000/applications')
    .then(response => response.json())
    .then(data => {
      if (data) {setGetDataApply(data);}
    });
  }
},[dataApply, getDataApply]);

  return (
    <>
    <DataContacts.Provider value={{dataContact, setDataContact, dataApply, setDataApply, homeActive, setHomeActive, aboutActive, setAboutActive,nursaryActive, setNursaryActive, schoolActive, setSchoolActive,pricesActive, setPricesActive, contactsActive, setContactsActive, screenWidth }}>
        <Router>
            <Header screenWidth={{screenWidth}}/>
            <Main/>
            <Footer/>
		    </Router>
    </DataContacts.Provider>
    </>
  );
}

export default App;
