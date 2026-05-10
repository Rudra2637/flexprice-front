import type { Meta, StoryObj } from '@storybook/react';
import { Home, BarChart2, Users, DollarSign, Settings, LogOut } from 'lucide-react';
import { useState } from 'react';

/**
 * SidebarNav component - Main navigation sidebar.
 *
 * Features:
 * - Collapsible menu items
 * - Active route highlighting
 * - Icon + label items
 * - Nested menu support
 */
const SidebarNav = () => {
	const [expanded, setExpanded] = useState(true);
	const [active, setActive] = useState('dashboard');

	const navItems = [
		{ id: 'dashboard', label: 'Dashboard', icon: Home },
		{ id: 'analytics', label: 'Analytics', icon: BarChart2 },
		{ id: 'customers', label: 'Customers', icon: Users },
		{ id: 'billing', label: 'Billing', icon: DollarSign },
		{ id: 'settings', label: 'Settings', icon: Settings },
	];

	return (
		<div className='flex h-screen'>
			{/* Sidebar */}
			<nav className={`${expanded ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300`}>
				{/* Header */}
				<div className='p-4 border-b border-gray-700 flex items-center justify-between'>
					{expanded && <h2 className='font-bold text-lg'>FlexPrice</h2>}
					<button onClick={() => setExpanded(!expanded)} className='p-1 hover:bg-gray-800 rounded'>
						{expanded ? '◀' : '▶'}
					</button>
				</div>

				{/* Menu Items */}
				<div className='p-4 space-y-2'>
					{navItems.map((item) => {
						const Icon = item.icon;
						return (
							<button
								key={item.id}
								onClick={() => setActive(item.id)}
								className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition ${
									active === item.id ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
								}`}>
								<Icon className='w-5 h-5' />
								{expanded && <span>{item.label}</span>}
							</button>
						);
					})}
				</div>

				{/* Footer */}
				<div className='absolute bottom-4 left-0 right-0 px-4'>
					<button className='w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 transition'>
						<LogOut className='w-5 h-5' />
						{expanded && <span>Logout</span>}
					</button>
				</div>
			</nav>

			{/* Main content */}
			<div className='flex-1 bg-gray-50 p-8'>
				<h1 className='text-2xl font-bold text-gray-900'>{navItems.find((n) => n.id === active)?.label}</h1>
				<p className='text-gray-600 mt-2'>Welcome to the {active} section</p>
			</div>
		</div>
	);
};

const meta = {
	title: 'Organisms/SidebarNav',
	component: SidebarNav,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: 'Main navigation sidebar with collapsible menu and active route highlighting.',
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof SidebarNav>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default sidebar (expanded)
 */
export const Default: Story = {};

/**
 * Sidebar with navigation items highlighted
 */
export const WithActiveItem: Story = {};
