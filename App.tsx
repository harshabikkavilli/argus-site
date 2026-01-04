import React from 'react';
import ArgusDev from './assets/ArgusDev.png';
import Architecture from './components/Architecture';
import CTA from './components/CTA';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LocalFirst from './components/LocalFirst';
import Navbar from './components/Navbar';
import ProblemSection from './components/ProblemSection';
import UseCases from './components/UseCases';

const App: React.FC = () => {
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

export default App;
