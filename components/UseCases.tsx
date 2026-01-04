
import React from 'react';
import { BugReport, MonitorHeart, FactCheck, School } from './Icons';

const UseCases: React.FC = () => {
  const cases = [
    { icon: <BugReport />, title: "Debug Integrations", desc: "Fix broken tool arguments and connection errors during development." },
    { icon: <MonitorHeart />, title: "Monitor Production", desc: "Keep an eye on active agents and alert on high failure rates." },
    { icon: <FactCheck />, title: "Audit Tool Usage", desc: "Verify exactly what data your agents are accessing and changing." },
    { icon: <School />, title: "Learn Behavior", desc: "Understand the hidden reasoning steps agents take to solve problems." }
  ];

  return (
    <section className="py-24 bg-[#08090e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="bg-surface border border-white/5 p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                {c.icon}
              </div>
              <h3 className="font-bold text-white mb-3 text-lg">{c.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
