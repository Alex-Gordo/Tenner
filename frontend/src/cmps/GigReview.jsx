import React, { Component } from 'react';
export class GigReview extends Component {

    // state = {
    //     isHelpful :''
    // }

    render() {
        const { review } = this.props
        return (
            <React.Fragment>
                <article className="review-card flex">
                    <div className="flex">
                        <img className="sml-review-img flex"
                            src={review.by.imgUrl} alt="">
                        </img>&nbsp;
                        <h2>&nbsp;      {review.by.fullname}&nbsp;  </h2>
                        <h3>&nbsp;<i className="fa fa-star filled"></i>{review.rate}</h3>
                    </div>
                </article>
                <div className="review-txt">
                    <p >{review.txt}</p>
                </div>
            </React.Fragment>
        )
    }
}
