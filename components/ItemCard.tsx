import React from 'react';

interface ItemCardProps {
	icon: React.ReactNode;
	title: string;
	desc: string;
	color: string;
}

const ItemCard: React.FC<ItemCardProps> = ({icon, title, desc, color}) => {
	return (
		<div className='group p-8 rounded-3xl border border-white/5 bg-surface/50 backdrop-blur-sm hover:bg-surface transition-all duration-300 hover:-translate-y-1'>
			<div
				className={`h-14 w-14 flex items-center justify-center rounded-2xl border mb-6 group-hover:scale-110 transition-transform shadow-lg ${color}`}>
				{icon}
			</div>
			<h3 className='text-xl font-bold text-white mb-3'>{title}</h3>
			<p className='text-sm text-gray-400 leading-relaxed font-light'>{desc}</p>
		</div>
	);
};

export default ItemCard;
