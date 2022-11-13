import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import { DataContacts } from '../../App';
// import { MainContext } from '../Main';

function Events() {
	const {  setScrollY  } = useContext(DataContacts);

	// const {  setScrollY } = useContext(MainContext);

	useEffect(()=>{
		setScrollY(0);
	}, [])

	function pageTop(){
        let mainElem = document.querySelector('.main__content');
        mainElem.scrollIntoView({ block: "start"})
    }

	return (
		<><div className="page__events">
			<p className="page__name">KJV / О нас / Наши мероприятия</p>
			<h3 className="page__events_title">наши мероприятия</h3>
			<div className="events__list">
				<div className="events__item">
					<div className="events__item__photo event1">
						<div className="events__item_title"><span>Веселье и пляски В прекрасной усадьбе «Ильинка».</span></div>
					</div>
					<div className="events__item__link" >
						<Link  className="link__inDetails" onClick={pageTop} to="/about/events/1"><span>Cмотреть больше</span><span></span><span className="link__inDetails_arrow"></span></Link>
					</div>
				</div>
				<div className="events__item">
					<div className="events__item__photo event2">
						<div className="events__item_title"><span>Поздравление Мам С 8 Марта</span></div>
					</div>
					<div className="events__item__link" >
						<Link className="link__inDetails" onClick={pageTop} to="/about/events/2"><span>Cмотреть больше</span><span></span><span className="link__inDetails_arrow"></span></Link>
					</div>
				</div>
				</div>
			
			</div>
		</>
	);
}

export default Events;