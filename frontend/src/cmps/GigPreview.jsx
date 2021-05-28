import React from "react";
import { NavLink } from 'react-router-dom';


export function GigPreview({ gig }) {

    return (
        <React.Fragment>
            <article className="gig-card flex">
                <NavLink to={`/gig/${gig._id}`}>
                    <img className="gig-img"
                        src={`https://robohash.org/${~~(Math.random() * 100)}?set=set3`}
                        alt="">
                    </img>
                    <section className="owner-name-pic flex">
                        <img className="sml-round-img"
                            src={`https://robohash.org/${~~(Math.random() * 100)}?set=set5`} alt="">
                        </img>
                        <p>{gig.gigOwner.fullName}</p>
                    </section>
                    <p className="gig-title">{gig.title.substr(1)}...</p>
                </NavLink>
                <h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="gold" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                    <span className="review-rate"> {gig.reviews[0].rate}</span>
                    <span className="review-count"> ({gig.reviews.length})</span>
                </h3>
                <section className="flex card-fav-price">
                    <p className="fav-btn flex">❤</p>
                    <h3>${gig.price}</h3>
                </section>
            </article>
        </React.Fragment >
    )

}