import { gigService } from '../services/gigService.js'
import { GigReview } from '../cmps/GigReview'
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";

export class GigDetails extends Component {

    state = {
        gig: null
    }

    componentDidMount() {
        window.scrollTo(0,0)
        const gigId = this.props.match.params.gig
        gigService.getById(gigId).then(gig => {
            this.setState({ gig })
        })
    }



    render() {


        const { gig } = this.state
        if (!gig) return 'no gigs';


        const avrRate = gig.reviews.reduce((currentTotal, rate) => {
            return rate.rate + currentTotal;
        }, 0) / gig.reviews.length;
        return (
            <React.Fragment>
                <div className="main-layout details-layout">

                    <div className="call-to-action flex">
                        <section className="package-choice flex">
                            <button className="btn active">Basic</button>
                            <button className="btn">Standard</button>
                            <button className="btn">Premium</button>
                        </section>
                        <div className="">
                            <div className="cta-container">
                                <h3 className="cta-price flex">Basic <span className="cta-price">${gig.price}</span></h3>
                                <p>Contact for more details</p>
                                <h5><i class='far fa-clock'></i>{gig.deliveryTime} Day{gig.deliveryTime > 1 && <>s</>} Delivery</h5>
                                <div className="features">
                                    {gig.features.map(feature => {
                                        return <h5><span>✔</span> {feature}</h5>
                                    })}
                                </div>
                                <NavLink to={`/gig/${gig._id}/checkout`}>
                                    <button className="checkout-btn btn">Continue (${gig.price})</button>
                                </NavLink>
                                <button className="contact-owner btn">
                                    Contact Seller
                         </button>
                            </div>
                        </div>
                    </div>
                    <div>
                    <ScrollUpButton />
                </div>

                    <main className="gig-details">
                        <div className="left-container">
                            <section className="gig-info">
                                <h1>{gig.title}</h1>
                                <div className="owner-details flex">
                                    <img className="sml-round-img"
                                        src={gig.gigOwner.imgUrl} alt="" />&nbsp;
                                <p className="owner-name"> &nbsp;{gig.gigOwner.fullName} &nbsp;</p>
                                    <p>Level 2 Seller</p>
                                    <p> &nbsp; | <i className="fa fa-star filled"></i>{avrRate} ({gig.reviews.length} reviews)</p>
                                    <p className="orders-queue">| 7 Orders in Queue</p>
                                </div>

                                <div className="img-container">
                                    <img className="gig-details-img img"
                                        src={gig.imgUrl[0]} alt="" />

                                    <div className="gig-gallery flex">
                                        <img className="gig-gallery-img img"
                                            src={gig.imgUrl[1]} alt="" />
                                        <img className="gig-gallery-img img"
                                            src={gig.imgUrl[2]} alt="" />
                                        <img className="gig-gallery-img img"
                                            src={gig.imgUrl[3]} alt="" />
                                    </div>
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
                                            <h3>{gig.gigOwner.fullName}</h3>
                                            <h4><i className="fa fa-star filled"></i>{avrRate} ({gig.reviews.length} reviews)</h4>

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
                                        <p className="owner-summary flex">Hi, everybody! My name is Stefano Castro, and I am a expert WebDesigner with over 5 years of experience. I've been passionate in create amazing website for anytype of business, especially in Ecommerce Stores with Shopify and Wix Platforms.
                                            What I love is bring businesses to the next level giving a boost thanks to eye catching and amazing functionality website design, satisfying and overcoming the expectation of my clients!</p>
                                    </div>
                                </article>
                            </section>
                            {/* <div className="suggested">
                                <h3>For You</h3>
                                <p>render more from same category</p>
                            </div> */}
                            <section className="reviews">
                                <h3 className="reviews-headline" ><i className="fa fa-star filled"></i>{avrRate} ({gig.reviews.length} reviews)</h3>
                                {/* <div className="reviews-rate-bars"></div> */}
                                {gig.reviews.map(review => {
                                    return <article>
                                        <GigReview key={review.id} review={review} />
                                    </article>
                                })}
                                <button className="add-review-btn btn">
                                    Add review
                        </button>
                            </section>
                        </div>
                    </main>
                </div>
            </React.Fragment>
        )
    }
}
