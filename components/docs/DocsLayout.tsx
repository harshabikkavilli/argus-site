import {MDXProvider} from '@mdx-js/react';
import React, {Suspense, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {getPageBySlug} from '../../docs/config';
import Navbar from '../Navbar';
import Breadcrumb from './Breadcrumb';
import DocsSidebar from './DocsSidebar';
import {mdxComponents} from './MDXComponents';
import NextPrev from './NextPrev';
import TableOfContents from './TableOfContents';

// Import MDX content
import CLICommands from '../../docs/content/api-reference/cli-commands.mdx';
import Configuration from '../../docs/content/api-reference/configuration.mdx';
import SchemaValidation from '../../docs/content/api-reference/schema-validation.mdx';
import DashboardUsage from '../../docs/content/guides/dashboard-usage.mdx';
import LocalEnvironment from '../../docs/content/guides/local-environment.mdx';
import ReplayFunctionality from '../../docs/content/guides/replay-functionality.mdx';
import SessionManagement from '../../docs/content/guides/session-management.mdx';
import CoreConcepts from '../../docs/content/introduction/core-concepts.mdx';
import GettingStarted from '../../docs/content/introduction/getting-started.mdx';
import Installation from '../../docs/content/introduction/installation.mdx';
import Community from '../../docs/content/support/community.mdx';
import FAQs from '../../docs/content/support/faqs.mdx';
import Troubleshooting from '../../docs/content/support/troubleshooting.mdx';

const docPages: Record<string, React.ComponentType> = {
	'getting-started': GettingStarted,
	installation: Installation,
	'core-concepts': CoreConcepts,
	'dashboard-usage': DashboardUsage,
	'replay-functionality': ReplayFunctionality,
	'session-management': SessionManagement,
	'local-environment': LocalEnvironment,
	'cli-commands': CLICommands,
	configuration: Configuration,
	'schema-validation': SchemaValidation,
	troubleshooting: Troubleshooting,
	faqs: FAQs,
	community: Community
};

const DocPage: React.FC<{slug: string}> = ({slug}) => {
	const Component = docPages[slug];
	const pageConfig = getPageBySlug(slug);

	if (!Component) {
		return (
			<div className='text-center py-20'>
				<h1 className='text-2xl font-bold text-white mb-4'>Page Not Found</h1>
				<p className='text-gray-400'>
					The documentation page you're looking for doesn't exist.
				</p>
			</div>
		);
	}

	return (
		<article className='docs-content'>
			<Breadcrumb
				items={[
					{label: 'Docs', href: '/docs'},
					{label: pageConfig?.title || slug}
				]}
			/>
			<h1 className='text-5xl font-extrabold tracking-tight text-white mb-4'>
				{pageConfig?.title}
			</h1>
			{pageConfig?.description && (
				<p className='text-xl text-gray-400 mb-12 font-light leading-relaxed'>
					{pageConfig.description}
				</p>
			)}
			<Component />
			<NextPrev currentSlug={slug} />
		</article>
	);
};

const DocsLayout: React.FC = () => {
	const location = useLocation();
	const currentSlug =
		location.pathname.replace('/docs/', '') || 'getting-started';

	// Scroll to top when navigating to a new page
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<div className='min-h-screen bg-background text-white selection:bg-primary selection:text-white'>
			<Navbar />

			<div className='flex pt-20'>
				{/* Left Sidebar - Fixed */}
				<aside className='hidden lg:block w-64 flex-shrink-0 border-r border-white/5'>
					<nav className='fixed top-20 w-64 h-[calc(100vh-5rem)] overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10'>
						<DocsSidebar currentSlug={currentSlug} />
					</nav>
				</aside>

				{/* Main Content - Scrollable */}
				<main className='flex-1 min-w-0 px-6 lg:px-12 py-12'>
					<div className='max-w-3xl mx-auto'>
						<MDXProvider components={mdxComponents}>
							<Suspense
								fallback={<div className='animate-pulse'>Loading...</div>}>
								<DocPage slug={currentSlug} />
							</Suspense>
						</MDXProvider>
					</div>
				</main>

				{/* Right Sidebar - Fixed */}
				<aside className='hidden xl:block w-64 flex-shrink-0'>
					<nav className='fixed top-20 w-64 h-[calc(100vh-5rem)] overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10'>
						<TableOfContents />
					</nav>
				</aside>
			</div>
		</div>
	);
};

export default DocsLayout;
