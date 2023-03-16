import {createContext, useReducer, useEffect} from "react"
import reducers from './Reducers'
import {getData} from '../utils/fetchData'



export const DataContext = createContext();

export const DataProvider=({children}) => {
	const initState = {notify:{},auth:{}, cart:[], modal:{},users:[],categories:[]}
	const [state, dispatch] =useReducer(reducers, initState);
	const {cart,auth} = state
	useEffect(()=>{
		const firstLogin = localStorage.getItem("firstLogin");
		if(firstLogin){
			getData('auth/accessToken').then(res=>{
				if(res.err) return localStorage.removeItem('firstLogin');

				dispatch({
					type: 'AUTH',
					payload:{
						token: res.access_token,
						user: res.user
					}
				});
			})
		}
			getData('categories').then(res=>{
				if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} }) && localStorage.removeItem('firstLogin');

				dispatch({
					type: 'ADD_CATEGORIES',
					payload: res.categories
				});
			})
	},[])
	
	useEffect(()=>{
		const __next__cart__team3 = JSON.parse(localStorage.getItem("__next__cart__team3"))
		if(__next__cart__team3) dispatch({type: 'ADD_CART', payload: __next__cart__team3})
	},[])

	useEffect(()=>{
		localStorage.setItem("__next__cart__team3",JSON.stringify(cart))
	},[cart])
	
	useEffect(() => {
		if(auth.toke){
		// 	getData('order', auth.token)
		// 	.then(res => {
		// 		if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
				
		// 		dispatch({type: 'ADD_ORDERS', payload: res.orders}) 
		// })
	
		if(auth.user.role === 'admin'){
			getData('user', auth.toke)
			.then(res => {
				console.log(res)
				if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
			
				dispatch({type: 'ADD_USERS', payload: res.users})
			})
		}else{
			console.log(auth.toke)
			//dispatch({type: 'ADD_ORDERS', payload: []})
			dispatch({type: 'ADD_USERS', payload: []})
		}
	}
	},[auth.toke])
	return (
		<DataContext.Provider value={{state, dispatch}}>
			{children}
		</DataContext.Provider>
	)
}

