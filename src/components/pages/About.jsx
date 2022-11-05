import KidsInClass from '../../images/Kids_in_Class.png';

function About() {
	return (
		<div className="page__about">
			<p className="page__name">KJV / О нас</p>
			<div className="about__content">
				<h3 className="about__title">О нас</h3>
				<p className="about__description">Современное образование, чтобы оно не потеряло своей актуальности, необходимо постоянно адаптировать согласно веяниям времени и интересам подрастающего поколения.<br/>
				Мы прислушиваемся к родителям и детям и стремимся создавать лучшие условия для интеллектуального и творческого развития учеников.<br/>
				В Детском саду — школе «Кей-Джей-Ви» каждого ребёнка окружают добрые, заботливые, профессиональные учителя и настоящие друзья.</p>
				<div>
					<div className="about_photo"><img src={KidsInClass} alt="Дети в классе"></img>
					</div>
					<p className="about__description">Коллектив «Кей-Джей-Ви» — вторые родители, которые стремятся заботиться о физическом и психическом здоровье, эмоциональном состоянии каждого ребёнка.<br/>
 					В Детском саду-школе «Кей-Джей-Ви» создана тёплая и добрая атмосфера, чтобы дети чувствовали себя защищёнными.<br/>
					Мы стремимся находить общий язык с каждым воспитанником и учеником. Заботливые педагоги общаются с учениками, как с полноценными личностями.Они постоянно интересуются современными методами обучения и воспитания, а лучшие тенденции применяют на практике.</p>
				</div>
				<p className="about__description">Занятия в школе и детском саду проходят в увлекательной и интересной форме, что вовлекает ребёнка в образовательный процесс, помогает с лёгкостью познавать окружающий мир.<br/>
				Мы с радостью принимаем каждого ребёнка и окружаем его заботой, вниманием и теплом. Ученики и воспитанники — это наши дети, для которых мы стремимся обеспечить всё самое лучшее.<br/>
				Частная начальная школа и детский сад в «Кей-Джей-Ви» — волшебная страна, куда каждое утро дети с радостью приходят за новыми знаниями. А учителя — самые что ни на есть волшебники, которые обучают детей искусству современных знаний.</p>
			</div>
		</div>
	);
}

export default About;