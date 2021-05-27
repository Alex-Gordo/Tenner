import React from "react";
// import { Link } from 'react-router-dom'


export function gigPreview({ gig }) {

    return (
        <React.Fragment>
            <article className="gig-card">
                <div>
                <p>{gig.category}</p>
                <p>{gig.title}</p>
                </div>

            </article>
        </React.Fragment >
    )

}