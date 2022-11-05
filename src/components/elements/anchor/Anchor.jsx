import './style.css';

function Anchor(props) {
    const {  pageTop, widthMain } = props;

	return (
		<div onClick={pageTop} className="anchor" style={{left: `${widthMain}px`}} ></div>
	);
}

export default Anchor;

