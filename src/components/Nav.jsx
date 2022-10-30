import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav() {

    const [link, setLink] = useState('');

    useEffect(() => {
        let pathBrows = window.location.pathname.split(/\/*\//)[1];
        let linkPage = link;

        if (linkPage === '' || linkPage === null) {

            if (pathBrows === 'nursary_primary_school') {
                linkPage = document.querySelector(`nav a[href="/nursary_primary_school/"]`);
                linkPage.classList.add('active');
            } else {
                linkPage = document.querySelector(`.nav__link.${pathBrows}`);
                linkPage.classList.add('active');
            } 
        }

    }, [link]);
    
    function currentPage(event) {     
        
        let elem = event.target;
        if (!elem) return;
        setLink(elem);

        let elemTmp = elem.href.split(/\/*\//)[2];
        elem = document.querySelector(`.nav__link.${elemTmp}`);

        const linkPages = document.querySelectorAll('.nav__link');
        if (!linkPages) return;
        
        linkPages.forEach(elem => {
            elem.classList.remove('active');
        });
        elem.classList.add('active');

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
    
	return (
		<nav className="nav">
            <ul>
                <li><Link className="nav__link nursary_primary_school" onClick={currentPage} onMouseOver={hover} to="/nursary_primary_school/">Главная</Link></li>
                <li>
                    <Link className="nav__link about" onMouseOver={hover} >О нас</Link>
                    <ul>
                        <li><Link onClick={currentPage} to="/about/about/">O нас</Link></li>
                        <li><Link onClick={currentPage} to="/about/staff/">Наш коллектив</Link></li>
                        <li><Link onClick={currentPage} to="/about/events/">Наши мероприятия</Link></li>
                    </ul>
                </li>
                <li>
                    <Link className="nav__link nursary" onMouseOver={hover}>Сад</Link>
                    <ul>
                        <li><Link onClick={currentPage} to="/nursary/junior/">Младшая группа (3-4 года)</Link></li>
                        <li><Link onClick={currentPage} to="/nursary/middle/">Средняя группа (4-5 лет)</Link></li>
                        <li><Link onClick={currentPage} to="/nursary/senior/">Старшая группа (5-6 лет)</Link></li>
                    </ul>
                </li>
                <li>
                    <Link className="nav__link school" onMouseOver={hover}>Школа</Link>
                    <ul>
                        <li><Link onClick={currentPage} to="/school/preparatory/">Подготовка к школе (6-7 лет)</Link></li>
                        <li><Link onClick={currentPage} to="/school/primary/">Начальная школа (1-4 класс)</Link></li>
                    </ul>
                </li>
                <li><Link className="nav__link prices"  onClick={currentPage} onMouseOver={hover} to="/prices/">Цены</Link></li>
                <li><Link className="nav__link contacts"  onClick={currentPage} onMouseOver={hover} to="/contacts/">Контакты</Link></li>
            </ul>
        </nav>
	);
}

export default Nav;