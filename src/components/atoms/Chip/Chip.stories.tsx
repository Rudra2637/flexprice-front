import type { Meta, StoryObj } from '@storybook/react';
import Chip from './index';

/**
 * Badge/Chip component - Compact element representing status, category, or label.
 *
 * Displays status information with semantic colors:
 * - Green for active/success
 * - Yellow for draft/warning
 * - Red for void/error
 * - Gray for inactive/archived
 * - Blue for pending/info
 *
 * @component
 * @example
 * // Active status
 * <Chip variant="success">Active</Chip>
 *
 * @example
 * // Draft status
 * <Chip variant="warning">Draft</Chip>
 *
 * @example
 * // Error/Void status
 * <Chip variant="destructive">Void</Chip>
 */
const meta: Meta<typeof Chip> = {
	title: 'Atoms/Badge',
	component: Chip,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'Status badge component used to display invoice status, plan status, subscription status, and other categorical information.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'success', 'warning', 'failed', 'info'],
			description: 'Color variant representing status type',
			table: { defaultValue: { summary: 'default' } },
		},
		label: {
			control: 'text',
			description: 'Badge text content',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Active status badge - Green background with dark green text
 * Used for: Active plans, active subscriptions, active customers
 */
export const Active: Story = {
	args: {
		variant: 'success',
		label: 'Active',
	},
};

/**
 * Draft status badge - Yellow background with dark yellow text
 * Used for: Draft invoices, unpublished plans
 */
export const Draft: Story = {
	args: {
		variant: 'warning',
		label: 'Draft',
	},
};

/**
 * Paid status badge - Green, same as active
 * Used for: Paid invoices
 */
export const Paid: Story = {
	args: {
		variant: 'success',
		label: 'Paid',
	},
};

/**
 * Void status badge - Red background with dark red text
 * Used for: Voided invoices, canceled subscriptions
 */
export const Void: Story = {
	args: {
		variant: 'failed',
		label: 'Void',
	},
};

/**
 * Pending status badge - Blue background with dark blue text
 * Used for: Pending invoices, pending payments
 */
export const Pending: Story = {
	args: {
		variant: 'info',
		label: 'Pending',
	},
};

/**
 * Archived status badge - Gray background
 * Used for: Archived plans, archived customers
 */
export const Archived: Story = {
	args: {
		variant: 'default',
		label: 'Archived',
	},
};

/**
 * Inactive status badge - Gray
 * Used for: Inactive subscriptions
 */
export const Inactive: Story = {
	args: {
		variant: 'default',
		label: 'Inactive',
	},
};
/**
 * Invoice status collection - Show all badge types used for invoicing
 */
export const InvoiceStatusCollection: Story = {
	args: { variant: 'success', label: 'Paid' },
	render: () => (
		<div className='flex gap-2 flex-wrap'>
			<Chip variant='success' label='Paid' />
			<Chip variant='warning' label='Draft' />
			<Chip variant='info' label='Pending' />
			<Chip variant='failed' label='Void' />
		</div>
	),
};

/**
 * Plan status collection - Show all badge types used for plans
 */
export const PlanStatusCollection: Story = {
	args: { variant: 'success', label: 'Active' },
	render: () => (
		<div className='flex gap-2 flex-wrap'>
			<Chip variant='success' label='Active' />
			<Chip variant='default' label='Archived' />
			<Chip variant='warning' label='Draft' />
		</div>
	),
};

/**
 * Subscription status collection - Show subscription states
 */
export const SubscriptionStatusCollection: Story = {
	args: { variant: 'success', label: 'Active' },
	render: () => (
		<div className='flex gap-2 flex-wrap'>
			<Chip variant='success' label='Active' />
			<Chip variant='failed' label='Canceled' />
			<Chip variant='info' label='Paused' />
			<Chip variant='default' label='Expired' />
		</div>
	),
};
