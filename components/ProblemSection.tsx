
import React from 'react';
import { Warning, ReplayCircleFilled, VisibilityOff, Shuffle } from './Icons';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <Warning />,
      title: "Wrong Tool Calls",
      desc: "Agents hallucinate parameters or call tools that don't exist, leading to silent failures.",
      color: "red"
    },
    {
      icon: <ReplayCircleFilled />,
      title: "Hard to Reproduce",
      desc: "Failures are often transient. Re-running the entire agent loop is expensive and slow.",
      color: "orange"
    },
    {
      icon: <VisibilityOff />,
      title: "Opaque Logs",
      desc: "Standard stdout logs don't capture the structured data flow between LLMs and MCP servers.",
      color: "yellow"
    },
    {
      icon: <Shuffle />,
      title: "Non-determinism",
      desc: "Different runs produce different results, making traditional breakpoints useless.",
      color: "purple"
    }
  ];

  const getColorStyles = (color: string) => {
    switch(color) {
      case 'red': return 'text-red-500 bg-red-500/10 hover:border-red-500/30 hover:shadow-red-500/10';
      case 'orange': return 'text-orange-500 bg-orange-500/10 hover:border-orange-500/30 hover:shadow-orange-500/10';
      case 'yellow': return 'text-yellow-500 bg-yellow-500/10 hover:border-yellow-500/30 hover:shadow-yellow-500/10';
      case 'purple': return 'text-purple-500 bg-purple-500/10 hover:border-purple-500/30 hover:shadow-purple-500/10';
      default: return '';
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
            Agent debugging breaks down at the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">tool layer</span>
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            LLMs are non-deterministic, but your infrastructure isn't. When agents fail, it's usually because of how they interact with the outside world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <div 
              key={i} 
              className={`group relative rounded-2xl border border-white/5 bg-surface p-8 transition-all duration-300 hover:shadow-lg ${getColorStyles(p.color)}`}
            >
              <div className={`mb-6 inline-flex items-center justify-center rounded-xl p-3 group-hover:scale-110 transition-transform duration-300`}>
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
