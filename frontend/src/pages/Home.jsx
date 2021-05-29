import React from 'react'
import { connect } from 'react-redux';
import { Component } from 'react';
import { GigTopRated } from '../cmps/GigTopRated.jsx';
import { loadGigs } from '../store/actions/gigActions.js';
import hero from '../assets/img/bg-hero-1.png'



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
                <div className="hero hero-container">
                    <img src={hero} alt="hero"></img>
                    <h1 className="hero-title">Find the perfect freelance services for your business</h1>
                </div>
                <GigTopRated gigs={this.props.gigs} />
            </React.Fragment>
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

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)
