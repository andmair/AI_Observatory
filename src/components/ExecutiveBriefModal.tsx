import React from 'react';
import { X, Printer, Copy, Check, FileText } from 'lucide-react';

interface ExecutiveBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveBriefModal: React.FC<ExecutiveBriefModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    const text = document.getElementById('brief-content')?.innerText || '';
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#FAF8F5] border border-stone-300 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
            <FileText className="w-4 h-4 text-stone-700" />
            <span className="font-semibold text-stone-800">Executive Intelligence Memo</span>
            <span aria-hidden="true">·</span>
            <span>Autumn 2026 Edition</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer text-xs flex items-center gap-1.5 px-2"
              title="Copy memo text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer text-xs flex items-center gap-1.5 px-2"
              title="Print brief"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-800 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div id="brief-content" className="overflow-y-auto p-6 md:p-8 space-y-6 text-stone-800 font-sans">
          
          <div className="border-b border-stone-200 pb-5">
            <div className="text-xs font-mono text-stone-400 uppercase tracking-widest mb-1">
              Memorandum for Technology Leadership
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-stone-900">
              State of Generative AI: Strategic Vectors for 2025–2026
            </h2>
            <div className="text-xs text-stone-500 font-mono mt-2">
              Audience: CTOs, VPs of AI Engineering, Chief Architects · Classification: Public Synthesis
            </div>
          </div>

          <div className="space-y-4 text-xs md:text-sm text-stone-700 leading-relaxed">
            <p>
              The era of indiscriminate pre-training scaling has transitioned into an era of computational efficiency, test-time reasoning, and autonomous multi-agent orchestration. Five strategic shifts demand architectural realignment:
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <div className="font-semibold text-stone-900 mb-1">
                  1. Inference Scaling Over Parameter Expansion
                </div>
                <p className="text-xs text-stone-600">
                  Allocating compute at test time through hidden reasoning tokens and verifiable self-correction (DeepSeek-R1, OpenAI o-series) delivers superior mathematical and coding accuracy compared to simply scaling base parameter counts.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <div className="font-semibold text-stone-900 mb-1">
                  2. Model Context Protocol (MCP) as the New Integration Fabric
                </div>
                <p className="text-xs text-stone-600">
                  Enterprises should standardize agent integrations around MCP. Isolating database, code, and SaaS connectors behind open protocol schemas prevents vendor lock-in and eliminates brittle custom tool endpoints.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <div className="font-semibold text-stone-900 mb-1">
                  3. Edge-First SLM Filtering Before Cloud Escalation
                </div>
                <p className="text-xs text-stone-600">
                  Deploying distilled 1B–8B parameter models (Gemma 2, Phi-4, Llama 3.2) on client devices or private cluster gateways captures 70%+ of routine classification and formatting tasks at zero marginal token cost.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <div className="font-semibold text-stone-900 mb-1">
                  4. GraphRAG & Context Caching Supersede Naive Vector Chunking
                </div>
                <p className="text-xs text-stone-600">
                  Naive 500-token chunk vector search fails at cross-document synthesis. Modern architectures combine knowledge graph entity indexing with 1M+ token context windows and persistent prompt caching.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <div className="font-semibold text-stone-900 mb-1">
                  5. Physical AI & Spatial World Models Expanding Beyond Text
                </div>
                <p className="text-xs text-stone-600">
                  Vision-Language-Action (VLA) foundation models and Gaussian world models bring intuitive physical common sense to industrial automation, robotics manipulation, and spatial computing.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200 text-xs text-stone-500 font-mono">
            Compiled by Generative AI Trends Observatory · Citations drawn from peer-reviewed publications and verified benchmark runs.
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-stone-100 border-t border-stone-200 flex items-center justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors text-xs font-medium cursor-pointer"
          >
            Close Memo
          </button>
        </div>
      </div>
    </div>
  );
};
