import React,{useContext} from 'react'
import { DataContext} from '../store/GlobalState'
import { deleteItem} from '../store/Actions'
import { deleteData } from '../utils/fetchData'
import {useRouter} from 'next/router'
const Modal = () => {
	const {state,dispatch} = useContext(DataContext)
	const {modal,auth} = state
	const router = useRouter()
	const handleDelete = () => {
				if(modal.type === 'ADD_CATEGORIES'){
					dispatch(deleteItem(modal.data, modal.id, modal.type))
					deleteData(`categories/${modal.id}`, auth.toke)
					.then(res => {
						if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
						
						//dispatch(deleteItem(item.data, item.id, item.type))
						return dispatch({type: 'NOTIFY', payload: {success: res.msg}})
					})
				}
				if(modal.type === 'DELETE_PRODUCT'){
					dispatch({type: 'NOTIFY', payload: {loading: true}})
					deleteData(`product/${modal.id}`, auth.toke)
					.then(res => {
						if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
						dispatch({type: 'NOTIFY', payload: {success: res.msg}})
						return router.push('/products')
					})
				}else{
				if(modal){dispatch(deleteItem(modal.data, modal.id,"ADD_CART" ))}		
				}
				dispatch({type:"ADD_MODAL", payload:{}})
}

	return (
		<div>
			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">{modal.title}</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
						Are you sure delete?
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
							<button type="button" className="btn btn-danger" data-bs-dismiss="modal"
								onClick={handleDelete}
							>Yes</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal