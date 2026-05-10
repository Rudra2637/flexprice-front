import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './index';
import type { SelectOption } from './Select';

/**
 * Select/Dropdown component - Single-select dropdown for user choices.
 *
 * Features:
 * - Accessible dropdown menu
 * - Optional label and helper text
 * - Support for search/filter
 * - Error state
 * - Disabled state
 */
const planOptions: SelectOption[] = [
	{ value: 'subscription', label: 'Subscription' },
	{ value: 'usage-based', label: 'Usage-based' },
	{ value: 'hybrid', label: 'Hybrid' },
	{ value: 'tiered', label: 'Tiered' },
];

const customerOptions: SelectOption[] = [
	{ value: 'acme', label: 'Acme Corp' },
	{ value: 'techstart', label: 'TechStart Inc' },
	{ value: 'global', label: 'Global Enterprises' },
];

const meta: Meta<typeof Select> = {
	title: 'Atoms/Select',
	component: Select,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'Accessible dropdown select component used for filtering, choosing options in forms, and selection inputs.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		options: { control: 'object' },
		value: { control: 'text' },
		placeholder: { control: 'text' },
		label: { control: 'text' },
		disabled: { control: 'boolean' },
		required: { control: 'boolean' },
		onChange: { action: 'changed' },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default select - Basic dropdown
 */
export const Default: Story = {
	args: {
		options: planOptions,
		placeholder: 'Select a plan type...',
	},
};

/**
 * Select with label and value
 */
export const WithLabel: Story = {
	args: {
		options: customerOptions,
		label: 'Choose Customer',
		placeholder: 'Select customer...',
		value: 'acme',
	},
};

/**
 * Select with many options
 */
export const ManyOptions: Story = {
	args: {
		options: Array.from({ length: 15 }, (_, i) => ({
			value: `opt-${i + 1}`,
			label: `Option ${i + 1}`,
		})),
		placeholder: 'Select an option...',
	},
};

/**
 * Disabled select
 */
export const Disabled: Story = {
	args: {
		options: planOptions,
		placeholder: 'Select a plan type...',
		disabled: true,
	},
};

/**
 * Plan type select
 */
export const PlanTypeSelect: Story = {
	args: {
		options: planOptions,
		label: 'Billing Model',
		placeholder: 'Choose pricing model...',
	},
};

/**
 * Interactive select with onChange
 */
export const WithInteraction: Story = {
	args: {
		options: customerOptions,
		placeholder: 'Click to select customer...',
	},
};
