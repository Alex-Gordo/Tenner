import React, { Component } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import { BarChartTest } from '../cmps/BarChartTest.jsx';
import { userService } from '../services/userService';




const data01 = [
    { name: 'Yaron', value: 44 },
    { name: 'Asaf', value: 207 },
    { name: 'Moria', value: 187 },
    { name: 'Alon', value: 80 },
    { name: 'Tamir', value: 90 },
    { name: 'Basya', value: 62 },
];
const data02 = [
    { name: 'Yaron', order1: 18, order2: 26 },
    { name: 'Asaf', order1: 11, order2: 50, order3: 37, order4: 91, order5: 18 },
    { name: 'Moria', order1: 68, order2: 77, order3: 29, order4: 13 },
    { name: 'Alon', order1: 80 },
    { name: 'Tamir', order1: 50, order2: 16, order3: 24 },
    { name: 'Basya', order1: 40, order2: 22 }

];




const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="$clr1">{`$ ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="$clr1">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

// const orders =  userService.getLoggedinUser().orders


export class Charts extends Component {

    componentDidMount () {
        this.setState({orders: userService.getLoggedinUser().orders})
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
        const {orders} = this.state
        if (!orders) return <div>no orders yet</div>
        return (
            <>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie
                            activeIndex={this.state.activeIndex}
                            activeShape={renderActiveShape}
                            data={orders}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#1dbf73"
                            dataKey="value"
                            onMouseEnter={this.onPieEnter}
                        />
                    </PieChart>

                </ResponsiveContainer>
                <BarChartTest />
            </>
        )
    }
}