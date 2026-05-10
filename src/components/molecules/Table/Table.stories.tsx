import type { Meta, StoryObj } from '@storybook/react';
import DataTable from './DataTable';

/**
 * DataTable component - Sortable, paginated data table.
 *
 * Features:
 * - Sortable columns (click header to sort)
 * - Pagination with controls
 * - Loading skeleton state
 * - Empty state
 * - Status badges in cells
 * - Responsive design
 */

const meta = {
	title: 'Molecules/DataTable',
	component: DataTable,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'Sortable, paginated data table with support for loading and empty states.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		loading: { control: 'boolean' },
		isEmpty: { control: 'boolean' },
	},
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockInvoiceData = [
	{
		name: 'Acme Corp',
		amount: '$1,500.00',
		status: 'Paid',
		statusVariant: 'success',
		date: 'Mar 15, 2024',
	},
	{
		name: 'TechStart Inc',
		amount: '$2,300.00',
		status: 'Draft',
		statusVariant: 'warning',
		date: 'Mar 14, 2024',
	},
	{
		name: 'Global Enterprises',
		amount: '$900.00',
		status: 'Pending',
		statusVariant: 'info',
		date: 'Mar 13, 2024',
	},
	{
		name: 'Local Services',
		amount: '$500.00',
		status: 'Void',
		statusVariant: 'failed',
		date: 'Mar 12, 2024',
	},
	{
		name: 'Startup Labs',
		amount: '$3,200.00',
		status: 'Paid',
		statusVariant: 'success',
		date: 'Mar 11, 2024',
	},
	{
		name: 'Innovation Hub',
		amount: '$1,800.00',
		status: 'Paid',
		statusVariant: 'success',
		date: 'Mar 10, 2024',
	},
];

/**
 * Default data table with data
 */
export const Default: Story = {
	args: {
		data: mockInvoiceData,
	},
};

/**
 * Loading state
 */
export const Loading: Story = {
	args: {
		loading: true,
	},
};

/**
 * Empty state
 */
export const Empty: Story = {
	args: {
		isEmpty: true,
	},
};

/**
 * Few items
 */
export const FewItems: Story = {
	args: {
		data: mockInvoiceData.slice(0, 2),
	},
};

/**
 * Large dataset (for pagination demo)
 */
export const LargeDataset: Story = {
	args: {
		data: Array.from({ length: 25 }, (_, i) => ({
			name: `Customer ${i + 1}`,
			amount: `$${(Math.random() * 5000 + 100).toFixed(2)}`,
			status: ['Paid', 'Draft', 'Pending', 'Void'][i % 4],
			statusVariant: ['success', 'warning', 'info', 'failed'][i % 4],
			date: new Date(Date.now() - i * 86400000).toLocaleDateString(),
		})),
	},
};
