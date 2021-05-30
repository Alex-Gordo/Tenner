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
        console.log('gigId:', gigId)
        gigService.getById(gigId).then(gig => {
            this.setState({ gig })
        })
    }


    render() {
        const { gig } = this.state
        if (!gig) return 'no gigs';

        console.log('gig:', gig)

        return (
            <React.Fragment>
                <main className="gig-details">
                    <section className="gig-info">
                        <h1>{gig.title}</h1>
                        <p className="owner-details">
                            <img className="sml-round-img"
                                src={gig.gigOwner.imgUrl} alt="">
                            </img> |
                            {gig.gigOwner.fullName} |

                        </p>
                        <img className="gig-details-img"
                            src={`https://robohash.org/${~~(Math.random() * 100)}?set=set3`} alt="">
                        </img>
                    </section>
                    <section className="call-to-action">

                        <div className="order-info">
                            <div className="price">
                                <h3>Package Price</h3>
                                <p>{gig.price}$</p>
                            </div>

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
                            <p>From: Israel
                            Member Since: 2 month ago
                            Avg response time 3 hours
                            Last Deliviry About 2 Hours ago
                            </p>
                        </div>
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
