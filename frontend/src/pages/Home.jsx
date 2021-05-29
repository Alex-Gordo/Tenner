import React from 'react'
import { connect } from 'react-redux';
import { Component } from 'react';
import { GigTopRated } from '../cmps/GigTopRated.jsx';
import { loadGigs } from '../store/actions/gigActions.js';


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
                <div className="hero">
                    <img className="img" src="https://cdn.pixabay.com/photo/2019/04/25/14/43/workplace-4155023_960_720.jpg" alt="hero"></img>
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
