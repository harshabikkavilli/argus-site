import React from 'react';

// Simplified icon component for reuse
const IconWrapper = ({
	children,
	className = 'w-6 h-6'
}: {
	children?: React.ReactNode;
	className?: string;
}) => (
	<span className={`${className} inline-flex items-center justify-center`}>
		{children}
	</span>
);

export const Menu = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<line x1='4' y1='12' x2='20' y2='12' />
			<line x1='4' y1='6' x2='20' y2='6' />
			<line x1='4' y1='18' x2='20' y2='18' />
		</svg>
	</IconWrapper>
);

export const Close = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<line x1='18' y1='6' x2='6' y2='18' />
			<line x1='6' y1='6' x2='18' y2='18' />
		</svg>
	</IconWrapper>
);

export const Visibility = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z' />
			<circle cx='12' cy='12' r='3' />
		</svg>
	</IconWrapper>
);

export const Star = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
		</svg>
	</IconWrapper>
);

export const PlayCircle = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<circle cx='12' cy='12' r='10' />
			<polygon points='10 8 16 12 10 16 10 8' />
		</svg>
	</IconWrapper>
);

export const Replay = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path d='M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' />
			<path d='M3 3v5h5' />
		</svg>
	</IconWrapper>
);

export const Warning = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z' />
			<line x1='12' y1='9' x2='12' y2='13' />
			<line x1='12' y1='17' x2='12.01' y2='17' />
		</svg>
	</IconWrapper>
);

export const ReplayCircleFilled = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<circle cx='12' cy='12' r='10' />
			<path d='M9 11a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z' />
			<path d='M12 2v4' />
			<path d='M12 18v4' />
			<path d='M2 12h4' />
			<path d='M18 12h4' />
		</svg>
	</IconWrapper>
);

export const VisibilityOff = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path d='M9.88 9.88a3 3 0 1 0 4.24 4.24' />
			<path d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68' />
			<path d='M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61' />
			<line x1='2' y1='2' x2='22' y2='22' />
		</svg>
	</IconWrapper>
);

export const Shuffle = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<polyline points='16 3 21 3 21 8' />
			<line x1='4' y1='20' x2='21' y2='3' />
			<polyline points='21 16 21 21 16 21' />
			<line x1='15' y1='15' x2='21' y2='21' />
			<line x1='4' y1='4' x2='9' y2='9' />
		</svg>
	</IconWrapper>
);

export const SatelliteAlt = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path d='M13 7 9 3 5 7l4 4Z' />
			<path d='m17 11 4 4-4 4-4-4Z' />
			<path d='m4.5 16.5 3-3' />
			<path d='m15 15 3 3' />
			<path d='M12 12c-2 1-3 1-3 3' />
			<path d='M12 12c1-2 1-3 3-3' />
		</svg>
	</IconWrapper>
);

export const FolderData = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z' />
			<circle cx='12' cy='13' r='2' />
			<path d='M12 15v3' />
		</svg>
	</IconWrapper>
);

export const Schema = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path d='M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h3' />
			<path d='M3 10h3a2 2 0 0 0 2-2V5a2 2 0 0 1 2-2h3' />
			<rect x='13' y='2' width='8' height='6' rx='2' />
			<rect x='13' y='16' width='8' height='6' rx='2' />
			<line x1='3' y1='12' x2='3' y2='12.01' />
		</svg>
	</IconWrapper>
);

export const Check = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<polyline points='20 6 9 17 4 12' />
		</svg>
	</IconWrapper>
);

export const WifiOff = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<line x1='2' y1='2' x2='22' y2='22' />
			<path d='M16.72 11.06A10.94 10.94 0 0 1 19 12.55' />
			<path d='M5 12.55a10.94 10.94 0 0 1 5.17-2.39' />
			<path d='M10.71 5.05A16 16 0 0 1 22.58 9' />
			<path d='M1.42 9a15.91 15.91 0 0 1 4.7-2.88' />
			<path d='M8.53 16.11a6 6 0 0 1 6.95 0' />
			<line x1='12' y1='20' x2='12.01' y2='20' />
		</svg>
	</IconWrapper>
);

export const CloudOff = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path d='m2 2 20 20' />
			<path d='M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193' />
			<path d='M22.588 16.927A4.5 4.5 0 0 0 17.5 10h-1.26A7 7 0 0 0 5.42 7.15' />
		</svg>
	</IconWrapper>
);

export const NoAccounts = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
			<circle cx='9' cy='7' r='4' />
			<line x1='17' y1='8' x2='22' y2='13' />
			<line x1='22' y1='8' x2='17' y2='13' />
		</svg>
	</IconWrapper>
);

export const Terminal = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<polyline points='4 17 10 11 4 5' />
			<line x1='12' y1='19' x2='20' y2='19' />
		</svg>
	</IconWrapper>
);

export const BugReport = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<rect width='8' height='14' x='8' y='6' rx='4' />
			<path d='m19 7-3 2' />
			<path d='m5 7 3 2' />
			<path d='m19 19-3-2' />
			<path d='m5 19 3-2' />
			<path d='M20 13h-4' />
			<path d='M4 13h4' />
			<path d='m10 4 1 2' />
			<path d='m14 4-1 2' />
		</svg>
	</IconWrapper>
);

export const MonitorHeart = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<rect width='20' height='14' x='2' y='3' rx='2' />
			<path d='M2 10h3l2-5 3 10 2-5h3' />
			<path d='M6 21h12' />
			<path d='M8 17v4' />
			<path d='M16 17v4' />
		</svg>
	</IconWrapper>
);

export const FactCheck = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' />
			<rect x='8' y='2' width='8' height='4' rx='1' />
			<path d='m9 14 2 2 4-4' />
		</svg>
	</IconWrapper>
);

export const School = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path d='m22 10-10-5L2 10l10 5 10-5z' />
			<path d='M6 12v5c3 3 9 3 12 0v-5' />
		</svg>
	</IconWrapper>
);

export const ContentCopy = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<rect width='14' height='14' x='8' y='8' rx='2' ry='2' />
			<path d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' />
		</svg>
	</IconWrapper>
);

export const Lock = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<rect width='18' height='11' x='3' y='11' rx='2' ry='2' />
			<path d='M7 11V7a5 5 0 0 1 10 0v4' />
		</svg>
	</IconWrapper>
);

export const GitHub = ({className}: {className?: string}) => (
	<IconWrapper className={className}>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='currentColor'>
			<path
				fillRule='evenodd'
				d='M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z'
				clipRule='evenodd'
			/>
		</svg>
	</IconWrapper>
);
