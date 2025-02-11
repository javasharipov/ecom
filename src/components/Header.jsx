import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { RiPokerHeartsFill } from 'react-icons/ri'
const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className='bg-gray-900 text-white shadow-md'>
			<div className='flex container mx-auto h-20 items-center px-6'>
				<Link to='/' className='text-2xl font-medium flex-1'>
					ShopEasy
				</Link>

				<nav className='hidden md:flex items-center gap-8'>
					{/* <Link to='/' className='hover:text-gray-300'>
						Home
					</Link> */}
					{/* <Link to='/about' className='hover:text-gray-300'>
						About
					</Link>
					<Link to='/contact' className='hover:text-gray-300'>
						Contact
					</Link> */}
					<Link to='/wishlist' className='hover:text-gray-300'>
						<RiPokerHeartsFill className='text-2xl' />
					</Link>
					<Link to='/cart' className='hover:text-gray-300'>
						<FiShoppingCart className='text-2xl' />
					</Link>
				</nav>

				<button
					className='md:hidden text-2xl'
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>

			{isOpen && (
				<nav className='md:hidden bg-gray-800 text-center py-4'>
					<Link
						to='/'
						className='block py-2 hover:text-gray-300'
						onClick={() => setIsOpen(false)}
					>
						Home
					</Link>
					<Link
						to='/about'
						className='block py-2 hover:text-gray-300'
						onClick={() => setIsOpen(false)}
					>
						About
					</Link>
					<Link
						to='/contact'
						className='block py-2 hover:text-gray-300'
						onClick={() => setIsOpen(false)}
					>
						Contact
					</Link>
					<Link
						to='/wishlist'
						className='block py-2 hover:text-gray-300'
						onClick={() => setIsOpen(false)}
					>
						Wishlist
					</Link>
					<Link
						to='/cart'
						className='block py-2 hover:text-gray-300'
						onClick={() => setIsOpen(false)}
					>
						Cart
					</Link>
				</nav>
			)}
		</header>
	)
}

export default Header
