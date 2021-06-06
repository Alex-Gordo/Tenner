import React, { Component } from 'react';
import MaterialTable  from 'material-table';

export class Table extends Component {
    render() {
        const data = [
            {name:'Yaron',price:`$${30}`, date: new Date().toLocaleString(), status: 'new'},
            {name:'Asaf',price:`$${20}`, date: new Date(1622909920371).toLocaleString(), status: 'pending'},
            {name:'Alon',price:`$${10}`, date: new Date(1602909920371).toLocaleString(), status: 'new'},
            {name:'Moria',price:`$${20}`, date: new Date(1620909929371).toLocaleString(), status: 'done'},
            {name:'Tamir',price:`$${20}`, date: new Date(1611909929880).toLocaleString(), status: 'done'},
        ]
        const columns = [
            {title:'Name', field:'name'},
            {title:'Date', field:'date'},
            {title:'Price', field:'price'},
            {title:'Status', field:'status'},
            {title:'', field:''},
        ]
        return (

            <div>
                <MaterialTable title="Orders"
                    data={ data}
                    columns={columns }
                    options={{
                        exportButton: true,
                        filtering : true
                    }}
                />
            </div>

            // <div>
            //              <table className="">
            //             <thead>
            //                 <th>Name</th>
            //                 <th>Date</th>
            //                 <th>Delivery Time</th>
            //                 <th>Actions</th>
            //                 <th>Price</th>
            //             </thead>
            //             <tbody>
            //                 <tr>
            //                     <td>Asaf</td>
            //                     <td></td>
            //                     <td></td>
            //                     <td>
            //                         <button>Approve</button>
            //                         <button>Cancel</button>
            //                     </td>
            //                     <td></td>
            //                 </tr>
            //                 <tr>
            //                     <td>Yaron</td>
            //                     <td></td>
            //                     <td></td>
            //                     <td>
            //                         <button>Approve</button>
            //                         <button>Cancel</button>
            //                     </td>
            //                     <td></td>
            //                 </tr>
            //             </tbody>
            //         </table>
            // </div>
        )
    }
}
