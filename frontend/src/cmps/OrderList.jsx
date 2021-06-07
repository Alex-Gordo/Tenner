import React from 'react'
import { OrderPreview } from './OrderPreview'


export function OrderList({ orders }) {
    console.log('orders in list', orders);
    return (
        <div className="order-list">
            {orders.map((order) => {
               return <OrderPreview key={order.id} order={order} />
            }
            )}
        </div>
    )
}


