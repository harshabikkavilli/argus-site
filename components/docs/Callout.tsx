import React from 'react';

type CalloutType = 'info' | 'warning' | 'error' | 'success';

interface CalloutProps {
	type?: CalloutType;
	title?: string;
	children: React.ReactNode;
}

const calloutStyles: Record<CalloutType, { bg: string; border: string; icon: string; iconBg: string }> = {
	info: {
		bg: 'bg-primary/10',
		border: 'border-primary/30',
		icon: 'ℹ',
		iconBg: 'bg-primary/20 text-primary',
	},
	warning: {
		bg: 'bg-yellow-500/10',
		border: 'border-yellow-500/30',
		icon: '⚠',
		iconBg: 'bg-yellow-500/20 text-yellow-400',
	},
	error: {
		bg: 'bg-red-500/10',
		border: 'border-red-500/30',
		icon: '✕',
		iconBg: 'bg-red-500/20 text-red-400',
	},
	success: {
		bg: 'bg-green-500/10',
		border: 'border-green-500/30',
		icon: '✓',
		iconBg: 'bg-green-500/20 text-green-400',
	},
};

const Callout: React.FC<CalloutProps> = ({ type = 'info', title, children }) => {
	const styles = calloutStyles[type];

	return (
		<div className={`my-6 rounded-xl ${styles.bg} border ${styles.border} p-4`}>
			<div className='flex gap-3'>
				<div
					className={`flex-shrink-0 w-6 h-6 rounded-full ${styles.iconBg} flex items-center justify-center text-sm`}>
					{styles.icon}
				</div>
				<div className='flex-1'>
					{title && <p className='font-semibold text-white mb-1'>{title}</p>}
					<div className='text-gray-300 text-sm leading-relaxed'>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Callout;

