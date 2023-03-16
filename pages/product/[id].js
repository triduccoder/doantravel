import Head from "next/head";
import { useState ,useContext, useEffect, useRef} from "react";
import {getData} from "../../utils/fetchData"
import {DataContext} from "../../store/GlobalState"
import {addToCart} from "../../store/Actions"


const DetailProducts = (props) => {
	const [product] = useState(props.product)
	const [tab, serTab] = useState(0)
	const imgRef = useRef()
	const {state, dispatch} = useContext(DataContext)
	const {cart} = state


	//cach1: easy hon
	const isActive = (index) =>{
		if(tab === index) return "active";
		return ""
	}

	//cach 2:su dung useEffect va tim index img de xu ly
	// useEffect(()=>{
	// 	const images = imgRef.current.children;
	// 	for (let i = 0; i < images.length; i++){
	// 		images[i].className = images[i].className.replace("active","img-thumbnail rounded")
	// 	}

	// 	images[tab].className = "img-thumbnail rounded active"
	// },[tab])
	return (
		<div className="row detail_page" style={{margin:"0"}}>
			<Head>
				<title>Detail Products</title>
			</Head>

			<div className="col-md-6">
				<img src={product.images[tab].url} alt={product.images[tab].url}
					className="d-block img-thumbnail rounded mt-4 w-100"
					style={{height:"400px"}}
				/>
				<div className="row mx-0" style={{cursor:"pointer",width:"100%"}} 
					// ref={imgRef} neu su dung cach 2, phai them vao de ma no lay ref img
				>
					{
						product.images.map((img,index) => (
							<img key={index} src={img.url} alt={img.url}
							//cach 1
							className={`img-thumbnail rounded ${isActive(index)}`}
							style={{height:"120px",width:"20%"}}
							onClick={()=>{serTab(index)}}
							/>
						))
					}
				</div>
			</div>
			<div className="col-md-6 mt-3">
				<h2 className="text-uppercase">{product.title}</h2>
				<h4 className="text-danger">Price: {product.price}$</h4>
				<div className="row mx-0 d-flex justify-content-between">
					{
						product.inStock > 0
						? <h5 className="text-danger">Amount: {product.inStock}</h5>
						: <h5 className="text-danger">
						Out of stock</h5>
					}
					<h5 className="text-danger" style={{marginRight:"50px"}}>Booked: {product.sold}</h5>
					<div className="my-2">{product.description}</div>
					<div className="my-2" style={{width:"100%"}}>
						{product.content}
					</div>

					<button type="button" className="btn btn-dark d-block my-3 px-5"
					onClick={() => dispatch(addToCart(product, cart))} 
					>
						Order Now
					</button>

				</div>
			</div>
		</div>
	)
}

export async function getServerSideProps({params: {id}}) {
	const res =  await getData(`product/${id}`)
	//no chi xuat hien trong sever
	return {
		props: {
			product: res.product,
		}
	}
}

export default DetailProducts