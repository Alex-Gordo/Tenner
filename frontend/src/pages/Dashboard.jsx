
import React, { Component } from 'react'
// import { Charts } from '../cmps/Charts.jsx';
// import { BarChartTest } from '../cmps/BarChartTest.jsx';
// import { Table } from '../cmps/Table.jsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import { OrderList } from '../cmps/OrderList'




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
        console.log(loggedInUser);
        if (!loggedInUser) return <div>no user loaded</div>
        const totalIncome = loggedInUser.orders.reduce((currentTotal, price) => {
            return price.price + currentTotal;
        }, 0);
        const avrPrice = totalIncome / loggedInUser.orders.length;

        return (
            
            <div className="main-layout dashboard-container flex">
                <aside className="user-stats flex">
                    <img src={loggedInUser.imgUrl} alt="" />
                    <h3>{loggedInUser.fullname}</h3>
                    <p>Total Income: ${totalIncome}</p>
                    <p>Avg. Revenue: ${avrPrice.toFixed(2)}</p>
                    <p>Level 2 Seller</p>
                </aside>
                <div className="orders">
                    <OrderList orders={loggedInUser.orders} />
                </div>
            </div>

            //     <div className="dashboard-main flex">
            //         <main className="orders-container">
            //             <ul className="order-ul flex">
            //                 <li className="order-container">
            //                     <section className="order-card flex">
            //                         <div className="flex order-details">
            //                             <h2>Revenue</h2>
            //                             <h3>${totalIncome}</h3>
            //                         </div>
            //                     </section>
            //                 </li>
            //                 <li className="order-container">
            //                     <section className="order-card flex">
            //                         <div className="flex order-details">
            //                             <h2>No. of Orders</h2>
            //                             <h3>{loggedInUser.orders.length}</h3>
            //                         </div>
            //                     </section>
            //                 </li>
            //                 <li className="order-container">
            //                     <section className="order-card flex">
            //                         <div className="flex order-details">
            //                             <h2>Avg. Income</h2>
            //                             <h3>${avrPrice.toFixed(2)}</h3>
            //                         </div>
            //                     </section>
            //                 </li>
            //                 <li className="order-container">
            //                     <section className="order-card flex">
            //                         <div className="flex order-details">
            //                             <h2>Fav. Buyer</h2>
            //                             <h3>Asaf</h3>
            //                         </div>
            //                     </section>
            //                 </li>
            //             </ul>
            //         </main>

            //         <div className="graphs-container flex">
            //             {/* <Charts /> */}
            //         </div>
            //         <Table user={this.state.user} />
            //     </div>

            // </div>
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
