import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Staff from './pages/Staff';
import Events from './pages/Events';
import Junior from './pages/Junior';
import Middle from './pages/Middle';
import Senior from './pages/Senior';
import Preparatory from './pages/Preparatory';
import Primary from './pages/Primary';
import Prices from './pages/Prices';
import Contacts from './pages/Contacts';
import Anchor from './elements/anchor/Anchor';
import ShowContent from './elements/showContent/PopUpContent';
import Event from './pages/Event';

import Event1_Image_1 from '../images/event1_img1.jpg';
import Event1_Image_2 from '../images/event1_img2.jpg';
import Event1_Image_3 from '../images/event1_img3.jpg';
import Event1_Image_4 from '../images/event1_img4.jpg';

import Event2_Image_1 from '../images/event2_img1.jpg';
import Event2_Image_2 from '../images/event2_img2.jpg';
import Event2_Image_3 from '../images/event2_img3.jpg';
import Event2_Image_4 from '../images/event2_img4.jpg';

export const MainContext = React.createContext();

function Main() {
    const imgListEvent1 = [Event1_Image_1, Event1_Image_2, Event1_Image_3, Event1_Image_4];

    const imgListEvent2 = [Event2_Image_1, Event2_Image_2, Event2_Image_3, Event2_Image_4];
    
    const applyData = [
        { junior: [ {name: 'Сад - младшая группа', title: 'Полдня', time: '8.00 — 14.00', price: '330 $' }, {name: 'Сад - младшая группа', title: 'Полный день', time: '8.00 — 19.00', price: '580 $' }, {name: 'Сад - младшая группа', title: 'Почасовая оплата', time: 'После 14.00', price: '3$ за час' }]},
        { middle: [ {name: 'Сад - средняя группа', title: 'Полдня', time: '8.00 — 14.00', price: '340 $' }, {name: 'Сад - средняя группа', title: 'Полный день', time: '8.00 — 19.00', price: '600 $' }, {name: 'Сад - средняя группа', title: 'Почасовая оплата', time: 'После 14.00', price: '3$ за час' }]},
        { senior: [ {name: 'Сад - старшая группа', title: 'Полдня', time: '8.00 — 14.00', price: '380 $' }, {name: 'Сад - старшая группа', title: 'Полный день', time: '8.00 — 19.00', price: '650 $' }, {name: 'Сад - старшая группа', title: 'Почасовая оплата', time: 'После 14.00', price: '4$ за час' }]},
		{ preparatory: [ {name: 'Подготовительный класс', title: 'Полдня', time: '8.00 — 14.00', price: '372 $' }, {name: 'Подготовительный класс', title: 'Полный день', time: '8.00 — 19.00', price: '590 $' }, {name: 'Подготовительный класс', title: 'Почасовая оплата', time: 'После 14.00', price: '3 $ за час' }]},
        { primary: [ {name: 'Начальная школа', title: 'Полдня', time: '8.00 — 15.00', price: '670 $' }, {name: 'Начальная школа', title: 'День пребывания в школе', time: '8.00 — 12.00', price: '10 $' }]}		
	];


    const displayContent = [
        {video: [{name: 'school_tour', src: 'https://youtu.be/0cfGU-rO9DY', title: '3D тур по школе'}]},
        {pictureEvent1: [{name: 'picture1', href: Event1_Image_1, alt: "Фотографии с масленницы в усадьбе Ильинка"}, {name: 'picture2', href: Event1_Image_2, alt: "Фотографии с масленницы в усадьбе Ильинка"},{name: 'picture3', href: Event1_Image_3, alt: "Фотографии с масленницы в усадьбе Ильинка"},{name: 'picture4', href: Event1_Image_4, alt: "Фотографии с масленницы в усадьбе Ильинка"}]},
        {pictureEvent2: [{name: 'picture1', href: Event2_Image_1, alt: "Фотографии с масленницы в усадьбе Ильинка"}, {name: 'picture2', href: Event2_Image_2, alt: "Фотографии с масленницы в усадьбе Ильинка"},{name: 'picture3', href: Event2_Image_3, alt: "Фотографии с масленницы в усадьбе Ильинка"},{name: 'picture4', href: Event2_Image_4, alt: "Фотографии с масленницы в усадьбе Ильинка"}]}
    ];

    const main = useRef();

    const [button, setButton] = useState(false);
    const [widthMain, setWidthMain] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [createContent, setCreateContent] = useState(false);
    const [nameContent, setNameContent] = useState('');
    const [contentAbout, setContentAbout] = useState('');

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
    },[])

    useEffect(()=>{
        let scroll = window.scrollY;
        setScrollY(scroll);
        let widthElem = main.current.scrollWidth;
        let offsetLeftElem = main.current.offsetLeft;
        if (!widthElem || !offsetLeftElem) return;
        let width = +offsetLeftElem + widthElem + 20;
        setWidthMain(width);
    },[])

    function handleScroll() {
        let scroll = window.scrollY;
        if (!scroll) return;
        setScrollY(scroll);
    }

    function handleResize() {
        let widthElem = main.current.scrollWidth;
        let offsetLeftElem = main.current.offsetLeft;
        if (!widthElem || !offsetLeftElem) return;
        let width = +offsetLeftElem + widthElem + 20;
        setWidthMain(width);
    }

    function pageTop(){
        let mainElem = main.current;
        mainElem.scrollIntoView({behavior:"smooth", block: "start"})
    }

	function hoverOut(){
        const linkLi = document.querySelectorAll('.hover');
        if (!linkLi) return;
        
        linkLi.forEach(elem => {
            elem.classList.remove('hover');
        });
    }

    return (
        <main className="main">
            <div className='container'>
                <MainContext.Provider value={{applyData, button, setButton, nameContent, setNameContent, contentAbout, setContentAbout, setCreateContent,  displayContent, pageTop, imgListEvent1, imgListEvent2}}>
                    <div ref={main} className='main__content' onMouseOver={hoverOut} >
                        <Routes>
					        <Route path="/nursary_primary_school/" element={<Home />} />
					        <Route path="/about/about/" element={<About />} />
					        <Route path="/about/staff/" element={<Staff />} />
					        <Route path="/about/events/" element={<Events />} />
					        <Route path="/nursary/junior/" element={<Junior />} />
					        <Route path="/nursary/middle/" element={<Middle />} />
					        <Route path="/nursary/senior/" element={<Senior />} />
					        <Route path="/school/preparatory/" element={<Preparatory />} />
					        <Route path="/school/primary/" element={<Primary />} />
					        <Route path="/prices/" element={<Prices />} />
					        <Route path="/contacts/" element={<Contacts />} />
                            <Route path="/about/events/:number" element={<Event />} />
				        </Routes>
                        {scrollY > 200 && <Anchor  pageTop = { pageTop } widthMain={ widthMain }/>}
                        {createContent === true && 
                        <ShowContent/>}
                        
                    </div>
                </MainContext.Provider>
            </div>
        </main>
    );
}

export default Main;