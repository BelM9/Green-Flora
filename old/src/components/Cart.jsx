import React from 'react'
import '../styles/cart.css'

function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return (<div className='gf-cart'>
        {/*h2+(ul>li*3)+p*/}
        <h2></h2>
        <ul>
            <li>Monstera : {monsteraPrice} d</li>
            <li>Lierre   : {ivyPrice} d</li>
            <li>Fleurs   : {flowerPrice} d</li>
        </ul>
        <p>Total : {monsteraPrice + ivyPrice + flowerPrice} d</p>

    </div>)
}
export default Cart