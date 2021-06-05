import React from 'react'
import { NavLink } from 'react-router-dom';

export function GigCategories() {
    return (
        <section className="categories">
            <h3>Popular professional services:</h3>
            <div className="gig-list flex">
                <NavLink to="/gigs?q=design" className="cat-link">
                    <img className="cat-img" src={'https://res.cloudinary.com/arikxl/image/upload/v1622785624/tenner/category/design_kx3xor.jpg'} alt="design" />
                    <p className="cat-title">Design</p></NavLink>
                <NavLink to="/gigs?q=digital" className="cat-link">
                    <img className="cat-img" src={'https://res.cloudinary.com/arikxl/image/upload/v1622785624/tenner/category/digital_cvqyqy.jpg'} alt="digital" />
                    <p className="cat-title">Digital</p></NavLink>
                <NavLink to="/gigs?q=programming" className="cat-link">
                    <img className="cat-img" src={'https://res.cloudinary.com/arikxl/image/upload/v1622785624/tenner/category/programming_fkngg2.jpg'} alt="programming" />
                    <p className="cat-title">Programming</p></NavLink>
                <NavLink to="/gigs?q=video" className="cat-link">
                    <img className="cat-img" src={'https://res.cloudinary.com/arikxl/image/upload/v1622785624/tenner/category/video_ufihzo.jpg'} alt="video" />
                    <p className="cat-title">Video</p></NavLink>
            </div>
        </section>
    )
}