//rfce - ES7 snippet
import React from 'react'
import '../styles/banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title = 'Green Flora'
    return (
        <div className='gf-banner'>
            <img src={logo} alt={title} className='gf_logo' />
            <h1 h1 className='gf-title'>{title}</h1>
        </div>
    )
}

export default Banner

