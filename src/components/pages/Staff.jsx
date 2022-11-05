import GalinaPetrovna from '../../images/Galina_Petrovna_nursary_teacher.jpg';
import Hatina_Svetlana from '../../images/Hatina_Svetlana_nursary_teacher.jpg';
import Menshova_Irina from '../../images/Menshova_Irina_nursary_teacher.jpg';


function Staff() {

	const nursaryTeacher = [
		{name: 'ИВАНОВА ГАЛИНА ПЕТРОВНА', position: 'Воспитатель', img: GalinaPetrovna, alt: 'Воспитатель'},
		{name: 'ХАТИНА СВЕТЛАНА ЭДУАРДОВНА', position: 'Воспитатель', img: Hatina_Svetlana, alt: 'Воспитатель'},
		{name: 'МЕНЬШОВА ИРИНА АЛЕКСЕЕВНА', position: 'Воспитатель', img: Menshova_Irina, alt: 'Воспитатель'}
	];


	const staffOffice = [
		{name: 'ИВАНОВА ГАЛИНА ПЕТРОВНА', position: 'Воспитатель', img: GalinaPetrovna, alt: 'Воспитатель'},
		{name: 'ХАТИНА СВЕТЛАНА ЭДУАРДОВНА', position: 'Воспитатель', img: Hatina_Svetlana, alt: 'Воспитатель'},
		{name: 'МЕНЬШОВА ИРИНА АЛЕКСЕЕВНА', position: 'Воспитатель', img: Menshova_Irina, alt: 'Воспитатель'}
	];


	return (
		<div className="page__staff">
			<p className="page__name">KJV / О нас / Наш коллектив</p>
			<div className="staff__nursary">
				<h3 className="staff__nursary_title">наши воспитатели</h3>
				<ul className="staff__list">
					{nursaryTeacher.map((item, index) =>{
						return (
							<li key={index} className="staff__items">
								<img src={item.img} alt={item.alt}></img>
								<span className="staff__name" >{item.name}</span>
								<span className="staff__position" >{item.position}</span>
							</li>
						)
					})}
				</ul>
			</div>


			<div className="staff__office">
				<h3 className="staff__office_title">Наша администрация</h3>
				<ul className="staff__list">
					{staffOffice.map((item, index) =>{
						return (
							<li key={index} className="staff__items">
								<img src={item.img} alt={item.alt}></img>
								<span className="staff__name" >{item.name}</span>
								<span className="staff__position" >{item.position}</span>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	);
}

export default Staff;