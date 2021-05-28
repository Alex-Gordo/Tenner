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
                            src={`https://robohash.org/${~~(Math.random() * 100)}?set=set1`} alt="">
                        </img>
                        <p>{gig.gigOwner.fullName}</p>
                    </section>
                    <h3>{gig.title.substr(10)}...</h3>
                    <h3>{gig.reviews[0].rate}⭐
                        <span>({gig.reviews.length})</span>
                    </h3>
                </NavLink>
                <section className="flex card-fav-price">
                    <p className="fav-btn flex">❤</p>
                    <h3>${gig.price}</h3>
                </section>
            </article>
        </React.Fragment >
    )

}