import { gigService } from '../services/gigService.js'
import React, { Component } from 'react';
import payment from '../assets/img/payment.png';

export class GigCheckout extends Component {

    state = {
        gig: null
    }

    componentDidMount() {
        const gigId = this.props.match.params.gig
        gigService.getById(gigId).then(gig => {
            this.setState({ gig })
        })
    }

    calculateTotalPrice() {
        var totalPrice = this.state.gig.price;
        console.log('totalPrice:', totalPrice)
        return totalPrice
    }

    render() {
        const { gig } = this.state
        if (!gig) return 'no gigs';

        return (
            <React.Fragment>
                <div className="checkout-container main-layout flex">
                    <div className="order-summary-container flex ">
                        <div className="order-summary">
                            <h2>Summary</h2>
                            <div className="price flex">
                                <h3>Subtotal:</h3>
                                <h3>${gig.price}</h3>
                            </div>
                            <div className="fee flex">
                                <h3>Service Fee:</h3>
                                <h3>${gig.price / 5}</h3>
                            </div>
                            <hr />
                            <div className="total flex">
                                <h3>Total:</h3>
                                <h3>${gig.price / 5 + gig.price}</h3>
                            </div>
                            <div className="delivery flex">
                                <h3>Delivery Time:</h3>
                                <h3>{gig.deliveryTime} Day(s)</h3>
                            </div>
                            <button className="btn-purchase">Purchase now</button>
                            <img className="payment-img flex"
                                src={payment} alt="payment">
                            </img>
                        </div>

                    </div>
                    <main className="package-details flex">
                        <h1>Customize Your Package</h1>
                        <div className="package-info flex">
                            <img src={gig.imgUrl[0]} alt="" />
                            <div className="gig-info flex">
                                <p className="title"><b>{gig.title}</b></p>
                                <p>⭐⭐⭐⭐{gig.reviews[0].rate} ({gig.reviews.length} reviews)</p>
                                <p className="view-line">View what's included <button>V</button></p>
                            </div>
                            {/* <span>Qty</span>
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select> */}
                            <p>${gig.price}</p>
                        </div>
                        <div className="more-details flex">
                            <h4>{gig.category}</h4>
                            <h4>{gig.features[0]} + {gig.features[1]} + {gig.features[2]}</h4>
                            <h4><span>✔ </span>{gig.revisions} revisions</h4>
                            <h4><span>✔ </span>{gig.deliveryTime} Day(s) Delivery</h4>
                        </div>
                        <h3>add extra</h3>
                        <div className="extra-container flex">
                            <label className="flex">
                                <input type="checkbox"></input>
                            Extra Fast 12 Hours Delivery</label>
                            <p>${gig.price}</p>
                        </div>

                    </main>
                </div>
            </React.Fragment>
        )
    }
}





