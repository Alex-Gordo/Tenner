import { Component } from 'react';
import { connect } from 'react-redux';
import { loadGigs } from '../store/actions/gigActions.js';
import { GigList } from '../cmps/GigList.jsx'
import GigFilter from '../cmps/GigFilter';
import ReactLoading from 'react-loading';

class _TennerApp extends Component {

    state = {
        gigs: []
    }

    componentDidMount() {
        window.scrollTo(0, 0)
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
    }

    render() {
        const { gigs } = this.props

        return (
            <main className="tenner-app main-layout">
                <div className="search-container flex">
                    <GigFilter />
                    <div className="button-container flex">
                        <button className="sort-btn">Price <i className='fas fa-arrow-down'></i></button>
                        <button className="sort-btn">Rating <i className='fas fa-arrow-down'></i></button>
                        <button className="sort-btn">Seller level <i className='fas fa-arrow-down'></i></button>
                    </div>
                </div>

                {(!gigs) && <>
                    <ReactLoading type='spin' color='#1dbf73' height={'100%'} width={100} />
                </>}


                {(gigs) && <>
                    <GigList gigs={this.props.gigs} />
                </>}

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
