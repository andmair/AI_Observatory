import React from 'react';
import { TrendItem } from '../data/trendsData';
import { ChevronRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface KeyTrendsShowcaseProps {
  trends: TrendItem[];
  onSelectTrend: (trend: TrendItem) => void;
}

export const KeyTrendsShowcase: React.FC<KeyTrendsShowcaseProps> = ({ trends, onSelectTrend }) => {
  return (
    <section id="trends" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
            Curatorial Monographs
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 tracking-tight">
            The Frontier Megatrends
          </h2>
          <p className="mt-2 text-stone-600 text-sm md:text-base leading-relaxed">
            In-depth analysis of the foundational forces dismantling old assumptions and defining state-of-the-art generative systems.
          </p>
        </div>

        {/* Editorial Trends List */}
        <div className="divide-y divide-stone-200">
          {trends.map((trend, index) => (
            <div
              key={trend.id}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-stone-50/50 transition-colors rounded-xl px-2 -mx-2"
            >
              {/* Left Column: Number & Metadata */}
              <div className="lg:col-span-3">
                <div className="text-xs font-mono text-stone-400 mb-1">
                  0{index + 1} / CHAPTER
                </div>
                <div className="text-xs text-stone-500 font-mono flex items-center gap-2">
                  <span>{trend.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-stone-700 font-medium">{trend.radarStage} Ring</span>
                </div>
                <div className="mt-3 text-xs text-stone-500">
                  Maturity Score: <span className="font-semibold text-stone-900 tabular-nums">{trend.maturityScore}/100</span>
                </div>
              </div>

              {/* Middle Column: Title, Abstract, Core Innovations */}
              <div className="lg:col-span-6">
                <h3 
                  onClick={() => onSelectTrend(trend)}
                  className="text-2xl font-serif font-medium text-stone-900 hover:text-stone-700 transition-colors cursor-pointer mb-3 leading-snug"
                >
                  {trend.title}
                </h3>
                
                <p className="text-sm text-stone-700 leading-relaxed font-sans mb-4">
                  {trend.abstract}
                </p>

                <div className="space-y-1.5 pt-2">
                  {trend.coreInnovations.slice(0, 2).map((inv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                      <span className="text-stone-400 mt-0.5">•</span>
                      <span>{inv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Systems & Action */}
              <div className="lg:col-span-3 flex flex-col justify-between h-full bg-stone-50 p-4 rounded-xl border border-stone-200/70">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-2">
                    Benchmark Models
                  </div>
                  <div className="space-y-1.5 mb-4">
                    {trend.representativeModels.slice(0, 3).map((m) => (
                      <div key={m.name} className="text-xs text-stone-800 flex items-center justify-between">
                        <span className="font-medium truncate mr-2">{m.name}</span>
                        <span className="text-[11px] text-stone-500 font-mono shrink-0">{m.contextWindow}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectTrend(trend)}
                  className="w-full mt-2 py-2 px-3 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-medium transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Examine Dossier</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
