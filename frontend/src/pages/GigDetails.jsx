import { gigService } from '../services/gigService.js'
import { GigReview } from '../cmps/GigReview'
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';

export class GigDetails extends Component {

    state = {
        gig: null
    }

    componentDidMount() {
        const gigId = this.props.match.params.gig
        // console.log('gigId:', gigId)
        gigService.getById(gigId).then(gig => {
            this.setState({ gig })
        })
    }


    render() {
        const { gig } = this.state
        if (!gig) return 'no gigs';
        console.log('gig:', gig)
        console.log(gig.imgUrl)

        return (
            <React.Fragment>
                <div className="main-layout">
                    <div className="call-to-action">
                        <div className="">
                            <h3>Package Price: &nbsp; ${gig.price}</h3>
                            <p>{gig.title}</p>
                            <h5>{gig.deliveryTime} Day(s) Delivery</h5>
                            <div className="features">
                                {gig.features.map(feature => {
                                    return <h5><span>✔</span> {feature}</h5>
                                })}
                            </div>
                            <div className="btn-section">
                                <NavLink to={`/gig/${gig._id}/checkout`}>
                                    <button className="checkout-btn">Continue to Checkout (${gig.price})</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <main className="gig-details">
                        <section className="gig-info">
                            <h1>{gig.title}</h1>
                            <div className="owner-details flex">
                                <img className="sml-round-img"
                                    src={gig.gigOwner.imgUrl} alt="" />&nbsp;
                            <p> &nbsp;{gig.gigOwner.fullname} &nbsp;</p>
                                <p> &nbsp;⭐⭐⭐⭐{gig.reviews[0].rate} ({gig.reviews.length} reviews)</p>
                            </div>
                            <img className="gig-details-img"
                                src={gig.imgUrl[0]} alt="" />
                            <div className="gig-gallery flex">
                                <img className="gig-gallery-img"
                                    src={gig.imgUrl[1]} alt="" />
                                <img className="gig-gallery-img"
                                    src={gig.imgUrl[2]} alt="" />
                                <img className="gig-gallery-img"
                                    src={gig.imgUrl[3]} alt="" />
                            </div>
                        </section>
                        <section className="about-details flex ">
                            <h3 className="about-title">About this Gig</h3>
                            <h4 className="description">{gig.description}</h4>
                            <article className="about-seller">
                                <h3 className="about-title">About this Seller</h3>
                                <div className="owner-card flex">
                                    <img className="md-round-img"
                                        src={gig.gigOwner.imgUrl} alt="" />
                                    <div className="owner-card-right flex">
                                        <h3>{gig.gigOwner.fullname}</h3>
                                        <h4>⭐⭐⭐⭐ 5 ({gig.reviews.length} reviews)</h4>
                                        <button className="contact-owner">
                                            Contact Me
                                    </button>
                                    </div>
                                </div>
                                <div className="owner-info flex">
                                    <div className="info-left flex">
                                        <p>From<br /><b>Israel</b></p>
                                        <p>Avg response time<br /><b>3 hours</b></p>
                                    </div>
                                    <div className="info-right flex">
                                        <p>Member Since<br /><b>2 month ago</b></p>
                                        <p>Last Delivery<br /><b>About 2 Hours ago</b></p>
                                    </div>
                                </div>
                            </article>
                        </section>
                        <div className="suggested">
                            <h3>For You</h3>
                            <p>render more from same category</p>
                        </div>
                        <section className="reviews">
                            <h3 className="reviews-headline" >⭐⭐⭐⭐{gig.reviews[0].rate} ({gig.reviews.length} reviews)</h3>
                            <div className="reviews-rate-bars"></div>
                            {gig.reviews.map(review => {
                                return <article>
                                    <GigReview key={review.id} review={review} />
                                </article>
                            })}
                            <button className="add-review">
                                Add review
                        </button>
                        </section>
                    </main>
                </div>
            </React.Fragment>
        )
    }
}
