import React from 'react'
import { ProgressButton } from './ProgressButton'


export function OrderPreview({ order }) {
    console.log('order in preview', order);



    return (
        <div className="order-preview-container">
            <h3>{order.name}</h3>
            <p>Price: ${order.price}</p>
            <p>Order recieved at: {order.date}</p>
            <h5>status: {order.status}</h5>
            <ProgressButton status={order.status} />
      
        </div>
    )
}


// id: 1, name: "Yaron Vitor", price: 18, date: "new Date().toLocaleString()", status: "new"