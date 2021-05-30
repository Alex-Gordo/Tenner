import React, { Component } from 'react';
import { gigService } from '../services/gigService.js'
import { GigReview } from '../cmps/GigReview'
import { NavLink } from 'react-router-dom';

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
        return (
            <React.Fragment>
                <side className="call-to-action">
                    <div className="order-info">
                        <h3>Package Price: &nbsp; ${gig.price}</h3>
                        <p>{gig.title}</p>
                        <h5>{gig.deliveryTime} Day(s) Delivery</h5>
                        <div className="features">
                            {gig.features.map(feature => {
                                return <h5><span>✔</span> {feature}</h5>
                            })}
                        </div>
                        <div className="btn-section">
                            <button className="checkout-btn">Continue to Checkout ({gig.price}$)</button>
                        </div>
                    </div>
                </side>
                <main className="gig-details">
                    <section className="gig-info">
                        <h1>{gig.title}</h1>
                        <div className="owner-details flex">
                            <img className="sml-round-img"
                                src={gig.gigOwner.imgUrl} alt="">
                            </img>&nbsp;
                            <p> &nbsp;{gig.gigOwner.fullname} &nbsp;</p>
                            <p> &nbsp;⭐⭐⭐⭐{gig.reviews[0].rate} ({gig.reviews.length} reviews)</p>
                        </div>
                        <img className="gig-details-img"
                            src={`https://res.cloudinary.com/dzocvtwca/image/upload/v1611223461/vhdtgbyzzp1ttirln1zj.jpg`} alt="">
                        </img>
                        <div className="gig-gallery flex">
                            <img className="gig-gallery-img"
                                src={`https://res.cloudinary.com/dzocvtwca/image/upload/v1611223461/vhdtgbyzzp1ttirln1zj.jpg`} alt="">
                            </img>
                            <img className="gig-gallery-img"
                                src={`https://res.cloudinary.com/dzocvtwca/image/upload/v1611223461/vhdtgbyzzp1ttirln1zj.jpg`} alt="">
                            </img>
                            <img className="gig-gallery-img"
                                src={`https://res.cloudinary.com/dzocvtwca/image/upload/v1611223461/vhdtgbyzzp1ttirln1zj.jpg`} alt="">
                            </img>
                        </div>
                    </section>

                    <section className="about-details flex">
                        <h3 className="about-title">About this Gig</h3>
                        <h4 className="description">{gig.description}</h4>
                        <card className="about-seller">
                            <h3 className="about-title">About this Seller</h3>
                            <div className="owner-card flex">
                                <img className="md-round-img"
                                    src={gig.gigOwner.imgUrl} alt="">
                                </img>
                                <div className="owner-card-right flex">
                                    <h3>{gig.gigOwner.fullname}</h3>
                                    <h4>⭐⭐⭐⭐ 5 ({gig.reviews.length} reviews)</h4>
                                    <button className="contact-owner">
                                        Contact Me
                                    </button>
                                </div>
                            </div>

<<<<<<< HEAD
                            <p>{gig.title}</p>
                            <h4>Delivery time: {gig.deliveryTime} Days</h4>

                            <div className="features">
                                {gig.features.map(feature => {
                                    return <h4>V{feature}</h4>
                                })}
                            </div>

                            <NavLink to={`/gig/${gig._id}/checkout`}><button className="checkout">Continue to Checkout ({gig.price}$)</button></NavLink>
                        </div>
                    </section>
                    <section className="about-details">
                        <h3>About this Gig</h3>
                        <p>{gig.description}</p>

                        <h3>About this Seller</h3>
                        <div className="about-seller">
                            <img className="gig-details-img"
                                src={`https://robohash.org/${~~(Math.random() * 100)}?set=set3`} alt="">
                            </img>
                            <h3>{gig.gigOwner.fullName}</h3>
                            kohavim 5 ({gig.reviews.length} reviews)
                            <button className="contact-owner">
                                Contact Me
                            </button>
=======
>>>>>>> 06cb674e9fd9b0f79ace1a6f8af7a7fd5dc63143
                            <p>From: Israel
                            Member Since: 2 month ago
                            Avg response time 3 hours
                            Last Deliviry About 2 Hours ago
                            </p>
                        </card>
                    </section>

                    <div className="suggested">
                        <h3>For You</h3>
                        <p>render more from same category</p>
                    </div>

                    <section className="reviews">
                        <h3>{gig.reviews.length} Reviews kohavim</h3>
                        {gig.reviews.map(review => {
                            console.log(review);
                            return <ul>
                                <GigReview key={review.id} review={review} />
                            </ul>
                        })}

                        <button className="add-review">
                            Add review
                        </button>
                    </section>


                </main>
            </React.Fragment>
        )
    }
}
