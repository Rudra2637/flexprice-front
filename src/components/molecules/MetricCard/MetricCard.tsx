/**
 * MetricCard component - Key Performance Indicator display.
 *
 * Shows a metric with label, value, and optional trend indicator.
 * Used in dashboards to display important KPIs like revenue, customer count, etc.
 *
 * @component
 * @example
 * <MetricCard
 *   label="Total Revenue"
 *   value="$45,231.89"
 *   trend={{ value: 12, direction: 'up' }}
 * />
 */
export default function MetricCard({
	label,
	value,
	trend,
}: {
	label: string;
	value: string;
	trend?: { value: number; direction: 'up' | 'down' };
}) {
	return (
		<div className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm'>
			<p className='text-sm font-medium text-gray-600'>{label}</p>
			<div className='mt-2 flex items-baseline justify-between'>
				<h3 className='text-2xl font-bold text-gray-900'>{value}</h3>
				{trend && (
					<span className={`text-sm font-semibold ${trend.direction === 'up' ? 'text-green-600' : 'text-red-600'}`}>
						{trend.direction === 'up' ? '↑' : '↓'} {trend.value}%
					</span>
				)}
			</div>
		</div>
	);
}
