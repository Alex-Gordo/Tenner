import React from 'react';
import { NavLink } from 'react-router-dom';






export function CheckoutModal({ open }) {
    if (!open) return null
    return (
        <NavLink to={`/gigs`}>
            <div>
                <p>Thank you for choosing Tenner.</p>
                <img className="success-img" alt="" />
            </div>
        </NavLink>
    )
}
