import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


export class BarChartTest extends Component {
    render() {
        return (
            <div>
                <Bar
                    data={{
                        labels: ['Yaron', 'Asaf', 'Moria', 'Alon', 'Tamir', 'Basya'],
                    }}
                    width={600} height={400}
                    options={{maintainAspectRatio:false}}

                >
                    </Bar>
            </div>
        )
    }
}
