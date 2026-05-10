/**
 * UsageBar component - Progress bar showing used vs entitled units.
 *
 * Displays usage/quota as a progress bar with labels for current usage and limit.
 * Color changes based on usage percentage.
 */
export default function UsageBar({ used, limit, label = 'Usage' }: { used: number; limit: number; label?: string }) {
	const percentage = (used / limit) * 100;
	const color = percentage > 90 ? 'bg-red-500' : percentage > 70 ? 'bg-yellow-500' : 'bg-green-500';

	return (
		<div className='w-full space-y-2'>
			<div className='flex justify-between text-sm'>
				<span className='font-medium text-gray-700'>{label}</span>
				<span className='text-gray-600'>
					{used} / {limit}
				</span>
			</div>
			<div className='w-full bg-gray-200 rounded-full h-2'>
				<div className={`${color} h-2 rounded-full transition-all`} style={{ width: `${Math.min(percentage, 100)}%` }} />
			</div>
			<p className='text-xs text-gray-500'>{percentage.toFixed(0)}% used</p>
		</div>
	);
}
