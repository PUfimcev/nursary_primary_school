import { useParams } from "react-router-dom";

import Event1 from "../events/event1";
import Event2 from "../events/event2";

const libraryComponents = [Event1, Event2];

function Event() {

    const params = useParams(); 
	const number = +params.number;
    const Component = libraryComponents[number - 1] || null;

	return (
		<div className="page__event">

            {!Component ? <>Фотографии с наших мероприятий пока обрабатываются и будут выставлены позже.</> : <Component />}
		</div>
	);
}

export default Event;