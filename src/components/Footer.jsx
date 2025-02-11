import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, increment, reset } from '../redux/features/count.slice'

export const Button = ({ children, onClick, disabled = false }) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className='p-2 bg-red-200 active:bg-red-300 cursor-pointer'
		>
			{children}
		</button>
	)
}

const Footer = () => {
	const dispatch = useDispatch()
	const count = useSelector(state => state.counter.value)
	return (
		<footer class='bg-gray-900 text-white py-10 mt-10'>
			<div class='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8'>
				<div>
					<h2 class='text-lg font-semibold'>ShopEasy</h2>
					<p class='text-gray-400 mt-2'>Your one-stop shop for everything!</p>
				</div>

				<div>
					<h3 class='text-lg font-semibold mb-2'>Quick Links</h3>
					<ul class='text-gray-400 space-y-2'>
						<li>
							<a href='#' class='hover:text-gray-300'>
								Home
							</a>
						</li>
						<li>
							<a href='#' class='hover:text-gray-300'>
								Shop
							</a>
						</li>
						<li>
							<a href='#' class='hover:text-gray-300'>
								About Us
							</a>
						</li>
						<li>
							<a href='#' class='hover:text-gray-300'>
								Contact
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 class='text-lg font-semibold mb-2'>Customer Service</h3>
					<ul class='text-gray-400 space-y-2'>
						<li>
							<a href='#' class='hover:text-gray-300'>
								FAQ
							</a>
						</li>
						<li>
							<a href='#' class='hover:text-gray-300'>
								Returns
							</a>
						</li>
						<li>
							<a href='#' class='hover:text-gray-300'>
								Shipping Info
							</a>
						</li>
						<li>
							<a href='#' class='hover:text-gray-300'>
								Privacy Policy
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 class='text-lg font-semibold mb-2'>Stay Connected</h3>
					<p class='text-gray-400 mb-3'>Subscribe for exclusive offers!</p>
					<form class='flex'>
						<input
							type='email'
							placeholder='Enter your email'
							className='w-full px-4 py-2 rounded-l-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A0583C]'
						/>
						<button class='bg-[#A0583C] px-4 py-2 rounded-r-md hover:bg-opacity-80'>
							Subscribe
						</button>
					</form>
				</div>
			</div>

			<div class='text-center text-gray-500 mt-8 border-t border-gray-700 pt-4'>
				<p>&copy; 2024 ShopEasy. All rights reserved.</p>
			</div>
		</footer>
	)
}

export default Footer
