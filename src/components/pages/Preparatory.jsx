import { useContext, useEffect, useState } from "react";
import GirlBooks from '../../images/girl_books.png';
import ApplyForm from '../elements/applyForm/ApplyForm';
import { MainContext } from '../Main';

function Preparatory() {

	const { applyData } = useContext(MainContext);
	const [appoint, setAppoint] = useState([]);
	const [button, setButton] = useState([]);
	const [getNameEduc, setgetNameEduc] = useState('');
	const [getPriceEduc, setgetPriceEduc] = useState('');

	// console.log(getPriceEduc)

	useEffect(()=>{
		let applyDataPreparatory = applyData.filter(item => item.preparatory);
		if (applyDataPreparatory) {
		applyDataPreparatory.forEach(element => {
			element = element.preparatory;
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
		<div className="page__preparatory">
			<p className="page__name">KJV / Школа / Подготовка к школе (6-7 лет)</p>
			<div className="preparatory__title">
				<div className="preparatory__content">
					<h3 className="preparatory__content_title">Подготовительный класс</h3>
					<p className="preparatory__content_description">Уважаемые родители детей, которым остаётся год до школы! Мы предлагаем Вам отдать своих детей в подготовительный класс школы «Кей-Джей-Ви». Класс будет располагаться в отдельном помещении. Дети будут заниматься по отдельной программе.</p>
				</div>
				<div className="preparatory__content_photo"><img src={GirlBooks} alt="Девочка изучает книги"></img>
				</div>
			</div>
			<div className='preparatory__schedule'>
				<div className='preparatory__schedule_item schedule_item1'>
					<h4>Расписание занятий</h4>
					<ul>
							<li>Развитие речи + обучение чтению, грамоте</li>
							<li>Математический цикл + логика, конструирование</li>
							<li>Английский язык</li>
							<li>Ознакомление с окружающим</li>
							<li>Музыка</li>
							<li>Физкультура</li>
							<li>Изобразительная деятельность</li>
					</ul>
					<p>По 3 занятия в день до обеда</p>
				</div>
				<div className='preparatory__schedule_item schedule_item2'>
					<h4>Занятия во второй половине дня</h4>
					<ul>
							<li>шахматы</li>
							<li>детский дизайн</li>
							<li>детский фитнес</li>
							<li>спортивные игры</li>
							<li>хореография</li>
							<li>развивающие компьютерные занятия</li>
					</ul>
				</div>
				<div className='preparatory__schedule_item schedule_item3'>
					<h4>Оpганизация сна</h4>
					<p>Сон будет организован по Вашему желанию в помещениях детского сада, в отдельной комнате. 
					Если Ваш ребёнок не спит — мы организуем в это время игровую деятельность. Также ваш ребёнок сможет посещать индивидуальные занятия с логопедом.
					</p>
				</div>
			</div>
			<div className='preparatory__prices'>
				<h3 className="preparatory__prices_title">Стоимость обучения (в месяц)</h3>
				<ul className="preparatory__prices__list">
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

export default Preparatory;