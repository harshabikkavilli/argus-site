import React from 'react';
import {Link} from 'react-router-dom';
import {getAllPages, type SidebarItem} from '../../docs/config';

interface NextPrevProps {
	currentSlug: string;
}

const NextPrev: React.FC<NextPrevProps> = ({currentSlug}) => {
	const allPages = getAllPages();
	const currentIndex = allPages.findIndex(
		(page) => page.href === `/docs/${currentSlug}`
	);

	const previousPage: SidebarItem | undefined =
		currentIndex > 0 ? allPages[currentIndex - 1] : undefined;
	const nextPage: SidebarItem | undefined =
		currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : undefined;

	if (!previousPage && !nextPage) {
		return null;
	}

	return (
		<div className='pt-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
			{/* Previous */}
			{previousPage ? (
				<Link
					to={previousPage.href}
					className='group rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 hover:border-white/20 transition-all'>
					<div className='text-lg font-semibold text-white transition-colors'>
						{previousPage.title}
					</div>
					<div className='flex items-center gap-2 text-sm text-gray-400 transition-colors'>
						<span>‹</span>
						<span>Previous</span>
					</div>
				</Link>
			) : (
				<div />
			)}

			{/* Next */}
			{nextPage ? (
				<Link
					to={nextPage.href}
					className='group rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 hover:border-white/20 transition-all text-right'>
					<div className='text-lg font-semibold text-white transition-colors'>
						{nextPage.title}
					</div>
					<div className='flex items-center gap-2 text-sm text-gray-400 transition-colors justify-end'>
						<span>Next</span>
						<span>›</span>
					</div>
				</Link>
			) : (
				<div />
			)}
		</div>
	);
};

export default NextPrev;
