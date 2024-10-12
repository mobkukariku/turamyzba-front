import Skeleton from 'react-loading-skeleton'

export const LoadingSkeleton = () => {
	return (
		<div className='max-w-[1200px] px-[20px] pt-[90px] mx-auto'>
			<div className='flex flex-col lg:flex-row justify-between gap-[20px] relative'>
				<Skeleton className='w-full lg:w-[570px] h-[570px]' />
				<div className='space-y-[20px] w-full lg:w-auto'>
					<div className='flex flex-col md:flex-row gap-[20px]'>
						<Skeleton
							className='w-full md:w-[275px] h-[275px]'
							baseColor='#212B36'
						/>
						<Skeleton
							className='w-full md:w-[275px] h-[275px]'
							baseColor='#212B36'
						/>
					</div>
					<div className='flex flex-col md:flex-row gap-[20px]'>
						<Skeleton
							className='w-full md:w-[275px] h-[275px]'
							baseColor='#212B36'
						/>
						<Skeleton
							className='w-full md:w-[275px] h-[275px]'
							baseColor='#212B36'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
