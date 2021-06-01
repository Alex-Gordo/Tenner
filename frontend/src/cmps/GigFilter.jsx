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
            <form className="search-form">
                <div className="search-bar flex">
                    <input className="search-input" name="text" type="text" id="text-input" placeholder='Try "Design"' onChange={this.handleChange} />
                    <button className="search-btn btn">Search</button>
                </div>
            </form>
        )
    }
}

