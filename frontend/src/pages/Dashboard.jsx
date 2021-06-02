
import React, { Component } from 'react'

export  class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container main-layout flex">
                <aside className="user-stats flex">
                    <button>Logout</button>
                    <img src="" alt=""  />
                    <h3>user.name</h3>
                    <h5>level 2 seller</h5>
                    <h2>Notifications</h2>
                </aside>
                <main className ="stats-container flex">
                    <nav className="stats">
                        <div fieldset="sss">CCC</div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </nav>

                </main>
            </div>
        )
    }
}
