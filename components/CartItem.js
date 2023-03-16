import Link from 'next/link'
import { decrease,increase } from '../store/Actions'

const CartItem = ({item,dispatch,cart}) =>{
	return(
		<tr>
			<td style={{width:"100px", overflow:"hidden"}}>
				<img src={item.images[0].url} alt={item.images[0].url} 
					className="img-thumbnail w-100"
					style={{minWidth:"80px", height:"80px"}}
				/>
			</td>

			<td style={{minWidth:"200px"}} className="w-50 align-middle">
				<h5 className="text-capitalize text-secondary">
					<Link href={`/product/${item._id}`}>
						<a>{item.title}</a>
					</Link>
				</h5>
				<h6 className="text-danger">Order Quantity: {item.quantity}</h6>
				<h6 >
					{
						item.inStock > 0 
						? <p className="mb-1 text-info">Available Quantity: {item.inStock}</p>
						: <p className="mb-1 text-info">It's over</p>
					}
				</h6>
			</td>

			<td className="align-middle" style={{minWidth:"150px"}}>
				<button className="btn btn-outline-secondary" style={{width:"40px"}}
					//hàm này sẽ xử lý kh cho giảm đơn xún dưới 1 ( < 2 hoặc ===1)
					disabled={item.quantity < 2 ? true : false}
					onClick={() =>dispatch(decrease(cart,item._id))}
				> - </button>
				<span className="px-3">{item.quantity}</span>
				<button className="btn btn-outline-secondary" style={{width:"40px"}}
					//hàm này sẽ xử lý kh cho tăng đơn vượt số lượng có
					disabled={item.quantity === item.inStock ? true : false}
					onClick={() =>dispatch(increase(cart,item._id))}
				> + </button>
			</td>

			<td className="align-middle" style={{minWidth:"50px",cursor:"pointer"}}>
				<i className="far fa-trash-alt text-danger" aria-hidden="true"
					style={{fontSize:"20px"}} data-bs-toggle="modal" data-bs-target="#exampleModal"
					onClick={()=>dispatch({
						type:"ADD_MODAL",
						payload:{data:cart, id:item._id, title:item.title,}
					})}
				></i>
			</td>
		</tr>
	)
}

export default CartItem