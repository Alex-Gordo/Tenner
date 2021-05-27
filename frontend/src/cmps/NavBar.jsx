import React from 'react';
import { NavLink } from 'react-router-dom';


export function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/gigs">Explore</NavLink></li>
            </ul>
        </nav>
    )
}
