import React, { useEffect } from 'react';
import { TrendItem, STAGE_THEMES, RadarStage } from '../data/trendsData';
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

  const theme = STAGE_THEMES[trend.radarStage as RadarStage];

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
        {/* Top Accent Line with Ring Color */}
        <div 
          className="h-1.5 w-full shrink-0"
          style={{ backgroundColor: theme.blipBg }}
        />

        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2.5 text-xs font-mono">
            {/* Blip Number Badge */}
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] text-white shrink-0 shadow-2xs"
              style={{ backgroundColor: theme.blipBg }}
            >
              {trend.blipNumber}
            </span>

            {/* Stage Color Badge */}
            <span className={`px-2 py-0.5 rounded border font-medium ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder}`}>
              {trend.radarStage} Ring
            </span>

            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-700 font-sans font-medium">{trend.category}</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="tabular-nums text-stone-500">Maturity: {trend.maturityScore}/100</span>
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
            <div className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-1 flex items-center gap-2">
              <span>Technical Monograph</span>
              <span aria-hidden="true">·</span>
              <span>Node #{trend.blipNumber} on Radar</span>
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
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-4">
              <div className="text-white text-xs font-mono">
                Observation Specimen // {trend.timeline}
              </div>
            </div>
          </div>

          {/* Key Quantitative Metrics */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-3">
              Empirical Benchmarks & Multipliers
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {trend.keyMetrics.map((metric) => (
                <div key={metric.label} className="p-4 bg-white rounded-xl border border-stone-200">
                  <div className="text-2xl font-serif font-medium text-stone-900 tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-stone-800 mt-1">{metric.label}</div>
                  <div className="text-[11px] text-stone-500 mt-1 leading-snug">{metric.context}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Paradigm Shift: Old vs New */}
          <div className="p-5 bg-stone-100/70 border border-stone-200 rounded-xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
              Architectural Paradigm Transformation
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-stone-200">
                <div className="text-xs font-mono text-stone-400 uppercase tracking-wide mb-1">
                  Superseded Paradigm
                </div>
                <div className="font-serif text-base font-medium text-stone-800 mb-1">
                  {trend.oldParadigm.title}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {trend.oldParadigm.description}
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-stone-200 border-l-4 border-l-stone-900">
                <div className="text-xs font-mono text-stone-800 uppercase tracking-wide mb-1 font-semibold">
                  Frontier Paradigm
                </div>
                <div className="font-serif text-base font-medium text-stone-900 mb-1">
                  {trend.newParadigm.title}
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-sans">
                  {trend.newParadigm.description}
                </p>
              </div>
            </div>
          </div>

          {/* Core Technical Innovations */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-3">
              Core Technical Inventions
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {trend.coreInnovations.map((inv, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-700 leading-relaxed">
                  <span className="font-mono text-stone-400 shrink-0 mt-0.5">0{idx + 1}.</span>
                  <span>{inv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Representative Models Table */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-3">
              Reference Systems & Models
            </div>
            <div className="border border-stone-200 rounded-xl overflow-hidden bg-white">
              <table className="w-full text-left text-xs">
                <thead className="bg-stone-50 border-b border-stone-200 text-stone-500 font-mono">
                  <tr>
                    <th className="py-2.5 px-4 font-medium">Model / System</th>
                    <th className="py-2.5 px-4 font-medium">Organization</th>
                    <th className="py-2.5 px-4 font-medium">Context</th>
                    <th className="py-2.5 px-4 font-medium">Key Breakthrough</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {trend.representativeModels.map((m) => (
                    <tr key={m.name} className="hover:bg-stone-50/50">
                      <td className="py-3 px-4 font-medium text-stone-900">{m.name}</td>
                      <td className="py-3 px-4 text-stone-600">{m.creator}</td>
                      <td className="py-3 px-4 font-mono text-stone-500">{m.contextWindow}</td>
                      <td className="py-3 px-4 text-stone-700">{m.keyCapability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Enterprise Impact & Open Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-xl border border-stone-200">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 mb-2 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Enterprise Production Impact</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-600 leading-relaxed">
                {trend.enterpriseImpact.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-500 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-white rounded-xl border border-stone-200">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-800 mb-2 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                <span>Open Challenges & Frontiers</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-600 leading-relaxed">
                {trend.openChallenges.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-500 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Citations & Peer-Reviewed References */}
          {trend.paperCitations && trend.paperCitations.length > 0 && (
            <div className="pt-4 border-t border-stone-200">
              <div className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">
                Primary Literature & Technical Disclosures
              </div>
              <div className="space-y-1.5">
                {trend.paperCitations.map((paper, idx) => (
                  <div key={idx} className="text-xs text-stone-600 flex items-start gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                    <span>
                      <span className="italic font-serif text-stone-800">{paper.title}</span> — {paper.authors} ({paper.venueYear})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between shrink-0">
          <div className="text-xs text-stone-500 font-mono">
            Radar Node #{trend.blipNumber} · {trend.radarStage} Ring
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors text-xs font-medium cursor-pointer"
          >
            Close Dossier
          </button>
        </div>

      </div>
    </div>
  );
};
