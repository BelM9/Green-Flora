import React from 'react'

const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

function ShoppingList() {
    return (
        <div>
            <ul>
                {/*    {plantList.map((plant) => (
                    <li>{plant}</li>
                ))}
                */}

                {plantList.map((plant, index) => (
                    <li key={`${plant}-${index}`}>{plant}</li>
                ))}

            </ul>
        </div>
    )
}

export default ShoppingList
