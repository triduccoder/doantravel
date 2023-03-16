import Head from 'next/head'
import { useState, useContext, useEffect } from 'react'
import { DataContext } from '../store/GlobalState'

const Profile = () => {
	const initialSate = {
		avatar: '',
		name: '',
	}
	const [data, setData] = useState(initialSate)
	const { avatar, name} = data

	const {state, dispatch} = useContext(DataContext)
	const { auth } = state

	useEffect(() => {
		if(auth.user) setData({...data, name: auth.user.name})
	},[auth.user])

	if(!auth.user) return null;
	return( 
		<div className="profile_page">
		<Head>
			<title>Profile</title>
		</Head>

		<section className="row text-secondary" style={{textAlign: 'center'}}>	
			<div className="col-md-12">
			<h3 className="text-center text-uppercase">
				{auth.user.role === 'user' ? 'User Profile' : 'Admin Profile'}
			</h3>

			<div className="avatar">
				<img style={{ width:"15%",borderRadius:"2%"}} src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar} 
				alt="avatar" />
				<span>
				<i className="fas fa-camera"></i>
				<p>Change</p>
				<input type="file" name="file" id="file_up"
				accept="image/*" />
				</span>
			</div>

			<div className="form-group abcd">
				<label htmlFor="name" className="edf">Name</label>
				<input type="text" name="name" value={name} className="form-control"
				placeholder="Your name" disabled={true} />
			</div>

			<div className="form-group abcd">
				<label htmlFor="email" className=" edf">Email</label>
				<input type="text" name="email" defaultValue={auth.user.email} 
				className="form-control" disabled={true} />
			</div>
			</div>
		</section>
		<style jsx>
			{
				`
				.abcd{
					width:300px;
					display: inline-block;
					align-items: center;
					justify-content: center;
					margin: 35px;
				}
				.edf{
					padding-right: 10px;
					text-align: center;
				}
				
				`
			}
		</style>
		</div>

	)
}



export default Profile