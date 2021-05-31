import { Component } from 'react';
import React from 'react'
import { GigFilter } from './GigFilter';

export class Hero extends Component {


    render() {
        return (
            <div className="hero hero-container">
                <main className="content main-layout">
                    <h1 className="hero-title">Find the perfect <span>freelance</span> services for your business</h1>
                    <div className="search-container">
                        <GigFilter />
                    </div>
                </main>
            </div>
        )



    }
}
