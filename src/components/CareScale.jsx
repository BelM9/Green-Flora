
// function CareScale(props) {
//     const scaleValue = props.scaleValue
//     return <div>{scaleValue}☀️</div>
// }

// export default CareScale

// function CareScale(props) {
//     const scaleValue = props.scaleValue
//     const range = [1, 2, 3]
//     return (
//         <div>
//             {range.map((rangeElem) =>
//                 scaleValue >= rangeElem ? <span key={rangeElem.toString()}>☀️</span> : null
//             )}
//         </div>
//     )
// }

// export default CareScale

function CareScale({ scaleValue, careType }) {
	const range = [ 1, 2, 3 ]
	const scaleType = careType === 'light' ? '☀️' : '💧'

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()} className='gf-scaleType'>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
