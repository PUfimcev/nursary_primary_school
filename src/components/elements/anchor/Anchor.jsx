import './style.css';

function Anchor(props) {
    const {  main, widthMain } = props

    function pageTop(){
        let mainElem = main.current;
        mainElem.scrollIntoView({behavior:"smooth", block: "start"})
    }

	return (
		<div onClick={pageTop} className="anchor" style={{left: `${widthMain}px`}} ></div>
	);
}

export default Anchor;

