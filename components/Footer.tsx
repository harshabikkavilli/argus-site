
import React from 'react';
import { Visibility } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-[#020205] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-white">
              <Visibility className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-bold text-white block">Argus</span>
              <span className="text-xs text-gray-500 block mt-0.5 font-light">Observability for MCP-powered agents</span>
            </div>
          </div>
          
          <div className="flex gap-8">
            {['GitHub', 'Documentation', 'Demo', 'Twitter'].map((link) => (
              <a key={link} className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">
                {link}
              </a>
            ))}
          </div>
        </div>
        
        <div className="text-center md:text-left border-t border-white/5 pt-8">
          <p className="text-xs text-gray-600">© 2024 Argus Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
