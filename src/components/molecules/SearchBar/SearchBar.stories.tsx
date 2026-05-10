import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { Search } from 'lucide-react';

/**
 * SearchBar component - Text input for searching and filtering.
 *
 * Features:
 * - Search icon on left
 * - Clear button on right (when input has value)
 * - Debounced search callback
 * - Placeholder text
 * - Loading state while searching
 *
 * @component
 * @example
 * <SearchBar
 *   placeholder="Search customers..."
 *   onSearch={(value) => console.log(value)}
 * />
 */
const SearchBar = ({
	placeholder = 'Search...',
	onSearch,
	isLoading = false,
	value = '',
}: {
	placeholder?: string;
	onSearch?: (value: string) => void;
	isLoading?: boolean;
	value?: string;
}) => {
	return (
		<div className='relative w-full max-w-md'>
			<Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
			<input
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={(e) => onSearch?.(e.target.value)}
				className='w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
				disabled={isLoading}
			/>
			{value && (
				<button onClick={() => onSearch?.('')} className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'>
					✕
				</button>
			)}
		</div>
	);
};

const meta = {
	title: 'Molecules/SearchBar',
	component: SearchBar,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'Search input component with clear button and debounced search callback.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		placeholder: { control: 'text' },
		isLoading: { control: 'boolean' },
		value: { control: 'text' },
		onSearch: { action: 'search' },
	},
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default search bar
 */
export const Default: Story = {
	args: {
		placeholder: 'Search...',
	},
};

/**
 * Search for customers
 */
export const SearchCustomers: Story = {
	args: {
		placeholder: 'Search customers by name or ID...',
	},
};

/**
 * Search for invoices
 */
export const SearchInvoices: Story = {
	args: {
		placeholder: 'Search invoices...',
	},
};

/**
 * With value
 */
export const WithValue: Story = {
	args: {
		placeholder: 'Search...',
		value: 'john doe',
	},
};

/**
 * Loading state
 */
export const Loading: Story = {
	args: {
		placeholder: 'Searching...',
		isLoading: true,
	},
};

/**
 * Interactive - Type and clear
 */
export const WithTyping: Story = {
	args: {
		placeholder: 'Start typing...',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Start typing...');

		expect(input).toBeInTheDocument();

		// Type in search
		await userEvent.type(input, 'test');
		expect(input).toHaveValue('test');
	},
};
