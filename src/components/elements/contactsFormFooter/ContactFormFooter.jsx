import { useContext, useRef, useState } from 'react';
import { DataContacts } from '../../../App'; 
import './style.css';

function ContactFormFooter(){

    const { dataContact, setDataContact } = useContext(DataContacts);
    const [toolTip, setToolTip] =  useState(true);
	const refInputName = useRef();
    const refInputPhone = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const inputNameValue = refInputName.current.value;
        const inputPhoneValue = refInputPhone.current.value;
        if (!inputNameValue && !inputPhoneValue) return;
        
        const contactTmp = dataContact;

        if (toolTip === true && inputPhoneValue.length === 19) {
            contactTmp.push({ name: inputNameValue, phone: inputPhoneValue});
            setDataContact([...contactTmp]);

            refInputName.current.value = '';
            refInputPhone.current.value = '';
        
        } else {
            return;
        }
        
    }

    function InputKey() {

        let inputValue = refInputPhone.current.value;
        // eslint-disable-next-line no-useless-escape
        if (inputValue.match(/[^+0-9\s\(\)-]/gi)) inputValue = inputValue.replace(/[^+0-9\s\(\)-]/gi, '');

        refInputPhone.current.value = inputValue; 
        if (refInputPhone.current.value === '') {
            setToolTip(true);
        }
        checkPhone(refInputPhone.current.value);
    }

    function checkPhone(data) {
        if (!data) return;

        const regexp = /^\+375\s\((29|44|33|17|25)\)\s[1-9][0-9]{2}-[0-9]{2}-[0-9]{2}/gi;

        if (data.length === 19 && regexp.test(data) === true) { 
            setToolTip(true);
        }   else if (data.length === 19 && regexp.test(data) === false){
            setToolTip(false);
        }
        
        if (data.length < 19) {
            setToolTip(true);
        }
    }

    function popupIncorrectPhone() {
        return (
            <div className='input__phone-incorrect'>
                Неверно введен номер телефона. Введите по шаблону.
            </div>
        )
    }


    return (
        <>
            <div className="footer__page__contacts_form">
					
                <form className="footer__form__getData" action="#" method="post" onSubmit={handleSubmit}>

                    <div className="footer__form__items">
                        <span>Остались вопросы?</span>
                        <input ref={refInputName} type="text" name='name' maxLength={20} required aria-autocomplete='inline'/>
                        <label htmlFor="name" >Ваше имя</label>

                        <input ref={refInputPhone} type="tel" name='phone' required  maxLength="19" placeholder='+375 (11) 111-11-11' aria-autocomplete='inline' onInput={InputKey}/>
                        {toolTip === false && <div className="header__form_incorrPhone">{popupIncorrectPhone()}</div>}
                        <label htmlFor="phone" >Ваш телефон</label>

                        <button className="footer__btn__form" type='submit'>Отправить</button>
                    </div>
                </form>
            </div>
        </>


    )


}

export default ContactFormFooter;