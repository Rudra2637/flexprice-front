import type { Meta, StoryObj } from '@storybook/react';
import UsageBar from './index';

/**
 * UsageBar component - Progress bar showing used vs entitled units.
 *
 * Displays usage/quota as a progress bar with labels for current usage and limit.
 * Color changes based on usage percentage.
 */

const meta = {
	title: 'Molecules/UsageBar',
	component: UsageBar,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'Progress bar showing usage against limit with color indication.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		used: { control: 'number' },
		limit: { control: 'number' },
		label: { control: 'text' },
	},
} satisfies Meta<typeof UsageBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Low usage (green)
 */
export const LowUsage: Story = {
	args: {
		used: 20,
		limit: 100,
		label: 'API Calls',
	},
};

/**
 * Medium usage (yellow)
 */
export const MediumUsage: Story = {
	args: {
		used: 75,
		limit: 100,
		label: 'Storage',
	},
};

/**
 * High usage (red)
 */
export const HighUsage: Story = {
	args: {
		used: 95,
		limit: 100,
		label: 'Database Connections',
	},
};

/**
 * At limit
 */
export const AtLimit: Story = {
	args: {
		used: 100,
		limit: 100,
		label: 'Monthly Quota',
	},
};

/**
 * Over limit
 */
export const OverLimit: Story = {
	args: {
		used: 120,
		limit: 100,
		label: 'Bandwidth',
	},
};

/**
 * Multiple usage bars
 */
export const MultipleUsageBars: Story = {
	args: { used: 0, limit: 100 },
	render: () => (
		<div className='w-96 space-y-6'>
			<UsageBar used={20} limit={100} label='API Calls' />
			<UsageBar used={65} limit={100} label='Storage' />
			<UsageBar used={95} limit={100} label='Database Connections' />
			<UsageBar used={10} limit={100} label='Events' />
		</div>
	),
};

/**
 * Custom limits
 */
export const CustomLimits: Story = {
	args: { used: 0, limit: 100 },
	render: () => (
		<div className='w-96 space-y-6'>
			<UsageBar used={450} limit={1000} label='Monthly Requests (1000)' />
			<UsageBar used={8} limit={10} label='Team Members (10)' />
			<UsageBar used={4800} limit={5000} label='Emails Sent (5000)' />
		</div>
	),
};
