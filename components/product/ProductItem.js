import Link from 'next/link'
import {useContext} from 'react'
import {DataContext} from '../../store/GlobalState'
import {addToCart} from '../../store/Actions'


const ProductItem =  ({product}) =>{
	const {state, dispatch} = useContext(DataContext)
	const {cart,auth} = state

	const userLink = () =>{
		return(
			<>
				<Link href={`product/${product._id}`}>
					<a className="btn btn-info"
					style={{marginLeft:"15px",marginRight:"15px",flex:1}}>View</a>
				</Link>
				<button type="submit" className="btn btn-success"
				style={{marginRight:"15px",marginLeft:"15px",flex:1}}
					disabled={product.inStock === 0 ? true : false}
					onClick={() =>dispatch(addToCart(product, cart))}
				>Order</button>
			</>
		)
	}

	const adminLink = () =>{
		return(
			<>
				<Link href={`create/${product._id}`}>
					<a className="btn btn-info"
					style={{marginLeft:"15px",marginRight:"15px",flex:1}}>Edit</a>
				</Link>
				<button type="submit" className="btn btn-danger"
				style={{marginRight:"15px",marginLeft:"15px",flex:1}}
				data-bs-toggle="modal" data-bs-target="#exampleModal"
				onClick={() => dispatch({
					type: 'ADD_MODAL',
					payload: { 
						data: '', id: product._id, 
						title: product.title, type: 'DELETE_PRODUCT' 
					}
				})} 
				>Delete</button>
			</>
		)
	}

	return (
		<>
		{/* ======================================== */}
			<div className="card card-hover" style={{width: "28rem;",display: "flex"}}>
				<img className="card-img-top img--toptop" src={product.images[0].url} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title text-capitalized" title={product.title}>{product.title}</h5>
					<div className="row justify-content-between mx-0">
						<h6 className="text-danger">${product.price}</h6>
						{
							product.inStock > 0
							? <h6 className="text-danger">Amount: {product.inStock}</h6>
							: <h6 className="text-danger">Out Of Stock</h6>
						}
					</div>

					<h4 className="card-text" style={{height:"120px",fontSize:"15px"}} title={product.description}>{product.description}</h4>
					<p className="card-text" style={{height:"120px",fontSize:"15px"}} title={product.content}>{product.content}</p>
				</div>
				<div className="row justify-content-between mx-0"  style={{marginBottom:"12px"}}>
						{!auth.user || auth.user.role !== 'admin' ? userLink() : adminLink()}
				</div>
			</div>
			<style jsx>
				{
					`
					.card-hover:hover{
						transform: scale(1.03);
						transition: .7s;
					}`
				}

			</style>
		</>
	)
}

export default ProductItem