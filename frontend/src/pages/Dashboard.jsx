
import React, { Component } from 'react'
// import { Charts } from '../cmps/Charts.jsx';
// import { BarChartTest } from '../cmps/BarChartTest.jsx';
// import { Table } from '../cmps/Table.jsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import {loadUser} from '../store/actions/userActions'
import { OrderList } from '../cmps/OrderList';
import { Charts} from '../cmps/Charts';




class _Dashboard extends Component {

    state = {
        // user: userService.getLoggedinUser()
        intervalId:null
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.loadUser(this.props.loggedInUser._id)
        const intervalId = setInterval(() => {
            this.props.loadUser(this.props.loggedInUser._id)
        }, 5000);
        this.setState({intervalId})
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }
    

    render() {
        const { loggedInUser } = this.props;
        // console.log(loggedInUser);
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
                    <Charts/>
                    <OrderList orders={loggedInUser.orders} />
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
    loadUser
}

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(_Dashboard)
