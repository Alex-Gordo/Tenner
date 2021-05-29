import React from 'react'
import { NavLink } from 'react-router-dom';
import design from '../assets/img/design.jpg'
import programming from '../assets/img/programming.jpg'
import digital from '../assets/img/digital.jpg'
import video from '../assets/img/video.jpg'

export function GigCategories() {
    return (
        <section className="categories">
<<<<<<< HEAD
            <h3>Popular professional services</h3>
            <div className="nav-categories flex space-between">
                <NavLink to="/gigs:design"><img src={design} alt="design" /></NavLink>
                <NavLink to="/gigs:digital"><img src={digital} alt="digital" /></NavLink>
                <NavLink to="/gigs:programming"><img src={programming} alt="programming" /></NavLink>
                <NavLink to="/gigs:video"><img src={video} alt="video" /></NavLink>
=======
            <h3>Popular professional services:</h3>
            <div className="gig-list flex">
                <NavLink to="/gigs:design" className="cat-link"><img className="cat-img" src={design} alt="design" /> <p className="cat-title">Design</p></NavLink>
                <NavLink to="/gigs:digital" className="cat-link"><img className="cat-img" src={digital} alt="digital" /><p className="cat-title">Digital</p></NavLink>
                <NavLink to="/gigs:programming" className="cat-link"><img className="cat-img" src={programming} alt="programming" /><p className="cat-title">Programming</p></NavLink>
                <NavLink to="/gigs:video" className="cat-link"><img className="cat-img" src={video} alt="video" /><p className="cat-title">Video</p></NavLink>
>>>>>>> 3cd53a671a99044ac62ff20b9fae73629e1e2177
            </div>
        </section>
    )
}