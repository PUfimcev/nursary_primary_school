import React, {  useContext, useRef, useEffect } from "react";

import { Link } from "react-router-dom";
import { DataContacts } from '../App'; 

function Nav() {
    const { homeActive, setHomeActive, aboutActive, setAboutActive,nursaryActive, setNursaryActive, schoolActive, setSchoolActive,pricesActive, setPricesActive, contactsActive, setContactsActive  } = useContext(DataContacts);

    const home = useRef();
    const about = useRef();
    const nursary = useRef();
    const school = useRef();
    const prices = useRef();
    const contacts = useRef();

    useEffect(() => {
        let pathBrows = window.location.pathname.split(/\/*\//)[1];
        switch(pathBrows){
            case 'nursary_primary_school':
                setHomeActive(true);
            break;
            case 'about':
                setAboutActive(true);
            break;
            case 'nursary':
                setNursaryActive(true);
            break;
            case 'school':
                setSchoolActive(true);
            break;
            case 'prices':
                setPricesActive(true);
            break;
            case 'contacts':
                setContactsActive(true);
            break;
            default:
            break;

        }
    }, []);
    
    function removeHover() {     

        let elemLi = document.querySelector('.hover');
        if(!elemLi) return;
        elemLi.className = '';
    }

    function hover(event){
        let elem = event.target;
        let elemLi = elem.closest('li');
        if(!elemLi) return;

        const linkLi = document.querySelectorAll('.hover');
        if (!linkLi) return;
        
        linkLi.forEach(elem => {
            elem.classList.remove('hover');
        });
        elemLi.className = 'hover';
    }

    function pageTop(){
        let mainElem = document.querySelector('.main__content');
        mainElem.scrollIntoView({ block: "start"})
    }
    
	return (
		<nav className="nav">
            <ul>
                <li ><Link ref={home}   className={homeActive ? "nav__link nursary_primary_school active" : "navlink nursary_primary_school"} onClick={()=>{setHomeActive(true); setAboutActive(false); setNursaryActive(false); setSchoolActive(false); setPricesActive(false); setContactsActive(false); setPricesActive(false); pageTop();}} onMouseOver={hover} to="/nursary_primary_school/">Главная</Link></li> 
                <li>
                    <Link ref={about} className={aboutActive ? "nav__link about active" : "nav__link about"} onMouseOver={hover} >О нас</Link>
                    <ul>
                        <li><Link onClick={()=>{ setAboutActive(true); setHomeActive(false);  setNursaryActive(false);setSchoolActive(false);  setPricesActive(false); setContactsActive(false); pageTop();removeHover();}} to="/about/about/">O нас</Link></li>
                        <li><Link onClick={()=>{ setAboutActive(true);  setHomeActive(false); setNursaryActive(false); setSchoolActive(false); setPricesActive(false); setContactsActive(false); pageTop();removeHover();}} to="/about/staff/">Наш коллектив</Link></li>
                        <li><Link onClick={()=>{ setAboutActive(true); setHomeActive(false);  setNursaryActive(false); setSchoolActive(false); setPricesActive(false); setContactsActive(false); pageTop();removeHover();}} to="/about/events/">Наши мероприятия</Link></li>
                    </ul>
                </li>
                <li>
                    <Link ref={nursary} className={nursaryActive ? "nav__link nursary active" : "nav__link nursary"} onMouseOver={hover}>Сад</Link>
                    <ul>
                        <li><Link onClick={()=>{setNursaryActive(true); setHomeActive(false); setAboutActive(false); setSchoolActive(false); setPricesActive(false); setContactsActive(false); removeHover(); pageTop();}} to="/nursary/junior/">Младшая группа (3-4 года)</Link></li>
                        <li><Link onClick={()=>{setNursaryActive(true); setHomeActive(false); setAboutActive(false); setSchoolActive(false); setPricesActive(false); setContactsActive(false); removeHover();pageTop();}} to="/nursary/middle/">Средняя группа (4-5 лет)</Link></li>
                        <li><Link onClick={()=>{setNursaryActive(true); setHomeActive(false); setAboutActive(false); setSchoolActive(false); setPricesActive(false); setContactsActive(false); removeHover();pageTop();}} to="/nursary/senior/">Старшая группа (5-6 лет)</Link></li>
                    </ul>
                </li>
                <li>
                    <Link ref={school} className={schoolActive ? "nav__link school active" : "nav__link school"} onMouseOver={hover}>Школа</Link>
                    <ul>
                        <li><Link onClick={()=>{setSchoolActive(true); setHomeActive(false); setAboutActive(false); setNursaryActive(false); setPricesActive(false); setContactsActive(false); removeHover(); pageTop();}} to="/school/preparatory/">Подготовка к школе (6-7 лет)</Link></li>
                        <li><Link onClick={()=>{setSchoolActive(true); setAboutActive(false); setNursaryActive(false); setPricesActive(false); setContactsActive(false); removeHover(); pageTop();}} to="/school/primary/">Начальная школа (1-4 класс)</Link></li>
                    </ul>
                </li>
                <li><Link ref={prices} className={pricesActive ? "nav__link prices active" : "nav__link prices"}  onClick={()=>{setPricesActive(true); setHomeActive(false); setAboutActive(false); setNursaryActive(false); setSchoolActive(false); setContactsActive(false); pageTop();}} onMouseOver={hover} to="/prices/">Цены</Link></li>
                <li><Link ref={contacts} className={contactsActive ? "nav__link contacts active" : "nav__link contacts"}  onClick={()=>{setContactsActive(true); setHomeActive(false); setAboutActive(false); setNursaryActive(false); setSchoolActive(false); setPricesActive(false); pageTop();}} onMouseOver={hover} to={"/contacts/"}>Контакты</Link></li>
            </ul>
        </nav>
	);
}

export default Nav;