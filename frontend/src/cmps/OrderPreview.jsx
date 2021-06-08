import React from 'react'
import { ProgressButton } from './ProgressButton'


export function OrderPreview({ order }) {
    // console.log('order in preview', order);

    // console.log('timeeeee',order.date, new Date(order.date).toLocaleString());

    return (
        <div className="order-preview-container">
            <h3>{order.name}</h3>
            <p>Price: ${order.price}</p>
            <p>Order recieved at: {new Date(order.date).toLocaleString()}</p>
            <h5>status: {order.status}</h5>
            <ProgressButton status={order.status} />
      
        </div>
    )
}

    // <div>{new Date (loggedInUser.orders[0].date).toLocaleString()}</div>

// id: 1, name: "Yaron Vitor", price: 18, date: "new Date().toLocaleString()", status: "new"