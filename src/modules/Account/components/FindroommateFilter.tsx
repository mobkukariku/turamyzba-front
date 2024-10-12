'use client'

import { useTabStore } from '../stores/TabStore'

const FindroommateFilter = () => {
	const { activeTab, setActiveTab } = useTabStore()
	return (
		<div>
			<div className='tabs flex mt-[30px] mb-[20px] gap-[15px]'>
				<button
					className={`border-b-[1px] border-b-[#161C24] text-[15px] ${
						activeTab === 'active'
							? ' text-[#33FF00] border-b-[#33FF00]'
							: 'text-[#fff]'
					}`}
					onClick={() => setActiveTab('active')}
				>
					Активные объявления
				</button>
				<button
					className={`border-b-[1px] border-b-[#161C24] text-[15px] ${
						activeTab === 'archived'
							? ' text-[#33FF00] border-b-[#33FF00]'
							: 'text-[#fff]'
					}`}
					onClick={() => setActiveTab('archived')}
				>
					Архивированные объявления
				</button>
			</div>
		</div>
	)
}

export default FindroommateFilter
