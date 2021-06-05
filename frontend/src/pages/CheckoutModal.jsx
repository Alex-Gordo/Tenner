import React from 'react';
import { NavLink } from 'react-router-dom';


export function CheckoutModal({ open, onCloseModal }) {
    if (!open) return null
    return (
        <>
            <NavLink to={`/gigs`}>
                <div className="modal-bgc">
                    <h1 className="modal-main flex">Thank you for choosing Tenner.</h1>
                </div>
            </NavLink>
        </>
    )
}
