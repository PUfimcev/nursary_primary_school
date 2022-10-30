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

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     let inputPhoneValue = refInputPhone.current.value;
    //     let inputNameValue = refInputName.current.value;

    //     if (checkPhone === true) {
    //         console.log(inputNameValue, inputPhoneValue);
    //         setCheckPhone(true);
    //         // setInputPhoneFig('');
    //     } else {
    //         return;
    //     }
    //     // console.log(inputPhoneValue.lengt)
    //     // setCheckPhone(true);
    //     setButton(false);
    // }

    // function checkPhoneFig(elem) {
    //     let regExp  = /^\+[3][7][5]\ \((29|44|33|25)\)\ [1-9][0-9]{2}\-[0-9]{2}\-[0-9]{2}$/gi;
    //     console.log(elem);
    //     if (regExp.test(elem) === true || elem === undefined || elem === '') {
    //         setCheckPhone(true);
    //     } else {
    //         setCheckPhone(false);
    //     }
    // }
    
    // function popupIncorrectPhone() {
    //     return (
    //         <>
    //             <div className='input__phone-incorrect'>
    //                 Неверно введен номер мобильного телефона. Повторите ввод.
    //             </div>
    //         </>
    //     )
    // }

    // function removeForm() {
    //     setButton(false);
    //     return;
    // }

    function showHeaderForm() {
        setButton(true);
        return;
    }

    // function inputPhone(e) {
    //     let inputPhoneValue = refInputPhone.current.value;
    //     if(!inputPhoneValue) return;
    //     inputPhoneValue = refInputPhone.current.value.replace(/\D/gi, '');
    //     const key = +e.key;

        
    //     inputPhoneValue = inputPhoneValue.replace(/\D/gm, '');
        
    //     if (key !== 0 && (key === ' ' || isNaN(key))) {
    //         inputPhoneValue = inputPhoneValue.split('');
            
    //         inputPhoneValue.pop();

    //         inputPhoneValue = inputPhoneValue.join('');

    //         refInputPhone.current.inputPhoneValue = inputPhoneValue;

    //         return;
    //     }
        
    //     inputPhoneValue = inputPhoneValue.replace(/(\d{1,3})(\d{1,2})(\d{1,3})(\d{1,2})(\d{1,2})/, '+$1 ($2) $3-$4-$5');
        
    //     refInputPhone.current.value = inputPhoneValue;


    //     let regExp  = /^\+[3][7][5]\ \((29|44|33|25)\)\ [1-9][0-9]{2}\-[0-9]{2}\-[0-9]{2}$/gi;
    //     if (regExp.test(inputPhoneValue) === true || inputPhoneValue.length  === 1 || inputPhoneValue === '') {
    //         setCheckPhone(true);
    //     } else {
    //         setCheckPhone(false);
    //     }

    //     checkPhoneFig(inputPhoneValue);
    //     setInputPhoneFig(refInputPhone.current.value);
    // }

    // function createHeaderForm(){
        
    //     return (
    //         <>
    //             <div className="header__form__content">
    //                 <button className="form__btn__remove" onClick={removeForm}><span>+</span></button>
    //                 <form className="header__form__getData" action="#" method="post" onSubmit={handleSubmit}>
    //                     <div className="header__form__items">
    //                         <input ref={refInputName} type="text" name='name' maxLength={20} required />
    //                         <span>Ваше имя</span>
    //                         <input ref={refInputPhone} type="tel" name='phone' required onKeyUp={inputPhone} maxLength="19" placeholder='+375 (11) 111-11-11'/>
    //                         {checkPhone === false && <><div className="header__form_incorrPhone">{popupIncorrectPhone()}</div></>}
    //                         <span>Ваш телефон</span>
    //                         <button className="header__form__btn" type='submit' >Отправить</button>
    //                         </div>
    //                 </form>
    //             </div>
    //         </>
    //     )
    // }
 
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