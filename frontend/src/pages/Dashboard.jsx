
import React, { Component } from 'react'

export class Dashboard extends Component {
    render() {
        return (
            <div className="main-layout">

                <div className="dashboard-container main-layout flex">
                    <aside className="user-stats flex">
                        <button>Logout</button>
                        <img src="" alt="" />
                        <h3>user.name</h3>
                        <h5>level 2 seller</h5>
                        <h2>Notifications</h2>
                    </aside>
                    <main className="orders-container">
                        <ul className="order-ul flex">
                            <li className="order-container">
                                <section className="order-card flex">
                                    <div className="flex order-details">
                                        <h2>Total Price</h2>
                                        <h3>$33</h3>
                                    </div>
                                </section>
                            </li>
                            <li className="order-container">
                                <section className="order-card flex">
                                    <div className="flex order-details">
                                        <h2>Total Orders</h2>
                                        <h3>2</h3>
                                    </div>
                                </section>
                            </li>
                            <li className="order-container">
                                <section className="order-card flex">
                                    <div className="flex order-details">
                                        <h2>Avg. Price</h2>
                                        <h3>$11</h3>
                                    </div>
                                </section>
                            </li>
                            <li className="order-container">
                                <section className="order-card flex">
                                    <div className="flex order-details">
                                        <h2>Best Buyer</h2>
                                        <h3>Asaf</h3>
                                    </div>
                                </section>
                            </li>




                        </ul>
                    </main>

                </div>
                    <table className="flex">

                    </table>

            </div>
        )
    }
}
