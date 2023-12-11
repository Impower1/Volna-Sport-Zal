import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Burger() {
    const [burger, setBurger] = useState(false)
    return ( 
        <>
            <button className="burger-menu-button" onClick={()=>setBurger(prev=>!prev)}>
                <svg width="30" height="9" viewBox="0 0 30 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="-0.000244141" y="0.467285" width="30" height="2" fill="white"/>
                <rect x="-0.000244141" y="6.53271" width="30" height="2" fill="white"/>
                </svg>
            </button>
            {burger&&<>
                <div className="burger-wrapper" onClick={()=>setBurger(false)}>
                </div>
                <div className="burger-menu">
                    <nav className="links">
                        <NavLink to='/fitnessHouse/subscription' activeClassName="active">Абонементы</NavLink>
                        <NavLink to='/fitnessHouse/schedule' activeClassName="active">Расписание</NavLink>
                        <NavLink to='/fitnessHouse/coaches' activeClassName="active">Тренеры</NavLink>
                        <NavLink to='/fitnessHouse/contacts' activeClassName="active">Контакты</NavLink>
                    </nav>
                    <div className="contacts">
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
                </div>
            </>}
        </>
     );
}

export default Burger;