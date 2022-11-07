import { Link } from 'react-router-dom';
import React, { useContext } from "react";
import { MainContext } from '../../Main';

import './style.css';

function Event2() {

    const { pageTop, setCreateContent, setNameContent, setContentAbout, imgListEvent2 } = useContext(MainContext);


	return (
		<div className="page__event2">
            <p className="page__name">KJV / О нас / Наши мероприятия / 8 марта</p>
            <Link  className="page__event2__btn-reverse" onClick={pageTop} to="/about/events/"></Link>
			<h3 className="page__event2_title">Поздравление Mам C 8 Марта</h3>
			<div className="page__event2_img">
                {imgListEvent2.map((item, index) => {
                    return (
                        <div key={index} className={`event2_img ${index+1}`} ><img src={item} onClick={() => { setNameContent('pictureEvent2');
                        setContentAbout(`picture${index+1}`); setCreateContent(true); }}  alt="Фотографии с поздравления Мам С 8 Марта"></img></div>
                    )
                })}
            </div>
		</div>
	);
}

export default Event2;