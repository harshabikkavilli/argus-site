
import React from 'react';
import { ContentCopy } from './Icons';

const CTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-5xl font-extrabold tracking-tight text-white mb-8">See what your agent really did.</h2>
        <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">Join thousands of developers building reliable agents with Argus.</p>
        
        <div className="bg-[#0f1016] border border-white/10 rounded-2xl p-6 mb-10 inline-block text-left max-w-md w-full mx-auto shadow-2xl relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative bg-[#0f1016] rounded-xl p-4 overflow-hidden">
            <div className="flex justify-between items-center text-xs text-gray-500 font-mono mb-3">
              <span className="uppercase tracking-widest">Terminal</span>
              <button className="hover:text-white transition-colors">
                <ContentCopy className="w-4 h-4" />
              </button>
            </div>
            <div className="font-mono text-sm text-white">
              <div className="flex gap-2 mb-1">
                <span className="text-green-400 select-none">$</span>
                <span>npm install -g @argus/cli</span>
              </div>
              <div className="flex gap-2">
                <span className="text-green-400 select-none">$</span>
                <span>argus init</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button className="h-14 px-12 rounded-full bg-gradient-to-r from-primary to-secondary hover:brightness-110 text-white font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(217,70,239,0.5)] hover:scale-105">
            Install Argus
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
