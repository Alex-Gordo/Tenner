import React from 'react'





export function CheckoutModal({ open, onCloseModal }) {
    if (!open) return null
    return (
        <div>
            <p>Thank you for choosing Tenner.</p>
            <img className="success-img" alt=""
            />
            <button onClick={onCloseModal}
            ></button>
        </div>
    )
}
