export interface SidebarItem {
	title: string;
	href: string;
	description?: string;
}

export interface SidebarSection {
	title: string;
	items: SidebarItem[];
}

export interface DocsConfig {
	sidebar: SidebarSection[];
}

export const docsConfig: DocsConfig = {
	sidebar: [
		{
			title: 'INTRODUCTION',
			items: [
				{
					title: 'Getting Started',
					href: '/docs/getting-started',
					description: 'Learn how to set up Argus to debug your MCP-powered agents in minutes.',
				},
				{
					title: 'Installation',
					href: '/docs/installation',
					description: 'Install Argus globally via npm and verify your setup.',
				},
				{
					title: 'Core Concepts',
					href: '/docs/core-concepts',
					description: 'Understand the key concepts behind Argus and MCP debugging.',
				},
			],
		},
		{
			title: 'GUIDES',
			items: [
				{
					title: 'Dashboard Usage',
					href: '/docs/dashboard-usage',
					description: 'Learn how to use the Argus dashboard effectively.',
				},
				{
					title: 'Replay Functionality',
					href: '/docs/replay-functionality',
					description: 'Replay tool calls and compare results without involving the LLM.',
				},
				{
					title: 'Session Management',
					href: '/docs/session-management',
					description: 'Organize debugging sessions with runs and filters.',
				},
				{
					title: 'Local Environment',
					href: '/docs/local-environment',
					description: 'Set up Argus for local development workflows.',
				},
			],
		},
		{
			title: 'API REFERENCE',
			items: [
				{
					title: 'CLI Commands',
					href: '/docs/cli-commands',
					description: 'Complete reference for all Argus CLI commands.',
				},
				{
					title: 'Configuration',
					href: '/docs/configuration',
					description: 'Configure Argus with argus.config.json.',
				},
				{
					title: 'Schema Validation',
					href: '/docs/schema-validation',
					description: 'Validate MCP tool schemas and responses.',
				},
			],
		},
		{
			title: 'SUPPORT',
			items: [
				{
					title: 'Troubleshooting',
					href: '/docs/troubleshooting',
					description: 'Common issues and how to resolve them.',
				},
				{
					title: 'FAQs',
					href: '/docs/faqs',
					description: 'Frequently asked questions about Argus.',
				},
				{
					title: 'Community',
					href: '/docs/community',
					description: 'Join the Argus community and get help.',
				},
			],
		},
	],
};

// Helper function to get page config by slug
export function getPageBySlug(slug: string): SidebarItem | undefined {
	for (const section of docsConfig.sidebar) {
		const item = section.items.find((item) => item.href === `/docs/${slug}`);
		if (item) return item;
	}
	return undefined;
}

// Helper to get all pages as flat array
export function getAllPages(): SidebarItem[] {
	return docsConfig.sidebar.flatMap((section) => section.items);
}

