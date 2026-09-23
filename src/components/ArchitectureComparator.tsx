import React, { useState } from 'react';
import { ARCHITECTURE_COMPARISONS } from '../data/trendsData';
import { ArrowRight, Check, X, Layers, Cpu, Radio, Network } from 'lucide-react';

export const ArchitectureComparator: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(ARCHITECTURE_COMPARISONS[0].id);

  const activeComparison = ARCHITECTURE_COMPARISONS.find((c) => c.id === selectedId) || ARCHITECTURE_COMPARISONS[0];

  const icons = {
    'scaling-paradigms': Cpu,
    'speech-modality': Radio,
    'retrieval-patterns': Network,
  };

  return (
    <section id="architectures" className="py-16 border-b border-stone-200 bg-[#F7F4EE]/60">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
            Paradigm Comparison
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 tracking-tight">
            Fundamental Architectural Transformations
          </h2>
          <p className="mt-2 text-stone-600 text-sm md:text-base leading-relaxed">
            The technical leaps defining 2025–2026 are architectural re-engineerings of inference compute, multimodal representation, and retrieval graphs.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex flex-wrap gap-2 mb-8">
          {ARCHITECTURE_COMPARISONS.map((comp) => {
            const Icon = icons[comp.id as keyof typeof icons] || Layers;
            const isSelected = comp.id === selectedId;

            return (
              <button
                key={comp.id}
                onClick={() => setSelectedId(comp.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`} />
                <span>{comp.title}</span>
              </button>
            );
          })}
        </div>

        {/* Side-by-Side Architectural Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Previous / Legacy Architectural Pattern */}
          <div className="p-6 md:p-8 bg-white border border-stone-200 rounded-2xl shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-400 uppercase tracking-wider mb-3">
                <span>Legacy Design Pattern</span>
                <span>2022–2024</span>
              </div>
              <h3 className="text-xl font-serif font-medium text-stone-900 mb-3">
                {activeComparison.left.name}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-6 font-sans">
                {activeComparison.left.summary}
              </p>

              {/* Strengths */}
              <div className="mb-4">
                <div className="text-xs font-semibold text-stone-800 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Key Strengths
                </div>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {activeComparison.left.strengths.map((str, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-stone-400">•</span>
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inherent Bottlenecks */}
              <div>
                <div className="text-xs font-semibold text-stone-800 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <X className="w-3.5 h-3.5 text-rose-500" />
                  Critical Bottlenecks
                </div>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {activeComparison.left.weaknesses.map((w, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-stone-400">•</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="pt-6 mt-6 border-t border-stone-100 text-[11px] font-mono text-stone-400">
              STATUS: Being actively refactored or phased out
            </div>
          </div>

          {/* Frontier / Modern Architectural Pattern */}
          <div className="p-6 md:p-8 bg-stone-900 text-stone-100 border border-stone-800 rounded-2xl shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-400 uppercase tracking-wider mb-3">
                <span className="text-stone-300 font-semibold">Frontier Architecture</span>
                <span className="text-stone-300">2025–2026 Production</span>
              </div>
              <h3 className="text-xl font-serif font-medium text-white mb-3">
                {activeComparison.right.name}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed mb-6 font-sans">
                {activeComparison.right.summary}
              </p>

              {/* Breakthrough Advantages */}
              <div className="mb-4">
                <div className="text-xs font-semibold text-stone-200 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Breakthrough Advantages
                </div>
                <ul className="space-y-1.5 text-xs text-stone-300">
                  {activeComparison.right.strengths.map((str, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-stone-400">•</span>
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering Trade-offs */}
              <div>
                <div className="text-xs font-semibold text-stone-200 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <span className="text-amber-400 text-xs">!</span>
                  Operational Trade-offs
                </div>
                <ul className="space-y-1.5 text-xs text-stone-400">
                  {activeComparison.right.weaknesses.map((w, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-stone-600">•</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
              <span>STATUS: Primary Industry Investment</span>
              <span className="text-stone-200 font-semibold">RECOMMENDED</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
