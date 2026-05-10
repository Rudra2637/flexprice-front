import { describe, it, expect } from 'vitest';

/**
 * formatCurrency - Format number to USD currency
 */
export const formatCurrency = (value: number): string => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(value);
};

/**
 * formatNumber - Format number with commas
 */
export const formatNumber = (value: number): string => {
	return new Intl.NumberFormat('en-US').format(value);
};

/**
 * calculatePercentage - Calculate percentage change
 */
export const calculatePercentage = (current: number, previous: number): number => {
	if (previous === 0) return 0;
	return ((current - previous) / previous) * 100;
};

describe('Formatters', () => {
	describe('formatCurrency', () => {
		it('should format number as USD currency', () => {
			expect(formatCurrency(1000)).toBe('$1,000.00');
		});

		it('should handle decimals', () => {
			expect(formatCurrency(1000.5)).toBe('$1,000.50');
		});

		it('should handle zero', () => {
			expect(formatCurrency(0)).toBe('$0.00');
		});

		it('should handle large numbers', () => {
			expect(formatCurrency(1000000)).toBe('$1,000,000.00');
		});
	});

	describe('formatNumber', () => {
		it('should format number with commas', () => {
			expect(formatNumber(1000)).toBe('1,000');
		});

		it('should handle decimals', () => {
			expect(formatNumber(1000.5)).toBe('1,000.5');
		});

		it('should handle zero', () => {
			expect(formatNumber(0)).toBe('0');
		});
	});

	describe('calculatePercentage', () => {
		it('should calculate percentage increase', () => {
			expect(calculatePercentage(120, 100)).toBe(20);
		});

		it('should calculate percentage decrease', () => {
			expect(calculatePercentage(80, 100)).toBe(-20);
		});

		it('should return 0 if previous is 0', () => {
			expect(calculatePercentage(100, 0)).toBe(0);
		});

		it('should handle floating point results', () => {
			expect(calculatePercentage(105, 100)).toBeCloseTo(5, 2);
		});
	});
});
