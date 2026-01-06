import React from 'react';
import {ReplayCircleFilled, Shuffle, VisibilityOff, Warning} from './Icons';
import ItemCard from './ItemCard';

const ProblemSection: React.FC = () => {
	const problems = [
		{
			icon: <Warning />,
			title: 'Wrong Tool Calls',
			desc: "Agents hallucinate parameters or call tools that don't exist, leading to silent failures.",
			color: 'text-error bg-error/10 border-error/20'
		},
		{
			icon: <ReplayCircleFilled />,
			title: 'Hard to Reproduce',
			desc: 'Failures are often transient. Re-running the entire agent loop is expensive and slow.',
			color: 'text-blue-400 bg-blue-400/10 border-blue-400/20'
		},
		{
			icon: <VisibilityOff />,
			title: 'Opaque Logs',
			desc: "Standard stdout logs don't capture the structured data flow between LLMs and MCP servers.",
			color: 'text-secondary bg-secondary/10 border-secondary/20'
		},
		{
			icon: <Shuffle />,
			title: 'Non-determinism',
			desc: 'Different runs produce different results, making traditional breakpoints useless.',
			color: 'text-accent bg-accent/10 border-accent/20'
		}
	];

	const getColorStyles = (color: string) => {
		switch (color) {
			case 'red':
				return 'text-red-500 bg-red-500/10 hover:border-red-500/30 hover:shadow-red-500/10';
			case 'orange':
				return 'text-orange-500 bg-orange-500/10 hover:border-orange-500/30 hover:shadow-orange-500/10';
			case 'yellow':
				return 'text-yellow-500 bg-yellow-500/10 hover:border-yellow-500/30 hover:shadow-yellow-500/10';
			case 'purple':
				return 'text-purple-500 bg-purple-500/10 hover:border-purple-500/30 hover:shadow-purple-500/10';
			default:
				return '';
		}
	};

	return (
		<section className='py-24 relative overflow-hidden bg-background'>
			<div className='absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none'></div>

			<div className='relative mx-auto max-w-7xl px-6 lg:px-8 z-10'>
				<div className='max-w-3xl mb-20'>
					<h2 className='text-4xl font-bold tracking-tight text-white mb-6'>
						Agent debugging breaks down at the{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500'>
							tool layer
						</span>
					</h2>
					<p className='text-xl text-gray-400 font-light leading-relaxed'>
						LLMs are non-deterministic, but your infrastructure isn't. When
						agents fail, it's usually because of how they interact with the
						outside world.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{problems.map((p, i) => (
						<ItemCard
							key={i}
							icon={p.icon}
							title={p.title}
							desc={p.desc}
							color={p.color}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProblemSection;
