import { Component } from 'react';
import { connect } from 'react-redux';
import { loadGigs } from '../store/actions/gigActions.js';
import { GigList } from '../cmps/GigList.jsx'
import GigFilter from '../cmps/GigFilter';

class _TennerApp extends Component {

    state = {
        gigs: []
    }

    componentDidMount() {
        this.props.loadGigs(this.getQueryString())
    }

    componentDidUpdate(prevProps, prevState) {
        const currQuery = this.getQueryString()
        let search = prevProps.location.search;
        let params = new URLSearchParams(search);
        let prevQuery = params.get('q');
        if (currQuery !== prevQuery) this.props.loadGigs(currQuery)

    }


    getQueryString = () => {
        let search = this.props.location.search;
        let params = new URLSearchParams(search);
        let searchTxt = params.get('q');
        return searchTxt
        //console.log('searchTxt', searchTxt);
    }

    render() {
        const { gigs } = this.props
        if (!gigs) return <h1>Loading...</h1> //TODO : loading component
        return (
            <main className="tenner-app main-layout">
                <div className="search-container">
                    <GigFilter />
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
