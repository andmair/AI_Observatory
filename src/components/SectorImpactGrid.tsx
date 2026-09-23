import React, { useState } from 'react';
import { SECTOR_IMPACT } from '../data/trendsData';
import { Briefcase, Code, HeartPulse, Film, Bot, ChevronRight } from 'lucide-react';

export const SectorImpactGrid: React.FC = () => {
  const [activeSectorIndex, setActiveSectorIndex] = useState<number>(0);

  const sectorIcons = [Code, HeartPulse, Film, Briefcase, Bot];

  const currentSector = SECTOR_IMPACT[activeSectorIndex];

  return (
    <section id="sectors" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
            Industrial Transformation
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 tracking-tight">
            Impact Across Critical Sectors
          </h2>
          <p className="mt-2 text-stone-600 text-sm md:text-base leading-relaxed">
            How generative reasoning models, autonomous agent frameworks, and spatial world models are re-architecting legacy workflows in enterprise production.
          </p>
        </div>

        {/* Sector Selection Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {SECTOR_IMPACT.map((item, idx) => {
            const Icon = sectorIcons[idx] || Briefcase;
            const isSelected = idx === activeSectorIndex;

            return (
              <button
                key={item.sector}
                onClick={() => setActiveSectorIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-white text-stone-800 border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`} />
                  <span className={`text-xs font-mono tabular-nums ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                    {item.adoptionRate}
                  </span>
                </div>
                <div className="font-serif text-sm font-medium leading-snug line-clamp-2">
                  {item.sector}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Sector Detailed Spotlight Card */}
        <div className="p-6 md:p-8 bg-white border border-stone-200 rounded-2xl shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-mono text-stone-500 uppercase tracking-wider mb-2">
                <span>Domain Analysis</span>
                <span aria-hidden="true">·</span>
                <span>Production Adoption: {currentSector.adoptionRate}</span>
              </div>

              <h3 className="text-2xl font-serif font-medium text-stone-900 mb-2">
                {currentSector.sector}
              </h3>
              
              <div className="text-xs font-semibold text-stone-800 uppercase tracking-wide mb-4">
                Core Shift: <span className="font-normal text-stone-600 normal-case">{currentSector.shift}</span>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed font-sans mb-6">
                {currentSector.description}
              </p>
            </div>

            <div className="lg:col-span-5 bg-stone-50 p-5 rounded-xl border border-stone-200/80">
              <div className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-3">
                Flagship Production Implementations
              </div>
              <ul className="space-y-3">
                {currentSector.flagshipUseCases.map((useCase, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 leading-relaxed">
                    <span className="font-mono text-stone-400 shrink-0 mt-0.5">0{idx + 1}.</span>
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
