import type { Meta, StoryObj } from '@storybook/react';
import Loader from './index';

/**
 * Spinner/Loader component - Loading indicator for async operations.
 *
 * Displays an animated loading spinner to indicate that data is being fetched or processed.
 * Commonly used inside buttons, modals, or loading states.
 *
 * @component
 * @example
 * <Loader /> // Full-page loader with random quotes
 */
const meta = {
	title: 'Atoms/Spinner',
	component: Loader,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: 'Animated loading spinner with rotating quotes used to indicate loading states for async operations.',
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default loader (full page)
 */
export const Default: Story = {};

/**
 * Small spinner
 */
export const Small: Story = {
	render: () => (
		<div className='flex justify-center items-center p-8'>
			<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
		</div>
	),
};

/**
 * Medium spinner (default)
 */
export const Medium: Story = {
	render: () => (
		<div className='flex justify-center items-center p-8'>
			<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
		</div>
	),
};

/**
 * Large spinner
 */
export const Large: Story = {
	render: () => (
		<div className='flex justify-center items-center p-8'>
			<div className='animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600'></div>
		</div>
	),
};

/**
 * Inside button (loading state)
 */
export const InsideButton: Story = {
	render: () => (
		<div className='flex justify-center items-center p-8'>
			<button className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded'>
				<div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>
				<span>Loading...</span>
			</button>
		</div>
	),
};

/**
 * Multiple spinners
 */
export const Multiple: Story = {
	render: () => (
		<div className='flex gap-4 items-center justify-center p-8'>
			<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
			<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
			<div className='animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600'></div>
		</div>
	),
};

/**
 * In a card (loading state)
 */
export const InCard: Story = {
	render: () => (
		<div className='p-6 border rounded-lg bg-white shadow-sm flex flex-col items-center justify-center h-40'>
			<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
			<p className='mt-4 text-sm text-gray-600'>Fetching data...</p>
		</div>
	),
};
