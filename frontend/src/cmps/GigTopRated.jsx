import React from "react";
import { GigPreview } from '../cmps/GigPreview.jsx';


export function GigTopRated({ gigs }) {
    console.log('gigs', gigs);

    // TODO: filter top gigs and slice them to get 4 top gigs
    const topGigs = gigs.slice(0, 4)
    console.log('topGigs', topGigs);

    return (
        <React.Fragment>
            <h1>Top rated gigs:</h1>
            <main className="gig-list flex">
                {topGigs.map(gig => {
                    return <GigPreview key={gig._id} gig={gig} />
                })}
            </main>
        </React.Fragment>
    )
}

