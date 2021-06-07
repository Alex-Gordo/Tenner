import React from "react";
import { GigPreview } from '../cmps/GigPreview.jsx';
import ScrollUpButton from "react-scroll-up-button";


export function GigList({ gigs }) {
    return (
        <React.Fragment>
            <main className="gig-list flex">
                {gigs.map(gig => {
                    return <GigPreview key={gig._id} gig={gig} />
                })}
                <div>
                    <ScrollUpButton />
                </div>
            </main>
        </React.Fragment>
    )
}

