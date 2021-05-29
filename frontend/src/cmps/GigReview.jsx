import React, { Component } from 'react';
export class GigReview extends Component {

    // state = {
    //     isHelpful :''
    // }

    render() {
        const {review} = this.props
        console.log(review);
        return (
            <React.Fragment>
                
                <li>
                    <h3>{review.by.fullname}</h3>
                    <p>{review.rate} kohavim</p>
                    <p>{review.txt}</p>

                </li>
            </React.Fragment>
        )
    }
}
