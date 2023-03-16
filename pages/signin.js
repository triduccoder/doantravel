import Head from 'next/head'
import Link from 'next/link'
import { useState, useContext, useEffect } from 'react'
import {DataContext} from '../store/GlobalState'
import {postData} from '../utils/fetchData'
import Cookie from 'js-cookie'
import {useRouter} from 'next/router'
const Signin = () =>{
	const initState = {email: "", password: ""}
	const [userData, setUserData] = useState(initState)
	const {email, password} = userData
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
		dispatch({type: "NOTIFY", payload: {loading: true}})

		const res = await postData('auth/login', userData)
		if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

		dispatch({ type: 'NOTIFY', payload: {success: res.msg} })	
		dispatch({ type: 'AUTH', payload: {
			toke: res.access_token,
			user: res.user
		} })

		Cookie.set('refreshtoke', res.refresh_token,{
			path: 'api/auth/accessToken',
			expires: 7
		})

		localStorage.setItem('firstLogin', true)
	}
	useEffect(()=>{
		if(Object.keys(auth).length !== 0) router.push("/")
	},[auth])
	return(
		<>
			<Head>
				<title>Sign In Page</title>
			</Head>
			<form className="mx-auto my-4" style={{maxWidth:'500px'}} onSubmit={handlerSubmit}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1"
						name="email" value={email} onChange={handlerState}
					aria-describedby="emailHelp" />
					<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
				</div>
					<div className="mb-3">
					<label htmlFor="exampleInputPassword1"
					className="form-label">Password</label>
					<input type="password" className="form-control"
						name="password" value={password} onChange={handlerState}
					id="exampleInputPassword1" />
				</div>
				<button type="submit" className="btn btn-dark w-100">Login</button>
				<p className="my-2">You dont have an account? 
					<Link href="/register">
						<a style={{color:'red'}}>Register</a>
					</Link>
				</p>
			</form>
		</>
	)
}

export default Signin