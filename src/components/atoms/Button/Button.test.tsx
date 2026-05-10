import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './index';

describe('Button Component', () => {
	it('should render button with text', () => {
		render(<Button>Click me</Button>);
		expect(screen.getByText('Click me')).toBeInTheDocument();
	});

	it('should handle click events', () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Click me</Button>);

		fireEvent.click(screen.getByText('Click me'));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('should be disabled when disabled prop is true', () => {
		render(<Button disabled>Click me</Button>);
		const button = screen.getByText('Click me') as HTMLButtonElement;
		expect(button.disabled).toBe(true);
	});

	it('should not trigger click when disabled', () => {
		const handleClick = vi.fn();
		render(
			<Button disabled onClick={handleClick}>
				Click me
			</Button>,
		);

		fireEvent.click(screen.getByText('Click me'));
		expect(handleClick).not.toHaveBeenCalled();
	});

	it('should render different variants', () => {
		const { rerender } = render(<Button variant='default'>Default</Button>);
		let button = screen.getByText('Default');
		expect(button).toBeInTheDocument();

		rerender(<Button variant='secondary'>Secondary</Button>);
		button = screen.getByText('Secondary');
		expect(button).toBeInTheDocument();
	});

	it('should render different sizes', () => {
		const { rerender } = render(<Button size='sm'>Small</Button>);
		let button = screen.getByText('Small');
		expect(button).toBeInTheDocument();

		rerender(<Button size='lg'>Large</Button>);
		button = screen.getByText('Large');
		expect(button).toBeInTheDocument();
	});
});
