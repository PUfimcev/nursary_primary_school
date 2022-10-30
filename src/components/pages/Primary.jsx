import { useContext, useEffect, useState } from "react";
import ApplyForm from '../elements/applyForm/ApplyForm';
import { MainContext } from '../Main';
import Image1 from '../../images/primary_image_1.png';
import Image2 from '../../images/primary_image_2.png';
import Image3 from '../../images/primary_image_3.png';
import Image4 from '../../images/primary_image_4.png';

function Primary() {
	const { applyData } = useContext(MainContext);
	const [appoint, setAppoint] = useState([]);
	const [button, setButton] = useState(false);
	const [getNameEduc, setgetNameEduc] = useState('');
	const [getPriceEduc, setgetPriceEduc] = useState('');

	useEffect(()=>{
		let applyDataPrimary = applyData.filter(item => item.primary);
		if (applyDataPrimary) {
		applyDataPrimary.forEach(element => {
			element = element.primary;
			setAppoint(element)
		});
		}
	},[applyData])

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
		<div className="page__primary">
			<p className="page__name">KJV / Школа / 1-4 Класс</p>
			<h3 className="primary__content_title">Частная начальная школа</h3>
			<ul>
				<li className="page__offeres">
					<div className="offer_picture picture_apple"></div>
					<div className="offer_about">Сбалансированное 5-ти разовое питание</div>
				</li>
				<li className="page__offeres">
					<div className="offer_picture picture_sign"></div>
					<div className="offer_about">Углубленная программа по математике</div>
				</li>
				<li className="page__offeres">
					<div className="offer_picture picture_belloff"></div>
					<div className="offer_about">Нет домашних заданий</div>
				</li>
				<li className="page__offeres">
					<div className="offer_picture picture_m"></div>
					<div className="offer_about">Обучение  самостоятельной работе</div>
				</li>
				<li className="page__offeres">
					<div className="offer_picture picture_smile"></div>
					<div className="offer_about">Организовано логопедическое сопровождение</div>
				</li>
				<li className="page__offeres">
					<div className="offer_picture picture_ball"></div>
					<div className="offer_about">Обязательные уроки физкультуры</div>
				</li>
			</ul>
			<div className="primary__schedule">
				<div className="schedule_parts part1">
					<h4>Режим дня</h4>
					<ul>
						<li>8.30-8.45 – приём детей</li>
						<li>8.45-9.05 – завтрак</li>
					</ul>
					<div className="schedule_part_img"><img src={Image1} alt="Дети в классе"></img>
					</div>
				</div>
				<div className="schedule_parts part2">
					<div className="schedule_part_img"><img src={Image2} alt="Дети в классе"></img>
					</div>
					<h4><span>1</span> класс уроки</h4>
					<ul>
						<li>9.05 – 9.40 – 1 урок</li>
						<li>10.00 – 10.35 – 2 урок</li>
						<li>10.35 – 11.20 – второй завтрак, подвижная перемена</li>
						<li>11.20 – 11.55 – 3 урок</li>
						<li>12.15 – 12.50 — 4 урок</li>
						<li>13.00 – 13.25 — обед</li>
					</ul>
				</div>
				<div className="schedule_parts part3">
					<h4><span>2, 3, 4</span> классы уроки</h4>
					<ul>
						<li>9.05 – 9.50 – 1 урок</li>
						<li>10.00 – 10.45 – 2 урок</li>
						<li>10.45 – 10.55 – второй завтрак</li>
						<li>10.55 – 11.20 – подвижная перемена</li>
						<li>11.20 – 12.05 – 3 урок</li>
						<li>12.15 – 13.00 — 4 урок</li>
						<li>13.00 – 13.25 — обед</li>
						<li>13.25 – 14.10 – 5 урок</li>
					</ul>
					<div className="schedule_part_img"><img src={Image3} alt="Дети в классе"></img>
					</div>
				</div>
				<div className="schedule_parts part4">
					<div className="schedule_part_img"><img src={Image4} alt="Дети в классе"></img>
					</div>
					<h4>Режим для группы продленного дня</h4>
					<ul>
						<li>12.00–13.00 — приём детей, подвижные игры на свежем воздухе</li>
						<li>13.00–13.25 — подготовка к обеду. Санитарно-гигиенические процедуры. Обед</li>
						<li>13.25 15.00 — самоподготовка (2, 3, 4 классы), занятия по интересам, игры на свежем воздухе (1 класс)</li>
						<li>15.00–15.10 — Полдник</li>
						<li>15.10–16.00 — самоподготовка (3, 4 классы), занятия по интересам (1, 2 классы)</li>
						<li>16.15–18.00 — ужин, занятия по интересам. Подведение итогов дня</li>
					</ul>
				</div>
			</div>
			<div className='primary__prices'>
				<h3 className="primary__prices_title">Стоимость обучения (в месяц)</h3>
				<ul className="primary__prices__list">
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

export default Primary;