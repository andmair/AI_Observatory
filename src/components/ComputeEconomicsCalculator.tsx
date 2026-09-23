import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Zap, DollarSign, Clock } from 'lucide-react';

interface TierSpec {
  name: string;
  category: string;
  costPer1MInput: number; // USD
  costPer1MOutput: number; // USD
  avgLatencyMs: number;
  reasoningScore: number; // 1-100
  privacyRating: 'Cloud Multi-Tenant' | 'Private Cloud / Self-Hosted' | 'Air-Gapped Edge';
  sweetSpot: string;
}

const MODEL_TIERS: Record<string, TierSpec> = {
  'frontier-reasoning': {
    name: 'Frontier Reasoning (System 2)',
    category: 'Test-Time Compute Models (o1, DeepSeek-R1, Gemini Flash Thinking)',
    costPer1MInput: 0.55,
    costPer1MOutput: 2.19,
    avgLatencyMs: 14500,
    reasoningScore: 96,
    privacyRating: 'Cloud Multi-Tenant',
    sweetSpot: 'Mission-critical code synthesis, formal mathematical proofs, complex regulatory compliance audits.',
  },
  'frontier-omni': {
    name: 'Frontier Omni Multimodal',
    category: 'Real-Time Continuous Models (Gemini 2.0 Flash, GPT-4o)',
    costPer1MInput: 0.10,
    costPer1MOutput: 0.40,
    avgLatencyMs: 420,
    reasoningScore: 84,
    privacyRating: 'Cloud Multi-Tenant',
    sweetSpot: 'Real-time duplex voice conversations, live webcam video diagnostics, high-throughput customer service.',
  },
  'open-moe': {
    name: 'Open Mixture-of-Experts (MoE)',
    category: 'High-Throughput Open Weights (DeepSeek-V3, Qwen 2.5 72B, Llama 3.3)',
    costPer1MInput: 0.14,
    costPer1MOutput: 0.28,
    avgLatencyMs: 650,
    reasoningScore: 88,
    privacyRating: 'Private Cloud / Self-Hosted',
    sweetSpot: 'Enterprise internal documentation, private codebases, sovereign high-volume data transformation.',
  },
  'edge-slm': {
    name: 'On-Device Edge SLM (1B–8B)',
    category: 'Local Distilled Models (Phi-4, Gemma 2, Llama 3.2 3B)',
    costPer1MInput: 0.00, // zero token API cost
    costPer1MOutput: 0.00,
    avgLatencyMs: 180,
    reasoningScore: 72,
    privacyRating: 'Air-Gapped Edge',
    sweetSpot: 'Offline mobile features, local privacy-first autocomplete, smart home IoT, low-power embedded robotics.',
  },
};

