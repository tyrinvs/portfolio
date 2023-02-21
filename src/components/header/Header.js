import {NavLink} from "react-router-dom";
import "./style.css";

function Header(){
    return(
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Привет, меня зовут <em>Владислав</em></strong><br/>
                </h1>
                <div className="header__text">
                    <p>Я начинающий <strong>Frontend</strong> разработчик</p>
                </div>
                <NavLink to="/projects" className="btn header__btn">
                    Мои проекты
                </NavLink>
            </div>
        </header>
    );
}

export default Header;