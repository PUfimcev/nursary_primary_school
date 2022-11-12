import React, {useRef } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../../images/Logo.png';
import './style.css';
import './media.css';

function BurgerForm(props) {
    const { setBurgerForm, setButton } = props.burgerBtn;
    const burgerForm = useRef();

    function removeFormBurger() {
        const burgerFormRemove = burgerForm.current;
        burgerFormRemove.style.animation = 'toright 0.5s ease-in-out  1 forwards';
        setTimeout(()=>{setBurgerForm(false);}, 1000);
        return;
    }

    function pageTop(){
        let mainElem = document.querySelector('.main__content');
        mainElem.scrollIntoView({ block: "start"})
    }

    function showHeaderForm() {
        setButton(true);
        return;
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

    function removeHover() {     

        let elemLi = document.querySelector('.hover');
        if(!elemLi) return;
        elemLi.className = '';
    }

	return (
        <div ref={burgerForm} className='burger__btn'>
		    <div  className="header__burger__btn" >
                <Link className="header__logo" onClick={()=>{ pageTop(); removeFormBurger();}} to="/nursary_primary_school/"><img src={Logo} alt="Company" /></Link>
                 <button className="form__btn__remove" onClick={removeFormBurger}></button>
            </div>
            <div className="burger__links">

            <nav className="burger__nav" >
            <ul>
            <li ><Link id="home"  className="burger__nav__link nursary_primary_school" onClick={()=>{pageTop(); removeFormBurger();}} onMouseOver={hover} to="/nursary_primary_school/">Главная</Link></li>
                <li>
                    <Link className="burger__nav__link about" onClick={hover} >О нас</Link>
                    <ul >
                        <li><Link onClick={()=>{ removeHover(); pageTop(); removeFormBurger();}} to="/about/about/">O нас</Link></li>
                        <li><Link onClick={()=>{ removeHover(); pageTop(); removeFormBurger();}} to="/about/staff/">Наш коллектив</Link></li>
                        <li><Link onClick={()=>{ removeHover(); pageTop(); removeFormBurger();}} to="/about/events/">Наши мероприятия</Link></li>
                    </ul>
                </li>
                <li >
                    <Link className="burger__nav__link nursary" onClick={hover} >Сад</Link>
                    <ul >
                        <li><Link onClick={()=>{ removeHover(); pageTop(); removeFormBurger();}} to="/nursary/junior/">Младшая группа (3-4 года)</Link></li>
                        <li><Link onClick={()=>{  removeHover(); pageTop(); removeFormBurger();}} to="/nursary/middle/">Средняя группа (4-5 лет)</Link></li>
                        <li><Link onClick={()=>{ removeHover(); pageTop(); removeFormBurger();}} to="/nursary/senior/">Старшая группа (5-6 лет)</Link></li>
                    </ul>
                </li>
                <li >
                    <Link className="burger__nav__link school" onClick={hover} >Школа</Link>
                    <ul >
                        <li><Link onClick={()=>{removeHover(); pageTop(); removeFormBurger();}} to="/school/preparatory/">Подготовка к школе (6-7 лет)</Link></li>
                        <li><Link onClick={()=>{ removeHover(); pageTop(); removeFormBurger();}} to="/school/primary/">Начальная школа (1-4 класс)</Link></li>
                    </ul>
                </li>
                <li><Link className="burger__nav__link prices"  onClick={()=>{ pageTop(); removeFormBurger();}} onMouseOver={hover} to="/prices/">Цены</Link></li>
                <li><Link className="burger__nav__link contacts"  onClick={()=>{  pageTop(); removeFormBurger();}} onMouseOver={hover} to="/contacts/">Контакты</Link></li>
            </ul>
            </nav>

            <div className="contact-data__socials">
                    <a rel="noopener noreferrer" target="_blank" href='https://www.instagram.com/' title='instagram' >{/* empty a */}</a>
                    <a rel="noopener noreferrer" target="_blank" href='https://ru-ru.facebook.com/' title='facebook' >{/* empty a */}</a>
            </div>
            </div>
            <button className="header__btn" onClick={()=>{ showHeaderForm(); removeFormBurger();}}>Заказать звонок</button>
            <div className="burger__btn__address_elem">
                <span>г. Минск, ул. Купревича, 7</span>
                <a href='tel:+375296082087'><span>+375 (29) 608-20-87</span></a>
                <a href='mailto:info@ksvschool.by' title='mail' >info@ksvschool.by</a>
                <span>УНП 190790556</span>
            </div>
        </div> 
	);
}

export default BurgerForm;