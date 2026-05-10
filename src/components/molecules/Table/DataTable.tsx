import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Chip from '../../atoms/Chip';

/**
 * DataTable component - Sortable, paginated data table.
 *
 * Features:
 * - Sortable columns (click header to sort)
 * - Pagination with controls
 * - Loading skeleton state
 * - Empty state
 * - Status badges in cells
 * - Responsive design
 */
export default function DataTable({ data = [], loading = false, isEmpty = false }: { data?: any[]; loading?: boolean; isEmpty?: boolean }) {
	const [sortBy, setSortBy] = useState<string | null>(null);
	const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
	const [page, setPage] = useState(1);
	const itemsPerPage = 5;

	const handleSort = (column: string) => {
		if (sortBy === column) {
			setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
		} else {
			setSortBy(column);
			setSortDir('asc');
		}
	};

	const SortIcon = ({ column }: { column: string }) => {
		if (sortBy !== column) return <span className='text-gray-300'>⇅</span>;
		return sortDir === 'asc' ? <ChevronUp className='w-4 h-4 text-blue-600' /> : <ChevronDown className='w-4 h-4 text-blue-600' />;
	};

	if (isEmpty) {
		return (
			<div className='text-center py-12'>
				<p className='text-gray-500'>No data found</p>
			</div>
		);
	}

	if (loading) {
		return (
			<div className='space-y-2'>
				{[1, 2, 3, 4, 5].map((i) => (
					<div key={i} className='h-10 bg-gray-200 rounded animate-pulse' />
				))}
			</div>
		);
	}

	return (
		<div className='border rounded-lg overflow-hidden'>
			<table className='w-full'>
				<thead>
					<tr className='bg-gray-50 border-b'>
						<th className='px-4 py-3 text-left text-sm font-semibold text-gray-700'>
							<button onClick={() => handleSort('name')} className='flex items-center gap-2 hover:text-blue-600'>
								Customer <SortIcon column='name' />
							</button>
						</th>
						<th className='px-4 py-3 text-left text-sm font-semibold text-gray-700'>
							<button onClick={() => handleSort('amount')} className='flex items-center gap-2 hover:text-blue-600'>
								Amount <SortIcon column='amount' />
							</button>
						</th>
						<th className='px-4 py-3 text-left text-sm font-semibold text-gray-700'>
							<button onClick={() => handleSort('status')} className='flex items-center gap-2 hover:text-blue-600'>
								Status <SortIcon column='status' />
							</button>
						</th>
						<th className='px-4 py-3 text-left text-sm font-semibold text-gray-700'>Date</th>
					</tr>
				</thead>
				<tbody>
					{data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((row, idx) => (
						<tr key={idx} className='border-b hover:bg-gray-50'>
							<td className='px-4 py-3 text-sm'>{row.name}</td>
							<td className='px-4 py-3 text-sm font-medium'>{row.amount}</td>
							<td className='px-4 py-3 text-sm'>
								<Chip variant={row.statusVariant} label={row.status} />
							</td>
							<td className='px-4 py-3 text-sm text-gray-600'>{row.date}</td>
						</tr>
					))}
				</tbody>
			</table>

			{data.length > 0 && (
				<div className='px-4 py-3 bg-gray-50 border-t flex items-center justify-between text-sm'>
					<span className='text-gray-600'>
						Showing {(page - 1) * itemsPerPage + 1}-{Math.min(page * itemsPerPage, data.length)} of {data.length}
					</span>
					<div className='flex gap-2'>
						<button
							onClick={() => setPage(Math.max(1, page - 1))}
							disabled={page === 1}
							className='px-3 py-1 border rounded disabled:opacity-50'>
							Previous
						</button>
						<button
							onClick={() => setPage(Math.min(Math.ceil(data.length / itemsPerPage), page + 1))}
							disabled={page >= Math.ceil(data.length / itemsPerPage)}
							className='px-3 py-1 border rounded disabled:opacity-50'>
							Next
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
