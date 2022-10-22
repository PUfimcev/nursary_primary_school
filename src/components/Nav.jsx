import { useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
    useEffect(() => {
        let pathBrows = window.location.pathname.split(/\/*\//)[1];
        let linkPage = null;
        // console.log(pathBrows);
        if (!linkPage) {
            if (pathBrows === '' || pathBrows === 'nursary_primary_school') {
                linkPage = document.querySelector(`nav a[href="/nursary_primary_school/"]`);
                linkPage.classList.add('active');
            } else {
                linkPage = document.querySelector(`nav a[href="/${pathBrows}/"]`);
                linkPage.classList.add('active');
            }
        }
    });
    
    function currentPage(event) {
        let elem = event.target;

        // console.log(elem.currentTarget);
        const linkPages = document.querySelectorAll('.nav__link');
        if (!linkPages) return;
        
        linkPages.forEach(elem => {
            elem.classList.remove('active');
        });
        elem.classList.add('active');
    }
    
	return (
		<nav className="nav">
            <ul>
                <li><Link className="nav__link" onClick={currentPage} to="/nursary_primary_school/">Главная</Link></li>
                <li>
                    <Link onClick={currentPage} to="/about/">О нас</Link>
                    <ul>
                        <Link to="/about/staff/">Наш коллектив</Link>
                        <Link to="/about/events/">Наши мероприятия</Link>
                    </ul>
                </li>
                <li>
                    <Link className="nav__link" onClick={currentPage} to="/nursary/">Сад</Link>
                    <ul>
                        <Link to="/nursary/junior/">Младшая группа (3-4 года)</Link>
                        <Link to="/nursary/middle/">Средняя группа (4-5 лет)</Link>
                        <Link to="/nursary/senior/">Старшая группа (5-6 лет)</Link>
                    </ul>
                </li>
                <li>
                    <Link className="nav__link" onClick={currentPage} to="/school/">Школа</Link>
                    <ul>
                        <Link to="/school/preparatory/">Подготовка к школе (6-7 лет)</Link>
                        <Link to="/school/primary/">Начальная школа (1-4 класс)</Link>
                    </ul>
                </li>
                <li><Link className="nav__link"  onClick={currentPage} to="/prices/">Цены</Link></li>
                <li><Link className="nav__link"  onClick={currentPage} to="/contacts/">Контакты</Link></li>
            </ul>
        </nav>
	);
}

export default Nav;