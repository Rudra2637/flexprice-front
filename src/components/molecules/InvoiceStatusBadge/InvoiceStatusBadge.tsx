import Chip from '../../atoms/Chip';

/**
 * InvoiceStatusBadge component - Maps invoice status to colored badge.
 *
 * Status types and colors:
 * - Paid: Green (#047857)
 * - Draft: Yellow (#92400E)
 * - Void: Red (#991B1B)
 * - Pending: Blue (#1E40AF)
 */
export default function InvoiceStatusBadge({ status }: { status: string }) {
	const statusColors: Record<string, { variant: any; label: string }> = {
		paid: { variant: 'success', label: 'Paid' },
		draft: { variant: 'warning', label: 'Draft' },
		void: { variant: 'failed', label: 'Void' },
		pending: { variant: 'info', label: 'Pending' },
	};

	const config = statusColors[status.toLowerCase()] || {
		variant: 'default',
		label: status,
	};

	return <Chip variant={config.variant} label={config.label} />;
}
