import type {MDXComponents} from 'mdx/types';
import React from 'react';
import Callout from './Callout';
import CodeBlock from './CodeBlock';

// Re-export Callout for use in MDX files
export {Callout};

// Helper to check if children contain block-level elements
const hasBlockElement = (children: React.ReactNode): boolean => {
	const childArray = React.Children.toArray(children);
	return childArray.some((child) => {
		if (!React.isValidElement(child)) return false;
		const type = child.type;
		// Check for block-level element types
		if (typeof type === 'string') {
			return [
				'div',
				'pre',
				'ul',
				'ol',
				'table',
				'blockquote',
				'hr',
				'h1',
				'h2',
				'h3',
				'h4',
				'h5',
				'h6'
			].includes(type);
		}
		// Check for our custom components
		if (typeof type === 'function' || typeof type === 'object') {
			const displayName = (type as any).displayName || (type as any).name || '';
			return ['CodeBlock', 'Callout'].includes(displayName);
		}
		return false;
	});
};

export const mdxComponents: MDXComponents = {
	// Headings
	h1: ({children, ...props}) => (
		<h1
			className='text-4xl font-extrabold tracking-tight text-white mt-12 mb-6 first:mt-0'
			{...props}>
			{children}
		</h1>
	),
	h2: ({children, id, ...props}) => (
		<h2
			id={id}
			className='text-2xl font-bold tracking-tight text-white mt-12 mb-4 pb-2 border-b border-white/10'
			{...props}>
			{children}
		</h2>
	),
	h3: ({children, id, ...props}) => (
		<h3
			id={id}
			className='text-xl font-semibold text-white mt-8 mb-3'
			{...props}>
			{children}
		</h3>
	),
	h4: ({children, ...props}) => (
		<h4 className='text-lg font-semibold text-white mt-6 mb-2' {...props}>
			{children}
		</h4>
	),

	// Paragraph - handle block elements that shouldn't be wrapped in <p>
	p: ({children, ...props}) => {
		// If the paragraph contains block elements, render children directly
		if (hasBlockElement(children)) {
			return <>{children}</>;
		}
		return (
			<p className='text-gray-300 leading-relaxed my-4' {...props}>
				{children}
			</p>
		);
	},

	// Lists
	ul: ({children, ...props}) => (
		<ul
			className='list-disc list-inside space-y-2 my-4 text-gray-300'
			{...props}>
			{children}
		</ul>
	),
	ol: ({children, ...props}) => (
		<ol
			className='list-decimal list-inside space-y-2 my-4 text-gray-300'
			{...props}>
			{children}
		</ol>
	),
	li: ({children, ...props}) => (
		<li className='text-gray-300' {...props}>
			{children}
		</li>
	),

	// Code
	pre: ({children, ...props}) => {
		// Extract the code element and its props
		const codeElement = React.Children.toArray(
			children
		)[0] as React.ReactElement<{
			className?: string;
			children?: React.ReactNode;
		}>;
		if (codeElement?.props) {
			const {className, children: code} = codeElement.props;
			return <CodeBlock className={className}>{code}</CodeBlock>;
		}
		return <pre {...props}>{children}</pre>;
	},
	code: ({children, className, ...props}) => {
		// Inline code
		if (!className) {
			return (
				<code
					className='px-1.5 py-0.5 rounded bg-white/10 text-primary font-mono text-sm'
					{...props}>
					{children}
				</code>
			);
		}
		// Block code is handled by pre
		return (
			<code className={className} {...props}>
				{children}
			</code>
		);
	},

	// Links
	a: ({children, href, ...props}) => (
		<a
			href={href}
			className='text-primary hover:text-primary/80 underline underline-offset-2 transition-colors'
			target={href?.startsWith('http') ? '_blank' : undefined}
			rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
			{...props}>
			{children}
		</a>
	),

	// Blockquote
	blockquote: ({children, ...props}) => (
		<blockquote
			className='border-l-4 border-primary/50 pl-4 my-6 text-gray-400 italic'
			{...props}>
			{children}
		</blockquote>
	),

	// Tables
	table: ({children, ...props}) => (
		<div className='overflow-x-auto my-6'>
			<table className='w-full border-collapse' {...props}>
				{children}
			</table>
		</div>
	),
	thead: ({children, ...props}) => (
		<thead className='border-b border-white/10' {...props}>
			{children}
		</thead>
	),
	tbody: ({children, ...props}) => <tbody {...props}>{children}</tbody>,
	tr: ({children, ...props}) => (
		<tr className='border-b border-white/5' {...props}>
			{children}
		</tr>
	),
	th: ({children, ...props}) => (
		<th
			className='text-left py-3 px-4 text-sm font-semibold text-white'
			{...props}>
			{children}
		</th>
	),
	td: ({children, ...props}) => (
		<td className='py-3 px-4 text-sm text-gray-300' {...props}>
			{children}
		</td>
	),

	// Horizontal rule
	hr: (props) => <hr className='border-white/10 my-8' {...props} />,

	// Strong and emphasis
	strong: ({children, ...props}) => (
		<strong className='font-semibold text-white' {...props}>
			{children}
		</strong>
	),
	em: ({children, ...props}) => (
		<em className='italic' {...props}>
			{children}
		</em>
	),

	// Custom components
	Callout,

	// Wrapper for the entire MDX content
	wrapper: ({children}) => <div className='mdx-content'>{children}</div>
};
