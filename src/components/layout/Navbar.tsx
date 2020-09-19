import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link"> 
                        <span className="material-icons">
                            home
                        </span>
                        <span className="link-text">Home</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/menu" className="nav-link">
                        <span className="material-icons">
                            menu_book
                        </span>
                        <span className="link-text">Menu</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">
                        <span className="material-icons">
                            place
                        </span>
                        <span className="link-text">Location</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

