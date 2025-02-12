import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../components/Products'

const Wishlist = () => {
	const wishlist = useSelector(state => state.wishlist.value)
	console.log(wishlist)

	return (
		<div>
			<Products data={wishlist} /> 
		</div>
	)
}

export default Wishlist
