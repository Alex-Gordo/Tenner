import React from "react";
import { GigPreview } from '../cmps/GigPreview.jsx';


export function GigTopRated({ gigs }) {
    console.log('gigs', gigs);

    return (
        <React.Fragment>
            <main className="gig-list flex">
                {/* {gigs.map(gig => {
                    return <GigPreview key={gig._id} gig={gig} />
                })} */}
                Top rated gigs rendering
            </main>
        </React.Fragment>
    )
}

