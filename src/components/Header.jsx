import { Link, NavLink } from "react-router-dom";
import Logo from '../static/assets/Logo.png'
import Burger from "./Burger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <div className="wrapper header-wrapper"  id='top'>
            <header>
                <div className="header-left">
                    <NavLink to='/fitnessHouse'>
                        <img src={Logo} alt="logo" />
                    </NavLink>
                </div>
                <nav className="header-middle">
                    <NavLink to='/fitnessHouse/subscription' activeClassName="active">Абонементы</NavLink>
                    <NavLink to='/fitnessHouse/schedule' activeClassName="active">Расписание</NavLink>
                    <NavLink to='/fitnessHouse/coaches' activeClassName="active">Тренеры</NavLink>
                    <NavLink to='/fitnessHouse/contacts' activeClassName="active">Контакты</NavLink>
                </nav>
                <div className="header-right">
                    <div className="phone">
                        <a href="tel:+78126100606">
                            <FontAwesomeIcon icon={faPhone} />
                            <p>(812) 610 06 06</p>
                        </a>
                    </div>
                    <div className="socials">
                        <a href="" className="tg">
                        </a>
                        <a href="" className="vk">
                        </a>
                    </div>
                </div>
                <Burger/>
            </header>
        </div>
     );
}

export default Header;