import ContactForm from '../elements/contactsForm/ContactForm';
import GoogleMap from '../../images/map_preloder.png'; 
import React, { useState } from 'react';

function Contacts() {

	const [isLoading, setLoading] = useState(true);

	function handleOnLoad() {
		setLoading(false);
	}

	function Preloader(){
		return (
			<img className='map__preloader' src={GoogleMap} alt="Google map" />
		)	
	}
	

	return (
		<div className="page__contacts">
			<p className="page__name">KJV / Контакты</p>
			<div className="page__contacts__content">
				<div className="contacts__content_pointer">
					<h3 className="contacts__content_title">Связаться с нами</h3>
					<p className="contacts__content_adress">
						<span>Частное учреждение образования «Учебно-педагогический комплекс детский сад — начальная школа «Кей-Джей-Ви»</span>
						<span>УНП 190790556</span>
						<span>г. Минск, ул. Никитина 35</span>
						<span>Понедельник — Пятница: 8:00 — 19:00</span>
						<span>+375 (29) 608-20-47</span>
						<a className="contacts__content_mail" href="mailto: info@ksvschool.by"><span>info@ksvschool.by</span></a>
					</p>
				</div>
				<ContactForm />
			</div>
			<div className='page__contacts_iframe'>
				{isLoading && <Preloader onClick={handleOnLoad} />}
				<iframe title='Адрес на карте' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.951570951808!2d27.587888115966827!3d53.950367980110066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf5cad0687f9%3A0x67db471bff3c1228!2z0YPQuy4g0J3QuNC60LjRgtC40L3QsCAzNSwg0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1666895836881!5m2!1sru!2sby" onLoad={handleOnLoad}></iframe>
				</div>
		</div>
	);
}

export default Contacts;