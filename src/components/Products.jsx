import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toggleWishlist } from '../redux/features/wishlist.slice'
import { FiShoppingCart } from 'react-icons/fi'
import { addToCart } from '../redux/features/cart.slice'

const Products = ({ data }) => {
	const dispatch = useDispatch()
	const wishlist = useSelector(state => state.wishlist.value)
	return (
		<div className='grid container mx-auto lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5'>
			{data?.map(product => (
				<div
					key={product.id}
					className='bg-white shadow-md rounded-lg overflow-hidden'
				>
					{/* Product Image */}
					<div className='relative h-[250px] group overflow-hidden'>
						<img
							src={product.thumbnail}
							className='w-full h-full object-cover'
							alt={product.title}
						/>

						{/* Wishlist Button */}
						<button
							onClick={() => dispatch(toggleWishlist(product))}
							className='duration-200 group-hover:right-2 absolute top-2 right-2 md:right-[-30px] text-xl cursor-pointer p-2 rounded-full bg-white shadow-md'
						>
							{wishlist?.some(item => item.id === product.id) ? (
								<FaHeart className='text-gray-900' />
							) : (
								<FaRegHeart />
							)}
						</button>

						{/* Add to Cart Button */}
						<button
							onClick={() => dispatch(addToCart(product))}
							className='duration-200 delay-75 group-hover:right-2 absolute top-11 right-2 md:right-[-30px] text-xl cursor-pointer p-2 rounded-full bg-white shadow-md'
						>
							<FiShoppingCart />
						</button>
					</div>

					{/* Product Info */}
					<div className='p-4'>
						<h3
							title={product.title}
							className='text-lg font-semibold text-gray-800 line-clamp-1'
						>
							{product.title}
						</h3>

						{/* Price */}
						<p className='text-lg font-bold text-[#A0583C]'>${product.price}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default Products
