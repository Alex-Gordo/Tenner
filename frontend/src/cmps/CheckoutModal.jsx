import React from 'react';
import { NavLink } from 'react-router-dom';




export function CheckoutModal({ open }) {
    if (!open) return null
    return (
        <NavLink to={`/gigs`}>
            <div className="checkout-modal">
                <main className="flex">
                    <img className="success-img" alt="" />
                </main>
            </div>
        </NavLink>
    )
}
