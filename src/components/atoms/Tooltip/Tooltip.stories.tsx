import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Tooltip from './index';
import { Info } from 'lucide-react';

/**
 * Tooltip component - Informational popup that appears on hover.
 *
 * Features:
 * - Appears on hover or focus
 * - Supports arrow indicator
 * - Configurable position
 * - Dark background with light text
 * - Keyboard accessible
 */
const meta: Meta<{
	children: React.ReactNode;
	content: React.ReactNode;
	delayDuration?: number;
	side?: 'top' | 'right' | 'bottom' | 'left';
	align?: 'start' | 'center' | 'end';
	sideOffset?: number;
	className?: string;
}> = {
	title: 'Atoms/Tooltip',
	component: Tooltip,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'Accessible tooltip component for displaying contextual help and information on hover or focus.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		side: {
			control: 'select',
			options: ['top', 'right', 'bottom', 'left'],
			description: 'Which side of the trigger to display tooltip',
		},
		align: {
			control: 'select',
			options: ['start', 'center', 'end'],
			description: 'Alignment of tooltip relative to trigger',
		},
		delayDuration: { control: 'number', description: 'Delay before showing tooltip in ms' },
		sideOffset: { control: 'number', description: 'Distance from trigger' },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic tooltip
 */
export const Default: Story = {
	args: {
		children: <button className='px-4 py-2 bg-blue-500 text-white rounded'>Hover me</button>,
		content: 'This is a helpful tooltip',
	},
};

/**
 * Tooltip on icon
 */
export const OnIcon: Story = {
	args: {
		children: <Info className='w-5 h-5 text-gray-400 cursor-help' />,
		content: 'More information available',
	},
};

/**
 * Tooltip with longer text
 */
export const LongText: Story = {
	args: {
		children: <span className='underline cursor-help'>Help</span>,
		content: 'This is a longer tooltip that explains the feature in detail. It can contain more information than a simple label.',
	},
};

/**
 * Multiple tooltips
 */
export const Multiple: Story = {
	args: {
		children: <button>Button</button>,
		content: 'Tooltip',
	},
	render: () => (
		<div className='flex gap-8'>
			<Tooltip children={<button>Button 1</button>} content='First tooltip' />
			<Tooltip children={<button>Button 2</button>} content='Second tooltip' />
			<Tooltip children={<button>Button 3</button>} content='Third tooltip' />
		</div>
	),
};

/**
 * Tooltip on button
 */
export const OnButton: Story = {
	args: {
		children: <button className='px-4 py-2 bg-gray-600 text-white rounded'>Action</button>,
		content: 'Click to perform action',
	},
};

/**
 * Tooltip with hover (top position)
 */
export const WithHover: Story = {
	args: {
		children: <span className='text-blue-600 cursor-help'>Hover here</span>,
		content: 'Information appears on hover',
		side: 'top',
	},
};

/**
 * Tooltip with keyboard focus
 */
export const KeyboardFocus: Story = {
	args: {
		children: <button className='px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'>Tab to focus</button>,
		content: 'Use Tab to focus this button',
		side: 'bottom',
	},
};
