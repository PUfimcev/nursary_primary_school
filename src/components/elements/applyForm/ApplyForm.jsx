import React, { useContext, useRef, useState } from 'react';
import { DataContacts } from '../../../App'; 
import './style.css';

function ApplyForm(props){
    const { setButton, getPriceEduc, setgetPriceEduc, getNameEduc, setgetNameEduc } = props.sendApplyData;
    const { dataApply, setDataApply } = useContext(DataContacts);
    const [toolTip, setToolTip] =  useState(true);
	const refInputName = useRef();
	const refInputAge = useRef();
    const refInputPhone = useRef();

    // console.log(getPriceEduc)

    function handleSubmit(event) {
        event.preventDefault();
        const inputNameValue = refInputName.current.value;
        const inputAgeValue = refInputAge.current.value;
        const inputPhoneValue = refInputPhone.current.value;
        if (!inputNameValue && !inputPhoneValue && !inputAgeValue && !getPriceEduc) return;
        
        const contactTmp = dataApply;

        if (toolTip === true && inputPhoneValue.length === 19) {
            contactTmp.push({ nameEduc: getNameEduc, price: getPriceEduc, name: inputNameValue, age: inputAgeValue, phone: inputPhoneValue});
        
            setDataApply([...contactTmp]);
            
            refInputName.current.value = '';
            refInputAge.current.value = '';
            refInputPhone.current.value = '';
        } else {
            return;
        }
        setButton(false);
        setgetNameEduc(''); 
        setgetPriceEduc('');
    }


    function removeForm() {
        setgetNameEduc(''); 
        setgetPriceEduc('');
        setButton(false);
        return;
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
            <>
                <div className='input__phone-incorrect'>
                Неверно введен номер телефона. Введите по шаблону.
                </div>
            </>
        )
    }

    return (
        <>
            <div className="page__apply_form">
                <button className="form__btn__remove" onClick={removeForm}><span>+</span>
                </button>
                <div>Оставьте свои контакты и мы свяжемся с Вами</div>
                <form className="form__getData" action="#" method="post" onSubmit={handleSubmit}>

                    <div className="form__items">

                        <input ref={refInputName} type="text" name='name' maxLength={20} required aria-autocomplete='inline'/>
                        <label htmlFor="name" aria-autocomplete='inline'>Ваше имя</label>
                        <input ref={refInputAge} type="number" name='age' maxLength={2} required />
                        <label htmlFor="name" >Возраст ребенка</label>

                        <input ref={refInputPhone} type="tel" name='phone' required  maxLength="19" placeholder='+375 (11) 111-11-11' aria-autocomplete='inline' onInput={InputKey}/>
                        {toolTip === false && <><div className="header__form_incorrPhone">{popupIncorrectPhone()}</div></>}
                        <label htmlFor="phone" >Ваш телефон</label>

                        <button className="form__btn" type='submit'>Записаться</button>
                    </div>
                </form>
            </div>
        </>
    )


}

export default ApplyForm;