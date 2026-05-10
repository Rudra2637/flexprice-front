import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import Input from './Input';

/**
 * Input component - Text input field for user data entry.
 *
 * Features:
 * - Support for various input types (text, email, number, password, etc.)
 * - Optional label above input
 * - Optional helper text below input
 * - Error state with red border and error message
 * - Currency prefix support for monetary inputs
 * - Disabled state
 * - Full width variant
 */
const meta: Meta<typeof Input> = {
	title: 'Atoms/Input',
	component: Input,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'Text input component used for form fields with support for labels, helper text, and error states.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: 'select',
			options: ['text', 'email', 'password', 'number', 'tel', 'url'],
		},
		label: { control: 'text' },
		placeholder: { control: 'text' },
		description: { control: 'text' },
		error: { control: 'text' },
		disabled: { control: 'boolean' },
		value: { control: 'text' },
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'Enter text here',
	},
};

export const WithLabel: Story = {
	args: {
		label: 'Email',
		placeholder: 'Enter your email',
		type: 'email',
	},
};

export const WithHelper: Story = {
	args: {
		label: 'Email',
		placeholder: 'you@example.com',
		description: "We'll never share your email.",
	},
};

export const WithError: Story = {
	args: {
		label: 'Password',
		type: 'password',
		error: 'Password must be at least 8 characters',
		placeholder: 'Enter your password',
	},
};

export const Disabled: Story = {
	args: {
		label: 'Username',
		placeholder: 'Cannot edit this',
		disabled: true,
		value: 'Read-only',
	},
};

export const EmailInput: Story = {
	args: {
		label: 'Email',
		placeholder: 'you@example.com',
		type: 'email',
	},
};

export const WithValue: Story = {
	args: {
		label: 'Name',
		value: 'John Doe',
		placeholder: 'Enter your name',
	},
};

export const CurrencyInput: Story = {
	args: {
		type: 'number',
		label: 'Amount',
		placeholder: '0.00',
		description: 'Enter amount in USD',
	},
};

export const WithTyping: Story = {
	args: {
		label: 'Name',
		placeholder: 'Start typing...',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Start typing...');
		expect(input).toBeInTheDocument();
		await userEvent.type(input, 'John Doe');
		expect(input).toHaveValue('John Doe');
	},
};
