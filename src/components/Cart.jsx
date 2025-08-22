import React from 'react'

function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return (<div>
        <h2>Panier</h2>
        <ul>
            <li>Monstera : {monsteraPrice}d</li>
            <li>Lierre : {ivyPrice}d</li>
            <li>Fleurs : {flowerPrice}d</li>
        </ul>
        Total : {monsteraPrice + ivyPrice + flowerPrice}d
    </div>)

}

export default Cart
