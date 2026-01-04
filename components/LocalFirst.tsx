
import React from 'react';
import { Lock, WifiOff, CloudOff, NoAccounts, Terminal } from './Icons';

const LocalFirst: React.FC = () => {
  const cards = [
    { icon: <WifiOff />, title: "Works Offline", desc: "No internet connection required. Develop on the plane or in air-gapped environments." },
    { icon: <CloudOff />, title: "No Data Exfiltration", desc: "Your sensitive prompts, tool inputs, and database results never leave your machine." },
    { icon: <NoAccounts />, title: "No Signup Required", desc: "Just install and run. No API keys, no accounts, no credit cards." },
    { icon: <Terminal />, title: "Dev & Prod Parity", desc: "Use the same lightweight binary for local development and production debugging." }
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#1c1d24] to-[#0f1016] border border-white/10 p-10 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b from-green-500/10 to-transparent blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-green-500/10 px-3 py-1 text-xs font-bold tracking-wider text-green-400 ring-1 ring-inset ring-green-500/20 mb-8">
                <Lock className="w-4 h-4" />
                SECURE BY DESIGN
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white mb-10">Local-first by design</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-16">
                {cards.map((c, i) => (
                  <div key={i}>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 text-gray-300">
                        {c.icon}
                      </div>
                      {c.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Dot pattern decorative */}
          <div className="absolute right-0 bottom-0 h-full w-1/2 opacity-[0.03] pointer-events-none rotate-12 translate-y-20 translate-x-20 bg-[radial-gradient(#ffffff_2px,transparent_2px)] bg-[size:30px_30px]"></div>
        </div>
      </div>
    </section>
  );
};

export default LocalFirst;
