import Head from 'next/head'
import {useContext, useState} from 'react'
import {DataContext} from '../store/GlobalState'
import {updateItem} from '../store/Actions'
import { postData, putData } from "../utils/fetchData";


const Categories = () => {
	const [name, setName] = useState('')

	const {state, dispatch} = useContext(DataContext)
	const {categories, auth} = state
	
	const [id, setId] = useState('')

	const createCategory = async () => {
		let req;
		const res = await postData("categories", {name}, auth.toke)
		console.log(res)

		if(auth.user.role !== 'admin') return dispatch({ type: "NOTIFY", payload: {error: "Authentication is not valid."}})
		
		if(!name) return dispatch({ type: "NOTIFY", payload: {error: "Name can't be left blank."}})

		dispatch({ type: "NOTIFY", payload: {loading: true}})
		if(id){
			req = await putData(`categories/${id}`, {name} , auth.toke)
			if(res.err) return dispatch({ type: "NOTIFY", payload: {error: res.err}})
			dispatch(updateItem(categories, id, req.category, "ADD_CATEGORIES"))

		}else{
			req = await postData("categories", {name} , auth.toke)
			if(res.err) return dispatch({ type: "NOTIFY", payload: {error: res.err}})
			dispatch({ type: 'ADD_CATEGORIES', payload: [...categories, res.newCategory]})
		}

		setName("")
		setId("")
		return dispatch({ type: "NOTIFY", payload: {success: res.msg}})
	}

	const handleEdit = (category) => {
		console.log(category)
		setId(category._id)
		setName(category.name)
	}
	return (
		<div className="col-md-6 mx-auto my-3">
			<Head>
				<title>Categories</title>
			</Head>

			<div className="input-group mb-3">
				<input type="text" className="form-control" placeholder="Add a new category" value={name}
					onChange={e => setName(e.target.value)} />

				<button className="btn btn-secondary ml-1"
					onClick={createCategory}
				>
					{id ? "Update": "Create"}
				</button>
			</div>
				{
					categories.map((category,index) =>(
						<div key={category._id} className="card mx-3 text-capitalize">
							<div className="card-body d-flex justify-content-between">
								{
									category.name
								}

								<div style={{cursor:"pointer"}}>
									<i className="fa fa-edit mr-2 text-info" onClick={()=>handleEdit(category)}></i>
									<i className="fas fa-trash-alt mr-2 text-danger"
										data-bs-toggle="modal" data-bs-target="#exampleModal"
										onClick={()=>dispatch({
											type:"ADD_MODAL",
											payload:{
												data: categories, id: category._id, 
												title: category.name, type: 'ADD_CATEGORIES' 
											}
										})}
									></i>
								</div>
							</div>
						</div>
					))
				}
		</div>
	)
}

export default Categories