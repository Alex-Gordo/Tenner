import React from "react";
import { NavLink } from 'react-router-dom';


export function GigPreview({ gig }) {

    return (
        <React.Fragment>
            <article className="gig-card flex">
                <NavLink to={`/gig/${gig._id}`}>
                    <img className="gig-img"
                        src={gig.imgUrl[0]} alt="" />
                    <section className="owner-name-pic flex">
                        <img className="sml-round-img"
                            src={gig.gigOwner.imgUrl} alt="">
                            {/* src={`https://robohash.org/${~~(Math.random() * 100)}?set=set5`} alt=""> */}
                        </img>
                        <section className="owner-details flex">
                            <p className="owner-name">{gig.gigOwner.fullName}</p>
                            <p className="owner-rating">Level 2 Seller</p>
                        </section>
                    </section>
                    <p className="gig-title">{gig.title.substr(0, 75)}...</p>
                </NavLink>
                <h3 className="flex review-line">
                    <i className="fa fa-star filled"></i>
                    <span className="review-rate"> {gig.reviews[0].rate}.0</span>
                    <span className="review-count"> ({gig.reviews.length})</span>
                </h3>
                <section className="flex card-fav-price">
                    <button className="fav-btn flex">❤</button>
                    <h4 className="gig-price"><span>STARTING AT </span>${gig.price}</h4>
                </section>
            </article>
        </React.Fragment >
    )

}