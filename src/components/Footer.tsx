import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          
          <div className="md:col-span-5">
            <div className="text-lg font-serif font-medium text-white mb-2">
              Generative AI Trends Observatory
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              An independent technological observatory and curated radar synthesizing architectural breakthroughs, empirical benchmarks, and deployment economics across generative AI systems.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-3">
              Research Focus
            </div>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>Test-Time Compute & System 2</li>
              <li>Autonomous Multi-Agent Swarms</li>
              <li>Native Omni Multimodal Latency</li>
              <li>Physical AI & Large World Models</li>
              <li>On-Device Small Language Models</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-3">
              Methodology & Rigor
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Synthesized from peer-reviewed publications, open-source technical disclosures (DeepSeek, Meta AI, Google DeepMind, OpenAI, Anthropic), and verified benchmark repositories (AIME, SWE-bench Verified, MMLU-Pro).
            </p>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div className="flex items-center gap-2">
            <span>Vol. 2025–2026 Edition</span>
            <span aria-hidden="true">·</span>
            <span>All rights reserved</span>
          </div>
          <div>
            Built with Google AI Studio
          </div>
        </div>
      </div>
    </footer>
  );
};
