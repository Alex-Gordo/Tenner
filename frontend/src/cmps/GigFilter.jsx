import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class GigFilter extends Component {

    state = {
        searchTxt: '',
    }

    onSearch = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/gigs?q=${this.state.searchTxt}`);
    }

    handleChange = (ev) => {
        ev.preventDefault()
        this.setState({ searchTxt: ev.target.value })
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.onSearch}>
                <div className="search-bar flex">
                    <label>
                        <input className="search-input" name="text" type="text" id="text-input" placeholder='Try "Design"' onChange={this.handleChange} />
                    </label>
                    <button className="search-btn btn">Search</button>
                </div>
            </form>
        )
    }
}

export default withRouter(GigFilter)

