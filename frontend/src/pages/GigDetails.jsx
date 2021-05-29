import React, { Component } from 'react';
import { gigService } from '../services/gigService.js';

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
            <main className="gig-details">
                <section className="gig-info">
                    <h1>{gig.title}</h1>
               
                </section>
                <section className="call-to-action">
                   
                    <div className="order-info">

                    </div>

                </section>


            </main>
        )
    }
}
