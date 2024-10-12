'use client'

import NavButton from '@/components/NavButton'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useRoommateStore } from '../stores/useRoommateDetailsStore'
import { DetailsLeftCard } from './DetailsLeftCard'
import { DetailsRightCard } from './DetailsRightCard'
import { LoadingSkeleton } from './LoadingSkeleton'
import { PhotoDisplay } from './PhotoDisplay'

export const DetailsDisplay = () => {
	const { id } = useParams()
	const { place, loading, setPlaceById } = useRoommateStore()

	useEffect(() => {
		setPlaceById(id as string)
	}, [id, setPlaceById])

	if (loading || !place) {
		return <LoadingSkeleton />
	}

	return (
		<div className='max-w-[1200px] px-[20px] mx-auto'>
			<NavButton />
			<PhotoDisplay />
			<div className='mt-[50px] flex justify-between items-start'>
				<DetailsLeftCard />
				<DetailsRightCard />
			</div>
		</div>
	)
}
