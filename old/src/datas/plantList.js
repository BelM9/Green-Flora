import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import yucca from '../assets/mint.jpg'
import olivier from '../assets/olivier.jpg'
import geranium from '../assets/calathea.jpg'
import basilique from '../assets/basil.jpg'
import aloe from '../assets/cactus.jpg'
import succulente from '../assets/succulent.jpg'

export const plantList = [
	{
		id: '1ed',
		cover: monstera,
		name: 'monstera',
		category: 'classique',
		isBestSale: true,
		light: 2,
		water: 3
	},
	{
		id: '2ab',
		cover: lyrata,
		name: 'ficus lyrata',
		category: 'classique',
		light: 3,
		water: 1
	},
	{
		id: '3sd',
		cover: pothos,
		name: 'pothos argenté',
		category: 'classique',
		isSpecialOffer: true,
		light: 1,
		water: 2
	},
	{
		id: '4kk',
		cover: yucca,
		name: 'yucca',
		category: 'classique',
		light: 3,
		water: 1
	},
	{
		id: '5pl',
		cover: olivier,
		name: 'olivier',
		category: 'extérieur',
		light: 3,
		water: 1
	},
	{
		id: '6uo',
		cover: geranium,
		name: 'géranium',
		category: 'extérieur',
		light: 2,
		water: 2
	},
	{
		id: '7ie',
		cover: basilique,
		name: 'basilique',
		category: 'extérieur',
		isSpecialOffer: true,
		isBestSale: true,
		light: 2,
		water: 3
	},
	{
		id: '8fp',
		cover: aloe,
		name: 'aloe',
		category: 'plante grasse',
		isSpecialOffer: true,
		light: 2,
		water: 1
	},
	{
		id: '9vn',
		cover: succulente,
		name: 'succulente',
		category: 'plante grasse',
		light: 2,
		water: 1
	}
]