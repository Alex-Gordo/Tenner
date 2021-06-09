import React from 'react'
import { connect } from 'react-redux';
import { Component } from 'react';
import { GigTopRated } from '../cmps/GigTopRated.jsx';
import { Hero } from '../cmps/Hero.jsx';
import { loadGigs } from '../store/actions/gigActions.js';
import { GigCategories } from '../cmps/GigCategories.jsx';
import ReactLoading from 'react-loading';




class _Home extends Component {
    state = {
        gigs: []
    }

    componentDidMount() {
        this.props.loadGigs()
    }

    render() {
        return (
            <React.Fragment>
                <Hero />
                <div className="home-filters-container main-layout">
                    <GigTopRated gigs={this.props.gigs} />
                    <GigCategories />
                </div>
            </React.Fragment>
        )
    }
}


function mapStateToProps({ gigModule }) {
    {(!gigModule) && <>
        <ReactLoading type='spin' color='#1dbf73' height={'100%'} width={100} />
    </>}
    return {
        gigs: gigModule.gigs
    }
}

const mapDispatchToProps = {
    loadGigs
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)
