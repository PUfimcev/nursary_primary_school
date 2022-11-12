import React, { useContext, useRef, useState } from 'react';
import { DataContacts } from '../../../App'; 
import InputMask from 'react-input-mask';
import './style.css';
import './media.css';

function ContactForm(){

    const { dataContact, setDataContact } = useContext(DataContacts);
    const [toolTip, setToolTip] =  useState(true);
	const refInputName = useRef();
    const refInputPhone = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const inputNameValue = refInputName.current.value;
        const inputPhoneValue = refInputPhone.current.value;
        console.log(inputPhoneValue)
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
        const regexp = /^\+375\s\(_?_?(([2]?_?[9]?)|([4]?_?[4]?)|([3]?_?[3]?)|([1]?_?[7]?)|[2]?_?[5]?)?\)\s_?_?_?[1-9]?_?[0-9]?_?[0-9]?-_?_?[0-9]?_?[0-9]?-_?_?[0-9]?_?[0-9]?/gi;
        
        if (inputValue.length === 19) {
            
            if (regexp.test(inputValue) === true) { 
                setToolTip(true);
            }   else{
                setToolTip(false);
            }
        }
    }

    function popupIncorrectPhone() {
        return (
            <div className='input__phone-incorrect'>
                Неверно введен номер телефона.
            </div>
        )
    }

    return (
        <>
            <div className="page__contacts_form">
					
                <form className="form__getData" action="#" method="post" onSubmit={handleSubmit}>

                    <div className="form__items">

                        <input ref={refInputName} type="text" name='name' required aria-autocomplete='inline'/>
                        <label htmlFor="name" >Ваше имя</label>
                        <InputMask 
                            mask='+375 (99) 999-99-99' ref={refInputPhone} type="tel" name='phone' required placeholder='+375 (11) 111-11-11' aria-autocomplete='inline' onChange={InputKey}>

                        </InputMask>
                        {toolTip === false && <div className="header__form_incorrPhone">{popupIncorrectPhone()}</div>}
                        <label htmlFor="phone" >Ваш телефон</label>

                        <button className="form__btn" type='submit'>Отправить</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm;