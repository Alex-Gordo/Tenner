import React from 'react'
import { NavLink } from 'react-router-dom';
import design from '../assets/img/design.jpg'
import programming from '../assets/img/programming.jpg'
import digital from '../assets/img/digital.jpg'
import video from '../assets/img/video.jpg'

export function GigCategories() {
    return (
        <section className="categories">
            <h3>Popular professional services</h3>
            <div className="nav-categories flex space-between">
                <NavLink to="/gigs:design"><img src={design} alt="design" /></NavLink>
                <NavLink to="/gigs:digital"><img src={digital} alt="digital" /></NavLink>
                <NavLink to="/gigs:programming"><img src={programming} alt="programming" /></NavLink>
                <NavLink to="/gigs:video"><img src={video} alt="video" /></NavLink>
            </div>
        </section>
    )
}