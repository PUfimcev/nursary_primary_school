import React, { useContext } from 'react';
import Footer_logo from '../images/Logo2.png';
import { Link } from "react-router-dom";
import ContactFormFooter from '../components/elements/contactsFormFooter/ContactFormFooter';
import NavFooter from '../components/elements/navFooter/NavFooter';
import { DataContacts } from '../App';

function Footer() {
    
    const { setHomeActive,  setAboutActive, setNursaryActive,  setSchoolActive, setPricesActive,  setContactsActive, setScrollY  } = useContext(DataContacts);

    function pageTop(){
        let mainElem = document.querySelector('.main__content');
        mainElem.scrollIntoView({ block: "start"});
        setScrollY(0);
    }

    return (
        <footer className="footer">
            <div className='container'>
                <div className='footer__content'>
                    <div className="footer__logo" >
                        <Link onClick={()=>{setHomeActive(true); setAboutActive(false); setNursaryActive(false); setSchoolActive(false); setPricesActive(false); setContactsActive(false); setPricesActive(false); pageTop();}} className="footer__logo" to="/nursary_primary_school/"><img src={Footer_logo} alt="Company" /></Link>
                    </div>
                    <NavFooter/>
                    <div className="footer__connect_form">
                        <ContactFormFooter/>
                        </div>
                    <div className="footer__contact-data">
                        <div className="contact-data__icon-pnone"><a href='tel:+375296082087'title='phone' >{/* empty a */}</a></div>
                        <div className="contact-data__elems">
                            <div className="address_elem">
                                <span>г. Минск, ул. Купревича, 7</span>
                                <span>+375 (29) 608-20-87</span>
                                <a href='mailto:info@ksvschool.by' title='mail' >info@ksvschool.by</a>
                            <span>УНП 190790556</span>
                            </div>
                            <div className="contact-data__socials">
                                <a rel="noopener noreferrer" target="_blank" href='https://www.instagram.com/' title='instagram' >{/* empty a */}</a>
                                <a rel="noopener noreferrer" target="_blank" href='https://ru-ru.facebook.com/' title='facebook' >{/* empty a */}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;