export const ComputeEconomicsCalculator: React.FC = () => {
  const [selectedTierKey, setSelectedTierKey] = useState<string>('frontier-reasoning');
  const [monthlyQueries, setMonthlyQueries] = useState<number>(100000);
  const [tokensPerQuery, setTokensPerQuery] = useState<number>(1200);

  const tier = MODEL_TIERS[selectedTierKey];

  // Calculations
  const totalInputTokens = monthlyQueries * (tokensPerQuery * 0.4);
  const totalOutputTokens = monthlyQueries * (tokensPerQuery * 0.6);

  const monthlyInputCost = (totalInputTokens / 1_000_000) * tier.costPer1MInput;
  const monthlyOutputCost = (totalOutputTokens / 1_000_000) * tier.costPer1MOutput;
  const totalEstimatedCost = monthlyInputCost + monthlyOutputCost;

  return (
    <section id="calculator" className="py-16 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
            Economics & Inference Scaling
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 tracking-tight">
            Model Tier & Compute Economics Explorer
          </h2>
          <p className="mt-2 text-stone-600 text-sm md:text-base leading-relaxed">
            Examine the operational trade-offs between test-time reasoning compute, open MoE architectures, and local edge distillation.
          </p>
        </div>

        {/* Tier Selector Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {Object.entries(MODEL_TIERS).map(([key, t]) => {
            const isSelected = key === selectedTierKey;

            return (
              <button
                key={key}
                onClick={() => setSelectedTierKey(key)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-[#FAF8F5] text-stone-800 border-stone-200 hover:border-stone-300'
                }`}
              >
                <div>
                  <div className={`text-[11px] font-mono uppercase tracking-wider mb-1 ${
                    isSelected ? 'text-stone-300' : 'text-stone-500'
                  }`}>
                    {key.replace('-', ' ')}
                  </div>
                  <div className="font-serif text-base font-medium leading-snug">
                    {t.name}
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-stone-200/40 text-xs">
                  <span className={isSelected ? 'text-stone-300' : 'text-stone-600'}>
                    ${t.costPer1MOutput.toFixed(2)} / 1M out
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Sliders & Output Simulation Box */}
        <div className="p-6 md:p-8 bg-[#FAF8F5] border border-stone-200 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-stone-800 uppercase tracking-wide mb-2">
                  <span>Monthly Query Volume</span>
                  <span className="font-mono text-stone-900 tabular-nums">
                    {monthlyQueries.toLocaleString()} queries
                  </span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  step="10000"
                  value={monthlyQueries}
                  onChange={(e) => setMonthlyQueries(Number(e.target.value))}
                  className="w-full h-1.5 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-stone-900"
                />
                <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1">
                  <span>10K (Prototype)</span>
                  <span>500K (Growth)</span>
                  <span>1M (Enterprise)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-stone-800 uppercase tracking-wide mb-2">
                  <span>Average Tokens per Interaction</span>
                  <span className="font-mono text-stone-900 tabular-nums">
                    {tokensPerQuery.toLocaleString()} tokens
                  </span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="8000"
                  step="100"
                  value={tokensPerQuery}
                  onChange={(e) => setTokensPerQuery(Number(e.target.value))}
                  className="w-full h-1.5 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-stone-900"
                />
                <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1">
                  <span>300 (Brief QA)</span>
                  <span>2,000 (Agent Loop)</span>
                  <span>8,000 (Deep Reasoning)</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-stone-600 leading-relaxed bg-white p-4 rounded-xl border border-stone-200">
                <span className="font-semibold text-stone-800">Architectural Recommendation: </span>
                {tier.sweetSpot}
              </div>
            </div>

            {/* Right Quantitative Metrics Card */}
            <div className="lg:col-span-6 bg-white p-6 md:p-8 rounded-xl border border-stone-200 shadow-xs">
              <div className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">
                Operational Projections // {tier.name}
              </div>

              <div className="mb-6">
                <div className="text-3xl md:text-4xl font-serif font-medium text-stone-900 tabular-nums">
                  {tier.costPer1MOutput === 0 ? '$0.00 (Local Compute)' : `$${totalEstimatedCost.toFixed(2)}`}
                </div>
                <div className="text-xs text-stone-500 mt-1">
                  {tier.costPer1MOutput === 0
                    ? 'Zero cloud API charges; executed on user NPU/GPU.'
                    : `Projected monthly API cost for ${(monthlyQueries).toLocaleString()} interactions.`}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-100">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>Mean Response Latency</span>
                  </div>
                  <div className="text-lg font-serif font-medium text-stone-900 tabular-nums">
                    {tier.avgLatencyMs >= 1000
                      ? `${(tier.avgLatencyMs / 1000).toFixed(1)}s`
                      : `${tier.avgLatencyMs}ms`}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <Zap className="w-3.5 h-3.5 text-stone-400" />
                    <span>Reasoning Benchmark Index</span>
                  </div>
                  <div className="text-lg font-serif font-medium text-stone-900 tabular-nums">
                    {tier.reasoningScore}/100
                  </div>
                </div>

                <div className="col-span-2 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Data Sovereignty & Boundary</span>
                  </div>
                  <div className="text-xs font-semibold text-stone-800">
                    {tier.privacyRating}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
