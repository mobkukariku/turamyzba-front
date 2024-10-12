'use client'

import CreateAnnouncementButton from '@/modules/Account/components/CreateAnnouncementButton'
import DisplayAnnouncement from '@/modules/Account/components/DisplayAnnouncement'
import FindroommateFilter from '@/modules/Account/components/FindroommateFilter'
import FindroommateNavbar from '@/modules/Account/components/FindroommateNavbar'

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
