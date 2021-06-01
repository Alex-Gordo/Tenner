import React from 'react';
import { NavLink } from 'react-router-dom';


export function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list flex">
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/gigs">Explore</NavLink></li>
                <li><NavLink to="/login-sign-up">Sign In</NavLink></li>
             

{/* 
                <li><button>Sign In</button></li>
                <li><button>Join</button></li> */}
                
            </ul>
        </nav>
    )
}
