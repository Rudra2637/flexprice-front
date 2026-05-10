import { describe, it, expect } from 'vitest';

/**
 * calculateTieredPrice - Calculate tiered pricing based on usage
 */
export const calculateTieredPrice = (usage: number, tiers: Array<{ limit: number; price: number }>): number => {
	let total = 0;
	let previousLimit = 0;

	for (const tier of tiers) {
		if (usage <= previousLimit) break;

		const unitsInTier = Math.min(usage, tier.limit) - previousLimit;
		total += unitsInTier * tier.price;
		previousLimit = tier.limit;

		if (usage <= tier.limit) break;
	}

	return parseFloat(total.toFixed(2));
};

/**
 * calculateMRR - Calculate monthly recurring revenue
 */
export const calculateMRR = (subscriptions: Array<{ amount: number; active: boolean }>): number => {
	return subscriptions.filter((s) => s.active).reduce((sum, s) => sum + s.amount, 0);
};

/**
 * calculateChurn - Calculate churn rate
 */
export const calculateChurn = (startCount: number, churnedCount: number): number => {
	if (startCount === 0) return 0;
	return parseFloat(((churnedCount / startCount) * 100).toFixed(2));
};

describe('Pricing Utils', () => {
	describe('calculateTieredPrice', () => {
		const tiers = [
			{ limit: 100, price: 0.1 }, // $0.10 per unit for 0-100
			{ limit: 500, price: 0.08 }, // $0.08 per unit for 101-500
			{ limit: Infinity, price: 0.05 }, // $0.05 per unit for 501+
		];

		it('should calculate price for usage in first tier', () => {
			expect(calculateTieredPrice(50, tiers)).toBe(5.0);
		});

		it('should calculate price spanning multiple tiers', () => {
			// 100 * 0.1 + 200 * 0.08 = 10 + 16 = 26
			expect(calculateTieredPrice(300, tiers)).toBe(26.0);
		});

		it('should calculate price spanning all tiers', () => {
			// 100 * 0.1 + 400 * 0.08 + 100 * 0.05 = 10 + 32 + 5 = 47
			expect(calculateTieredPrice(600, tiers)).toBe(47.0);
		});

		it('should handle zero usage', () => {
			expect(calculateTieredPrice(0, tiers)).toBe(0);
		});
	});

	describe('calculateMRR', () => {
		it('should sum active subscription amounts', () => {
			const subscriptions = [
				{ amount: 100, active: true },
				{ amount: 200, active: true },
				{ amount: 300, active: false },
			];
			expect(calculateMRR(subscriptions)).toBe(300);
		});

		it('should ignore inactive subscriptions', () => {
			const subscriptions = [
				{ amount: 100, active: false },
				{ amount: 200, active: false },
			];
			expect(calculateMRR(subscriptions)).toBe(0);
		});

		it('should handle empty array', () => {
			expect(calculateMRR([])).toBe(0);
		});
	});

	describe('calculateChurn', () => {
		it('should calculate churn rate', () => {
			expect(calculateChurn(1000, 50)).toBe(5.0);
		});

		it('should handle 100% churn', () => {
			expect(calculateChurn(100, 100)).toBe(100);
		});

		it('should return 0 if start count is 0', () => {
			expect(calculateChurn(0, 10)).toBe(0);
		});

		it('should return 0 if no churn', () => {
			expect(calculateChurn(1000, 0)).toBe(0);
		});
	});
});
