import React from 'react'
import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

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
                    {plantList.map(({ id, cover, name, water, light }) => (
                        <PlantItem
                            id={id}
                            cover={cover}
                            name={name}
                            light={light}
                            water={water}
                        />
                    ))}
                </ul>
            </div>
        </div >
    )
}

export default ShoppingList


