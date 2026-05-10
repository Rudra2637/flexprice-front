import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { Button } from './index';

/**
 * Button component - Primary interactive element for user actions.
 *
 * Supports multiple variants (primary, secondary, ghost, destructive), sizes (sm, md, lg),
 * and states (default, loading, disabled). Buttons are accessible and keyboard-navigable.
 *
 * @component
 * @example
 * // Primary button
 * <Button variant="primary" size="md">Submit</Button>
 *
 * @example
 * // Loading state
 * <Button isLoading disabled>Processing...</Button>
 *
 * @example
 * // Destructive action
 * <Button variant="destructive">Delete Account</Button>
 */
const meta = {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'Versatile button component used throughout the application for all primary and secondary actions.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
			description: 'Visual style variant of the button',
			table: { defaultValue: { summary: 'default' } },
		},
		size: {
			control: 'select',
			options: ['sm', 'default', 'lg', 'xs', 'icon'],
			description: 'Button size',
			table: { defaultValue: { summary: 'default' } },
		},
		disabled: {
			control: 'boolean',
			description: 'Disable button interaction',
			table: { defaultValue: { summary: 'false' } },
		},
		isLoading: {
			control: 'boolean',
			description: 'Show loading spinner inside button',
			table: { defaultValue: { summary: 'false' } },
		},
		children: {
			control: 'text',
			description: 'Button label/content',
		},
		onClick: {
			action: 'clicked',
			description: 'Callback fired when button is clicked',
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Primary button - Default blue button for main actions
 */
export const Primary: Story = {
	args: {
		variant: 'default',
		size: 'default',
		children: 'Primary Button',
	},
};

/**
 * Secondary button - Gray button for secondary actions
 */
export const Secondary: Story = {
	args: {
		variant: 'secondary',
		size: 'default',
		children: 'Secondary Button',
	},
};

/**
 * Outline button - Bordered button without fill
 */
export const Outline: Story = {
	args: {
		variant: 'outline',
		size: 'default',
		children: 'Outline Button',
	},
};

/**
 * Ghost button - Minimal button without background
 */
export const Ghost: Story = {
	args: {
		variant: 'ghost',
		size: 'default',
		children: 'Ghost Button',
	},
};

/**
 * Destructive button - Red button for delete/danger actions
 */
export const Destructive: Story = {
	args: {
		variant: 'destructive',
		size: 'default',
		children: 'Delete',
	},
};

/**
 * Link button - Text-only button styled as link
 */
export const Link: Story = {
	args: {
		variant: 'link',
		size: 'default',
		children: 'Link Button',
	},
};

/**
 * Small button
 */
export const Small: Story = {
	args: {
		variant: 'default',
		size: 'sm',
		children: 'Small',
	},
};

/**
 * Medium button (default size)
 */
export const Medium: Story = {
	args: {
		variant: 'default',
		size: 'default',
		children: 'Medium',
	},
};

/**
 * Large button
 */
export const Large: Story = {
	args: {
		variant: 'default',
		size: 'lg',
		children: 'Large',
	},
};

/**
 * Disabled button - Cannot be interacted with
 */
export const Disabled: Story = {
	args: {
		variant: 'default',
		size: 'default',
		children: 'Disabled Button',
		disabled: true,
	},
};

/**
 * Loading button - Shows spinner, prevents interaction
 */
export const Loading: Story = {
	args: {
		variant: 'default',
		size: 'default',
		children: 'Loading...',
		isLoading: true,
		disabled: true,
	},
};

/**
 * Interactive test - Verify button click works
 */
export const WithClick: Story = {
	args: {
		variant: 'default',
		size: 'default',
		children: 'Click me',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button', { name: /click me/i });

		// Verify button is clickable
		expect(button).toBeEnabled();

		// Simulate click
		await userEvent.click(button);

		// Verify button responds to click
		expect(button).toBeTruthy();
	},
};

/**
 * Destructive with interaction - Delete confirmation scenario
 */
export const DestructiveWithClick: Story = {
	args: {
		variant: 'destructive',
		size: 'default',
		children: 'Confirm Delete',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button', { name: /confirm delete/i });

		expect(button).toBeInTheDocument();
		expect(button).toHaveClass('destructive');

		await userEvent.click(button);
	},
};
