// Воспитатели
import GalinaPetrovna from '../../images/Galina_Petrovna_nursary_teacher.jpg';
import Hatina_Svetlana from '../../images/Hatina_Svetlana_nursary_teacher.jpg';
import Menshova_Irina from '../../images/Menshova_Irina_nursary_teacher.jpg';


// Учителя
import Stepanova_Olga from '../../images/Stepanova_Olga.jpg';
import Mironova_Irina from '../../images/Mironova_Irina.jpg';
import Swiridov_Pavel from '../../images/Swiridov_Pavel.jpg';
import Swiridova_Alesya from '../../images/Swiridova_Alesya.jpg';
import Igorev_Iliya from '../../images/Igorev_Iliya.jpg';
import Golubena_Irina from '../../images/Golubena_Irina.jpg';
import Mediinaya_Olga from '../../images/Mediinaya_Olga.jpg';
import Petrovskaya_Olga from '../../images/Petrovskaya_Olga.jpg';



// Администрация
import Petrig_Vitalina from '../../images/Petrig_Vitalina.jpg';
import Ijevskaya_Tatyana from '../../images/Ijevskaya_Tatyana.jpg';
import Pavlovitch_Ekaterina from '../../images/Pavlovitch_Ekaterina.jpg';
import Volskaya_Irina from '../../images/Volskaya_Irina.jpg';
import Slavnaya_Tatyana from '../../images/Slavnaya_Tatyana.jpg';


function Staff() {

	const nursaryTeacher = [
		{name: 'ИВАНОВА ГАЛИНА ПЕТРОВНА', position: 'Воспитатель', img: GalinaPetrovna, alt: 'Воспитатель'},
		{name: 'ХАТИНА СВЕТЛАНА ЭДУАРДОВНА', position: 'Воспитатель', img: Hatina_Svetlana, alt: 'Воспитатель'},
		{name: 'МЕНЬШОВА ИРИНА АЛЕКСЕЕВНА', position: 'Воспитатель', img: Menshova_Irina, alt: 'Воспитатель'}
	];

	const staffTeachers = [
		{name: 'СТЕПАНОВА ОЛЬГА ПЕТРОВНА', position: 'Учитель начальных классов', img: Stepanova_Olga, alt: 'Учитель начальных классов'},
		{name: 'МИРОНОВА ИРИНА ВЛАДИМИРОВНА', position: 'Музыкальный руководитель', img: Mironova_Irina, alt: 'Музыкальный руководитель'},
		{name: 'СВИРИДОВ ПАВЕЛ ГЕННАДЬЕВИЧ', position: 'Учитель английского языка', img: Swiridov_Pavel, alt: 'Учитель английского языка'}, 
		{name: 'СВИРЦОВА АЛЕСЯ ДМИТРИЕВНА', position: 'Учитель начальных классов', img: Swiridova_Alesya, alt: 'Учитель начальных классов'}, 
		{name: 'ИГОРЕВ ИЛЬЯ ПЕТРОВИЧ', position: 'Учитель физического воспитания', img: Igorev_Iliya, alt: 'Учитель физического воспитания'}, 
		{name: 'ГОЛУБЕНА ИРИНА ПЕТРОВНА', position: 'Логопед', img: Golubena_Irina, alt: 'Логопед'},
		{name: 'МЕДИЙНАЯ ОЛЬГА ИВАНОВНА', position: 'Учитель изостудии', img: Mediinaya_Olga, alt: 'Учитель изостудии'}, 
		{name: 'ПЕТРОВСКАЯ ОЛЬГА ИВАНОВНА', position: 'Психолог', img: Petrovskaya_Olga, alt: 'Психолог'}
	];

	const staffOffice = [
		{name: 'ПЕТРИЖ ВИТАЛИНА ВИКТОРОВНА', position: 'Директор', img: Petrig_Vitalina, alt: 'Директор'},
		{name: 'ИЖЕВСКАЯ ТАТЬЯНА ИВАНОВНА', position: 'Зам.директора по учебной части', img: Ijevskaya_Tatyana, alt: 'Зам.директора по учебной части'},
		{name: 'ПАВЛОВИЧ ЕКАТЕРИНА ПАВЛОВНА', position: 'Бухгалтер', img: Pavlovitch_Ekaterina, alt: 'Бухгалтер'}, 
		{name: 'ВОЛЬСКАЯ ИРИНА ФЕДОРОВНА', position: 'Методист', img: Volskaya_Irina, alt: 'Методист'}, 
		{name: 'СЛАВНАЯ ТАТЬЯНА ГЕОРГИЕВНА', position: 'Администратор', img: Slavnaya_Tatyana, alt: 'Администратор'}, 
	];
	
	return (
		<div className="page__staff">
			<p className="page__name">KJV / О нас / Наш коллектив</p>
			<div className="staff__nursary">
				<h3 className="staff__nursary_title">наши воспитатели</h3>
				<div className="staff__list">
					{nursaryTeacher.map((item, index) =>{
						return (
							<div key={index} className="staff__items">
								<img src={item.img} alt={item.alt}></img>
								<span className="staff__name" >{item.name}</span>
								<span className="staff__position" >{item.position}</span>
							</div>
						)
					})}
				</div>
			</div>

			<div className="staff__teachers">
				<h3 className="staff__teachers_title">Наши преподаватель</h3>
				<div className="staff__teachers__wrapper">
					<div className="staff__list">
						{staffTeachers.map((item, index) =>{
							return (
								<div key={index} className="staff__items">
									<img src={item.img} alt={item.alt}></img>
									<span className="staff__name" >{item.name}</span>
									<span className="staff__position" >{item.position}</span>
								</div>
							)
						})}
					</div>
				</div>
			</div>


			<div className="staff__office">
				<h3 className="staff__office_title">Наша администрация</h3>
				<div className="staff__teachers__wrapper">
					<div className="staff__list">
						{staffOffice.map((item, index) =>{
							return (
								<div key={index} className="staff__items">
									<img src={item.img} alt={item.alt}></img>
									<span className="staff__name" >{item.name}</span>
									<span className="staff__position" >{item.position}</span>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Staff;