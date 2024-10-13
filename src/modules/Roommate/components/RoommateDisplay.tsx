'use client'

import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { roommates } from '../data'
import { useViewStore } from '../stores/useViewStore'
import { RoommateCard } from './RoommateCard'

export const RoommateDisplay = () => {
	const { activeView } = useViewStore()
	const [loading, setLoading] = useState(false)
	const roommatesPerPage = 24
	const [currentPage, setCurrentPage] = useState(1)

	const totalPages = Math.ceil(roommates.length / roommatesPerPage)

	const indexOfLastRoommate = currentPage * roommatesPerPage
	const indexOfFirstRoommate = indexOfLastRoommate - roommatesPerPage
	const currentRoommates = roommates.slice(
		indexOfFirstRoommate,
		indexOfLastRoommate
	)

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

	return (
		<div>
			{loading ? (
				<div className='max-w-[1200px] p-[20px] pt-[40px] mx-auto flex flex-wrap gap-[20px] justify-start'>
					{Array.from({ length: 12 }).map((_, index) => (
						<Skeleton
							key={index}
							height={700}
							width={270}
							baseColor='#212B36'
						/>
					))}
				</div>
			) : activeView === 'list' ? (
				<div className='max-w-[1200px] p-[20px] pt-[40px] mx-auto flex flex-wrap gap-[20px] justify-start'>
					{currentRoommates.map(roommate => (
						<RoommateCard key={roommate._id} roommate={roommate} />
					))}
				</div>
			) : (
				<div className=''>
					<Map roommate={roommates} view={activeView} />
				</div>
			)}

			{activeView === 'list' && (
				<div className='flex justify-center mt-8'>
					<ul className='flex gap-2'>
						{Array.from({ length: totalPages }, (_, index) => (
							<li key={index} className='cursor-pointer'>
								<button
									className={`px-4 py-2 rounded ${
										currentPage === index + 1
											? 'bg-green-500 text-white'
											: 'bg-gray-300 text-black'
									}`}
									onClick={() => paginate(index + 1)}
								>
									{index + 1}
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
