import React, { useContext, useEffect, useState } from "react";
import ApplyForm from '../elements/applyForm/ApplyForm';
import { MainContext } from '../Main';
import babyCrawl from '../../images/baby_crawl.png';
import { DataContacts } from '../../App';

function Junior() {
	const { applyData } = useContext(MainContext);
	const {  setScrollY  } = useContext(DataContacts);

	const [appoint, setAppoint] = useState([]);
	const [button, setButton] = useState(false);
	const [getNameEduc, setgetNameEduc] = useState('');
	const [getPriceEduc, setgetPriceEduc] = useState('');

	useEffect(()=>{
		let applyDataPrimary = applyData.filter(item => item.junior);
		if (applyDataPrimary) {
		applyDataPrimary.forEach(element => {
			element = element.junior;
			setAppoint(element)
		});
		}
	},[applyData])

	useEffect(()=>{
		setScrollY(0);
	}, [])

	function showHeaderForm() {
        setButton(true);
        return;
    }

	function getPrice(name, price){
		if(!name && !price) return;
		setgetNameEduc(name);
		setgetPriceEduc(price);
	}


	return (
		<div className="page__nursery nursery_junior">
			<p className="page__name">KJV / Сад / Младшая группа (3-4 года)</p>
			<h3 className="nursery__content_title">С нами ваш ребенок будет образованный и успешный</h3>
			<ul>
				<li className="page__offeres">
					<div className="offer_picture picture_book_open"></div>
					<div className="offer_about">Воспитатели с большим опытом работы</div>
				</li>
				<li className="page__offeres">
					<div className="offer_picture picture_heart"></div>
					<div className="offer_about">Индивидуальный подход к каждому ребенку</div>
				</li>
				<li className="page__offeres">
					<div className="offer_picture picture_message_circle"></div>
					<div className="offer_about">Профессиональный логопед</div>
				</li>
				<li className="page__offeres">
					<div className="offer_picture picture_carbon_health_cross"></div>
					<div className="offer_about">Забота о здоровье каждого ребенка</div>
				</li>
				<li className="page__offeres">
					<div className="offer_picture picture_design_safety"></div>
					<div className="offer_about">100% безопасность вашего ребенка</div>
				</li>
				<li className="page__offeres">
					<div className="offer_picture picture_heroicons_paint_brush"></div>
					<div className="offer_about">Собственная методика развития творчества</div>
				</li>
			</ul>
			<div className="nursery__content">
				<div className='content_description'>
					<h4>Занятия в младшей группе</h4>
					<ul>
						<li>Развитие речи и ознакомление с художественной литературой</li>
						<li>Развитие памяти, мышления, внимания и др. психических процессов</li>
						<li>Английский язык для малышей</li>
						<li>Изостудия «Творчество»</li>
						<li>Музыкальное воспитание</li>
						<li>Танцевальная студия</li>
						<li>Физическое развитие</li>
						<li>При необходимости  проводятся индивидуальные логопедические  занятия</li>
					</ul>
				</div>
				<div className="content_photo"><img src={babyCrawl} alt="Малыш ползает"></img>
				</div>
			</div>
			<div className='nursery__junior__prices'>
				<h3 className="nursery__junior__prices_title">Стоимость посещения (в месяц)</h3>
				<ul className="nursery__prices__list">
					{appoint.map((item, index) => {
						return (
							<li key={index} className="prices__list__item">
								<h3 className='item_title'>{item.title}</h3>
								<span className='item_time'>{item.time}</span>
								<span className='item_price'>{item.price}</span>
								<button className="item__btn" onClick={()=>{ showHeaderForm(); getPrice(item.name,item.title);}}>Записаться</button>
                        		{button === true && <ApplyForm sendApplyData={{ setButton, getNameEduc, setgetNameEduc, getPriceEduc, setgetPriceEduc }}/>
                        		}
								
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	);
}

export default Junior;