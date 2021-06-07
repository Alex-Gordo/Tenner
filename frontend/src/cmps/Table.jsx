import React, { useState } from 'react';
import MaterialTable from 'material-table';


const orders = [
    { id: 1, name: 'Yaron Vitor', price: `$${18}`, date: new Date().toLocaleString(), status: 'new' },
    { id: 2, name: 'Moria Paras', price: `$${29}`, date: new Date(1620509929371).toLocaleString(), status: 'done' },
    { id: 3, name: 'Asaf Marguliz', price: `$${11}`, date: new Date(1622909220371).toLocaleString(), status: 'pending' },
    { id: 4, name: 'Basya K', price: `$${40}`, date: new Date(1611555529880).toLocaleString(), status: 'done' },
    { id: 5, name: 'Asaf Marguliz', price: `$${91}`, date: new Date(1612909920371).toLocaleString(), status: 'done' },
    { id: 6, name: 'Tamir Lev', price: `$${16}`, date: new Date(1611909927777).toLocaleString(), status: 'new' },
    { id: 7, name: 'Yaron Vitor', price: `$${26}`, date: new Date(1612909920371).toLocaleString(), status: 'new' },
    { id: 8, name: 'Asaf Marguliz', price: `$${18}`, date: new Date(1622909920371).toLocaleString(), status: 'done' },
    { id: 9, name: 'Alon Bai', price: `$${80}`, date: new Date(1602909920371).toLocaleString(), status: 'new' },
    { id: 10, name: 'Moria Paras', price: `$${77}`, date: new Date(1623909929371).toLocaleString(), status: 'done' },
    { id: 11, name: 'Asaf Marguliz', price: `$${50}`, date: new Date(1622309920371).toLocaleString(), status: 'done' },
    { id: 12, name: 'Moria Paras', price: `$${13}`, date: new Date(1620909449371).toLocaleString(), status: 'done' },
    { id: 13, name: 'Tamir Lev', price: `$${50}`, date: new Date(1611909929880).toLocaleString(), status: 'done' },
    { id: 14, name: 'Tamir Lev', price: `$${24}`, date: new Date(1611904444880).toLocaleString(), status: 'done' },
    { id: 15, name: 'Asaf Marguliz', price: `$${37}`, date: new Date(1622969920371).toLocaleString(), status: 'pending' },
    { id: 16, name: 'Basya K', price: `$${22}`, date: new Date(1611907676880).toLocaleString(), status: 'done' },
    { id: 17, name: 'Moria Paras', price: `$${68}`, date: new Date(1620909929371).toLocaleString(), status: 'done' },
]


export function Table() {
    const [data, setData] = useState(orders);
    const columns = [
        { title: 'ID', field: 'id', editable: false },
        { title: 'Name', field: 'name' },
        { title: 'Date', field: 'date' },
        { title: 'Price', field: 'price' },
        { title: 'Status', field: 'status' },
    ];

    return (
        <div>
            <MaterialTable title="Orders"
                data={data}
                columns={columns}
                editable={{
                    onRowAdd: (newRow) => new Promise((res, rej) => {
                        const updatedRows = [...data, {
                            id: ~~(Math.random() * 100),
                            date: new Date().toLocaleString(),
                            status: 'new', ...newRow
                        }]
                        setTimeout(() => {
                            setData(updatedRows)
                            res()
                        }, 2000)
                    }),
                    onRowDelete: selectedRow => new Promise((res, rej) => {
                        const rowIndex = selectedRow.tableData.id;
                        const updatedRows = [...data]
                        updatedRows.splice(rowIndex, 1)
                        setTimeout(() => {
                            setData(updatedRows)
                            res()
                        }, 2000)
                    }),
                    onRowUpdate: (updatedRow, oldRow) => new Promise((res, rej) => {
                        const rowIndex = oldRow.tableData.id;
                        const updatedRows = [...data]
                        updatedRows[rowIndex] = updatedRow
                        setTimeout(() => {
                            setData(updatedRows)
                            res()
                        }, 2000)
                    })
                }}
                options={{
                    exportButton: true,
                    filtering: true,
                    actionsColumnIndex: -1, addRowPosition: "first"
                }}
            />
        </div>
    );
}

