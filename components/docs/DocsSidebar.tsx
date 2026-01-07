import React from 'react';
import { Link } from 'react-router-dom';
import { docsConfig, type SidebarSection } from '../../docs/config';

interface DocsSidebarProps {
	currentSlug: string;
}

const DocsSidebar: React.FC<DocsSidebarProps> = ({ currentSlug }) => {
	return (
		<nav className='space-y-8'>
			{docsConfig.sidebar.map((section) => (
				<div key={section.title}>
					<h3 className='text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3'>
						{section.title}
					</h3>
					<ul className='space-y-1'>
						{section.items.map((item) => {
							const slug = item.href.replace('/docs/', '');
							const isActive = currentSlug === slug;

							return (
								<li key={item.href}>
									<Link
										to={item.href}
										className={`block px-3 py-2 text-sm rounded-lg transition-all ${
											isActive
												? 'bg-primary/20 text-primary font-medium border-l-2 border-primary'
												: 'text-gray-400 hover:text-white hover:bg-white/5'
										}`}>
										{item.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			))}
		</nav>
	);
};

export default DocsSidebar;

