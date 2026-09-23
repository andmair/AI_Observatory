import React, { useState } from 'react';
import { TrendItem, RADAR_STAGES, LEGACY_PATTERNS_HOLD } from '../data/trendsData';
import { ArrowUpRight, CheckCircle2, Sparkles, Filter, ChevronRight, AlertTriangle } from 'lucide-react';

interface RadarSectionProps {
  trends: TrendItem[];
  onSelectTrend: (trend: TrendItem) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const RadarSection: React.FC<RadarSectionProps> = ({
  trends,
  onSelectTrend,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [selectedStage, setSelectedStage] = useState<string>('All');

  const categories = [
    'All',
    'Architectures',
    'Workflows',
    'Multimodal',
    'Infrastructure',
    'Embodied AI',
    'Governance',
  ];

  const filteredTrends = trends.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesStage = selectedStage === 'All' || item.radarStage === selectedStage;
    return matchesCategory && matchesStage;
  });

  return (
    <section id="radar" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
              Architectural Positioning
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 tracking-tight">
              Generative AI Technology Radar
            </h2>
            <p className="mt-2 text-stone-600 text-sm md:text-base max-w-2xl leading-relaxed">
              Evaluating emerging paradigms, frameworks, and deployment patterns by enterprise maturity and operational adoption readiness.
            </p>
          </div>

          {/* Category Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-lg border border-stone-200/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Radar Stages Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {RADAR_STAGES.map((stage) => {
            const count = trends.filter((t) => t.radarStage === stage.key).length;
            const isHold = stage.key === 'Hold';
            const displayCount = isHold ? LEGACY_PATTERNS_HOLD.length : count;
            const isCurrent = selectedStage === stage.key;

            return (
              <button
                key={stage.key}
                onClick={() => setSelectedStage(selectedStage === stage.key ? 'All' : stage.key)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-white text-stone-800 border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono uppercase tracking-wider ${isCurrent ? 'text-stone-300' : 'text-stone-500'}`}>
                    {stage.key} Ring
                  </span>
                  <span className={`text-xs font-mono tabular-nums px-2 py-0.5 rounded ${
                    isCurrent ? 'bg-stone-800 text-stone-200' : 'bg-stone-100 text-stone-700'
                  }`}>
                    {displayCount} Items
                  </span>
                </div>
                <div className="font-serif text-base font-medium mb-1">
                  {stage.name.split(' (')[0]}
                </div>
                <p className={`text-xs line-clamp-2 leading-relaxed ${isCurrent ? 'text-stone-300' : 'text-stone-500'}`}>
                  {stage.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Radar Matrix Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredTrends.map((trend) => (
            <div
              key={trend.id}
              onClick={() => onSelectTrend(trend)}
              className="group p-6 bg-white border border-stone-200 hover:border-stone-400 rounded-xl transition-all cursor-pointer flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-md"
            >
              <div>
                {/* Clean unboxed metadata with typographic separators */}
                <div className="flex items-center justify-between text-xs text-stone-500 font-mono mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-stone-700 font-sans font-medium">{trend.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{trend.radarStage}</span>
                  </div>
                  <span className="tabular-nums text-stone-600">{trend.timeline}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-medium text-stone-900 group-hover:text-stone-700 transition-colors leading-snug mb-3">
                  {trend.title}
                </h3>

                {/* One Liner Abstract */}
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {trend.oneLiner}
                </p>

                {/* Key Specimen Models */}
                <div className="pt-3 border-t border-stone-100 mb-4">
                  <div className="text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-1.5">
                    Benchmark Systems
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {trend.representativeModels.slice(0, 3).map((m) => (
                      <span
                        key={m.name}
                        className="text-xs text-stone-700 bg-stone-50 border border-stone-200/60 px-2 py-0.5 rounded"
                      >
                        {m.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-mono text-[11px]">
                  Maturity: <span className="text-stone-900 font-semibold tabular-nums">{trend.maturityScore}/100</span>
                </span>
                <span className="text-stone-800 font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Detailed Dossier <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Hold / Deprecated Paradigms Callout Box */}
        {(selectedStage === 'All' || selectedStage === 'Hold') && (
          <div className="mt-12 p-6 bg-stone-50 border border-stone-200 rounded-xl">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <h3 className="font-serif text-lg font-medium text-stone-900">
                Architectural Shift: Superseded & Deprecating Patterns (Hold Ring)
              </h3>
            </div>
            <p className="text-xs text-stone-600 mb-4 leading-relaxed max-w-3xl">
              As generative infrastructure matures, legacy patterns from 2023–2024 are being actively replaced by more robust test-time reasoning and continuous multimodal pipelines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {LEGACY_PATTERNS_HOLD.map((item) => (
                <div key={item.title} className="p-3.5 bg-white border border-stone-200 rounded-lg">
                  <div className="text-xs font-semibold text-stone-900 mb-1">{item.title}</div>
                  <div className="text-xs text-stone-500 leading-relaxed">{item.reason}</div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
