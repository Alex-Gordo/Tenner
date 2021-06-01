import { Component } from 'react';
import React from 'react'
import { GigFilter } from './GigFilter';
import { connect } from 'react-redux';
import { loadGigs } from '../store/actions/gigActions.js';

export class _Hero extends Component {

    state = {
        gigs: []
    }

    onSetFilter = (filterBy) => {
        this.props.loadGigs(filterBy)
    }

    render() {
        return (
            <div className="hero hero-container">
                <main className="content main-layout">
                    <h1 className="hero-title-main">Find the perfect <span>freelance</span></h1>
                    <h1 className="hero-title-secondary">services for your business</h1>
                    <div className="search-container">
                        <GigFilter onSetFilter={this.onSetFilter} />
                    </div>
                </main>
            </div>
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


export const Hero = connect(mapStateToProps, mapDispatchToProps)(_Hero)

