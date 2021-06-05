import { gigService } from '../services/gigService.js'
import React, { Component } from 'react';
import payment from '../assets/img/payment.png';

export class GigCheckout extends Component {

    state = {
        gig: null,
        isExtraPrice: false,
        isMoreDetailsShown: false,
        numberOfItems: 1
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        const gigId = this.props.match.params.gig
        gigService.getById(gigId).then(gig => {
            this.setState({ gig })
        })
    }

    showMoreDetails = () => {
        this.setState({ isMoreDetailsShown: !this.state.isMoreDetailsShown })
    }

    calculateTotalPrice = () => {
        var gigCopy = this.state.gig
        gigCopy.price = (this.state.isExtraPrice) ? gigCopy.price / 2 : gigCopy.price * 2;
        this.setState({ gig: gigCopy, isExtraPrice: !this.state.isExtraPrice })
    }

    addMoreItems = (ev) => {
        this.setState({ numberOfItems: ev.target.value })
    }


    render() {
        const { gig, isMoreDetailsShown, isExtraPrice } = this.state
        if (!gig) return 'no gigs';

        const avrRate = this.state.gig.reviews.reduce((currentTotal, rate) => {
            return rate.rate + currentTotal;
        }, 0) / gig.reviews.length;

        return (
            <React.Fragment>
                <div className="checkout-container main-layout details-layout flex">
                    <div className="order-summary-container flex">
                        <div className="order-summary">
                            <h2>Summary</h2>
                            <div className="price flex">
                                <h3>Subtotal:</h3>
                                <h3>${gig.price * this.state.numberOfItems}</h3>
                            </div>
                            <div className="fee flex">
                                <h3>Service Fee:</h3>
                                <h3>${gig.price * this.state.numberOfItems / 20}</h3>
                            </div>
                            <hr />
                            <div className="total flex">
                                <h3>Total:</h3>
                                <h3>${gig.price * this.state.numberOfItems / 20 + gig.price * this.state.numberOfItems}</h3>
                            </div>
                            <div className="delivery flex">
                                <h3>Delivery Time:</h3>
                                {!isExtraPrice && <h3>{gig.deliveryTime} Day{gig.deliveryTime > 1 && <>s</>}</h3>}
                                {isExtraPrice && <h3>12 Hours</h3>}
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
                                <p><i className="fa fa-star filled"></i>{avrRate} ({gig.reviews.length} reviews)</p>
                                <p className="view-line">
                                    <button onClick={this.showMoreDetails}>
                                        {isMoreDetailsShown ? 'Hide what\'s included ' : 'View what\'s included '}
                                    </button>
                                </p>
                            </div>
                            <span>Qty</span>
                            <select defaultValue="1" onChange={this.addMoreItems}
                                value={this.state.numberOfItems} >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <p>${gig.price * this.state.numberOfItems}</p>
                        </div>

                        {isMoreDetailsShown && <div className="more-details flex">
                            <p>{gig.category}</p>
                            <p>{gig.features[0]} + {gig.features[1]} + {gig.features[2]}</p>
                            <p><span>✔ </span>{gig.revisions} revisions</p>
                            <p><span>✔ </span>{gig.deliveryTime} Day(s) Delivery</p>
                        </div>}

                        <h5 className="extra-title">Add Extras</h5>
                        <div className="extra-container flex">
                            <label className="flex">
                                <input type="checkbox" onChange={this.calculateTotalPrice}></input>
                            Extra Fast 12 Hours Delivery</label>
                            <p>${gig.price * this.state.numberOfItems}</p>
                        </div>
                    </main>
                </div>
            </React.Fragment>
        )
    }
}





