import { describe, it, expect } from 'vitest';

/**
 * statusToLabel - Convert status enum to display label
 */
export const statusToLabel = (status: string): string => {
	const labels: Record<string, string> = {
		paid: 'Paid',
		draft: 'Draft',
		void: 'Void',
		pending: 'Pending',
		active: 'Active',
		inactive: 'Inactive',
		archived: 'Archived',
	};
	return labels[status.toLowerCase()] || status;
};

/**
 * getStatusColor - Get color for status
 */
export const getStatusColor = (status: string): { bg: string; text: string } => {
	const colors: Record<string, { bg: string; text: string }> = {
		paid: { bg: '#D1FAE5', text: '#047857' },
		draft: { bg: '#FEF3C7', text: '#92400E' },
		void: { bg: '#FEE2E2', text: '#991B1B' },
		pending: { bg: '#DBEAFE', text: '#1E40AF' },
		active: { bg: '#D1FAE5', text: '#047857' },
		inactive: { bg: '#F3F4F6', text: '#6B7280' },
		archived: { bg: '#E5E7EB', text: '#374151' },
	};
	return colors[status.toLowerCase()] || { bg: '#F3F4F6', text: '#6B7280' };
};

/**
 * isStatusFinal - Check if status is terminal state
 */
export const isStatusFinal = (status: string): boolean => {
	const finalStatuses = ['paid', 'void', 'archived'];
	return finalStatuses.includes(status.toLowerCase());
};

describe('Status Utils', () => {
	describe('statusToLabel', () => {
		it('should convert paid status to label', () => {
			expect(statusToLabel('paid')).toBe('Paid');
		});

		it('should convert draft status to label', () => {
			expect(statusToLabel('draft')).toBe('Draft');
		});

		it('should be case-insensitive', () => {
			expect(statusToLabel('PAID')).toBe('Paid');
			expect(statusToLabel('Void')).toBe('Void');
		});

		it('should return original if unknown status', () => {
			expect(statusToLabel('unknown')).toBe('unknown');
		});
	});

	describe('getStatusColor', () => {
		it('should return color object for paid status', () => {
			const color = getStatusColor('paid');
			expect(color.bg).toBe('#D1FAE5');
			expect(color.text).toBe('#047857');
		});

		it('should return color object for draft status', () => {
			const color = getStatusColor('draft');
			expect(color.bg).toBe('#FEF3C7');
			expect(color.text).toBe('#92400E');
		});

		it('should return default color for unknown status', () => {
			const color = getStatusColor('unknown');
			expect(color.bg).toBe('#F3F4F6');
			expect(color.text).toBe('#6B7280');
		});
	});

	describe('isStatusFinal', () => {
		it('should identify final statuses', () => {
			expect(isStatusFinal('paid')).toBe(true);
			expect(isStatusFinal('void')).toBe(true);
			expect(isStatusFinal('archived')).toBe(true);
		});

		it('should return false for non-final statuses', () => {
			expect(isStatusFinal('draft')).toBe(false);
			expect(isStatusFinal('pending')).toBe(false);
			expect(isStatusFinal('active')).toBe(false);
		});

		it('should be case-insensitive', () => {
			expect(isStatusFinal('PAID')).toBe(true);
			expect(isStatusFinal('DRAFT')).toBe(false);
		});
	});
});
