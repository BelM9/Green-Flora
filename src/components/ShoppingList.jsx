import React from 'react'
import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import CareScale from './CareScale'

function ShoppingList() {

    const categories = Array.from(new Set(plantList.map(plant => plant.category)));

    return (
        <div className='gf-container'>
            <div>
                <h2>Catégories</h2>
                <ul>
                    {categories.map((categ) => (
                        <li key={categ}>{categ}</li>
                    ))}
                </ul>
            </div>

            <hr />

            <div>
                <h2>Plantes</h2>
                <ul className='gf-plant-list'>
                    {plantList.map((plant) => (
                        <li key={plant.id} className='gf-plant-item'>
                            {plant.isBestSale && <span className="gf-Best-sale">🔥</span>}
                            {plant.name}
                            {plant.isSpecialOffer && <div className='gf-sales'>Solde</div>}

                            <CareScale scaleValue={plant.water} careType='water' />
                            <CareScale scaleValue={plant.light} careType='light' />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ShoppingList


