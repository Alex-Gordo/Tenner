import React from "react";
// import { connect } from 'react-redux'
import { GigPreview } from '../cmps/GigPreview.jsx';
// import { Link } from 'react-router-dom'



export function GigList({ gigs }) {

    return (
        <React.Fragment>
            <main className="gig-list flex">
                {gigs.map(gig => {
                    return <GigPreview key={gig._id} gig={gig} />
                })}
            </main>
        </React.Fragment>
    )
}

