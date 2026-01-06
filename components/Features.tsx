import React from 'react';
import {FolderData, Replay, SatelliteAlt, Schema} from './Icons';
import ItemCard from './ItemCard';

const Features: React.FC = () => {
	const features = [
		{
			icon: <SatelliteAlt />,
			title: 'Tool Call Interception',
			desc: 'Capture every MCP tool call with precise timestamps, JSON parameters, results, error traces, and execution latency.',
			color: 'text-primary bg-primary/10 border-primary/20'
		},
		{
			icon: <FolderData />,
			title: 'Runs & Sessions',
			desc: 'Group scattered tool calls into meaningful sessions. Filter by run ID to reason about specific agent behaviors.',
			color: 'text-secondary bg-secondary/10 border-secondary/20'
		},
		{
			icon: <Replay />,
			title: 'Replay Without LLM',
			desc: 'Isolate tool failures by re-running any specific tool call independently, without needing to reinvoke the expensive LLM.',
			color: 'text-accent bg-accent/10 border-accent/20'
		},
		{
			icon: <Schema />,
			title: 'Schema Inspection',
			desc: 'Visualize the exact JSON schema your tools are exposing. Detect drift between what the agent expects and what the tool provides.',
			color: 'text-blue-400 bg-blue-400/10 border-blue-400/20'
		}
	];

	return (
		<section className='py-32 bg-[#08090e]'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl text-center mb-20'>
					<span className='text-primary text-sm font-bold uppercase tracking-widest mb-2 block'>
						Features
					</span>
					<h2 className='text-4xl font-bold tracking-tight text-white sm:text-5xl'>
						Complete Observability for Agent execution
					</h2>
					<p className='mt-6 text-xl text-gray-400 font-light'>
						Argus observes real agent executions and gives you ground truth at
						the tool layer. It’s designed for debugging what actually happened,
						not just testing tools in isolation.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{features.map((feature, index) => (
						<ItemCard
							key={index}
							icon={feature.icon}
							title={feature.title}
							desc={feature.desc}
							color={feature.color}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
