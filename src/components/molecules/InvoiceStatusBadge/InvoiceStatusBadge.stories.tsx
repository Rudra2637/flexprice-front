import type { Meta, StoryObj } from '@storybook/react';
import InvoiceStatusBadge from './index';

/**
 * InvoiceStatusBadge component - Maps invoice status to colored badge.
 *
 * Status types and colors:
 * - Paid: Green (#047857)
 * - Draft: Yellow (#92400E)
 * - Void: Red (#991B1B)
 * - Pending: Blue (#1E40AF)
 */

const meta = {
	title: 'Molecules/InvoiceStatusBadge',
	component: InvoiceStatusBadge,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'Semantic badge component that displays invoice status with appropriate colors.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		status: {
			control: 'select',
			options: ['paid', 'draft', 'void', 'pending'],
			description: 'Invoice status',
		},
	},
} satisfies Meta<typeof InvoiceStatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Paid invoice status
 */
export const Paid: Story = {
	args: { status: 'paid' },
};

/**
 * Draft invoice status
 */
export const Draft: Story = {
	args: { status: 'draft' },
};

/**
 * Void invoice status
 */
export const Void: Story = {
	args: { status: 'void' },
};

/**
 * Pending invoice status
 */
export const Pending: Story = {
	args: { status: 'pending' },
};

/**
 * All statuses
 */
export const AllStatuses: Story = {
	args: { status: 'paid' },
	render: () => (
		<div className='flex gap-2'>
			<InvoiceStatusBadge status='paid' />
			<InvoiceStatusBadge status='draft' />
			<InvoiceStatusBadge status='void' />
			<InvoiceStatusBadge status='pending' />
		</div>
	),
};

/**
 * In table row context
 */
export const InTableContext: Story = {
	args: { status: 'paid' },
	render: () => (
		<div className='p-4 border rounded bg-white'>
			<table className='w-full'>
				<thead>
					<tr className='border-b'>
						<th className='text-left py-2'>Invoice ID</th>
						<th className='text-left py-2'>Amount</th>
						<th className='text-left py-2'>Status</th>
					</tr>
				</thead>
				<tbody>
					<tr className='border-b'>
						<td className='py-2'>INV-001</td>
						<td className='py-2'>$1,000.00</td>
						<td className='py-2'>
							<InvoiceStatusBadge status='paid' />
						</td>
					</tr>
					<tr className='border-b'>
						<td className='py-2'>INV-002</td>
						<td className='py-2'>$2,500.00</td>
						<td className='py-2'>
							<InvoiceStatusBadge status='draft' />
						</td>
					</tr>
					<tr>
						<td className='py-2'>INV-003</td>
						<td className='py-2'>$500.00</td>
						<td className='py-2'>
							<InvoiceStatusBadge status='void' />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	),
};
