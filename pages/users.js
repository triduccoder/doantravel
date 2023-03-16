import Head from 'next/head'
import {useContext} from 'react'
import {DataContext} from '../store/GlobalState'


function Users() {
	const {state, dispatch} = useContext(DataContext)
	const {users} = state


	return (
		<div className="table-responsive">
			<Head>
				<title>Users</title>
			</Head>

			<table className="table w-100">
				<thead>
					<tr>
						<th></th>
						<th>ID</th>
						<th style={{width:"100px"}}>Avt</th>
						<th>Name</th>
						<th>Email</th>
						<th>Position</th>
						<th>Actions</th>
					</tr>
				</thead>

				<tbody className="">
					{
						users.map((user,index) =>(
							<tr key={user._id} style={{cursor:"pointer"}}>
								<th>{index + 1}</th>
								<th>{user._id}</th>
								<th><img src={user.avatar} style={{width:"80%"}} /></th>
								<th>{user.name}</th>
								<th>{user.email}</th>
								<th>{user.role}</th>
								<th>
								<a><i className="fas fa-edit text-info mr-2" title="Edit"></i></a>
								<i className="fas fa-trash-alt text-danger ml-2" title="Remove"></i>
								</th>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	)
}

export default Users