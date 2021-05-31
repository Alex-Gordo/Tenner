import React, { Component } from 'react';


export class GigFilter extends Component {

    state = {
        filteryBy: {
            search: ''
        }
    }

    componentDidMount() {
        // this.props.loadGigs()
        this.setState({ gigs: this.props.gigs })
    }

    handleChanges = (ev) => {
        const { search, gigs } = this.state
        ev.preventDefault()
        // const { onFilterChange } = this.props;
        // const field = ev.target.name;
        // const value = ev.target.value;
        this.setState({ search: ev.target.value })
        console.log(ev.target.value);
        // console.log('gigs', gigs);
    }

    // onSubmit = (ev) => {
    //     console.log('preventing');
    //     ev.preventDefault()
    // }


    render() {

        return (
            <div className="search-bar">
                <label htmlFor="text-input">🔍</label>
                <input name="text" type="text" id="text-input" placeholder="Search..." onChange={this.handleChanges} />
            </div>
        )
    }
}

