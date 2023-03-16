import Head from 'next/head'
import { useContext,useState, useEffect } from 'react'
import {DataContext} from '../store/GlobalState'
import CartItem from "../components/CartItem"
import Link from "next/link"
import paysuccess from '../pages/paysuccess'
import PayBtn from '../pages/payBtn'
import {getData} from '../utils/fetchData'
const Cart = () =>{
	const {state, dispatch} = useContext(DataContext)
	const {cart,auth} = state
	const [total, setTotal] = useState(0)
	const [address, setAddress] = useState("")
	const [mobile, setMobile] = useState("")
	const [payment, setPayment] = useState(false)

	//xử lý tính tổng tiền
	useEffect(()=>{
		const getTotal = () =>{
			const res = cart.reduce((prev,item) => {
				return prev + (item.price * item.quantity)
			},0)
			setTotal(res)
		}
		getTotal()
	},[cart])
	// tính tổng số lượng đặt
	useEffect(()=>{
		const cartLocal = JSON.parse(localStorage.getItem("__next__cart__team3"))
		if(cartLocal && cartLocal.length > 0){
			let newArr = [];
			const updateCart = async () =>{
				for(const item of cartLocal){
					const res = await getData(`product/${item._id}`)
					const {_id, title, images, price,inStock} = res.product
					if(inStock > 0){
						newArr.push({_id, title, images, price, inStock,
						quantity: item.quantity > inStock ? 1 : item.quantity
						})
					}
				}
				dispatch({type:"ADD_CART",payload: newArr})
			}
			updateCart()
		}
	},[])

	const handleOrder = () => {
		if(!address || !mobile)
			return dispatch({ type: "NOTIFY", payload: {error: "Please enter address and mobile."}})
		setPayment(true)
	}


	const NotEmpty = () => {
		return (
			<div align="center">
				<h2>Sorry, you don't have any orders yet !!!</h2>
				<img className="img-responsive w-100" src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-simple-travel-theme-sticker-png-image_4181259.jpg" />
			</div>
		)
	}

	if(cart.length === 0) return <NotEmpty />

	return(
		<div className="row mx-auto">
			<Head>
				<title>Cart Page</title>
			</Head>
			
			<div className="col-md-8 text-secondary table-responsive my-3">
				<h2 className="text-uppercase w-100 text-center">TICKET INFORMATION</h2>

				<table className="table my-3">
					<tbody className="">
						{
							cart.map(item=>(
								<CartItem key={item._id} item={item} dispatch={dispatch} cart={cart} />
							))
						}

					</tbody>
				</table>
			</div>

			<div className="col-md-4 my-3 text-right text-uppercase text-secondary">
				<form required>
					<h2 className="text-center">ORDER</h2>
					<label type="input" className="text-left text-info" style={{width:"100%",textAlign:"left",fontSize:"20px",fontWeight:"bold",}}htmlFor="address" required pattern="[a-z]{1,15}">Address</label>
					<input type="text" name="address" className="form-control mb-2" id="address" />

					<label className="text-left text-info" style={{width:"100%",textAlign:"left",fontSize:"20px",fontWeight:"bold",}} htmlFor="mobile" required pattern="[a-z]{1,15}">Mobile</label>
					<input type="text" name="mobile" className="form-control mb-2" id="mobile"/>
				</form>

				<h4 className="text-center">Total: 
					<span className="text-danger"> ${total}</span>
				</h4>

				<Link href={auth.user ? "/paysuccess" : "/signin"}>
					<a type="submit"className="w-100 btn btn-dark my-2"
					// onClick={handleOrder}
					>Order Now</a>
				</Link> 

			</div>

		</div>
	)
}

export default Cart