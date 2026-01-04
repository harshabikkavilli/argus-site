
import React, { useState } from 'react';
import { Lock, Replay } from './Icons';

interface ToolRun {
  id: string;
  name: string;
  server: string;
  duration: string;
  time: string;
  status: '200' | 'ERR';
  input: any;
  output: any;
}

const RUNS: ToolRun[] = [
  {
    id: '1',
    name: 'filesystem.read_file',
    server: 'mac-fs-server',
    duration: '14ms',
    time: '2m ago',
    status: '200',
    input: { path: "/usr/local/src/project/config.json", encoding: "utf-8" },
    output: { content: "{\n  \"debug\": true,\n  \"port\": 8080\n}", size: 42 }
  },
  {
    id: '2',
    name: 'github.create_issue',
    server: 'github-server',
    duration: '124ms',
    time: '5m ago',
    status: 'ERR',
    input: { title: "Fix bug in production", body: "Something is wrong" },
    output: { error: "Authentication failed", code: 401 }
  },
  {
    id: '3',
    name: 'postgres.query',
    server: 'db-local',
    duration: '45ms',
    time: '12m ago',
    status: '200',
    input: { query: "SELECT * FROM users LIMIT 5" },
    output: { rows: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }], count: 2 }
  }
];

const DebuggerMockup: React.FC = () => {
  const [activeRunId, setActiveRunId] = useState('1');
  const activeRun = RUNS.find(r => r.id === activeRunId) || RUNS[0];

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30"></div>
      <div className="relative rounded-2xl border border-white/10 bg-[#0a0b10] shadow-2xl overflow-hidden ring-1 ring-white/10">
        
        {/* Browser Header */}
        <div className="flex items-center justify-between border-b border-white/5 bg-[#0f1016] px-5 py-4">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-[#f43f5e]"></div>
            <div className="h-3 w-3 rounded-full bg-[#fbbf24]"></div>
            <div className="h-3 w-3 rounded-full bg-[#22c55e]"></div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-md bg-[#05050a] px-3 py-1 border border-white/5">
            <Lock className="w-3 h-3 text-gray-500" />
            <div className="text-xs font-mono text-gray-400">localhost:3000</div>
          </div>
          <div className="w-10"></div>
        </div>

        {/* Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] h-[550px] bg-[#05050a]">
          {/* Sidebar */}
          <div className="border-r border-white/5 bg-[#0a0b10] flex flex-col">
            <div className="p-4 border-b border-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest flex justify-between items-center">
              <span>Recent Runs</span>
              <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20"><path d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"/></svg>
            </div>
            <div className="overflow-y-auto custom-scrollbar flex-1 p-2 space-y-1">
              {RUNS.map((run) => (
                <div 
                  key={run.id}
                  onClick={() => setActiveRunId(run.id)}
                  className={`p-3 rounded-lg border transition-all cursor-pointer relative overflow-hidden group ${
                    activeRunId === run.id 
                      ? 'bg-gradient-to-r from-primary/10 to-transparent border-primary/20' 
                      : 'border-transparent hover:bg-white/5'
                  }`}
                >
                  {activeRunId === run.id && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>}
                  <div className="flex justify-between items-center mb-1.5 pl-2">
                    <span className={`text-sm font-semibold ${activeRunId === run.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {run.name}
                    </span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded border font-mono ${
                      run.status === '200' 
                        ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                        : 'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}>
                      {run.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-500 font-mono pl-2 flex gap-2">
                    <span className="flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${run.status === '200' ? 'bg-green-500' : 'bg-red-500'} opacity-50`}></span> 
                      {run.duration}
                    </span>
                    <span>• {run.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main View */}
          <div className="bg-[#05050a] p-8 font-mono text-sm overflow-y-auto custom-scrollbar relative">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_#d946ef]"></span>
                  <h3 className="text-lg font-bold text-white tracking-tight font-sans">Tool Execution Details</h3>
                </div>
                <button className="flex items-center gap-2 text-xs bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 hover:border-primary/40 px-3 py-1.5 rounded-full transition-all hover:shadow-[0_0_15px_-5px_rgba(217,70,239,0.3)]">
                  <Replay className="w-3.5 h-3.5" />
                  Replay Tool Call
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Tool Name', value: activeRun.name, color: 'text-primary' },
                  { label: 'Server', value: activeRun.server, color: 'text-white' },
                  { label: 'Duration', value: activeRun.duration, color: 'text-white' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                    <div className="text-gray-500 text-[10px] mb-1.5 uppercase tracking-wider">
                      {stat.label}
                    </div>
                    <div className={`${stat.color} font-medium`}>{stat.value}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3 uppercase tracking-wider font-bold px-1">
                    <span>Input Parameters</span>
                    <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-gray-300">JSON</span>
                  </div>
                  <div className="bg-[#0f1016] p-5 rounded-xl border border-white/5 text-gray-300 shadow-inner overflow-hidden">
                    <pre className="text-xs whitespace-pre-wrap">
                      <code>{JSON.stringify(activeRun.input, null, 2)}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3 uppercase tracking-wider font-bold px-1">
                    <span>Output Result</span>
                    <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-gray-300">JSON</span>
                  </div>
                  <div className="bg-[#0f1016] p-5 rounded-xl border border-white/5 text-gray-300 shadow-inner overflow-hidden">
                    <pre className="text-xs whitespace-pre-wrap">
                      <code className={activeRun.status === 'ERR' ? 'text-red-400' : ''}>
                        {JSON.stringify(activeRun.output, null, 2)}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebuggerMockup;
