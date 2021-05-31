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

    render() {
        const { gig } = this.state
        if (!gig) return 'no gigs';

        return (

            <React.Fragment>
                <div className="order-summary-container flex">
                    <side className="order-summary">
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
                    </side>
                    <img className="payment-img flex"
                        src={payment} alt="payment">
                    </img>
                </div>




                <main className="package-details flex">

                    <h3>Customize Your Package</h3>
                    <h3>Customize Your Package</h3>
                    <h3>Customize Your Package</h3>
                    <h3>Customize Your Package</h3>
                    <h3>Customize Your Package</h3>
                    <h3>Customize Your Package</h3>

                </main>


            </React.Fragment>
        )
    }
}





