import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <nav>
                <ul className="main-links">
                    <li>
                        <NavLink exact className="main-link" to="/" > Главная </NavLink>
                    </li>
                    <li>
                        <NavLink exact className="main-link" to="/note" > Сообщение </NavLink>
                    </li>
                    <li>
                        <NavLink exact className="main-link" to="/create" > Создать сообщение </NavLink>
                    </li>
                    <li>
                        <NavLink exact className="main-link" to="/about " > О программе </NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    );
}

export default Header;
