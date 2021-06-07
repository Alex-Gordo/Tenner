import React, { Component } from 'react';
export class GigReview extends Component {

    render() {
        const { review } = this.props
        return (
            <React.Fragment>
                <article className="review-card flex">
                    <div className="flex">
                        <img className="sml-review-img flex"
                            src={review.by.imgUrl} alt="">
                        </img>
                        <p>{review.by.fullname}</p>
                        <p>
                            <i className="fa fa-star filled"></i>
                            <span className="review-rate">{review.rate}</span>
                        </p>
                    </div>
                </article>
                <div className="review-txt">
                    <p>{review.txt}</p>
                </div>
            </React.Fragment>
        )
    }
}
