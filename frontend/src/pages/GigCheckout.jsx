import { gigService } from '../services/gigService.js'
import React, { Component } from 'react';
import payment from '../assets/img/payment.png';
import { CheckoutModal } from '../cmps/CheckoutModal.jsx'
import { userService } from '../services/userService.js';
import { connect } from 'react-redux';

class _GigCheckout extends Component {

    state = {
        gig: null,
        isExtraPrice: false,
        isMoreDetailsShown: false,
        numberOfItems: 1,
        isOpen: false
    }

    async componentDidMount() {
        window.scrollTo(0, 0)
        const gigId = this.props.match.params.gig
        // gigService.getById(gigId).then(gig => {
        //     this.setState({ gig })
        // })
        const gig = await gigService.getById(gigId)
        this.setState({ gig })
        // console.log(this.props.loggedInUser,'@@@@@@@@@@@');
        // console.log(this.state.gig.gigOwner,'@@@@@@@@@@@');
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

    openCheckoutModal = () => {
        this.setState({ isOpen: true })
    }

    onCheckout = async () => {
        const { gig, numberOfItems } = this.state
        const newOrder = {
            id: '1111111',
            name: this.props.loggedInUser.fullname,
            price: gig.price * numberOfItems / 20 + gig.price * numberOfItems,
            date: Date.now(),
            status: 'new'
        }
        const gigOwner = await userService.getById(gig.gigOwner.id)
        gigOwner.orders.unshift(newOrder)
        const updatedUser = await userService.update(gigOwner)
        // console.log(updatedUser);
        this.openCheckoutModal()

    }

    render() {
        const { gig, isMoreDetailsShown, isExtraPrice } = this.state
        if (!gig) return <div>no gigs</div>;

        const avrRate = this.state.gig.reviews.reduce((currentTotal, rate) => {
            return rate.rate + currentTotal;
        }, 0) / gig.reviews.length;

        return (
            <React.Fragment>
                <div></div>
                <div className="checkout-container main-layout details-layout flex">
                    <div className="order-summary-container flex">
                        <div className="order-summary">
                            <h3>Summary</h3>
                            <div className="price flex">
                                <p>Subtotal:</p>
                                <p>${gig.price * this.state.numberOfItems}</p>
                            </div>
                            <div className="fee flex">
                                <p>Service Fee:</p>
                                <p>${gig.price * this.state.numberOfItems / 20}</p>
                            </div>
                            <hr className="summary-line" />
                            <div className="total flex">
                                <p>Total:</p>
                                <p>${gig.price * this.state.numberOfItems / 20 + gig.price * this.state.numberOfItems}</p>
                            </div>
                            <div className="delivery flex">
                                <p>Delivery Time:</p>
                                {!isExtraPrice && <p>{gig.deliveryTime} Day{gig.deliveryTime > 1 && <>s</>}</p>}
                                {isExtraPrice && <p>12 Hours</p>}
                            </div>
                            <button className="btn-purchase" onClick={this.onCheckout}

                            >Purchase now</button>
                            <img className="payment-img flex"
                                src={payment} alt="payment" />
                        </div>
                        <CheckoutModal open={this.state.isOpen} />
                    </div>
                    <main className="package-details flex">
                        <p className="checkout-headline">Customize Your Package</p>
                        <div className="package-info flex">
                            <img src={gig.imgUrl[0]} alt="" />
                            <div className="gig-info flex">
                                <p className="title">{gig.title}</p>
                                <p><i className="fa fa-star filled"></i>{avrRate} ({gig.reviews.length} reviews)</p>
                                <p className="view-line">
                                    <button onClick={this.showMoreDetails}>
                                        {isMoreDetailsShown ? 'Hide what\'s included ' : 'View what\'s included '}
                                    </button>
                                </p>
                            </div>
                            <span className="qty">Qty</span>
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
                            <p><span>✔ </span>{gig.deliveryTime} Day{gig.deliveryTime > 1 && <>s</>} Delivery</p>
                        </div>}

                        <p className="extra-title">Add Extras</p>
                        <div className="extra-container flex">
                            <label className="flex">
                                <input type="checkbox" onChange={this.calculateTotalPrice}></input>

                                <div className="extra-line flex">
                                    <p className="fast flex">Extra Fast 12 Hours Delivery</p>
                                    <p className="number flex">${gig.price * this.state.numberOfItems}</p>
                                </div>
                            </label>

                        </div>
                    </main>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps({ userModule }) {
    return {
        loggedInUser: userModule.loggedInUser
    }
}

const mapDispatchToProps = {
    // loadGigs
}

export const GigCheckout = connect(mapStateToProps, mapDispatchToProps)(_GigCheckout)




