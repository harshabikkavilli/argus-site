import React from 'react';
import ArgusDev from '../assets/ArgusDev.png';
import Architecture from './Architecture';
import CTA from './CTA';
import Features from './Features';
import Footer from './Footer';
import Hero from './Hero';
import LocalFirst from './LocalFirst';
import Navbar from './Navbar';
import ProblemSection from './ProblemSection';
import UseCases from './UseCases';

const LandingPage: React.FC = () => {
	return (
		<div className='min-h-screen bg-background text-white selection:bg-primary selection:text-white overflow-x-hidden'>
			<Navbar />

			<main>
				<Hero />

				<div className='relative z-10 -mt-20 max-w-7xl mx-auto'>
					<div className='absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30'></div>
					<div className='relative rounded-2xl border border-white/10 bg-[#0a0b10] shadow-2xl overflow-hidden ring-1 ring-white/10'>
						<img
							src={ArgusDev}
							alt='Argus Dev'
							className='w-full h-full object-cover'
						/>
					</div>
				</div>

				<ProblemSection />
				<Features />
				<Architecture />
				<LocalFirst />
				<UseCases />
				<CTA />
			</main>

			<Footer />
		</div>
	);
};

export default LandingPage;

