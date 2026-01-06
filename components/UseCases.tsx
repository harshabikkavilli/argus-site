import React from 'react';
import {BugReport, FactCheck, MonitorHeart, School} from './Icons';
import ItemCard from './ItemCard';

const UseCases: React.FC = () => {
	const cases = [
		{
			icon: <BugReport />,
			title: 'Debug Integrations',
			desc: 'Fix broken tool arguments and connection errors during development.',
			color: 'text-accent bg-accent/10 border-accent/20'
		},
		{
			icon: <MonitorHeart />,
			title: 'Monitor Production',
			desc: 'Track failure rates and latency across live agent runs.',
			color: 'text-primary bg-primary/10 border-primary/20'
		},
		{
			icon: <FactCheck />,
			title: 'Audit Tool Usage',
			desc: 'Verify exactly what data your agents are accessing and changing.',
			color: 'text-blue-400 bg-blue-400/10 border-blue-400/20'
		},
		{
			icon: <School />,
			title: 'Learn Behavior',
			desc: 'Understand the hidden reasoning steps agents take to solve problems.',
			color: 'text-secondary bg-secondary/10 border-secondary/20'
		}
	];

	return (
		<section className='py-24 bg-[#08090e]'>
			<div className='mx-auto max-w-7xl text-center px-6 lg:px-8'>
				<span className='text-primary text-sm font-bold uppercase tracking-widest mb-2 block'>
					Use Cases
				</span>
				<h2 className='text-3xl font-bold text-white mb-12 text-center'>
					Built for real agent systems
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{cases.map((c, i) => (
						<ItemCard
							key={i}
							icon={c.icon}
							title={c.title}
							desc={c.desc}
							color={c.color}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default UseCases;
