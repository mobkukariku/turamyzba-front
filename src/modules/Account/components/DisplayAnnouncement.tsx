'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import room from '../../../../public/assets/i.webp'
import { useTabStore } from '../stores/TabStore'

interface Place {
	_id: number
	title: string
	apartmentInfo: string
	address: { address: string }
	monthlyExpensePerPerson: number
}

const DisplayAnnouncement = () => {
	const { activeTab } = useTabStore()
	const [loading, setLoading] = useState(false)
	const [places, setPlaces] = useState<Place[]>([])
	const [archivedPlaces, setArchivedPlaces] = useState<Place[]>([])

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			setPlaces([
				{
					_id: 1,
					title: 'Соквартирник в Алматы',
					apartmentInfo: '2 комнатная квартира 2/5',
					address: { address: 'Улица Алматы, 1' },
					monthlyExpensePerPerson: 50000,
				},
			])
			setArchivedPlaces([
				{
					_id: 2,
					title: 'Архивированная квартира',
					apartmentInfo: '1 комнатная квартира 3/5',
					address: { address: 'Улица Астана, 2' },
					monthlyExpensePerPerson: 45000,
				},
			])
		}, 2000)
	}, [])

	return (
		<>
			{activeTab === 'active' && (
				<div className='mt-[30px]'>
					{loading ? (
						<div className='flex flex-col gap-[20px] bg-[#212B36] p-[20px] rounded-[5px] mb-4 shadow-lg animate-pulse'>
							<div
								className={`flex flex-col
								w-[full] gap-[20px] min-h-[200px] rounded-[5px]`}
							>
								<div
									className={`w-[full]
									min-h-[200px] bg-[#919EAB] rounded-[5px]`}
								></div>
								<div className={`w-[full]`}>
									<div className='h-[30px] bg-[#919EAB] rounded w-2/5'></div>
									<div className='h-[50px] bg-[#919EAB] rounded w-full mt-[10px]'></div>
									<div className='h-[20px] bg-[#919EAB] rounded w-3/4 mt-[20px]'></div>
									<div className='h-[20px] bg-[#919EAB] rounded w-2/4 mt-[15px]'></div>
								</div>
							</div>
							<div className='h-10 bg-[#919EAB] rounded w-full mt-2'></div>
						</div>
					) : places.length > 0 ? (
						places.map(place => (
							<div
								key={place._id}
								className='flex flex-col gap-[20px] bg-[#212B36] p-[20px] rounded-[5px] mb-4'
							>
								<Image
									className='object-cover block min-w-[200px] h-[200px] rounded-[5px]'
									src={room}
									alt='Roommate offer'
								/>
								<div>
									<h2 className='text-[25px] font-bold text-white'>
										{place.title}
									</h2>
									<p className='text-[16px] mt-[5px] text-[#919EAB]'>
										Информация о квартире: {place.apartmentInfo}
									</p>
									<p className='text-[16px] mt-[5px] text-[#919EAB]'>
										Адрес: {place.address.address}
									</p>
									<p className='text-[16px] mt-[5px] text-[#919EAB]'>
										Ежемесячная оплата: {place.monthlyExpensePerPerson} тенге
									</p>
								</div>
								<div>
									<button className='bg-[#7635DC] text-white rounded-[5px] px-4 py-2'>
										Архивировать
									</button>
								</div>
							</div>
						))
					) : (
						<p>У вас пока нет активных объявлений.</p>
					)}
				</div>
			)}
			{activeTab === 'archived' && (
				<div className='mt-[30px]'>
					{loading ? (
						<div className='flex flex-col gap-[20px] bg-[#212B36] p-[20px] rounded-[5px] mb-4 shadow-lg animate-pulse'>
							<div
								className={`flex flex-col
								w-[full] gap-[20px] min-h-[200px] rounded-[5px]`}
							>
								<div
									className={`w-[full]
									min-h-[200px] bg-[#919EAB] rounded-[5px]`}
								></div>
								<div className={`w-[full]`}>
									<div className='h-[30px] bg-[#919EAB] rounded w-2/5'></div>
									<div className='h-[50px] bg-[#919EAB] rounded w-full mt-[10px]'></div>
									<div className='h-[20px] bg-[#919EAB] rounded w-3/4 mt-[20px]'></div>
									<div className='h-[20px] bg-[#919EAB] rounded w-2/4 mt-[15px]'></div>
								</div>
							</div>
							<div className='h-10 bg-[#919EAB] rounded w-full mt-2'></div>
						</div>
					) : archivedPlaces.length > 0 ? (
						archivedPlaces.map(place => (
							<div
								key={place._id}
								className='flex flex-col gap-[20px] bg-[#212B36] p-[20px] rounded-[5px] mb-4'
							>
								<Image
									className='object-cover block min-w-[200px] h-[200px] rounded-[5px]'
									src={room}
									alt='Roommate offer'
								/>
								<div>
									<h2 className='text-[25px] font-bold text-white'>
										{place.title}
									</h2>
									<p className='text-[16px] mt-[5px] text-[#919EAB]'>
										Информация о квартире: {place.apartmentInfo}
									</p>
									<p className='text-[16px] mt-[5px] text-[#919EAB]'>
										Адрес: {place.address.address}
									</p>
									<p className='text-[16px] mt-[5px] text-[#919EAB]'>
										Ежемесячная оплата: {place.monthlyExpensePerPerson} тенге
									</p>
								</div>
								<div className='flex gap-4'>
									<button className='bg-[#33FF00] text-black rounded-[5px] px-4 py-2'>
										Восстановить
									</button>
									<button className='bg-red-500 text-white rounded-[5px] px-4 py-2'>
										Удалить
									</button>
								</div>
							</div>
						))
					) : (
						<p>У вас пока нет архивированных объявлений.</p>
					)}
				</div>
			)}
		</>
	)
}

export default DisplayAnnouncement
