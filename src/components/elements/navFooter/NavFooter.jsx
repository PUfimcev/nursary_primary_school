import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContacts } from '../../../App'; 
import './style.css';
import './media.css';

function NavFooter() {

    const { setHomeActive,  setAboutActive,setNursaryActive,  setSchoolActive, setPricesActive, setContactsActive, setScrollY  } = useContext(DataContacts);

    function removeHover() {     

        let elemLi = document.querySelector('.hover');
        if(!elemLi) return;
        elemLi.className = '';
    }

    function hover(event){
        let elem = event.target;
        let elemLi = elem.closest('li');
        if(!elemLi) return;
        if (elemLi.className === 'hover') {
            elemLi.className = '';
        } else {

            const linkLi = document.querySelectorAll('.hover');
            if (!linkLi) return;
            
            linkLi.forEach(elem => {
                elem.classList.remove('hover');
            });
            elemLi.className = 'hover';
        }
    }

    function pageTop(){
        let mainElem = document.querySelector('.main__content');
        mainElem.scrollIntoView({ block: "start"});
        setScrollY(0);
    }
    
    function hoverOut(){
        const linkLi = document.querySelectorAll('.hover');
        if (!linkLi) return;
        
        linkLi.forEach(elem => {
            elem.classList.remove('hover');
        });
    }

	return (
		<nav className="footer__nav" >
            <ul>
            <li ><Link id="home"  className="footer__nav__link nursary_primary_school" onClick={()=>{ setHomeActive(true); setAboutActive(false); setNursaryActive(false); setSchoolActive(false); setPricesActive(false); setContactsActive(false); setPricesActive(false);pageTop();}} onMouseOver={hover} to="/nursary_primary_school/">Главная</Link></li>
                <li>
                    <Link className="footer__nav__link about" onClick={hover} >О нас</Link>
                    <ul onMouseLeave={hoverOut}>
                        <li><Link onClick={()=>{setAboutActive(true); setHomeActive(false);  setNursaryActive(false);setSchoolActive(false);  setPricesActive(false); setContactsActive(false);   removeHover(); pageTop();}} to="/about/about/">O нас</Link></li>
                        <li><Link onClick={()=>{setAboutActive(true); setHomeActive(false);  setNursaryActive(false);setSchoolActive(false);  setPricesActive(false); setContactsActive(false);   removeHover(); pageTop();}} to="/about/staff/">Наш коллектив</Link></li>
                        <li><Link onClick={()=>{setAboutActive(true); setHomeActive(false);  setNursaryActive(false);setSchoolActive(false);  setPricesActive(false); setContactsActive(false);   removeHover(); pageTop();}} to="/about/events/">Наши мероприятия</Link></li>
                    </ul>
                </li>
                <li >
                    <Link className="footer__nav__link nursary" onClick={hover} >Сад</Link>
                    <ul onMouseLeave={hoverOut}>
                        <li><Link onClick={()=>{setNursaryActive(true); setHomeActive(false); setAboutActive(false); setSchoolActive(false); setPricesActive(false); setContactsActive(false);  removeHover(); pageTop();}} to="/nursary/junior/">Младшая группа (3-4 года)</Link></li>
                        <li><Link onClick={()=>{setNursaryActive(true); setHomeActive(false); setAboutActive(false); setSchoolActive(false); setPricesActive(false); setContactsActive(false);  removeHover(); pageTop();}} to="/nursary/middle/">Средняя группа (4-5 лет)</Link></li>
                        <li><Link onClick={()=>{setNursaryActive(true); setHomeActive(false); setAboutActive(false); setSchoolActive(false); setPricesActive(false); setContactsActive(false);  removeHover(); pageTop();}} to="/nursary/senior/">Старшая группа (5-6 лет)</Link></li>
                    </ul>
                </li>
                <li >
                    <Link className="footer__nav__link school" onClick={hover} >Школа</Link>
                    <ul onMouseLeave={hoverOut}>
                        <li><Link onClick={()=>{setSchoolActive(true); setHomeActive(false); setAboutActive(false); setNursaryActive(false); setPricesActive(false); setContactsActive(false); removeHover(); pageTop();}} to="/school/preparatory/">Подготовка к школе (6-7 лет)</Link></li>
                        <li><Link onClick={()=>{setSchoolActive(true); setHomeActive(false); setAboutActive(false); setNursaryActive(false); setPricesActive(false); setContactsActive(false); removeHover(); pageTop();}} to="/school/primary/">Начальная школа (1-4 класс)</Link></li>
                    </ul>
                </li>
                <li><Link className="footer__nav__link prices"  onClick={()=>{setPricesActive(true); setHomeActive(false); setAboutActive(false); setNursaryActive(false); setSchoolActive(false); setContactsActive(false); pageTop();}} onMouseOver={hover} to="/prices/">Цены</Link></li>
                <li><Link className="footer__nav__link contacts"  onClick={()=>{ setContactsActive(true); setHomeActive(false); setAboutActive(false); setNursaryActive(false); setSchoolActive(false); setPricesActive(false); pageTop();}} onMouseOver={hover} to="/contacts/">Контакты</Link></li>
            </ul>
        </nav>
	);
}

export default NavFooter;