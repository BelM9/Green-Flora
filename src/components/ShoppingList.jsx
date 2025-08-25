import React from 'react'
import { plantList } from '../datas/plantList'

// // const plantList = [
// //     'monstera',
// //     'ficus lyrata',
// //     'pothos argenté',
// //     'yucca',
// //     'palmier'
// // ]

// function ShoppingList() {
//     const categories = plantListDatas.reduce(
// 		(acc, plant) =>
// 			acc.includes(plant.category) ? acc : acc.concat(plant.category),
// 		[]
// 	)
//     return (
//         <div>
//             <ul>

//                 {/* { plantList.map( (plant) => (<li>{plant}</li>) ) 
//                 {   // utilisons key = index
//                     planList.map((plant, index) => (<li key={`${plant}-${index}`}>{plant}</li>))
//                 } */}

//                 {categories.map((cat) => (
// 					<li key={cat}>{cat}</li>
// 				))}
//             </ul>
//             <ul>
// 				{plantListDatas.map((plant) => (
// 					<li key={plant.id}>{plant.name}</li>
// 				))}
// 			</ul>
//         </div >
//     )
// }

// export default ShoppingList

function ShoppingList() {
//     const categories = []
//     plantList.map((plant) => {
//         categories.forEach((plant.category) => {
//             if(!categories.includes(plant.category)) {
//             categories.push(plant.category)
//         }
//     })
// }

const categories = Array.from(new Set(plantList.map(plant => plant.category)));

return (
    <>
        <div>
            <h2>Catégories</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
        </div>

        <hr />

        <div>
            <h2>Plantes</h2>
            <ul>
                {plantList.map((plant) => (
                    <li key={plant.id}>{plant.name}</li>
                ))}
            </ul>
        </div>
    </>
)
}

export default ShoppingList
