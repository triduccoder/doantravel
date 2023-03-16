import {useEffect, useRef} from 'react'

const payBtn = () => {
	const refPayBtn = useRef()

	useEffect(()=>{
		paypal.Buttons({
			createOrder: function(data,actions) {
				return actions.order.create({
					purchase_units: [{
						amount: {
							value: '0.01'
						}
					}]
				})
			},
			onApply: function(data,actions) {
				return actions.order.capture().then(function(details) {
					alert("transaction completed by "+ details.payer.name.given_name)
				})
			}
		}).render('#paypal-button-container')
	},[])

	return (
		<div ref={refPayBtn}>
			{/* <button type="button" className="btn btn-primary">Click now</button> */}
		</div>
	)
}

export default payBtn