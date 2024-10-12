'use client'

import { useRoommateStore } from '../stores/useRoommateDetailsStore'

export const DetailsRightCard = () => {
	const { place } = useRoommateStore()
	return (
		<div>
			<div
				className={`w-[380px] p-[20px] pt-[36px] bg-[#212B36] rounded-[5px]`}
			>
				<p className='monthly-expense font-semibold text-[#FFFFFF] text-3xl'>
					{place?.monthlyExpensePerPerson}тг
				</p>
				<div className='h-[1px] w-full bg-[#fff] my-[14px]'></div>
				{place.moveInStart && (
					<div className='mb-[12px] flex items-end gap-[5px]'>
						<span className='section-title font-medium text-white'>
							Старт заселения:
						</span>
						<p className='text-[white] font-medium section-title'>
							{new Date(place.moveInStart).toLocaleDateString()}
						</p>
					</div>
				)}
				{place.deposit && (
					<div className='mb-[12px] flex items-end gap-[5px]'>
						<span className='section-title text-white font-medium'>
							Депозит:{' '}
						</span>
						<p className='text-[white] font-medium section-title'>
							{place.deposit} тг
						</p>
					</div>
				)}
				{place.utilityService && (
					<div className='flex items-end gap-[5px]'>
						<span className='section-title text-white font-medium'>
							Коммунальная услуга:
						</span>
						<p className='text-[white] font-medium section-title'>
							{place.utilityService}
						</p>
					</div>
				)}
				<div className='mt-[80px] w-full'>
					{place.contactNumber && (
						<a
							href={`tel:${place.contactNumber}`}
							className='bg-[#33FF00] w-full rounded-[5px] h-[60px] block flex items-center justify-center btn-text font-semibold mb-[10px]'
						>
							Позвонить
						</a>
					)}
					{place.whatsappNumber && (
						<a
							href={`https://wa.me/${place.whatsappNumber}`}
							className='bg-[#33FF00] border-[#33FF00] border-[1px] w-full bg-transparent rounded-[5px] h-[60px] block flex items-center justify-center text-[#33FF00] btn-text font-semibold mb-[10px]'
						>
							Написать
						</a>
					)}
				</div>
			</div>
		</div>
	)
}
