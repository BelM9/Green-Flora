import { useState } from 'react'
import '../styles/cart.css'
function Cart() {
	const monsteraPrice = 8
	const [ cart, updateCart ] = useState(0)
	const [ isOpen, setIsOpen ] = useState(true)

	return isOpen ? (
		<div className='gf-cart'>
			<button
				className='gf-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			<div>Monstera : {monsteraPrice} d </div>
			<button onClick={() => updateCart(cart + 1)}>Ajouter</button>
			<h3>Total : {monsteraPrice * cart} d</h3>
			<button
				className='gf-cart-toggle-button'
				onClick={() => updateCart(0)}
			>
				Vider le Panier
			</button>
		</div>
	) : (
			<div className='gf-cart-closed'>
				<button
					className='gf-cart-toggle-button'
					onClick={() => setIsOpen(true)}
				>
					Ouvrir le Panier
			</button>
			</div>
		)
}

export default Cart
