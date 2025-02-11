import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrashCan } from 'react-icons/fa6'
import {
	amountDecrement,
	amountIncrement,
	removeFromCart,
} from '../redux/features/cart.slice'
const Cart = () => {
	const cart = useSelector(state => state.cart.value)
	const dispatch = useDispatch()

	return (
		<div className='container mx-auto p-6 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row gap-10'>
			<div className='lg:w-2/3 w-full'>
				<h2 className='text-2xl font-semibold text-gray-800 mb-6'>
					Shopping Cart
				</h2>

				{cart?.length > 0 ? (
					<div className='space-y-6'>
						{cart?.map(product => (
							<div
								key={product.id}
								className='flex items-center border-b border-gray-300 pb-4 gap-6'
							>
								<img
									src={product.thumbnail}
									className='w-24 h-24 rounded-md object-cover shadow-sm'
									alt={product.title}
								/>

								<div className='flex-1'>
									<h3 className='text-lg font-medium text-gray-900'>
										{product.title}
									</h3>
									<p className='text-md font-semibold text-[#A0583C]'>
										${product.price}
									</p>

									<div className='flex items-center mt-2'>
										<button
											disabled={product.amount <= 1}
											onClick={() => dispatch(amountDecrement(product))}
											className='w-8 h-8 bg-gray-200 text-lg flex items-center justify-center rounded-md hover:bg-gray-300 active:bg-gray-400'
										>
											-
										</button>
										<span className='px-4 text-lg'>{product.amount}</span>
										<button
											onClick={() => dispatch(amountIncrement(product))}
											className='w-8 h-8 bg-gray-200 text-lg flex items-center justify-center rounded-md hover:bg-gray-300 active:bg-gray-400'
										>
											+
										</button>
									</div>
								</div>

								<button
									onClick={() => dispatch(removeFromCart(product.id))}
									className=' cursor-pointer px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 active:bg-red-700 transition'
								>
									<FaTrashCan />
								</button>
							</div>
						))}
					</div>
				) : (
					<p className='text-center text-gray-600 text-lg'>
						Your cart is empty.
					</p>
				)}
			</div>
			<div className='lg:w-1/3 w-full bg-gray-100 p-6 rounded-lg shadow-md h-fit'>
				<h3 className='text-xl font-semibold text-gray-800 mb-4'>
					Order Summary
				</h3>

				<div className='flex justify-between text-lg font-medium text-gray-700 mb-6'>
					<span>Total Price:</span>
					<span>
						$
						{cart?.reduce(
							(total, product) => total + product.price * product.amount,
							0
						)}
					</span>
				</div>

				{/* Checkout Button */}
				<button className='w-full py-3 bg-gray-700 text-white text-lg font-medium rounded-md hover:bg-gray-900 cursor-pointer transition'>
					Proceed to Checkout
				</button>
			</div>
		</div>
	)
}

export default Cart
