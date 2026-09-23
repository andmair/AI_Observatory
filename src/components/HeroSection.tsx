import React from 'react';
import { Search, ArrowDownRight, Compass, ShieldCheck } from 'lucide-react';
import heroImg from '../assets/images/hero_ai_trends_editorial_1790122369510.jpg';
import { MACRO_THEMES } from '../data/trendsData';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onExploreRadar: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  onExploreRadar,
}) => {
  return (
    <section className="relative pt-12 pb-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Curatorial Kicker Header */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
          <span>Technology Radar</span>
          <span aria-hidden="true">·</span>
          <span>Vol. 2025–2026 Edition</span>
          <span aria-hidden="true">·</span>
          <span>State of Frontier Intelligence</span>
          <span aria-hidden="true">·</span>
          <span>Evaluated Q3 2026</span>
        </div>

        {/* Lead Headline & Curatorial Hook */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-stone-900 leading-[1.12] text-balance">
              The Bifurcation of Intelligence: Inference Compute, Autonomous Agents & Physical World Models
            </h1>
            <p className="mt-6 text-lg md:text-xl text-stone-600 font-sans leading-relaxed max-w-3xl">
              Generative AI has evolved beyond pre-training scaling laws alone. The 2025–2026 frontier is defined by test-time reasoning compute, native end-to-end multimodal perception, decentralized open-weights economics, and physical embodiment.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Quick Search affordance */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search trends, models, architectures..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-800 transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  Clear
                </button>
              )}
            </div>

            <button
              onClick={onExploreRadar}
              className="flex items-center justify-between px-4 py-2.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer shadow-sm group"
            >
              <span className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-stone-300" />
                <span>Explore Interactive Technology Radar</span>
              </span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Editorial Feature Image Banner with Measured Scrim & Caption */}
        <div className="relative rounded-xl overflow-hidden border border-stone-200/80 mb-14 bg-stone-100 shadow-sm">
          <img
            src={heroImg}
            alt="Abstract architectural prism and light refraction representing generative AI technology landscape"
            referrerPolicy="no-referrer"
            className="w-full h-72 md:h-96 object-cover object-center filter saturate-[0.95]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex items-end p-6 md:p-8">
            <div className="text-stone-100 max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-stone-300 font-mono">Curatorial Monograph</span>
              <h2 className="text-xl md:text-2xl font-serif text-white mt-1">From Token Generation to Verifiable Autonomous Action</h2>
              <p className="text-xs md:text-sm text-stone-300 mt-1 leading-relaxed">
                The shift from passive next-token prediction to active deliberation: reasoning chains, dynamic tool invocation, and physical world simulation.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Macro Key Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {MACRO_THEMES.map((theme, i) => (
            <div
              key={theme.title}
              className="p-5 bg-white border border-stone-200/90 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-stone-400 mb-2">
                  0{i + 1} // PIVOT POINT
                </div>
                <div className="text-3xl font-serif font-medium text-stone-900 tabular-nums">
                  {theme.stat}
                </div>
                <div className="text-xs font-medium text-stone-700 mt-1 mb-2">
                  {theme.statLabel}
                </div>
                <div className="text-xs text-stone-500 leading-relaxed">
                  {theme.summary}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
