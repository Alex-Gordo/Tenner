import { Component } from 'react';
import { connect } from 'react-redux';
import { loadGigs } from '../store/actions/gigActions.js';
import { GigList } from '../cmps/GigList.jsx'
import { GigFilter } from '../cmps/GigFilter';

class _TennerApp extends Component {

    state = {
        gigs: []
    }

    componentDidMount() {
        this.props.loadGigs()
    }

    onSetFilter = (filterBy) => {
        this.props.loadGigs(filterBy)
    }


    render() {
        const { gigs } = this.props
        if (!gigs) return <h1>Loading...</h1> //TODO : loading component
        return (
            <main className="tenner-app main-layout">
                <div className="search-container">
                    <GigFilter onSetFilter={this.onSetFilter} />
                </div>

                <GigList gigs={this.props.gigs} />
            </main>
        )
    }
}

function mapStateToProps({ gigModule }) {
    return {
        gigs: gigModule.gigs
    }
}

const mapDispatchToProps = {
    loadGigs
}


export const TennerApp = connect(mapStateToProps, mapDispatchToProps)(_TennerApp)
