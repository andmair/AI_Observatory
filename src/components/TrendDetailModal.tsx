import React, { useEffect } from 'react';
import { TrendItem } from '../data/trendsData';
import { X, Check, ArrowRight, ExternalLink, BookOpen, Layers, ShieldAlert, Cpu } from 'lucide-react';
import roboticsImg from '../assets/images/physical_robotics_ai_1790122385456.jpg';
import reasoningImg from '../assets/images/agentic_reasoning_mesh_1790122399224.jpg';

interface TrendDetailModalProps {
  trend: TrendItem | null;
  onClose: () => void;
}

export const TrendDetailModal: React.FC<TrendDetailModalProps> = ({ trend, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!trend) return null;

  const visualAsset =
    trend.id === 'physical-ai-world-models'
      ? roboticsImg
      : reasoningImg;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#FAF8F5] border border-stone-300 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
            <span className="text-stone-800 font-semibold">{trend.category}</span>
            <span aria-hidden="true">·</span>
            <span>Radar Stage: {trend.radarStage}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">Maturity: {trend.maturityScore}/100</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Dossier Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8">
          
          {/* Title & One Liner */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-1">
              Technical Dossier // {trend.id.toUpperCase()}
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-stone-900 tracking-tight leading-tight">
              {trend.title}
            </h2>
            <p className="mt-3 text-base text-stone-700 leading-relaxed font-sans">
              {trend.abstract}
            </p>
          </div>

          {/* Visual Showcase (if available) */}
          <div className="relative rounded-xl overflow-hidden border border-stone-200 bg-stone-900 h-52 md:h-64">
            <img
              src={visualAsset}
              alt={trend.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-5">
              <span className="text-xs text-stone-300 font-mono">
                Visual Archival Representation · {trend.title}
              </span>
            </div>
          </div>

          {/* Core Technical Innovations */}
          <div>
            <h3 className="text-lg font-serif font-medium text-stone-900 mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-stone-700" />
              Core Technical Innovations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {trend.coreInnovations.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-white border border-stone-200/90 rounded-lg text-xs text-stone-700 leading-relaxed flex items-start gap-2.5 shadow-2xs"
                >
                  <span className="font-mono text-stone-400 shrink-0">0{idx + 1}.</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Old Paradigm vs New Paradigm Shift */}
          <div className="p-5 bg-white border border-stone-200 rounded-xl shadow-xs">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-3">
              Architectural Paradigm Evolution
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              <div className="pr-2">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">
                  Previous Pattern (2022–2024)
                </div>
                <div className="text-sm font-medium text-stone-900 mb-1">{trend.oldParadigm.title}</div>
                <p className="text-xs text-stone-600 leading-relaxed">{trend.oldParadigm.description}</p>
              </div>

              <div className="md:border-l md:border-stone-200 md:pl-6">
                <div className="text-xs font-semibold text-stone-900 uppercase tracking-wide mb-1">
                  Frontier Paradigm (2025–2026)
                </div>
                <div className="text-sm font-medium text-stone-900 mb-1">{trend.newParadigm.title}</div>
                <p className="text-xs text-stone-700 leading-relaxed">{trend.newParadigm.description}</p>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div>
            <h3 className="text-lg font-serif font-medium text-stone-900 mb-3">
              Empirical Benchmarks & Scaling Indicators
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {trend.keyMetrics.map((metric) => (
                <div key={metric.label} className="p-4 bg-white border border-stone-200 rounded-xl">
                  <div className="text-2xl font-serif font-medium text-stone-900 tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-stone-700 mt-1 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-stone-500 leading-normal">
                    {metric.context}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Representative Models Table */}
          <div>
            <h3 className="text-lg font-serif font-medium text-stone-900 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-stone-700" />
              Flagship Models & Reference Architectures
            </h3>
            <div className="overflow-x-auto border border-stone-200 rounded-xl bg-white">
              <table className="w-full text-left text-xs">
                <thead className="bg-stone-50 border-b border-stone-200 text-stone-500 font-mono uppercase text-[11px]">
                  <tr>
                    <th className="py-2.5 px-4 font-medium">Model / System</th>
                    <th className="py-2.5 px-4 font-medium">Organization</th>
                    <th className="py-2.5 px-4 font-medium">Context Window</th>
                    <th className="py-2.5 px-4 font-medium">Differentiating Capability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-sans">
                  {trend.representativeModels.map((m) => (
                    <tr key={m.name} className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-stone-900 whitespace-nowrap">{m.name}</td>
                      <td className="py-3 px-4 text-stone-600 whitespace-nowrap">{m.creator}</td>
                      <td className="py-3 px-4 text-stone-500 font-mono whitespace-nowrap tabular-nums">{m.contextWindow}</td>
                      <td className="py-3 px-4 text-stone-700">{m.keyCapability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Enterprise Implications & Open Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-white border border-stone-200 rounded-xl">
              <h4 className="font-serif text-base font-medium text-stone-900 mb-3 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-700" />
                Enterprise & Commercial Impact
              </h4>
              <ul className="space-y-2 text-xs text-stone-600 leading-relaxed">
                {trend.enterpriseImpact.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-stone-400 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-white border border-stone-200 rounded-xl">
              <h4 className="font-serif text-base font-medium text-stone-900 mb-3 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-700" />
                Bottlenecks & Open Research Questions
              </h4>
              <ul className="space-y-2 text-xs text-stone-600 leading-relaxed">
                {trend.openChallenges.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-stone-400 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Seminal Paper Citations */}
          <div className="pt-4 border-t border-stone-200">
            <h4 className="font-serif text-sm font-medium text-stone-900 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-stone-600" />
              Foundational Research & References
            </h4>
            <div className="space-y-1.5">
              {trend.paperCitations.map((paper, idx) => (
                <div key={idx} className="text-xs text-stone-600 font-sans">
                  <span className="font-medium text-stone-900 italic">"{paper.title}"</span> — {paper.authors} ({paper.venueYear})
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-stone-100 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 shrink-0">
          <span>Generative AI Trends Observatory · Dossier Record</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors font-medium cursor-pointer"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
