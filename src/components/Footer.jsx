import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
	
	function hundleInput(e){
       setInputValue(e.target.value)
	}
    
	const isInputAT = inputValue.includes('@')
	const isInputDot = inputValue.includes('.')
	const isValid= isInputAT && isInputDot
	
	function hundleBlur(){
       if (!isValid){
		  alert("Attention, ceci n'est pas une adresse valide")
	   }
	}   

	return (
		<footer className='gf-footer'>
			<div className='gf-footer-elem'>
				Pour les passionnés de plantes 🌿🌱🌵
			</div>
			<div className='gf-footer-elem'>Laissez-nous votre mail :</div>
			<input
			   placeholder="Votre email"
			   minLength="5"
			   maxLength="50"
			   type="email"
			   onChange={(e) => hundleInput(e)}
			   value={inputValue}
			   onBlur={hundleBlur}
			/>
			<button onClick={()=>alert("Merci pour votre mail : " + inputValue)} 
			        disabled={!isValid}>
				   Envoyer
			</button>
		</footer>
	)
}

export default Footer