import React, {useContext} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {DataContext} from '../store/GlobalState'
import Cookie from 'js-cookie'
import profile from '../pages/profile'
import Products from '../pages/products'
const Navbar = () => {
	const router = useRouter()

	const {state, dispatch} = useContext(DataContext)
	const {auth,cart} = state
	
	const handleLogout = () => {
		Cookie.remove('refreshtoken',{path: 'api/auth/accessToken'})
		localStorage.removeItem('firstLogin')
		dispatch({type: 'AUTH', payload:{}})
		dispatch({type: 'NOTIFY', payload:{success: 'Logged out!'}})
		
	}

	const adminRouter = () => {
		return(
			<>
				<Link href="/users">
						<a className="dropdown-item">Users</a>
				</Link>

				<Link href="/create">
						<a className="dropdown-item">Products</a>
				</Link>

				<Link href="/categories">
						<a className="dropdown-item">Categories</a>
				</Link>
			</>
		)
	}

	const loggedRouter = ()=>{
		return(
			<li className="nav-item dropdown abc">
				<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<img src={auth.user.avatar} style={{borderRadius: '50%', width: '30px', height: '30px',
					transform: 'translateY(-3px)', marginRight: '3px'
				}} alt="{auth.user.avatar}"/>
					{auth.user.name}
				</a>
				<div className="dropdown-menu bcd" style={{marginTop: '-5px'}} aria-labelledby="navbarDropdownMenuLink">
					<Link href="/profile">
							<a className="dropdown-item">Profile</a>
					</Link>
						{auth.user.role === 'admin' && adminRouter()}
					<div className="dropdown-divider"></div>
					<button className="dropdown-item" onClick={handleLogout}>Logout</button>
				</div>
				<style jsx> 
				{`
				.abc:hover .bcd{
					display: block;
				}`
				}
			</style>
			</li> 
		)
	}
	const isActive = (r) =>{
		if(r === router.pathname){
			return " active"
		}else{
			return ""
		}
	}
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link href="/">
					<>
					<img style={{width: "50px", height: "50px", borderRadius:"50%"}} src="https://i.pinimg.com/280x280_RS/74/f3/93/74f393897d63ff1140fc87aaa859ea8a.jpg" />
					<a className="navbar-brand" style={{fontFamily: 'Font Awesome 5 Brands'}} href="/">UNICORN TRAVEL</a>
					</>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
					<ul className="navbar-nav p-1" style={{fontSize: "20px"}} >
							<li className="nav-item"  aria-hidden="true" style={{fontFamily: 'cursive'}} >
								<Link href="/products">
									<a className="nav-link" >
										TOURS
									</a>
								</Link>
							</li>
							{!auth.user || auth.user.role !== 'admin' ?
								<li className="nav-item"  aria-hidden="true" style={{fontFamily: 'cursive'}} >
									<Link href="/cart">
										<a className={"nav-link" + isActive("/cart")} >
										<i className="fa fa-cart-arrow-down position-relative"  aria-hidden="true">
											<span className="position-absolute"
												style={{padding:"3px 6px",background:"#ed143dc2",borderRadius:"50%",top:"-10px",right:"-10px",color:"white",fontSize:"14px"}}
												>{cart.length}</span>
										</i>
											CART
										</a>
									</Link>
								</li> : <></>
							}
						{
							Object.keys(auth).length === 0 ?
							<li className="nav-item" style={{fontFamily: 'cursive'}} >
								<Link href="/signin">
									<a className={"nav-link" + isActive("/signin")} >
									<i className="fa fa-user"  aria-hidden="true"></i>
										SIGN IN
									</a>
								</Link>
							</li>
							: loggedRouter()
						}
					</ul>
				</div>
			</div>
			{/* sd jsx */}
			<style jsx> 
				{`
				.abc:hover .bcd{
					display: block;
				}`
				}
			</style>
		</nav>
	)
}
export default Navbar
