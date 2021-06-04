
import React, { Component } from 'react'
import { userService } from '../services/userService'





export class Dashboard extends Component {


    state = {
        user: userService.getLoggedinUser()
    }

    render() {
        if(!this.state.user) return 'no user loaded'

        return (
            
            <div className="main-layout dashboard-container flex">
                <aside className="user-stats flex">
                    {/* <button>Logout</button> */}
                    <img src={this.state.user.imgUrl} alt="" />
                    <h3>{this.state.user.fullname}</h3>
                    <h5>level 2 seller</h5>
                    <h2>Notifications</h2>
                </aside>


                <div className="dashboard-main flex">
                    <main className="orders-container">
                        <ul className="order-ul flex">
                            <li className="order-container">
                                <section className="order-card flex">
                                    <div className="flex order-details">
                                        <h2>Revenue</h2>
                                        <h3>$33</h3>
                                    </div>
                                </section>
                            </li>
                            <li className="order-container">
                                <section className="order-card flex">
                                    <div className="flex order-details">
                                        <h2>No. of Orders</h2>
                                        <h3>2</h3>
                                    </div>
                                </section>
                            </li>
                            <li className="order-container">
                                <section className="order-card flex">
                                    <div className="flex order-details">
                                        <h2>Avg. Income</h2>
                                        <h3>$11</h3>
                                    </div>
                                </section>
                            </li>
                            <li className="order-container">
                                <section className="order-card flex">
                                    <div className="flex order-details">
                                        <h2>Fav. Buyer</h2>
                                        <h3>Asaf</h3>
                                    </div>
                                </section>
                            </li>
                        </ul>
                    </main>

                    <table className="">
                        <thead>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Delivery Time</th>
                            <th>Actions</th>
                            <th>Price</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Asaf</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button>Approve</button>
                                    <button>Cancel</button>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Yaron</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button>Approve</button>
                                    <button>Cancel</button>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="graphs-container flex">
                        <div className="pie-graph"></div>
                        <div className="columns-graph"></div>
                    </div>

                </div>

            </div>
        )
    }
}
