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

    render() {
        return (
            <main className="tenner-app main-layout">
                <div className="search-container">
                    <GigFilter gigs={this.props.gigs} />
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
