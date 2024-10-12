import { StaticImageData } from 'next/image'
import room from '../../../public/assets/i.webp'

type Address = {
	address: string
}

export type Roommate = {
	_id: string
	photos?: string[] | StaticImageData[]
	monthlyExpensePerPerson: number
	title: string
	address: Address
	moveInStart?: string
	roomiePreferences?: string
}

export const roommates: Roommate[] = [
	{
		_id: '1',
		photos: [room],
		monthlyExpensePerPerson: 45000,
		title: 'Cozy apartment in city center',
		address: {
			address: '123 Main St, Cityville',
		},
		moveInStart: '2024-11-01',
		roomiePreferences: 'Looking for a non-smoker, tidy, and respectful person.',
	},
	{
		_id: '2',
		photos: [],
		monthlyExpensePerPerson: 50000,
		title: 'Modern loft near the river',
		address: {
			address: '456 River Rd, Townburg',
		},
		moveInStart: '2024-12-15',
		roomiePreferences: 'Prefer someone who is outgoing and enjoys socializing.',
	},
	{
		_id: '3',
		photos: [room],
		monthlyExpensePerPerson: 40000,
		title: 'Quiet room in a family house',
		address: {
			address: '789 Suburb Ave, Villageville',
		},
		moveInStart: '2024-10-20',
		roomiePreferences:
			'Ideal for a student or professional who values quiet and privacy.',
	},
	{
		_id: '1',
		photos: [],
		monthlyExpensePerPerson: 45000,
		title: 'Cozy apartment in city center',
		address: {
			address: '123 Main St, Cityville',
		},
		moveInStart: '2024-11-01',
		roomiePreferences: 'Looking for a non-smoker, tidy, and respectful person.',
	},
	{
		_id: '2',
		photos: [room],
		monthlyExpensePerPerson: 50000,
		title: 'Modern loft near the river',
		address: {
			address: '456 River Rd, Townburg',
		},
		moveInStart: '2024-12-15',
		roomiePreferences: 'Prefer someone who is outgoing and enjoys socializing.',
	},
	{
		_id: '3',
		photos: [],
		monthlyExpensePerPerson: 40000,
		title: 'Quiet room in a family house',
		address: {
			address: '789 Suburb Ave, Villageville',
		},
		moveInStart: '2024-10-20',
		roomiePreferences:
			'Ideal for a student or professional who values quiet and privacy.',
	},
	{
		_id: '1',
		photos: [room],
		monthlyExpensePerPerson: 45000,
		title: 'Cozy apartment in city center',
		address: {
			address: '123 Main St, Cityville',
		},
		moveInStart: '2024-11-01',
		roomiePreferences: 'Looking for a non-smoker, tidy, and respectful person.',
	},
	{
		_id: '2',
		photos: [room],
		monthlyExpensePerPerson: 50000,
		title: 'Modern loft near the river',
		address: {
			address: '456 River Rd, Townburg',
		},
		moveInStart: '2024-12-15',
		roomiePreferences: 'Prefer someone who is outgoing and enjoys socializing.',
	},
	{
		_id: '3',
		photos: [room],
		monthlyExpensePerPerson: 40000,
		title: 'Quiet room in a family house',
		address: {
			address: '789 Suburb Ave, Villageville',
		},
		moveInStart: '2024-10-20',
		roomiePreferences:
			'Ideal for a student or professional who values quiet and privacy.',
	},
	{
		_id: '2',
		photos: [room],
		monthlyExpensePerPerson: 50000,
		title: 'Modern loft near the river',
		address: {
			address: '456 River Rd, Townburg',
		},
		moveInStart: '2024-12-15',
		roomiePreferences: 'Prefer someone who is outgoing and enjoys socializing.',
	},
	{
		_id: '3',
		photos: [room],
		monthlyExpensePerPerson: 40000,
		title: 'Quiet room in a family house',
		address: {
			address: '789 Suburb Ave, Villageville',
		},
		moveInStart: '2024-10-20',
		roomiePreferences:
			'Ideal for a student or professional who values quiet and privacy.',
	},
	{
		_id: '1',
		photos: [room],
		monthlyExpensePerPerson: 45000,
		title: 'Cozy apartment in city center',
		address: {
			address: '123 Main St, Cityville',
		},
		moveInStart: '2024-11-01',
		roomiePreferences: 'Looking for a non-smoker, tidy, and respectful person.',
	},
	{
		_id: '2',
		photos: [room],
		monthlyExpensePerPerson: 50000,
		title: 'Modern loft near the river',
		address: {
			address: '456 River Rd, Townburg',
		},
		moveInStart: '2024-12-15',
		roomiePreferences: 'Prefer someone who is outgoing and enjoys socializing.',
	},
	{
		_id: '3',
		photos: [room],
		monthlyExpensePerPerson: 40000,
		title: 'Quiet room in a family house',
		address: {
			address: '789 Suburb Ave, Villageville',
		},
		moveInStart: '2024-10-20',
		roomiePreferences:
			'Ideal for a student or professional who values quiet and privacy.',
	},
	{
		_id: '1',
		photos: [room],
		monthlyExpensePerPerson: 45000,
		title: 'Cozy apartment in city center',
		address: {
			address: '123 Main St, Cityville',
		},
		moveInStart: '2024-11-01',
		roomiePreferences: 'Looking for a non-smoker, tidy, and respectful person.',
	},
	{
		_id: '2',
		photos: [],
		monthlyExpensePerPerson: 50000,
		title: 'Modern loft near the river',
		address: {
			address: '456 River Rd, Townburg',
		},
		moveInStart: '2024-12-15',
		roomiePreferences: 'Prefer someone who is outgoing and enjoys socializing.',
	},
	{
		_id: '3',
		photos: [],
		monthlyExpensePerPerson: 40000,
		title: 'Quiet room in a family house',
		address: {
			address: '789 Suburb Ave, Villageville',
		},
		moveInStart: '2024-10-20',
		roomiePreferences:
			'Ideal for a student or professional who values quiet and privacy.',
	},
	{
		_id: '2',
		photos: [],
		monthlyExpensePerPerson: 50000,
		title: 'Modern loft near the river',
		address: {
			address: '456 River Rd, Townburg',
		},
		moveInStart: '2024-12-15',
		roomiePreferences: 'Prefer someone who is outgoing and enjoys socializing.',
	},
	{
		_id: '3',
		photos: [],
		monthlyExpensePerPerson: 40000,
		title: 'Quiet room in a family house',
		address: {
			address: '789 Suburb Ave, Villageville',
		},
		moveInStart: '2024-10-20',
		roomiePreferences:
			'Ideal for a student or professional who values quiet and privacy.',
	},
	{
		_id: '1',
		photos: [],
		monthlyExpensePerPerson: 45000,
		title: 'Cozy apartment in city center',
		address: {
			address: '123 Main St, Cityville',
		},
		moveInStart: '2024-11-01',
		roomiePreferences: 'Looking for a non-smoker, tidy, and respectful person.',
	},
	{
		_id: '2',
		photos: [],
		monthlyExpensePerPerson: 50000,
		title: 'Modern loft near the river',
		address: {
			address: '456 River Rd, Townburg',
		},
		moveInStart: '2024-12-15',
		roomiePreferences: 'Prefer someone who is outgoing and enjoys socializing.',
	},
	{
		_id: '3',
		photos: [],
		monthlyExpensePerPerson: 40000,
		title: 'Quiet room in a family house',
		address: {
			address: '789 Suburb Ave, Villageville',
		},
		moveInStart: '2024-10-20',
		roomiePreferences:
			'Ideal for a student or professional who values quiet and privacy.',
	},
	{
		_id: '1',
		photos: [],
		monthlyExpensePerPerson: 45000,
		title: 'Cozy apartment in city center',
		address: {
			address: '123 Main St, Cityville',
		},
		moveInStart: '2024-11-01',
		roomiePreferences: 'Looking for a non-smoker, tidy, and respectful person.',
	},
	{
		_id: '2',
		photos: [],
		monthlyExpensePerPerson: 50000,
		title: 'Modern loft near the river',
		address: {
			address: '456 River Rd, Townburg',
		},
		moveInStart: '2024-12-15',
		roomiePreferences: 'Prefer someone who is outgoing and enjoys socializing.',
	},
	{
		_id: '3',
		photos: [],
		monthlyExpensePerPerson: 40000,
		title: 'Quiet room in a family house',
		address: {
			address: '789 Suburb Ave, Villageville',
		},
		moveInStart: '2024-10-20',
		roomiePreferences:
			'Ideal for a student or professional who values quiet and privacy.',
	},
	{
		_id: '2',
		photos: [],
		monthlyExpensePerPerson: 50000,
		title: 'Modern loft near the river',
		address: {
			address: '456 River Rd, Townburg',
		},
		moveInStart: '2024-12-15',
		roomiePreferences: 'Prefer someone who is outgoing and enjoys socializing.',
	},
	{
		_id: '3',
		photos: [],
		monthlyExpensePerPerson: 40000,
		title: 'Quiet room in a family house',
		address: {
			address: '789 Suburb Ave, Villageville',
		},
		moveInStart: '2024-10-20',
		roomiePreferences:
			'Ideal for a student or professional who values quiet and privacy.',
	},
	{
		_id: '1',
		photos: [],
		monthlyExpensePerPerson: 45000,
		title: 'Cozy apartment in city center',
		address: {
			address: '123 Main St, Cityville',
		},
		moveInStart: '2024-11-01',
		roomiePreferences: 'Looking for a non-smoker, tidy, and respectful person.',
	},
	{
		_id: '2',
		photos: [],
		monthlyExpensePerPerson: 50000,
		title: 'Modern loft near the river',
		address: {
			address: '456 River Rd, Townburg',
		},
		moveInStart: '2024-12-15',
		roomiePreferences: 'Prefer someone who is outgoing and enjoys socializing.',
	},
	{
		_id: '3',
		photos: [],
		monthlyExpensePerPerson: 40000,
		title: 'Quiet room in a family house',
		address: {
			address: '789 Suburb Ave, Villageville',
		},
		moveInStart: '2024-10-20',
		roomiePreferences:
			'Ideal for a student or professional who values quiet and privacy.',
	},
	{
		_id: '1',
		photos: [],
		monthlyExpensePerPerson: 45000,
		title: 'Cozy apartment in city center',
		address: {
			address: '123 Main St, Cityville',
		},
		moveInStart: '2024-11-01',
		roomiePreferences: 'Looking for a non-smoker, tidy, and respectful person.',
	},
	{
		_id: '2',
		photos: [],
		monthlyExpensePerPerson: 50000,
		title: 'Modern loft near the river',
		address: {
			address: '456 River Rd, Townburg',
		},
		moveInStart: '2024-12-15',
		roomiePreferences: 'Prefer someone who is outgoing and enjoys socializing.',
	},
	{
		_id: '3',
		photos: [],
		monthlyExpensePerPerson: 40000,
		title: 'Quiet room in a family house',
		address: {
			address: '789 Suburb Ave, Villageville',
		},
		moveInStart: '2024-10-20',
		roomiePreferences:
			'Ideal for a student or professional who values quiet and privacy.',
	},
]
