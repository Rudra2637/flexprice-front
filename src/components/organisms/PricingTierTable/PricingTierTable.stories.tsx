import type { Meta, StoryObj } from '@storybook/react';
import { Check } from 'lucide-react';

/**
 * PricingTierTable component - Display tiered/graduated pricing.
 *
 * Shows pricing tiers with features included at each level.
 */
const PricingTierTable = () => {
	const tiers = [
		{
			name: 'Starter',
			price: '$29',
			period: '/month',
			description: 'For small teams',
			color: 'gray',
			features: ['5 team members', '5GB storage', 'Basic analytics'],
		},
		{
			name: 'Professional',
			price: '$79',
			period: '/month',
			description: 'For growing teams',
			color: 'blue',
			features: ['25 team members', '100GB storage', 'Advanced analytics', 'Priority support'],
			highlighted: true,
		},
		{
			name: 'Enterprise',
			price: 'Custom',
			period: 'pricing',
			description: 'For large organizations',
			color: 'purple',
			features: ['Unlimited members', 'Unlimited storage', 'Custom features', 'Dedicated support'],
		},
	];

	return (
		<div className='py-12 px-4'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-4'>Pricing Plans</h2>
					<p className='text-lg text-gray-600'>Choose the perfect plan for your needs</p>
				</div>

				<div className='grid md:grid-cols-3 gap-8'>
					{tiers.map((tier, idx) => (
						<div
							key={idx}
							className={`rounded-lg border-2 p-8 transition ${
								tier.highlighted ? 'border-blue-500 bg-blue-50 scale-105' : 'border-gray-200 bg-white'
							}`}>
							{tier.highlighted && (
								<div className='mb-4'>
									<span className='bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>Popular</span>
								</div>
							)}

							<h3 className='text-2xl font-bold text-gray-900 mb-2'>{tier.name}</h3>
							<p className='text-gray-600 mb-6 text-sm'>{tier.description}</p>

							<div className='mb-6'>
								<span className='text-4xl font-bold text-gray-900'>{tier.price}</span>
								<span className='text-gray-600 text-sm ml-2'>{tier.period}</span>
							</div>

							<button
								className={`w-full py-2 px-4 rounded-lg font-semibold mb-8 transition ${
									tier.highlighted
										? 'bg-blue-600 text-white hover:bg-blue-700'
										: 'border-2 border-gray-300 text-gray-900 hover:border-gray-400'
								}`}>
								Get Started
							</button>

							<div className='space-y-3'>
								{tier.features.map((feature, fidx) => (
									<div key={fidx} className='flex items-center gap-3'>
										<Check className='w-5 h-5 text-green-600 flex-shrink-0' />
										<span className='text-gray-700 text-sm'>{feature}</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const meta = {
	title: 'Organisms/PricingTierTable',
	component: PricingTierTable,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: 'Tiered pricing display showing different plan options with features.',
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof PricingTierTable>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default pricing table
 */
export const Default: Story = {};
