import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

interface TocItem {
	id: string;
	text: string;
	level: number;
}

const TableOfContents: React.FC = () => {
	const [headings, setHeadings] = useState<TocItem[]>([]);
	const [activeId, setActiveId] = useState<string>('');
	const location = useLocation();

	const handleLinkClick = (
		id: string,
		e: React.MouseEvent<HTMLAnchorElement>
	) => {
		e.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			// Set active immediately
			setActiveId(id);
			// Scroll to element with offset for navbar
			const yOffset = -80;
			const y =
				element.getBoundingClientRect().top + window.pageYOffset + yOffset;
			window.scrollTo({top: y, behavior: 'smooth'});
			// Update hash without triggering scroll
			window.history.pushState(null, '', `#${id}`);
		}
	};

	useEffect(() => {
		// Small delay to ensure MDX content is rendered
		const timeoutId = setTimeout(() => {
			// Extract headings from the article
			const article = document.querySelector('article');
			if (!article) return;

			const elements = article.querySelectorAll('h2, h3');
			const items: TocItem[] = Array.from(elements).map((el) => ({
				id: el.id,
				text: el.textContent || '',
				level: parseInt(el.tagName[1])
			}));

			setHeadings(items);
			setActiveId(''); // Reset active heading

			// Set up intersection observer to track heading closest to top
			const observer = new IntersectionObserver(
				(entries) => {
					// Filter to only intersecting entries
					const intersecting = entries.filter((e) => e.isIntersecting);
					if (intersecting.length === 0) return;

					// Find the heading closest to the top of the viewport
					let closestEntry = intersecting[0];
					let closestDistance = Math.abs(
						closestEntry.boundingClientRect.top - 100
					);

					intersecting.forEach((entry) => {
						const distance = Math.abs(entry.boundingClientRect.top - 100);
						if (distance < closestDistance) {
							closestDistance = distance;
							closestEntry = entry;
						}
					});

					setActiveId(closestEntry.target.id);
				},
				{
					rootMargin: '-100px 0px -60% 0px',
					threshold: [0, 0.1, 0.5, 1]
				}
			);

			elements.forEach((el) => observer.observe(el));

			return () => observer.disconnect();
		}, 100);

		return () => clearTimeout(timeoutId);
	}, [location.pathname]); // Re-run when route changes

	// Handle hash on initial load
	useEffect(() => {
		const hash = window.location.hash.slice(1);
		if (hash && headings.some((h) => h.id === hash)) {
			setActiveId(hash);
		}
	}, [headings, location.pathname]);

	if (headings.length === 0) {
		return null;
	}

	return (
		<nav>
			<h4 className='text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4'>
				On This Page
			</h4>
			<ul className='space-y-2'>
				{headings.map((heading) => (
					<li key={heading.id}>
						<a
							href={`#${heading.id}`}
							onClick={(e) => handleLinkClick(heading.id, e)}
							className={`block text-sm transition-colors ${
								heading.level === 3 ? 'pl-4' : ''
							} ${
								activeId === heading.id
									? 'text-primary font-medium border-l-2 border-primary pl-3'
									: 'text-gray-400 hover:text-white'
							}`}>
							{heading.text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default TableOfContents;
