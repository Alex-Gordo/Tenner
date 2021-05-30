import React from 'react'
import hero from '../assets/img/bg-hero-1.png'


export function Hero() {
    return (
        <div className="hero hero-container">
            <img src={hero} alt="hero"></img>
            <h1 className="hero-title">Find the perfect <span>freelance</span> services for your business</h1>
        </div>
    )
}
