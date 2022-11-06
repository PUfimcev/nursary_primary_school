import { useState } from 'react';
import Nav from './Nav';
import { Link } from "react-router-dom";
import Logo from '../images/Logo.png';

import HeaderFormContacts from './elements/headerContactsForm/HeaderFormContacts';
// import { MainContext } from '../App';

function Header() {

    // const {library, setLibrary} = useContext(MainContext);
    // const refInputName = useRef();
    // const refInputPhone = useRef();

    const [button, setButton] = useState(false);
    // const [checkPhone, setCheckPhone] = useState(true);
    // const [inputPhoneFig, setInputPhoneFig] = useState('');

    // useEffect(() => {
    //     //  let regExp  = /^\+[3][7][5]\ \((29|44|33|25)\)\ [1-9][0-9]{2}\-[0-9]{2}\-[0-9]{2}$/gi;
    //     // if (regExp.test(inputPhoneFig) === true || inputPhoneFig.length  === 1) {
    //     //     setCheckPhone(true);
    //     // } else {
    //     //     setCheckPhone(false);
    //     // }
    
    //     if (checkPhone === true || inputPhoneFig  === '' || inputPhoneFig.length === 0) {
    //         setCheckPhone(true);
    //         setInputPhoneFig('');
    //     } else {
    //         setCheckPhone(false);
    //     }
    //     console.log(inputPhoneFig)
    //     console.log(inputPhoneFig.length);

	// }, [inputPhoneFig, checkPhone]);
    // const [contactID, setContactID] = useState(-1);
    
    // function setId(){
    //     let id = contactID;
    //     if (id === 1) id = 0;
    //     id++;
    //     setContactID(id);
    // }

    function page() {
        const linkPage = document.querySelector(`nav a[href="/nursary_primary_school/"]`);
		if (!linkPage) return;

		const linkPages = document.querySelectorAll('.nav__link');
        if (!linkPages) return;
        
        linkPages.forEach(elem => {
            elem.classList.remove('active');
        });
        linkPage.classList.add('active');
    }

    function showHeaderForm() {
        setButton(true);
        return;
    }
 
    return (
        <header className="header">
            <div className='container'>
                    <div className='header__content'>

                        <Link onClick={page} className="header__logo" to="/nursary_primary_school/"><img src={Logo} alt="Company" />
                        </Link>
                        <Nav />
                        <div className="header__phone"><a href='tel:+375296082087'><span>+375 (29) 608-20-87</span></a></div>
                        <button className="header__btn" onClick={ showHeaderForm }>Заказать звонок</button>
                        {button === true && <HeaderFormContacts button={{ setButton }}/>
                        }
                    </div>
            </div>
    </header>
    );
}

export default Header;