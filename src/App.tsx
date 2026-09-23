import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { RadarSection } from './components/RadarSection';
import { KeyTrendsShowcase } from './components/KeyTrendsShowcase';
import { ArchitectureComparator } from './components/ArchitectureComparator';
import { SectorImpactGrid } from './components/SectorImpactGrid';
import { ComputeEconomicsCalculator } from './components/ComputeEconomicsCalculator';
import { TrendDetailModal } from './components/TrendDetailModal';
import { ExecutiveBriefModal } from './components/ExecutiveBriefModal';
import { Footer } from './components/Footer';
import { TRENDS_DATA, TrendItem } from './data/trendsData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('radar');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTrend, setSelectedTrend] = useState<TrendItem | null>(null);
  const [isBriefOpen, setIsBriefOpen] = useState<boolean>(false);

  // Filter trends based on search query and category
  const filteredTrends = useMemo(() => {
    return TRENDS_DATA.filter((trend) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        trend.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trend.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trend.oneLiner.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trend.representativeModels.some((m) =>
          m.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCat =
        selectedCategory === 'All' || trend.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  const handleExploreRadar = () => {
    const el = document.getElementById('radar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans selection:bg-stone-800 selection:text-stone-100">
      {/* Strict Top Bar Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBrief={() => setIsBriefOpen(true)}
      />

      <main className="flex-1">
        {/* Editorial Hero Marquee */}
        <HeroSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onExploreRadar={handleExploreRadar}
        />

        {/* Technology Radar Matrix */}
        <RadarSection
          trends={filteredTrends}
          onSelectTrend={(trend) => setSelectedTrend(trend)}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Key Trends Curatorial Monographs */}
        <KeyTrendsShowcase
          trends={filteredTrends}
          onSelectTrend={(trend) => setSelectedTrend(trend)}
        />

        {/* Fundamental Architectural Transformations (Comparator) */}
        <ArchitectureComparator />

        {/* Industrial Sector Impact */}
        <SectorImpactGrid />

        {/* Compute Economics & Inference Scaling Explorer */}
        <ComputeEconomicsCalculator />
      </main>

      {/* Quiet Curatorial Footer */}
      <Footer />

      {/* Modals & Dossiers */}
      <TrendDetailModal
        trend={selectedTrend}
        onClose={() => setSelectedTrend(null)}
      />

      <ExecutiveBriefModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
      />
    </div>
  );
}
