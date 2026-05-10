import type { Meta, StoryObj } from '@storybook/react';
import { Inbox, Plus, FileText, Users } from 'lucide-react';

/**
 * EmptyState component - Display when no data is available.
 *
 * Shows icon, headline, description, and CTA button when a page has no data.
 */
const EmptyState = ({
	icon: Icon = Inbox,
	title = 'No data found',
	description = 'Get started by creating your first item',
	buttonText = 'Create',
	onAction,
}: {
	icon?: any;
	title?: string;
	description?: string;
	buttonText?: string;
	onAction?: () => void;
}) => {
	return (
		<div className='flex flex-col items-center justify-center py-16 px-4'>
			<div className='mb-6'>
				<Icon className='w-16 h-16 text-gray-400' />
			</div>

			<h2 className='text-2xl font-semibold text-gray-900 mb-2 text-center'>{title}</h2>

			<p className='text-gray-600 text-center mb-8 max-w-md'>{description}</p>

			<button
				onClick={onAction}
				className='flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold'>
				<Plus className='w-5 h-5' />
				{buttonText}
			</button>
		</div>
	);
};

const meta = {
	title: 'Organisms/EmptyState',
	component: EmptyState,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'Empty state display for when no data is available with icon, message, and CTA.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		description: { control: 'text' },
		buttonText: { control: 'text' },
		onAction: { action: 'clicked' },
	},
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * No invoices
 */
export const NoInvoices: Story = {
	args: {
		icon: FileText,
		title: 'No invoices yet',
		description: 'Create your first invoice to get started with billing',
		buttonText: 'Create Invoice',
	},
};

/**
 * No customers
 */
export const NoCustomers: Story = {
	args: {
		icon: Users,
		title: 'No customers yet',
		description: 'Add your first customer to begin',
		buttonText: 'Add Customer',
	},
};

/**
 * No subscriptions
 */
export const NoSubscriptions: Story = {
	args: {
		icon: Inbox,
		title: 'No subscriptions found',
		description: 'There are no active subscriptions to display',
		buttonText: 'Create Subscription',
	},
};

/**
 * Generic empty state
 */
export const Generic: Story = {
	args: {
		title: 'No data available',
		description: 'There is no data to display right now',
		buttonText: 'Get Started',
	},
};

/**
 * In a container
 */
export const InContainer: Story = {
	render: () => (
		<div className='border-2 border-dashed border-gray-300 rounded-lg'>
			<EmptyState
				icon={Inbox}
				title='No plans created yet'
				description='Create a pricing plan to start billing your customers'
				buttonText='Create Plan'
			/>
		</div>
	),
};

/**
 * Large view (full page)
 */
export const FullPage: Story = {
	parameters: {
		layout: 'fullscreen',
	},
	render: () => (
		<div className='min-h-screen bg-gray-50 flex items-center justify-center'>
			<EmptyState
				icon={FileText}
				title='Your dashboard is empty'
				description='Start by creating your first plan to see insights here'
				buttonText='Create Your First Plan'
			/>
		</div>
	),
};
