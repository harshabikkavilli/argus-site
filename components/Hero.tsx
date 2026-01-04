
import React from 'react';
import { PlayCircle } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-40 lg:pt-40 lg:pb-52">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10 opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse-soft"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary backdrop-blur-sm shadow-[0_0_15px_-5px_rgba(217,70,239,0.5)]">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Now available for Claude Desktop
          </div>
          
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-8 leading-[1.1]">
            Debug <span className="gradient-text">MCP-powered agents</span> <br className="hidden sm:block"/>with confidence.
          </h1>
          
          <p className="mx-auto max-w-2xl text-xl text-gray-400 mb-12 font-light leading-relaxed">
            Argus captures, inspects, and replays every MCP tool call so you can see what your agents actually did. Stop guessing and start fixing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="h-14 w-full sm:w-auto px-10 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg transition-all hover:scale-105 shadow-[0_0_30px_-5px_rgba(217,70,239,0.5)] hover:shadow-[0_0_40px_-5px_rgba(217,70,239,0.7)] border border-white/20">
              Get Started Locally
            </button>
            <button className="h-14 w-full sm:w-auto px-10 rounded-full border border-white/10 hover:border-white/30 text-white font-medium text-lg transition-all flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
              <PlayCircle className="w-6 h-6" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
