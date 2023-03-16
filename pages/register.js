import Head from 'next/head'
import Link from 'next/link'
import { useState, useContext, useEffect } from 'react'
import valid from '../utils/valid'
import {DataContext} from '../store/GlobalState'
import {postData} from '../utils/fetchData'
import {useRouter} from 'next/router'
const Register = () =>{
	const initState = {name: "", email: "", password: "", cf_password:""}
	const [userData, setUserData] = useState(initState)
	const {name, email, password, cf_password} = userData

	const {state, dispatch} = useContext(DataContext)
	const {auth} = state
	const router = useRouter();

	const handlerState = e => {
		const {name, value} = e.target
		setUserData({...userData,[name]:value})
		dispatch({type: "NOTIFY", payload: {}})
	}


	const handlerSubmit = async es => {
		es.preventDefault()
		const errMess = valid(name, email, password, cf_password);
		if(errMess)return dispatch({type: "NOTIFY", payload: {error: errMess}})

		dispatch({type: "NOTIFY", payload: {loading: true}})

		const res = await postData('auth/register', userData)
		if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

		return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })	
	}
	useEffect(()=>{
		if(Object.keys(auth).length !== 0) router.push("/")
	},[auth])
	return(
		<>
			<Head>
				<title>Register Page</title>
			</Head>
			<form className="mx-auto my-4" style={{maxWidth:'500px'}} onSubmit={handlerSubmit}>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">Name</label>
					<input type="text" className="form-control" id="name" name="name" value={name} onChange={handlerState} />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1"
						name="email" value={email} onChange={handlerState}
					/>
					<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1"
						name="password" value={password} onChange={handlerState}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword2" className="form-label">Again Password</label>
					<input type="password" className="form-control" id="exampleInputPassword2"
						name="cf_password" value={cf_password} onChange={handlerState}
					/>
				</div>
				<button type="submit" className="btn btn-dark w-100">Register</button>
				<p className="my-2">Already have an account? 
					<Link href="/signin">
						<a style={{color:'red'}}>Login Now</a>
					</Link>
				</p>
			</form>
		</>
	)
}

export default Register