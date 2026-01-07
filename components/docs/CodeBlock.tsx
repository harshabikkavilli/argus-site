import React, { useState } from 'react';
import { ContentCopy, Check } from '../Icons';

interface CodeBlockProps {
	children: React.ReactNode;
	className?: string;
	title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className, title }) => {
	const [copied, setCopied] = useState(false);

	const language = className?.replace('language-', '') || 'text';
	
	// Extract text content for copying
	const getTextContent = (node: React.ReactNode): string => {
		if (typeof node === 'string') return node;
		if (typeof node === 'number') return String(node);
		if (Array.isArray(node)) return node.map(getTextContent).join('');
		if (React.isValidElement(node) && node.props.children) {
			return getTextContent(node.props.children);
		}
		return '';
	};

	const textContent = getTextContent(children);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(textContent.trim());
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	// Determine header text
	const isTerminal = language === 'bash' || language === 'shell' || language === 'sh';
	const headerText = title || (isTerminal ? 'Terminal' : language);

	return (
		<div className='relative group my-6 rounded-xl overflow-hidden bg-[#0f1016] border border-white/10'>
			{/* Header */}
			<div className='flex items-center justify-between px-4 py-3 border-b border-white/5'>
				<span className='text-xs text-gray-500 font-mono uppercase tracking-wider'>
					{headerText}
				</span>
				<button
					onClick={handleCopy}
					className='flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors'>
					{copied ? (
						<>
							<Check className='w-4 h-4 text-green-400' />
							<span className='text-green-400'>Copied</span>
						</>
					) : (
						<>
							<ContentCopy className='w-4 h-4' />
							<span>Copy</span>
						</>
					)}
				</button>
			</div>

			{/* Code Content */}
			<pre className='p-4 overflow-x-auto text-sm font-mono'>
				<code className='text-gray-300 whitespace-pre'>{children}</code>
			</pre>
		</div>
	);
};

export default CodeBlock;

