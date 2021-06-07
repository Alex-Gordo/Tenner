
import React, { Component } from 'react'
import { userService } from '../services/userService'
import { Charts } from '../cmps/Charts.jsx';
// import { BarChartTest } from '../cmps/BarChartTest.jsx';
import { Table } from '../cmps/Table.jsx';



export class Dashboard extends Component {

    state = {
        user: userService.getLoggedinUser()
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        if (!this.state.user) return 'no user loaded'
        const { user } = this.state;
        const totalIncome = user.orders.reduce((currentTotal, price) => {
            return price.price + currentTotal;
        }, 0);
        const avrPrice = totalIncome / user.orders.length;

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
                                        <h3>${totalIncome}</h3>
                                    </div>
                                </section>
                            </li>
                            <li className="order-container">
                                <section className="order-card flex">
                                    <div className="flex order-details">
                                        <h2>No. of Orders</h2>
                                        <h3>{user.orders.length}</h3>
                                    </div>
                                </section>
                            </li>
                            <li className="order-container">
                                <section className="order-card flex">
                                    <div className="flex order-details">
                                        <h2>Avg. Income</h2>
                                        <h3>${avrPrice.toFixed(2)}</h3>
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

                    <div className="graphs-container flex">
                        <Charts />
                    </div>
                    <Table />
                </div>

            </div>
        )
    }
}
