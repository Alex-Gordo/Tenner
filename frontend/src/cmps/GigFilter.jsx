import React, { Component } from 'react';


export class GigFilter extends Component {

    state = {
        filteryBy: {
            searchTxt: '',
            category: '',
            budget: '',
        }
    }

    handleChange = (ev) => {
        const { search, gigs } = this.state
        ev.preventDefault()

        this.setState({ searchTxt: ev.target.value })
        console.log(ev.target.value);
        // console.log('gigs', gigs);
    }

    render() {
        return (
            <div className="search-bar">
                <label htmlFor="text-input">🔍</label>
                <input name="text" type="text" id="text-input" placeholder="Search..." onChange={this.handleChange} />
            </div>
        )
    }
}

