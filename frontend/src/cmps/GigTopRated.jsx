import React from "react";
import { GigPreview } from '../cmps/GigPreview.jsx';


export function GigTopRated({ gigs }) {
    // TODO: filter top gigs and slice them to get 5 top gigs
    const topGigs = gigs.slice(0, 4)

    return (
        <React.Fragment>
            <h3>Top rated gigs</h3>
            <main className="gig-list flex">
                {topGigs.map(gig => {
                    return <GigPreview key={gig._id} gig={gig} />
                })}
            </main>
        </React.Fragment>
    )
}

