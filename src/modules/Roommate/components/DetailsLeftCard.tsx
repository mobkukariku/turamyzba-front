'use client'

import Image from 'next/image'
import mapIcon from '../../../../public/assets/locationIcon.svg'
import { useRoommateStore } from '../stores/useRoommateDetailsStore'

export const DetailsLeftCard = () => {
	const { place } = useRoommateStore()

	return (
		<div>
			<div className='max-w-[750px]'>
				<div className='mb-[20px]'>
					<h3 className='section-title font-bold text-[white]'>
						{place?.title}
					</h3>
					<a
						target='_blank'
						href={'https://maps.google.com/?q=' + place?.address.address}
						className='flex text-[#919EAB] font-medium underline'
					>
						<Image src={mapIcon} alt='' className='nav-icon' />
						{place?.address.address}
					</a>
				</div>
				{place?.apartmentInfo && (
					<div className='my-[40px]'>
						<h5 className='section-title font-semibold text-white'>
							Описание квартиры
						</h5>
						<p className='text-[15px] font-regular text-[#919EAB]'>
							{place?.apartmentInfo}
						</p>
					</div>
				)}
				{place?.ownerInfo && (
					<div className='mb-[40px]'>
						<h5 className='section-title font-semibold text-white '>
							Информация о владельце
						</h5>
						<p className='text-[15px] font-regular text-[#919EAB]'>
							{place?.ownerInfo}
						</p>
					</div>
				)}
				{place?.roomiePreferences && (
					<div className='mb-[40px]'>
						<h5 className='section-title font-semibold text-white'>
							Предпочтения к сожителю
						</h5>
						<p className='text-[15px] text-[#919EAB] font-regular'>
							{place?.roomiePreferences}
						</p>
					</div>
				)}
			</div>
		</div>
	)
}
