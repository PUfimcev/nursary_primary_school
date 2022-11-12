import React, { useContext } from 'react';
import './style.css';
import { DataContacts } from '../../../App';

function Anchor(props) {
    const {  pageTop, widthMain } = props;
	const { screenWidth  } = useContext(DataContacts);


	return (
		<div onClick={pageTop} className="anchor" style={{left: `${screenWidth > 1024 ? widthMain +20 : screenWidth - 40}px`}} ></div>
	);
}

export default Anchor;

