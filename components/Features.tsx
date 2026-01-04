
import React from 'react';
import { SatelliteAlt, FolderData, Replay, Schema } from './Icons';

const Features: React.FC = () => {
  const features = [
    {
      icon: <SatelliteAlt />,
      title: "Tool Call Interception",
      desc: "Capture every MCP tool call with precise timestamps, JSON parameters, results, error traces, and execution latency.",
      color: "text-primary bg-primary/10 border-primary/20"
    },
    {
      icon: <FolderData />,
      title: "Runs & Sessions",
      desc: "Group scattered tool calls into meaningful sessions. Filter by run ID to reason about specific agent behaviors.",
      color: "text-secondary bg-secondary/10 border-secondary/20"
    },
    {
      icon: <Replay />,
      title: "Replay Without LLM",
      desc: "Isolate tool failures by re-running any specific tool call independently, without needing to reinvoke the expensive LLM.",
      color: "text-accent bg-accent/10 border-accent/20"
    },
    {
      icon: <Schema />,
      title: "Schema Inspection",
      desc: "Visualize the exact JSON schema your tools are exposing. Detect drift between what the agent expects and what the tool provides.",
      color: "text-blue-400 bg-blue-400/10 border-blue-400/20"
    }
  ];

  return (
    <section className="py-32 bg-[#08090e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">Features</span>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">What Argus Does</h2>
          <p className="mt-6 text-xl text-gray-400 font-light">Complete observability for the Model Context Protocol.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group p-8 rounded-3xl border border-white/5 bg-surface/50 backdrop-blur-sm hover:bg-surface transition-all duration-300">
              <div className={`h-14 w-14 flex items-center justify-center rounded-2xl border mb-6 group-hover:scale-110 transition-transform shadow-lg ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
