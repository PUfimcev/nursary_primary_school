import React, { useState, useContext } from 'react';
import Nav from './Nav';
import { Link } from "react-router-dom";
import Logo from '../images/Logo.png';

import HeaderFormContacts from './elements/headerContactsForm/HeaderFormContacts';
import { DataContacts } from '../App';
import  BurgerForm  from '../components/elements/burger/BurgerButton';

function Header(props) {

    const { screenWidth } = props.screenWidth;

    const [button, setButton] = useState(false);
    const [burgerForm, setBurgerForm] = useState(false);
    const { setHomeActive,  setAboutActive, setNursaryActive,  setSchoolActive, setPricesActive,  setContactsActive  } = useContext(DataContacts);

    function pageTop(){
        let mainElem = document.querySelector('.main__content');
        mainElem.scrollIntoView({ block: "start"})
    }

    function showHeaderForm() {
        setButton(true);
        return;
    }

    function showBurgerForm() {
        setBurgerForm(true);
        return;
    }

    return (
        <header className="header">
            <div className='container'>
                    <div className='header__content'>

                        <Link className="header__logo" onClick={()=>{setHomeActive(true); setAboutActive(false); setNursaryActive(false); setSchoolActive(false); setPricesActive(false); setContactsActive(false); setPricesActive(false); pageTop();}} to="/nursary_primary_school/"><img src={Logo} alt="Company" />
                        </Link>
                        {screenWidth > 1024 &&  <Nav />}
                        {screenWidth > 425 && <div className="header__phone"><a href='tel:+375296082087'><span>+375 (29) 608-20-87</span></a></div>}
                        {screenWidth > 768 && <button className="header__btn" onClick={ showHeaderForm }>Заказать звонок</button>}
                        {button === true && <HeaderFormContacts button={{ setButton}}/>
                        }
                        {screenWidth < 1025 && <><button onClick={()=>{showBurgerForm();}}className='burger'></button></>}
                        {burgerForm === true && < BurgerForm burgerBtn={{ setBurgerForm, setButton }}/>
                        }
                    </div>
            </div>
    </header>
    );
}

export default Header;