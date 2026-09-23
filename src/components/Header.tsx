import React from 'react';
import { Sparkles, Download, Layers } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBrief: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenBrief }) => {
  const navItems = [
    { id: 'radar', label: 'Tech Radar' },
    { id: 'trends', label: 'Key Trends' },
    { id: 'architectures', label: 'Paradigms' },
    { id: 'sectors', label: 'Sectors' },
    { id: 'calculator', label: 'Economics' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#top" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-lg md:text-xl font-serif font-medium tracking-tight text-stone-900 hover:text-stone-700 transition-colors whitespace-nowrap"
        >
          Generative AI Observatory
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                const el = document.getElementById(item.id);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className={`hover:text-stone-900 transition-colors cursor-pointer whitespace-nowrap relative py-1 ${
                activeTab === item.id ? 'text-stone-950 font-semibold' : ''
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-stone-900" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBrief}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors border border-stone-300/80 cursor-pointer whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5 text-stone-600" />
            <span>Executive Brief</span>
          </button>
        </div>
      </div>
    </header>
  );
};
