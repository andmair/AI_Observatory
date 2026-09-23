import React, { useState } from 'react';
import { TrendItem, RADAR_STAGES, STAGE_THEMES, RadarStage } from '../data/trendsData';
import { RadarGraph } from './RadarGraph';
import { ArrowUpRight, ChevronRight, AlertTriangle, Layers, Grid, Compass } from 'lucide-react';

interface RadarSectionProps {
  trends: TrendItem[];
  onSelectTrend: (trend: TrendItem) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  hoveredTrendId: string | null;
  setHoveredTrendId: (id: string | null) => void;
}

export const RadarSection: React.FC<RadarSectionProps> = ({
  trends,
  onSelectTrend,
  selectedCategory,
  setSelectedCategory,
  hoveredTrendId,
  setHoveredTrendId,
}) => {
  const [selectedStage, setSelectedStage] = useState<string>('All');
  const [selectedQuadrant, setSelectedQuadrant] = useState<string>('All');
  const [activeViewMode, setActiveViewMode] = useState<'both' | 'graph' | 'cards'>('both');

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
    const matchesQuadrant = selectedQuadrant === 'All' || item.quadrant === selectedQuadrant;
    return matchesCategory && matchesStage && matchesQuadrant;
  });

  return (
    <section id="radar" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
              Architectural Positioning & Topological Mapping
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 tracking-tight">
              Generative AI Technology Radar
            </h2>
            <p className="mt-2 text-stone-600 text-sm md:text-base max-w-2xl leading-relaxed">
              Evaluating emerging paradigms, frameworks, and deployment patterns by enterprise maturity across four color-coded rings: Adopt, Trial, Assess, and Hold.
            </p>
          </div>

          {/* View Mode & Category Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* View Switcher */}
            <div className="flex items-center p-1 bg-stone-100 rounded-lg border border-stone-200 text-xs">
              <button
                onClick={() => setActiveViewMode('both')}
                className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeViewMode === 'both' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Radar & Cards</span>
              </button>
              <button
                onClick={() => setActiveViewMode('graph')}
                className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeViewMode === 'graph' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Chart Only</span>
              </button>
              <button
                onClick={() => setActiveViewMode('cards')}
                className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeViewMode === 'cards' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Cards Only</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Radar Stages Overview Grid with Distinct Colour Coding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {RADAR_STAGES.map((stage) => {
            const count = trends.filter((t) => t.radarStage === stage.key).length;
            const isCurrent = selectedStage === stage.key;
            const theme = STAGE_THEMES[stage.key as RadarStage];

            return (
              <button
                key={stage.key}
                onClick={() => setSelectedStage(selectedStage === stage.key ? 'All' : stage.key)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                  isCurrent
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-white text-stone-800 border-stone-200 hover:border-stone-300'
                }`}
              >
                {/* Color-Coded Accent Line on Top of Card */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-opacity"
                  style={{ backgroundColor: theme.blipBg }}
                />

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span 
                        className="w-2.5 h-2.5 rounded-full shrink-0" 
                        style={{ backgroundColor: theme.blipBg }}
                      />
                      <span className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                        isCurrent ? 'text-stone-200' : 'text-stone-700'
                      }`}>
                        {stage.key} Ring
                      </span>
                    </div>

                    <span className={`text-xs font-mono tabular-nums px-2 py-0.5 rounded ${
                      isCurrent ? 'bg-stone-800 text-stone-200' : 'bg-stone-100 text-stone-700'
                    }`}>
                      {count} Nodes
                    </span>
                  </div>

                  <div className="font-serif text-base font-medium mb-1">
                    {stage.name.split(' (')[0]}
                  </div>

                  <p className={`text-xs line-clamp-2 leading-relaxed ${isCurrent ? 'text-stone-300' : 'text-stone-500'}`}>
                    {stage.description}
                  </p>
                </div>

                <div className={`mt-3 pt-2 text-[11px] font-mono border-t ${
                  isCurrent ? 'border-stone-800 text-stone-400' : 'border-stone-100 text-stone-500'
                }`}>
                  {isCurrent ? 'Active Filter (Click to Reset)' : 'Click to Filter Radar'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Visual Concentric Radar Graph Component */}
        {(activeViewMode === 'both' || activeViewMode === 'graph') && (
          <div className="mb-12">
            <RadarGraph
              trends={trends}
              onSelectTrend={onSelectTrend}
              hoveredTrendId={hoveredTrendId}
              setHoveredTrendId={setHoveredTrendId}
              selectedStageFilter={selectedStage}
              setSelectedStageFilter={setSelectedStage}
              selectedQuadrantFilter={selectedQuadrant}
              setSelectedQuadrantFilter={setSelectedQuadrant}
            />
          </div>
        )}

        {/* Cards Header & Category Filter Bar */}
        {(activeViewMode === 'both' || activeViewMode === 'cards') && (
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200/80">
              <div className="text-sm font-serif font-medium text-stone-900">
                Detailed Technology Specifications ({filteredTrends.length} Selected)
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                      selectedCategory === cat
                        ? 'bg-stone-900 text-white font-semibold'
                        : 'bg-white text-stone-600 border border-stone-200 hover:text-stone-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Radar Matrix Cards Grid with Node Number & Stage Color Coding */}
        {(activeViewMode === 'both' || activeViewMode === 'cards') && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrends.map((trend) => {
              const theme = STAGE_THEMES[trend.radarStage];
              const isHovered = hoveredTrendId === trend.id;

              return (
                <div
                  key={trend.id}
                  onMouseEnter={() => setHoveredTrendId(trend.id)}
                  onMouseLeave={() => setHoveredTrendId(null)}
                  onClick={() => onSelectTrend(trend)}
                  className={`group p-6 bg-white border rounded-xl transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                    isHovered
                      ? 'border-stone-900 shadow-md ring-1 ring-stone-900/10'
                      : 'border-stone-200 hover:border-stone-300 shadow-xs'
                  }`}
                >
                  {/* Subtle top edge stripe matching stage color */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: theme.blipBg }}
                  />

                  <div>
                    {/* Header: Node Number Badge + Ring Tag + Timeline */}
                    <div className="flex items-center justify-between text-xs font-mono mb-3">
                      <div className="flex items-center gap-2">
                        {/* Node Number Blip Badge matching radar graph */}
                        <span 
                          className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] text-white shrink-0 shadow-2xs"
                          style={{ backgroundColor: theme.blipBg }}
                        >
                          {trend.blipNumber}
                        </span>
                        
                        <span className={`text-[11px] px-2 py-0.5 rounded border font-medium ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder}`}>
                          {trend.radarStage}
                        </span>
                        
                        <span className="text-stone-500 font-sans font-medium text-xs">
                          {trend.category}
                        </span>
                      </div>

                      <span className="tabular-nums text-stone-500 text-[11px] font-mono">
                        {trend.timeline}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-serif font-medium text-stone-900 group-hover:text-stone-700 transition-colors leading-snug mb-2">
                      {trend.title}
                    </h3>

                    {/* One Liner Abstract */}
                    <p className="text-xs text-stone-600 leading-relaxed mb-4 font-sans line-clamp-3">
                      {trend.oneLiner}
                    </p>

                    {/* Key Benchmark Systems */}
                    <div className="pt-3 border-t border-stone-100 mb-4">
                      <div className="text-[10px] font-mono text-stone-400 uppercase tracking-wider mb-1.5">
                        Benchmark Systems
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {trend.representativeModels.slice(0, 3).map((m) => (
                          <span
                            key={m.name}
                            className="text-[11px] text-stone-700 bg-stone-50 border border-stone-200/60 px-2 py-0.5 rounded truncate max-w-[200px]"
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
                    <span className="text-stone-800 font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-xs">
                      Examine Dossier <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
