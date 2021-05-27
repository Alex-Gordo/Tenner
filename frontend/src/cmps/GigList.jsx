import { GigPreview } from '../cmps/GigPreview.jsx';
import React from "react";
// import { Link } from 'react-router-dom'



export function GigList({ gigs }) {
 
    return (
        <React.Fragment>
            <main className="gig-list">
                {gigs.map(gig => {
                    return <GigPreview key={gig._id} gig={gig} />
                })}
            </main>
        </React.Fragment>
    )
}
