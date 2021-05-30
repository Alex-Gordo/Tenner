import React, { Component } from 'react';
export class GigCheckout extends Component {

    // state = {
    //     isLoggedin :''
    // }

    render() {

        return (
            <React.Fragment>
                <section className="package-details">

                    <h3>Customize Your Package</h3>

                </section>
                <section className="order-summary">
                    <h4>Summary</h4>
                    Subtotal
                    Service Fee
                    <hr/>
                   Total
                   Delivery Time
                   <button className="btn-purchase">
                       Purchase now</button>     

                    
                    
                </section>
            </React.Fragment>
        )
    }
}





