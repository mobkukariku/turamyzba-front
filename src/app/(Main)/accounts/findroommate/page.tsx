'use client'

import {
	CreateAnnouncementButton,
	DisplayAnnouncement,
	FindroommateFilter,
	FindroommateNavbar,
} from '@/modules/Account'

const AccountsFindroommate = () => {
	return (
		<>
			<div className='pb-[100px]'>
				<FindroommateNavbar />
				<CreateAnnouncementButton />
				<div className='max-w-[1200px] px-[20px] mx-[auto] mt-[30px]'>
					<FindroommateFilter />
					<DisplayAnnouncement />
				</div>
			</div>
		</>
	)
}

export default AccountsFindroommate
