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

export const MainContext = React.createContext();

function Main() {
    const [button, setButton] = useState(false);
    
    const applyData = [






        // { preparatory: [ {title: 'Полдня', time: '8.00 — 14.00', price: '372$' }, {title: 'Полный день', time: '8.00 — 19.00', price: '590$' }, {title: 'Почасовая оплата', time: 'После 14.00', price: '3$ за час' }]},
		{ preparatory: [ {name: 'Подготовительный класс', title: 'Полдня', time: '8.00 — 14.00', price: '372 $' }, {name: 'Подготовительный класс', title: 'Полный день', time: '8.00 — 19.00', price: '590 $' }, {name: 'Подготовительный класс', title: 'Почасовая оплата', time: 'После 14.00', price: '3 $ за час' }]},
        { primary: [ {name: 'Начальная школа', title: 'Полдня', time: '8.00 — 15.00', price: '670 $' }, {name: 'Начальная школа', title: 'День пребывания в школе', time: '8.00 — 12.00', price: '10 $' }]}		
	];


    const main = useRef();
    const [widthMain, setWidthMain] = useState(0);
    const [scrollY, setScrollY] = useState(0);



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
                <MainContext.Provider value={{applyData, button, setButton}}>
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
				        </Routes>
                        {scrollY > 200 && <Anchor  main = { main } widthMain={ widthMain }/>}
                    </div>
                </MainContext.Provider>
            </div>
        </main>
    );
}

export default Main;