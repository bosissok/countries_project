import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='navigation'>
            <ul>
                <NavLink exact to="/" className={(nav) => (nav.isActive ? 'nav-active' : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink exact to="About" className={(nav) => (nav.isActive ? "nav.active" : "")}>
                    <li>À propos</li>
                </NavLink>

                <NavLink exact to="Contact" className={(nav) => (nav.isActive ? "nav.active" : "")}>
                    <li>Contact</li>
                </NavLink>

                <NavLink exact to="Connexion" className={(nav) => (nav.isActive ? "nav.active" : "")}>
                    <li>Connexion</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navigation;