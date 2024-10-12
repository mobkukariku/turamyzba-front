import Link from 'next/link'

const NavButton = () => {
	return (
		<div>
			<nav className='nav-text max-w-[1200px] px-[20px] mx-auto mt-[40px] mb-[20px] text-[#33FF00] gap-[5px] flex items-end '>
				<Link href='/' className='text-[#33FF00] hover:underline'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						className='size-10'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18'
						/>
					</svg>
				</Link>
			</nav>
		</div>
	)
}

export default NavButton
