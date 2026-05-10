import type { Meta, StoryObj } from '@storybook/react';
import MetricCard from './index';

/**
 * MetricCard component - Key Performance Indicator display.
 *
 * Shows a metric with label, value, and optional trend indicator.
 * Used in dashboards to display important KPIs like revenue, customer count, etc.
 *
 * @component
 * @example
 * <MetricCard
 *   label="Total Revenue"
 *   value="$45,231.89"
 *   trend={{ value: 12, direction: 'up' }}
 * />
 */

const meta = {
	title: 'Molecules/MetricCard',
	component: MetricCard,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'KPI metric card displaying key business metrics with optional trend indicators.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description: 'Metric label',
		},
		value: {
			control: 'text',
			description: 'Metric value',
		},
		trend: {
			control: 'object',
			description: 'Trend data with value and direction',
		},
	},
} satisfies Meta<typeof MetricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Revenue metric
 */
export const Revenue: Story = {
	args: {
		label: 'Total Revenue',
		value: '$45,231.89',
		trend: { value: 12, direction: 'up' },
	},
};

/**
 * Customer metric
 */
export const Customers: Story = {
	args: {
		label: 'Active Customers',
		value: '1,234',
		trend: { value: 8, direction: 'up' },
	},
};

/**
 * Subscription metric
 */
export const Subscriptions: Story = {
	args: {
		label: 'Active Subscriptions',
		value: '856',
		trend: { value: 5, direction: 'down' },
	},
};

/**
 * Metric without trend
 */
export const WithoutTrend: Story = {
	args: {
		label: 'Total Invoices',
		value: '3,456',
	},
};

/**
 * Dashboard grid layout
 */
export const DashboardGrid: Story = {
	args: {
		label: 'Metric',
		value: '$0',
	},
	render: () => (
		<div className='grid grid-cols-2 gap-4 w-full max-w-2xl'>
			<MetricCard label='Total Revenue' value='$45,231.89' trend={{ value: 12, direction: 'up' }} />
			<MetricCard label='Active Customers' value='1,234' trend={{ value: 8, direction: 'up' }} />
			<MetricCard label='MRR' value='$12,456.00' trend={{ value: 3, direction: 'up' }} />
			<MetricCard label='Churn Rate' value='2.3%' trend={{ value: 0.5, direction: 'down' }} />
		</div>
	),
};

/**
 * Metric with down trend
 */
export const DownTrend: Story = {
	args: {
		label: 'Churn Rate',
		value: '2.3%',
		trend: { value: 5, direction: 'down' },
	},
};
