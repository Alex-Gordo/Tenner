
import React, { Component } from 'react'
import { userService } from '../services/userService'
// import { Charts } from '../cmps/Charts.jsx';
// import { BarChartTest } from '../cmps/BarChartTest.jsx';
import { Table } from '../cmps/Table.jsx';
import { connect } from 'react-redux';



class _Dashboard extends Component {

    state = {
        // user: userService.getLoggedinUser()
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        console.log('this.props.loggedInUser', this.props.loggedInUser);
    }

    render() {
        const { loggedInUser } = this.props;
        if (!loggedInUser) return <div>no user loaded</div>
        const totalIncome = loggedInUser.orders.reduce((currentTotal, price) => {
            return price.price + currentTotal;
        }, 0);
        const avrPrice = totalIncome / loggedInUser.orders.length;

        return (

            <div className="main-layout dashboard-container flex">
                <aside className="user-stats flex">
                    {/* <button>Logout</button> */}
                    <img src={loggedInUser.imgUrl} alt="" />
                    <h3>{loggedInUser.fullname}</h3>
                    <h5>Level 2 Seller</h5>
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
                                        <h3>{loggedInUser.orders.length}</h3>
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
                        {/* <Charts /> */}
                    </div>
                    <Table />
                </div>

            </div>
        )
    }
}

function mapStateToProps({ userModule }) {
    return {
        loggedInUser: userModule.loggedInUser
    }
}

const mapDispatchToProps = {
    // loadGigs
}

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(_Dashboard)
