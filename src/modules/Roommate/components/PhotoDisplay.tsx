'use client'

import Image from 'next/image'
import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { useRoommateStore } from '../stores/useRoommateDetailsStore'

export const PhotoDisplay = () => {
	const { place } = useRoommateStore()
	const [showAllPhotos, setShowAllPhotos] = useState(false)

	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	return (
		<div>
			{!showAllPhotos ? (
				place.photos.length > 0 && (
					<div className='flex justify-between gap-[20px] relative'>
						<div className='responsive-image w-[570px] rounded-[5px]'>
							<Image
								onClick={() => setShowAllPhotos(true)}
								className='aspect-square object-cover cursor-pointer h-full rounded-[5px]'
								src={place.photos[0]}
								alt=''
								width={570}
								height={570}
							/>
						</div>
						<div className='space-y-[20px]'>
							<div className='flex gap-[20px]'>
								{place.photos
									.slice(1, 3)
									.map((photo: string, index: number) => (
										<div
											key={index}
											className='responsive-image h-[275px] w-[275px] rounded-[5px]'
										>
											<Image
												onClick={() => setShowAllPhotos(true)}
												className='aspect-square object-cover cursor-pointer h-full rounded-[5px]'
												src={photo}
												alt=''
												width={275}
												height={275}
											/>
										</div>
									))}
							</div>
							<div className='flex gap-[20px]'>
								{place.photos
									.slice(3, 5)
									.map((photo: string, index: number) => (
										<div
											key={index}
											className='responsive-image h-[275px] w-[275px] rounded-[5px]'
										>
											<Image
												onClick={() => setShowAllPhotos(true)}
												className='aspect-square object-cover cursor-pointer h-full rounded-[5px]'
												src={photo}
												alt=''
												width={275}
												height={275}
											/>
										</div>
									))}
							</div>

							{place.photos.length > 5 && (
								<button
									onClick={() => setShowAllPhotos(true)}
									className='btn-text flex absolute bottom-[20px] right-[0] bg-[#33FF00] rounded-[5px] max-w-[275px] max-h-[50px] w-[100%] h-[100%] items-center justify-center border-[1px] border-black text-[20px] font-medium'
								>
									Показать больше фото
								</button>
							)}
						</div>
					</div>
				)
			) : (
				<div className='w-full max-w-[1200px] mx-auto'>
					<Slider {...sliderSettings}>
						{place.photos.map((photo: string, index: number) => (
							<div key={index} className='w-full h-[600px]'>
								<Image
									className='object-cover w-full h-full rounded-[5px]'
									src={photo}
									alt=''
									width={1200}
									height={600}
								/>
							</div>
						))}
					</Slider>
					<button
						onClick={() => setShowAllPhotos(false)}
						className='mt-[20px] btn-text bg-[#33FF00] px-[20px] py-[10px] rounded-[5px] text-[18px] font-medium'
					>
						Закрыть фото
					</button>
				</div>
			)}
		</div>
	)
}
