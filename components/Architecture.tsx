
import React from 'react';
import { Visibility, Check } from './Icons';

const Architecture: React.FC = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-700/50 bg-gray-800/30 px-3 py-1 text-xs text-gray-300 mb-6 font-mono backdrop-blur-sm">
              MIDDLEWARE ARCHITECTURE
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white mb-6">Invisible Observability</h2>
            <p className="text-lg text-gray-400 mb-8 font-light leading-relaxed">
              Argus sits between your agent (like Claude Desktop or a custom LangChain agent) and your MCP servers. It proxies requests transparently, observing real executions without requiring code changes to your tools.
            </p>
            
            <ul className="space-y-4">
              {[
                "Works with any MCP-compliant client",
                "Zero-latency overhead for local development",
                "Drop-in configuration"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-gray-300 font-light">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Diagram Container */}
          <div className="relative rounded-3xl border border-white/10 bg-surface/50 backdrop-blur-xl p-12 flex flex-col items-center justify-center gap-8 shadow-2xl">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] rounded-3xl pointer-events-none opacity-50"></div>
            
            {/* Client Node */}
            <div className="w-full max-w-[220px] rounded-2xl bg-[#1e2029] border border-white/10 p-5 text-center z-10 shadow-lg relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative">
                <div className="text-[10px] font-mono text-gray-500 mb-2 tracking-widest uppercase">Client</div>
                <div className="font-bold text-white text-lg">Agent / Claude</div>
              </div>
            </div>

            {/* Down Arrow Animation */}
            <div className="h-12 w-0.5 bg-gradient-to-b from-gray-700 to-primary relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-slideDown"></div>
            </div>

            {/* Proxy Node */}
            <div className="w-full max-w-[280px] rounded-2xl bg-black/40 border border-primary/50 p-6 text-center shadow-[0_0_40px_-10px_rgba(217,70,239,0.2)] z-10 relative">
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full pl-4 hidden sm:block">
                <div className="text-xs text-primary font-mono whitespace-nowrap flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-primary"></span> Captures Logs
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="p-1.5 rounded-lg bg-primary/20 text-primary">
                  <Visibility className="w-5 h-5" />
                </div>
                <span className="font-bold text-white text-xl">Argus Proxy</span>
              </div>
              <div className="text-xs text-primary/80 uppercase tracking-widest font-semibold">Middleware Layer</div>
            </div>

            {/* Down Arrow Animation */}
            <div className="h-12 w-0.5 bg-gradient-to-b from-primary to-gray-700 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-slideDown delay-300"></div>
            </div>

            {/* Server Nodes */}
            <div className="flex gap-4 w-full justify-center">
              {['Filesystem', 'Postgres'].map((server, i) => (
                <div key={i} className="flex-1 max-w-[150px] rounded-2xl bg-[#1e2029] border border-white/10 p-5 text-center z-10 opacity-80 shadow-lg">
                  <div className="text-[10px] font-mono text-gray-500 mb-2 tracking-widest uppercase">Server {String.fromCharCode(65 + i)}</div>
                  <div className="text-sm font-bold text-white">{server}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .animate-slideDown {
          animation: slideDown 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default Architecture;
