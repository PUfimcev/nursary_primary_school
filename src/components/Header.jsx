import Nav from './Nav';
import { Link } from "react-router-dom";
import Logo from '../images/Logo.png';

function Header() {

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

    return (
        <header className="header">
            <div className='container'>
                    <div className='header__content'>
                        <Link onClick={page} className="header__logo" to="/nursary_primary_school/"><img src={Logo} alt="Company" /></Link>
                        <Nav />
                        <div className="header__phone"><a   href='tel:+375296082087'><span>+375 (29) 608-20-87</span></a></div>
                        <button className="header__btn_form">Заказать звонок</button>
                    </div>
            </div>
    </header>
    );
}

export default Header;