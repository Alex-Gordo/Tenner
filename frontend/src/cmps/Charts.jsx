import React, { Component } from 'react';
import { userService } from '../services/userService';
// import { PieChartTest } from '../cmps/PieChartTest.jsx';


// const orders = userService.getLoggedinUser().orders

export class Charts extends Component {

    componentDidMount() {
        this.setState({ orders: userService.getLoggedinUser().orders })
    }

    state = {
        activeIndex: 0,
        orders: null
    };

    onPieEnter = (_, index) => {
        this.setState({
            activeIndex: index,
        });
    };

    render() {
        // const {orders} = this.state
        return (
            <div className="charts flex">
                {/* <PieChartTest /> */}
            </div>

        )
    }
}