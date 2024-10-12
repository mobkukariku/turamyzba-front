import Link from 'next/link'

export const CreateAnnouncementButton = () => {
	return (
		<div>
			<nav className='max-w-[1200px] px-[20px] mx-[auto] items-center flex justify-between mt-[50px] gap-2 mb-[60px]'>
				<Link
					href={'/account/findroommate/new'}
					className='px-[10px] py-[5px] rounded-[5px] text-[#161C24] bg-[#33FF00] font-semibold flex items-center gap-[5px]'
				>
					Создать объявление
				</Link>
			</nav>
		</div>
	)
}

export default CreateAnnouncementButton
