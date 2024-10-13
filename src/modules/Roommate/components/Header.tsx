'use client'

import Image from 'next/image'
import listIcon from '../../../../public/assets/listIcon.svg'
import mapIcon from '../../../../public/assets/mapIcon.svg'
import { useViewStore } from '../stores/useViewStore'

export const Header = () => {
	const { activeView, setActiveView } = useViewStore()

	return (
		<>
			<div
				className={`max-w-[1200px] mt-8 px-[20px] mx-[auto] h-[100px] flex items-center justify-between `}
			>
				<div className='flex gap-[10px]'>
					<button
						className={`w-[50px] h-[50px] flex items-center justify-center rounded-[5px] ${
							activeView === 'list'
								? 'bg-[#33FF00]'
								: 'bg-[#D9D9D9] opacity-[0.5]'
						}`}
						onClick={() => setActiveView('list')}
					>
						<Image
							src={listIcon}
							alt='List View'
							className='w-[30px] h-[30px]'
						/>
					</button>
					<button
						className={`w-[50px] h-[50px] flex items-center justify-center rounded-[5px] ${
							activeView === 'map'
								? 'bg-[#33FF00]'
								: 'bg-[#D9D9D9] opacity-[0.5]'
						}`}
						onClick={() => setActiveView('map')}
					>
						<Image src={mapIcon} alt='Map View' className='w-[30px] h-[30px]' />
					</button>
				</div>
			</div>

			<hr className='w-full shadow-lg border-none h-[1px] bg-[#D9D9D9] bg-opacity-35' />
		</>
	)
}
