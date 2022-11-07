import React from 'react';
import KidsPlaying from '../../images/kids_playing_together.png';
import KidDoHomework from '../../images/kid_do_homework.png';
import KidSmile from '../../images/kid_smiling.png';

function Prices() {
	return (
		<div className="page__prices">
			<p className="page__name">KJV / Цены</p>
			<div className="page__prices__nursary">
				<div className="prices__nursary_title">
					<h3 className="nursary_title">Детский сад</h3>
					<div className="nursary_photo"><img src={KidsPlaying} alt="Дети играют"></img>
					</div>
				</div>
				<div className='prices__nursary_list'>
					<div className='nursary_list_price1'>
						<h4>Премиум — <span>580$</span></h4>
						<ul>
							<li>Полный месяц</li>
							<li>Время посещения 8:00 — 19:00</li>
							<li>5-ти разовое питание</li>
							<li>Полный пакет занятий</li>
							<li>Логопедическая и педагогическая диагностика</li>
							<li>Индивидуальные логопедические занятия 2 раза в неделю</li>
							<li>Возврат (перерасчет) за пропущенные дни</li>
						</ul>
					</div>
					<div className='nursary_list_price2'>
						<h4>Половина дня — <span>330$</span></h4>
						<ul>
							<li>Полный месяц</li>
							<li>Время посещения 8:00 — 14:00</li>
							<li>3-х разовое питание</li>
							<li>Занятия по расписанию</li>
							<li>Логопедические занятия</li>
							<li>Возврат (перерасчет) за пропущенные дни</li>
						</ul>
					</div>
					<div className='nursary_list_price3'>
						<h4>Адаптация — <span>3$</span>/час</h4>
						<ul>
							<li>25 часов в течении 2-х недель</li>
							<li>Время посещения 8:00 — 18:00</li>
							<li>Питание по графику или необходимости</li>
							<li>Логопедическая диагностика</li>
							<li>Возврат (перерасчет) за пропущенные дни</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="page__prices_preparatory">
				<div className='preparatory_list_price1'>
					<h4>Премиум — <span>590$</span></h4>
					<ul>
						<li>Полный месяц</li>
						<li>Время посещения 8:00 — 19:00</li>
						<li>5-ти разовое питание</li>
						<li>Диагностика готовности к школе</li>
						<li>Занятия по расписанию</li>
						<li>Возврат (перерасчет) за пропущенные дни</li>
					</ul>
				</div>
				<div className="prices__preparatory_title">
					<h3 className="preparatory_title">Подготовка к школе</h3>
					<div className="preparatory_photo"><img src={KidDoHomework} alt="Ребенок делает уроки"></img>
					</div>
				</div>
				<div className='preparatory_list_price2'>
					<h4>Половина дня — <span>372$</span></h4>
					<ul>
						<li>Полный месяц</li>
						<li>Время посещения 8:00 — 14:00</li>
						<li>3-x разовое питание</li>
						<li>Диагностика готовности к школе</li>
						<li>Логопедическая диагностика</li>
						<li>Занятия по расписанию</li>
						<li>Возврат (перерасчет) за пропущенные дни</li>
					</ul>
				</div>
			</div>
			<div className="page__prices_primary">
				<div className='primary_list_price1'>
						<h4>Половина дня — <span>470$</span></h4>
						<ul>
							<li>Полный месяц</li>
							<li>Время посещения 8:00 — 15:00</li>
							<li>3-х разовое питание</li>
							<li>Занятия по расписанию</li>
						</ul>
				</div>
				<div className='primary_list_price2'>
					<h4>Премиум — <span>670$</span></h4>
					<ul>
						<li>Полный месяц</li>
						<li>Время посещения 8:00 — 17:00</li>
						<li>5-ти разовое питание</li>
						<li>Занятия по расписанию</li>
					</ul>
				</div>
				<div className="prices__primary_title">
					<h3 className="primary_title">Начальная школа</h3>
					<div className="primary_photo"><img src={KidSmile} alt="Ребенок улыбается"></img>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Prices;
