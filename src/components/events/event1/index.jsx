import { Link } from 'react-router-dom';
import { useContext } from "react";
import { MainContext } from '../../Main';

import './style.css';

function Event1() {

    const { pageTop, setCreateContent, setNameContent, setContentAbout, imgListEvent1 } = useContext(MainContext);


	return (
		<div className="page__event1">
            <p className="page__name">KJV / О нас / Наши мероприятия / Масленица</p>
            <Link  className="page__event1__btn-reverse" onClick={pageTop} to="/about/events/"></Link>
			<h3 className="page__event1_title">Веселье и пляски В усадьбе «Ильинка»</h3>
			<div className="page__event1_img">
                {imgListEvent1.map((item, index) => {
                    return (
                        <div key={index} className={`event1_img ${index+1}`} ><img src={item} onClick={() => { setNameContent('pictureEvent1');
                        setContentAbout(`picture${index+1}`); setCreateContent(true); }}  alt="Фотографии с масленницы в усадьбе Ильинка"></img></div>
                    )
                })}
            </div>
		</div>
	);
}

export default Event1;