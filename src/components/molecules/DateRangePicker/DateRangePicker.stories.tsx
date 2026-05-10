import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from 'lucide-react';

/**
 * DateRangePicker component - Select date range for filtering.
 *
 * Used in analytics and reporting to filter data by date range.
 */
const DateRangePicker = ({
	startDate,
	endDate,
	onDateChange,
}: {
	startDate?: string;
	endDate?: string;
	onDateChange?: (start: string, end: string) => void;
}) => {
	return (
		<div className='flex gap-4 items-center'>
			<div className='flex items-center gap-2'>
				<Calendar className='w-4 h-4 text-gray-400' />
				<input
					type='date'
					defaultValue={startDate}
					onChange={(e) => onDateChange?.(e.target.value, endDate || '')}
					className='px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
			</div>
			<span className='text-gray-400'>to</span>
			<div className='flex items-center gap-2'>
				<input
					type='date'
					defaultValue={endDate}
					onChange={(e) => onDateChange?.(startDate || '', e.target.value)}
					className='px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
			</div>
		</div>
	);
};

const meta = {
	title: 'Molecules/DateRangePicker',
	component: DateRangePicker,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'Date range picker for filtering data by date range in analytics and reporting views.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		startDate: { control: 'text' },
		endDate: { control: 'text' },
		onDateChange: { action: 'dateChanged' },
	},
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default date range picker
 */
export const Default: Story = {
	args: {},
};

/**
 * With preset dates
 */
export const WithDates: Story = {
	args: {
		startDate: '2024-01-01',
		endDate: '2024-12-31',
	},
};

/**
 * Current month
 */
export const CurrentMonth: Story = {
	render: () => {
		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, '0');
		const start = `${year}-${month}-01`;
		const end = `${year}-${month}-${String(today.getDate()).padStart(2, '0')}`;

		return <DateRangePicker startDate={start} endDate={end} />;
	},
};

/**
 * Last 90 days
 */
export const Last90Days: Story = {
	render: () => {
		const today = new Date();
		const start = new Date(today.getTime() - 90 * 24 * 60 * 60 * 1000);
		const formatDate = (d: Date) => d.toISOString().split('T')[0];

		return <DateRangePicker startDate={formatDate(start)} endDate={formatDate(today)} />;
	},
};

/**
 * In filter context
 */
export const InFilterContext: Story = {
	render: () => (
		<div className='p-4 bg-gray-50 rounded-lg border'>
			<h3 className='text-sm font-semibold text-gray-700 mb-4'>Filter by Date Range</h3>
			<DateRangePicker startDate='2024-01-01' endDate='2024-03-31' />
			<button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700'>Apply Filter</button>
		</div>
	),
};
