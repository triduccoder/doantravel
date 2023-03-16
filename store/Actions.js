export const ACTIONS ={
	NOTIFY: "NOTIFY",
	AUTH: "AUTH",
	ADD_CART: "ADD_CART",
	ADD_MODAL: "ADD_MODAL",
	ADD_ORDERS: 'ADD_ORDERS',
	ADD_USERS: 'ADD_USERS',
	ADD_CATEGORIES: 'ADD_CATEGORIES',
}

export const addToCart = (product, cart) =>{
	if(product.inStock === 0)
	return ({type: "NOTIFY", payload: {error: "Vui lòng chọn cái khác vì mục này đã hết!!!"}})

	const check = cart.every(item=>{
		return item._id !== product._id
	})

	if(!check) return ({type: "NOTIFY", payload: {error: "Quý khách đã thêm vào giỏ hàng!!!"}})
	return ({type: "ADD_CART", payload:[...cart,{...product,quantity:1}]})
}

//khi k.h đặt chỗ thì chỗ trong data sẽ bị giảm
export const decrease = (data,id) => {
	const newData = [...data]
	newData.forEach(item => {
		if(item._id === id) item.quantity -=1
	})

	return {type: "ADD_CART",payload: newData}
}
// khi k.h xoá thì tăng lên lại
export const increase = (data,id) => {
	const newData = [...data]
	newData.forEach(item => {
		if(item._id === id) item.quantity +=1
	})

	return {type: "ADD_CART",payload: newData}
}

// hành động này sẽ xoá đi 1 mục trong giỏ Hàng
export const deleteItem = (data, id, type) => {
	const newData = data.filter(item => item._id !== id)
	return ({ type, payload: newData})
}

export const updateItem = (data, id, post, type) => {
	const newData = data.map(item => (item._id === id ? post : item))
	return ({ type, payload: newData})
}