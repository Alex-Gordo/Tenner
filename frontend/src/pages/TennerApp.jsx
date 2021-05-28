import { Component } from 'react';
import { connect } from 'react-redux';
import { loadGigs } from '../store/actions/gigActions.js';
import { GigList } from '../cmps/GigList.jsx'

class _TennerApp extends Component {

    state = {
        gigs: []
    }

    componentDidMount() {
        this.props.loadGigs()
    }

    render() {
        return (
            <main className="gig-app">
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


export const TennerApp = connect(mapStateToProps,mapDispatchToProps)(_TennerApp)
