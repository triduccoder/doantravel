import {getData} from "../utils/fetchData"
import { useState, useContext, useEffect } from 'react'
import {DataContext} from '../store/GlobalState'
import Head from 'next/head'
import ProductItem from '../components/product/ProductItem'
import HeaderIndex from '../pages/headerIndex'
import Filter from "../components/Filter"

const Products = (props) => {
	const [products, setProducts] = useState(props.products)
	const {state, dispatch} = useContext(DataContext)
	useEffect(() => {
		setProducts(props.products)
	},[props.products])
	return (
		<>
			<div style={{backgroundImage: 'url(https://img5.thuthuatphanmem.vn/uploads/2021/10/20/background-du-lich-bau-troi_110850711.jpg)',backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
				<h2 style={{textAlign: "center",fontFamily: "cursive",fontSize:'55px',fontWeight: 'bold'}}>List Travel And Resorts</h2>
				<Filter state={state}  />
				<div className="products">
					{
						products.length === 0 ? <h2>No Products</h2> : products.map((product) =>(
						<ProductItem key={product._id} product={product} />
						))
					}
				</div>
			</div>
		</>
	)
}

export async function getServerSideProps({query}) {
	const page = query.page || 1
	const category = query.category || 'all'
	const sort = query.sort || ''
	const search = query.search || 'all'

	const res = await getData(
	  `product?limit=${page * 6}&category=${category}&sort=${sort}&title=${search}`
	)
	//console.log(res)
	//no chi xuat hien trong sever
	return {
		props: {
		products: res.products,
		result: res.result
	  }, // will be passed to the page component as props
	}
}

export default Products