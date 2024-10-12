import Link from 'next/link'

const FindroommateNavbar = () => {
	return (
		<div>
			<nav className='max-w-[1200px] px-[20px] mx-[auto] mt-[40px] text-[20px] mb-[20px] text-[#33FF00] gap-[5px] flex items-end'>
				<Link href='/' className='text-[#33FF00] text-[20px] hover:underline'>
					Главная страница
				</Link>
				/<span className='text-[#919EAB] text-[20px]'> Ваши объявления</span>
			</nav>
		</div>
	)
}

export default FindroommateNavbar
