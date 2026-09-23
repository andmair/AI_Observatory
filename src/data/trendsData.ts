export interface ModelSpec {
  name: string;
  creator: string;
  type: string;
  contextWindow: string;
  keyCapability: string;
}

export type RadarQuadrant = 'Architectures' | 'Workflows' | 'Multimodal' | 'Infrastructure';
export type RadarStage = 'Adopt' | 'Trial' | 'Assess' | 'Hold';

export interface TrendItem {
  id: string;
  blipNumber: number;
  title: string;
  category: 'Architectures' | 'Workflows' | 'Multimodal' | 'Infrastructure' | 'Embodied AI' | 'Governance';
  quadrant: RadarQuadrant;
  radarStage: RadarStage;
  radarAngle: number; // polar angle in degrees (0 to 360)
  radarRadius: number; // distance from center (70 to 325)
  oneLiner: string;
  timeline: string;
  maturityScore: number; // 1-100
  momentum: 'Surging' | 'Rapid Growth' | 'Maturing' | 'Plateauing' | 'Phasing Out';
  leadVisual?: string;
  abstract: string;
  coreInnovations: string[];
  oldParadigm: {
    title: string;
    description: string;
  };
  newParadigm: {
    title: string;
    description: string;
  };
  representativeModels: ModelSpec[];
  keyMetrics: {
    label: string;
    value: string;
    context: string;
  }[];
  enterpriseImpact: string[];
  openChallenges: string[];
  paperCitations: {
    title: string;
    authors: string;
    venueYear: string;
  }[];
}

export interface StageTheme {
  name: string;
  label: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  dotColor: string;
  ringStroke: string;
  ringFill: string;
  blipBg: string;
  blipBorder: string;
  blipText: string;
  glowColor: string;
  description: string;
}

export const STAGE_THEMES: Record<RadarStage, StageTheme> = {
  Adopt: {
    name: 'Adopt',
    label: 'Adopt (Mainstream Production)',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800',
    badgeBorder: 'border-emerald-200',
    dotColor: 'bg-emerald-600',
    ringStroke: '#059669',
    ringFill: 'rgba(5, 150, 105, 0.05)',
    blipBg: '#059669',
    blipBorder: '#047857',
    blipText: '#ffffff',
    glowColor: 'rgba(5, 150, 105, 0.4)',
    description: 'Proven technologies with high enterprise readiness and undeniable ROI. Recommended for immediate production deployment.',
  },
  Trial: {
    name: 'Trial',
    label: 'Trial (Accelerating Frontier)',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    badgeBorder: 'border-amber-200',
    dotColor: 'bg-amber-600',
    ringStroke: '#D97706',
    ringFill: 'rgba(217, 119, 6, 0.05)',
    blipBg: '#D97706',
    blipBorder: '#B45309',
    blipText: '#ffffff',
    glowColor: 'rgba(217, 119, 6, 0.4)',
    description: 'Rapidly maturing breakthroughs with proven prototypes and compelling benchmark jumps. Recommended for active enterprise pilots.',
  },
  Assess: {
    name: 'Assess',
    label: 'Assess (Emerging Exploration)',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-800',
    badgeBorder: 'border-blue-200',
    dotColor: 'bg-blue-600',
    ringStroke: '#2563EB',
    ringFill: 'rgba(37, 99, 235, 0.05)',
    blipBg: '#2563EB',
    blipBorder: '#1D4ED8',
    blipText: '#ffffff',
    glowColor: 'rgba(37, 99, 235, 0.4)',
    description: 'Promising research breakthroughs with early implementations. Worth monitoring and exploring in R&D sandboxes.',
  },
  Hold: {
    name: 'Hold',
    label: 'Hold (Deprecating Patterns)',
    badgeBg: 'bg-rose-50',
    badgeText: 'text-rose-800',
    badgeBorder: 'border-rose-200',
    dotColor: 'bg-rose-600',
    ringStroke: '#E11D48',
    ringFill: 'rgba(225, 29, 72, 0.05)',
    blipBg: '#E11D48',
    blipBorder: '#BE123C',
    blipText: '#ffffff',
    glowColor: 'rgba(225, 29, 72, 0.4)',
    description: 'Legacy generative patterns currently being superseded by newer architectural breakthroughs.',
  },
};

export const RADAR_QUADRANTS = [
  {
    id: 'Architectures' as RadarQuadrant,
    title: 'Architectures & Models',
    subtitle: 'Reasoning, MoE & State-Space Models',
    angleRange: [0, 90],
    centerAngle: 45,
    color: '#7C3AED',
  },
  {
    id: 'Workflows' as RadarQuadrant,
    title: 'Workflows & Agents',
    subtitle: 'MCP, Swarms & Autonomous Coding',
    angleRange: [90, 180],
    centerAngle: 135,
    color: '#0D9488',
  },
  {
    id: 'Multimodal' as RadarQuadrant,
    title: 'Multimodal & Embodied',
    subtitle: 'Native Omni, Video & Spatial Robotics',
    angleRange: [180, 270],
    centerAngle: 225,
    color: '#EA580C',
  },
  {
    id: 'Infrastructure' as RadarQuadrant,
    title: 'Infrastructure & Edge',
    subtitle: 'SLMs, KV Compression & Governance',
    angleRange: [270, 360],
    centerAngle: 315,
    color: '#0284C7',
  },
];

export const MACRO_THEMES = [
  {
    title: 'Inference Scaling (Test-Time Compute)',
    stat: '10×–100×',
    statLabel: 'Compute multiplier at inference',
    summary: 'The AI scaling frontier has officially branched from pre-training parameters to test-time search, reasoning tokens, and self-verification algorithms.',
  },
  {
    title: 'Open-Weights Efficiency Parity',
    stat: '~1/10th',
    statLabel: 'Training cost vs legacy frontiers',
    summary: 'Mixture-of-Experts (MoE) and Multi-Head Latent Attention (MLA) have enabled open-weight models to compete toe-to-toe with proprietary titans.',
  },
  {
    title: 'Agentic Tool-Use Standardisation',
    stat: '78.2%',
    statLabel: 'SWE-bench verified benchmarks',
    summary: 'Shift from single-prompt chat windows to asynchronous agent loops, sandboxed runtime environments, and open standards like Model Context Protocol (MCP).',
  },
  {
    title: 'Native End-to-End Omni Modality',
    stat: '<280ms',
    statLabel: 'Bidirectional speech/vision latency',
    summary: 'Elimination of cascaded speech-to-text pipelines in favor of native multimodal continuous token streams processing live camera feeds and real-time audio.',
  },
];

export const TRENDS_DATA: TrendItem[] = [
  // --- ADOPT RING (Radius ~75 to 130) ---
  {
    id: 'test-time-compute',
    blipNumber: 1,
    title: 'Test-Time Compute & System 2 Reasoning',
    category: 'Architectures',
    quadrant: 'Architectures',
    radarStage: 'Adopt',
    radarAngle: 32,
    radarRadius: 95,
    oneLiner: 'Allocating computational budget at inference time through internal chains-of-thought, search trees, and verification loops.',
    timeline: '2024–2026 Production',
    maturityScore: 92,
    momentum: 'Surging',
    leadVisual: 'agentic_reasoning_mesh',
    abstract: 'Rather than solely relying on larger pre-trained parameter counts to memorize world knowledge, reasoning models spend compute dynamically during generation. By generating hidden thinking tokens, backtracking from errors, and executing Monte Carlo search over possible proof steps, models demonstrate human Olympiad-level performance in mathematics and competitive programming.',
    coreInnovations: [
      'Reinforcement learning with rule-based, verifiable reward signals (math, formal syntax, unit tests).',
      'Dynamic token allocation: spending more inference tokens on intractable subproblems and fewer on trivial steps.',
      'Self-correction and backtracking without requiring human-labeled step-by-step rationales.',
      'Integration of formal theorem proving (Lean, Coq) and code execution sandboxes directly into the inference loop.'
    ],
    oldParadigm: {
      title: 'Static Pre-training Scaling',
      description: 'Single-pass autoregressive token generation with fixed forward passes regardless of prompt complexity or mathematical difficulty.'
    },
    newParadigm: {
      title: 'Dynamic Test-Time Scaling',
      description: 'Adaptive inference budget spending hundreds of hidden reasoning tokens, exploring alternative branches, and self-evaluating candidate answers.'
    },
    representativeModels: [
      { name: 'DeepSeek-R1', creator: 'DeepSeek', type: 'Open-Weights MoE Reasoning', contextWindow: '128K', keyCapability: 'Pure RL self-evolved reasoning at fraction of training cost' },
      { name: 'OpenAI o1 / o3-mini', creator: 'OpenAI', type: 'Proprietary System 2', contextWindow: '200K', keyCapability: 'Competitive programming & PhD-level science reasoning' },
      { name: 'Gemini 2.0 Flash Thinking', creator: 'Google', type: 'Multimodal Reasoning', contextWindow: '1M', keyCapability: 'Interleaved visual/code verification with ultra-fast latency' },
      { name: 'QwQ-32B', creator: 'Qwen Team', type: 'Open-Weights Dense Reasoning', contextWindow: '32K', keyCapability: 'High-density mathematical reasoning on consumer GPUs' }
    ],
    keyMetrics: [
      { label: 'AIME 2024 Math Accuracy', value: '87.1%', context: 'Up from 13.4% on standard non-thinking models' },
      { label: 'SWE-bench Verified', value: '49.0%–55.4%', context: 'Solving real-world GitHub issues end-to-end' },
      { label: 'Inference Cost Delta', value: '2.5×–8×', context: 'Compute trade-off for zero-shot accuracy guarantees' }
    ],
    enterpriseImpact: [
      'Zero-shot generation of mission-critical SQL, formal contracts, and complex financial models with near-zero hallucinations.',
      'Automated theorem proving and verification of hardware register transfer level (RTL) specifications.',
      'Deflation of human review requirements in regulatory and compliance auditing pipelines.'
    ],
    openChallenges: [
      'Inference latency spikes: queries requiring deep thought can take 15–45 seconds, demanding asynchronous UX designs.',
      'Overthinking on simple conversational queries if routing heuristics fail.',
      'Serving cost predictability for cloud SaaS providers operating on fixed subscription tiers.'
    ],
    paperCitations: [
      { title: 'DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning', authors: 'DeepSeek-AI Team', venueYear: 'arXiv:2501.12948 (2025)' },
      { title: 'Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters', authors: 'Snell et al. (UC Berkeley & Google DeepMind)', venueYear: 'arXiv:2408.03314 (2024)' },
      { title: 'Quiet-STaR: Language Models Can Teach Themselves to Think Before Speaking', authors: 'Zelikman et al. (Stanford)', venueYear: 'ICLR 2024' }
    ]
  },
  {
    id: 'agentic-workflows-mcp',
    blipNumber: 2,
    title: 'Autonomous Agentic Workflows & Model Context Protocol',
    category: 'Workflows',
    quadrant: 'Workflows',
    radarStage: 'Adopt',
    radarAngle: 125,
    radarRadius: 85,
    oneLiner: 'Evolution from isolated chat interfaces to multi-step tool-using agents, background workers, and standardized contextual protocols.',
    timeline: '2024–2026 Production',
    maturityScore: 89,
    momentum: 'Surging',
    leadVisual: 'agentic_reasoning_mesh',
    abstract: 'Autonomous agents represent the operational backbone of modern generative AI. Rather than expecting a single prompt to solve a business objective, agentic architectures break complex tasks into sub-goals, invoke external APIs, inspect error logs, self-heal, and collaborate asynchronously. The standardization of Model Context Protocol (MCP) by Anthropic and open ecosystem has accelerated plug-and-play integrations.',
    coreInnovations: [
      'Adoption of Model Context Protocol (MCP) for universally connecting AI models to file trees, databases, and devtools.',
      'Hierarchical agent orchestrations: planner agents delegating to specialized execution agents with isolated scratchpads.',
      'Persistent episodic memory systems combining vector indexes with structured temporal graph databases.',
      'Human-in-the-loop escalation guardrails with granular permission checkpoints.'
    ],
    oldParadigm: {
      title: 'Prompt-Response Chatbot',
      description: 'Human provides prompt; model provides single block of text; human copy-pastes code into editor and manually runs tests.'
    },
    newParadigm: {
      title: 'Asynchronous Autonomous Agent',
      description: 'Model plans task, clones Git branch, writes code, executes test suite in Docker, diagnoses failures, and opens pull request.'
    },
    representativeModels: [
      { name: 'Claude 3.7 Sonnet + Computer Use', creator: 'Anthropic', type: 'Hybrid Reasoning & Desktop Agent', contextWindow: '200K', keyCapability: 'Direct GUI navigation, keyboard/mouse actions, and MCP tool use' },
      { name: 'OpenAI Operator / Agents SDK', creator: 'OpenAI', type: 'Autonomous Execution Agent', contextWindow: '128K', keyCapability: 'Browser automation, multi-step commerce, and task fulfillment' },
      { name: 'Devin / Cursor Agent', creator: 'Cognition & Anysphere', type: 'Domain-Specialized Coding Agents', contextWindow: 'Variable', keyCapability: 'Repository-scale refactoring and autonomous bug resolution' },
      { name: 'LangGraph & AutoGen 2.0', creator: 'Open Source Community', type: 'Multi-Agent Frameworks', contextWindow: 'Agnostic', keyCapability: 'Stateful, cyclic multi-agent workflow choreography' }
    ],
    keyMetrics: [
      { label: 'Autonomous Task Completion', value: '45–60 min', context: 'Sustained reasoning loops without human guidance' },
      { label: 'Tool Invocation Success Rate', value: '96.4%', context: 'Structured JSON schema adherence in production' },
      { label: 'Enterprise Agent Pilot Growth', value: '+310%', context: 'Year-over-year enterprise adoption in software and ops' }
    ],
    enterpriseImpact: [
      'Automated triaging of customer escalations with direct access to billing databases and shipping carriers.',
      'Automated continuous vulnerability remediation across enterprise microservices.',
      'Full lifecycle data analysis: running SQL, synthesizing charts, writing executive memos, and emailing stakeholders.'
    ],
    openChallenges: [
      'Infinite execution loops and cascading error drift in multi-agent handoffs.',
      'Security risks: prompt injections via untrusted external tool responses (indirect prompt injection).',
      'Telemetry and observability: debugging 30-step agent execution traces in production.'
    ],
    paperCitations: [
      { title: 'The Model Context Protocol Specification: Open Standard for Secure AI Tooling', authors: 'Anthropic Systems Team', venueYear: 'Open Standard (2024–2025)' },
      { title: 'SWE-bench: Can Language Models Resolve Real-World GitHub Issues?', authors: 'Jimenez et al. (Princeton & Chicago)', venueYear: 'ICLR 2024' },
      { title: 'Reflexion: Language Agents with Verbal Reinforcement Learning', authors: 'Shinn et al. (Northeastern & MIT)', venueYear: 'NeurIPS 2023' }
    ]
  },
  {
    id: 'native-omni-multimodal',
    blipNumber: 3,
    title: 'Native Omni Multimodal & Sub-300ms Interaction',
    category: 'Multimodal',
    quadrant: 'Multimodal',
    radarStage: 'Adopt',
    radarAngle: 220,
    radarRadius: 90,
    oneLiner: 'Direct continuous tokenization of audio, video, spatial frames, and text with zero cascaded latency or voice tone loss.',
    timeline: '2024–2026 Production',
    maturityScore: 88,
    momentum: 'Rapid Growth',
    leadVisual: 'hero_ai_trends_editorial',
    abstract: 'Historically, "multimodal" meant stitching together separate Automatic Speech Recognition (Whisper), text LLM generation, and Text-to-Speech (ElevenLabs). The new generation of native Omni models ingests continuous audio waveforms, live camera streams, and video frames directly into a single transformer backbone. The result is conversational latency under 300ms with natural human pauses, laughter, and emotional modulation.',
    coreInnovations: [
      'Unified speech-to-speech tokenization preserving intonation, pacing, sarcasm, and acoustic background cues.',
      'Continuous video stream tokenization allowing real-time spatial guidance and troubleshooting via smartphone cameras.',
      'Full duplex communication: interrupting the model mid-sentence with natural conversational barge-in.',
      'Zero round-trip cascaded error propagation between speech recognizer and language model.'
    ],
    oldParadigm: {
      title: 'Cascaded Tri-Service Pipeline',
      description: 'User Speech -> STT (600ms) -> Text LLM (1200ms) -> TTS (800ms) = 2.6s latency; voice tone and nuances discarded.'
    },
    newParadigm: {
      title: 'Native End-to-End Omni Token Stream',
      description: 'Audio & Visual Tokens -> Single Unified Transformer -> Direct Audio Output = 220ms latency; preserves acoustic inflections.'
    },
    representativeModels: [
      { name: 'Gemini 2.0 Flash / Live', creator: 'Google', type: 'Native Multimodal Omni', contextWindow: '1M', keyCapability: 'Real-time video/audio streaming with sub-second visual cognition' },
      { name: 'GPT-4o Realtime', creator: 'OpenAI', type: 'Native Speech-to-Speech', contextWindow: '128K', keyCapability: 'Duplex vocal interaction with custom expressive voices' },
      { name: 'Project Astra', creator: 'Google DeepMind', type: 'Universal Visual Assistant', contextWindow: 'Continuous', keyCapability: 'Continuous visual memory of real-world physical environments' },
      { name: 'Kyutai Moshi', creator: 'Kyutai Lab', type: 'Open-Source Native Speech Model', contextWindow: '8K', keyCapability: 'Full-duplex speech-to-speech running locally on workstation' }
    ],
    keyMetrics: [
      { label: 'Conversational Latency', value: '220ms–320ms', context: 'Matches natural human conversational response gaps' },
      { label: 'Audio Ingestion Bandwidth', value: '24kHz native', context: 'Direct raw acoustic waveform spectral encoding' },
      { label: 'Frame Rate Vision Processing', value: '1–5 FPS live', context: 'Real-time video understanding on commodity webcams' }
    ],
    enterpriseImpact: [
      'Hands-free field technicians receiving live visual diagnosis overlayed on complex machinery.',
      'True empathetic voice interfaces for telemedicine triage and customer support.',
      'Simultaneous multilingual interpretation preserving the speaker’s unique acoustic timbre.'
    ],
    openChallenges: [
      'Websocket connection stability and continuous token streaming across unreliable mobile networks.',
      'Safety and guardrails: intercepting unsafe acoustic phonemes before they reach the speaker.',
      'Compute overhead of processing continuous 30fps video buffers simultaneously with high-bitrate audio.'
    ],
    paperCitations: [
      { title: 'Gemini 2.0: Multimodal Reasoning and Universal Assistant Architecture', authors: 'Gemini Team (Google DeepMind)', venueYear: 'Technical Report (2024–2025)' },
      { title: 'Moshi: A Speech-Text Foundation Model for Real-Time Duplex Dialogue', authors: 'Défossez et al. (Kyutai)', venueYear: 'arXiv:2410.00037 (2024)' }
    ]
  },
  {
    id: 'slm-edge-sovereignty',
    blipNumber: 4,
    title: 'Small Language Models (SLMs) & On-Device Edge AI',
    category: 'Infrastructure',
    quadrant: 'Infrastructure',
    radarStage: 'Adopt',
    radarAngle: 305,
    radarRadius: 95,
    oneLiner: 'Distilled 1B–8B parameter models running entirely offline on consumer silicon with near-zero latency and total data privacy.',
    timeline: '2024–2026 Production',
    maturityScore: 90,
    momentum: 'Rapid Growth',
    leadVisual: 'agentic_reasoning_mesh',
    abstract: 'While frontier server models reach hundreds of billions of parameters, an equally revolutionary counter-trend has emerged: hyper-optimized Small Language Models (SLMs) ranging from 1B to 8B parameters. Powered by synthetic data distillation, 4-bit/2-bit quantization, and neural processing units (NPUs) on modern laptops and smartphones, SLMs enable complete data sovereignty, zero cloud API fees, and instant response times.',
    coreInnovations: [
      'Teacher-student distillation: training compact models on verified outputs of 400B+ frontier models.',
      'Advanced quantization schemes (AWQ, GGUF, EXL2) retaining >98% perplexity parity in 4-bit memory footprints.',
      'On-device NPU acceleration achieving >45 tokens/second within a 5-watt battery envelope.',
      'Hybrid routing architectures: SLM handles 80% of routine queries locally and escalates complex reasoning to frontier cloud models.'
    ],
    oldParadigm: {
      title: 'Cloud-Only Inference Dependency',
      description: 'Every single keystroke and query transmitted to remote server farms; privacy exposure, latency variability, and per-token API bills.'
    },
    newParadigm: {
      title: 'Local Edge Sovereignty + Speculative Routing',
      description: 'Compact 3B model executes locally on device RAM; zero network requirement, complete GDPR compliance, microsecond launch times.'
    },
    representativeModels: [
      { name: 'Phi-4 (14B) & Phi-3.5 Mini (3.8B)', creator: 'Microsoft Research', type: 'Curated Synthetic SLM', contextWindow: '128K', keyCapability: 'Outperforms many 70B models on math and reasoning benchmarks' },
      { name: 'Gemma 2 (2B & 9B)', creator: 'Google DeepMind', type: 'Open Efficient Architecture', contextWindow: '8K', keyCapability: 'Unprecedented parameter efficiency via sliding window attention' },
      { name: 'Llama 3.2 (1B & 3B)', creator: 'Meta AI', type: 'Lightweight Edge Multimodal', contextWindow: '128K', keyCapability: 'Optimized specifically for Qualcomm, Apple Silicon, and Arm NPUs' },
      { name: 'SmolLM2 (135M, 360M, 1.7B)', creator: 'Hugging Face', type: 'Ultra-Compact Open Weights', contextWindow: '8K', keyCapability: 'Runs directly in web browsers via WebGPU with sub-100MB RAM' }
    ],
    keyMetrics: [
      { label: 'Edge Inference Speed', value: '45–90 t/s', context: 'Measured on Apple M-series and Snapdragon X Elite' },
      { label: 'Memory Footprint (4-bit)', value: '1.8GB–4.5GB', context: 'Comfortably fits alongside background mobile apps' },
      { label: 'Cloud API Cost Reduction', value: '70%–85%', context: 'Achieved by filtering routine requests at the local edge' }
    ],
    enterpriseImpact: [
      'Defense, healthcare, and banking applications operating under strict air-gapped security mandates.',
      'Consumer hardware features: on-device email auto-drafting, voice transcription, and contextual photo search.',
      'Automotive infotainment and industrial IoT operating in remote connectivity dead-zones.'
    ],
    openChallenges: [
      'Context window memory limitations on devices with unified memory under 16GB.',
      'Catastrophic forgetting during multi-turn long-document summarization.',
      'Fragmentation of device NPU runtimes (CoreML, DirectML, QNN, WebGPU).'
    ],
    paperCitations: [
      { title: 'Phi-4 Technical Report: Pushing Small Language Models with Synthetic Pre-training', authors: 'Microsoft Research Team', venueYear: 'arXiv:2412.08905 (2024)' },
      { title: 'Gemma 2: Improving Open Language Models at a Practical Size', authors: 'Gemma Team (Google DeepMind)', venueYear: 'arXiv:2408.00118 (2024)' }
    ]
  },
  {
    id: 'open-weights-moe-economics',
    blipNumber: 5,
    title: 'Open-Weights Frontier Parity & MoE Economics',
    category: 'Infrastructure',
    quadrant: 'Infrastructure',
    radarStage: 'Adopt',
    radarAngle: 335,
    radarRadius: 120,
    oneLiner: 'Mixture-of-Experts (MoE) architectures and algorithmic breakthroughs driving a 10× collapse in model training and inference costs.',
    timeline: '2024–2026 Production',
    maturityScore: 94,
    momentum: 'Surging',
    leadVisual: 'agentic_reasoning_mesh',
    abstract: 'The competitive moat around proprietary frontier models has dramatically narrowed. Open-weights models—championed by DeepSeek, Qwen, Meta Llama, and Mistral—have achieved parity across coding, multilingual translation, and reasoning benchmarks. By leveraging sparse Mixture-of-Experts (activating only 37B out of 671B parameters per token) and Multi-Head Latent Attention (MLA), modern architectures drastically slash memory bandwidth demands during inference.',
    coreInnovations: [
      'Sparse Mixture-of-Experts (MoE): decoupling parameter scale from per-token compute cost.',
      'Multi-Head Latent Attention (MLA): compressing Key-Value (KV) cache memory footprints by up to 93%.',
      'DualPipe and FP8 mixed precision distributed training pipelines eliminating pipeline bubbles.',
      'Ecosystem self-hosting on private vLLM, SGLang, and TensorRT-LLM inference clusters.'
    ],
    oldParadigm: {
      title: 'Monolithic Dense Transformers',
      description: 'Every parameter activated for every single generated token; massive VRAM consumption and high token inference prices.'
    },
    newParadigm: {
      title: 'Fine-Grained Sparse MoE + MLA',
      description: '671B total weights, but only ~37B active parameters per token; sub-cent pricing per million tokens with enterprise self-hosting.'
    },
    representativeModels: [
      { name: 'DeepSeek-V3', creator: 'DeepSeek', type: 'Sparse MoE (671B total / 37B active)', contextWindow: '128K', keyCapability: 'Frontier performance trained on just $6M compute budget' },
      { name: 'Llama 3.3 (70B)', creator: 'Meta AI', type: 'Dense Open Weights', contextWindow: '128K', keyCapability: 'Matches previous 405B capabilities in a practical 70B footprint' },
      { name: 'Qwen 2.5 (72B & Coder)', creator: 'Alibaba Cloud', type: 'Dense Open Weights', contextWindow: '128K', keyCapability: 'Global leader in open-source multilingual and coding tasks' },
      { name: 'Mixtral 8x22B', creator: 'Mistral AI', type: 'Sparse MoE', contextWindow: '64K', keyCapability: 'High-throughput enterprise European sovereign open weights' }
    ],
    keyMetrics: [
      { label: 'Token Pricing Deflation', value: '10×–20×', context: 'Reduction in API price per 1M output tokens over 18 months' },
      { label: 'KV Cache Memory Reduction', value: '93.3%', context: 'Achieved by DeepSeek Multi-Head Latent Attention' },
      { label: 'Open vs Proprietary Benchmark Gap', value: '<2.1%', context: 'Standardized MMLU, GSM8K, and HumanEval differential' }
    ],
    enterpriseImpact: [
      'Enterprises transitioning from closed vendor lock-in to sovereign private cloud deployments on dedicated GPU clusters.',
      'Economic feasibility of processing millions of documents daily without explosive subscription fees.',
      'Fine-tuning proprietary weights on proprietary company codebases and legal documents without data leakage risks.'
    ],
    openChallenges: [
      'GPU cluster networking requirements: serving large MoE models requires ultra-fast NVLink or InfiniBand interconnects.',
      'Licensing nuances and jurisdictional export controls on frontier model weights.',
      'Long-term economic sustainability of non-profit or venture-subsidized open model development.'
    ],
    paperCitations: [
      { title: 'DeepSeek-V3 Technical Report: Architecture, Training and Economics', authors: 'DeepSeek-AI Team', venueYear: 'arXiv:2412.19437 (2024)' },
      { title: 'The Llama 3 Herd of Models', authors: 'Dubey et al. (Meta AI)', venueYear: 'arXiv:2407.21783 (2024)' }
    ]
  },
  {
    id: 'ai-software-engineering',
    blipNumber: 6,
    title: 'Generative Software Engineering & "Vibe Coding"',
    category: 'Workflows',
    quadrant: 'Workflows',
    radarStage: 'Adopt',
    radarAngle: 155,
    radarRadius: 115,
    oneLiner: 'Evolution from tab-autocomplete to full repository understanding, autonomous test generation, and natural-language software creation.',
    timeline: '2024–2026 Production',
    maturityScore: 95,
    momentum: 'Surging',
    leadVisual: 'hero_ai_trends_editorial',
    abstract: 'Software engineering has undergone the most radical transformation of any knowledge discipline. The paradigm has shifted from snippet-level code completion to autonomous codebase agents (Cursor, Claude Code, GitHub Copilot Workspace, Devin) that ingest full Git repositories, plan architecture changes across multiple files, execute tests, and iterate until builds pass. Non-engineers now build complex web applications by conversational description ("vibe coding"), while senior engineers act as systems architects.',
    coreInnovations: [
      'Multi-file repository-level awareness using Language Server Protocol (LSP) and abstract syntax trees (ASTs).',
      'Autonomous terminal tool execution: running package managers, unit tests, linters, and inspecting runtime stack traces.',
      'Instant specification-to-production compilers generating complete full-stack web and mobile apps.',
      'Agentic code review bots verifying security invariants, SQL injection vulnerabilities, and performance bottlenecks.'
    ],
    oldParadigm: {
      title: 'Inline Autocomplete',
      description: 'Single-line predictive typing; developer still writes boilerplate, manages dependencies, and tracks syntax errors.'
    },
    newParadigm: {
      title: 'Autonomous Full-Stack Engineering Agent',
      description: 'Natural language goal decomposed into file edits, shell commands, test-suite runs, and verified deployment artifacts.'
    },
    representativeModels: [
      { name: 'Claude Code', creator: 'Anthropic', type: 'Terminal Agent', contextWindow: '200K', keyCapability: 'Direct command-line codebase editing, git commits, and test verification' },
      { name: 'Cursor / Windsurf', creator: 'Anysphere / Codeium', type: 'AI-Native IDE', contextWindow: 'Dynamic', keyCapability: 'Composer agent orchestrating multi-file codebase refactorings' },
      { name: 'GitHub Copilot Workspace', creator: 'GitHub / Microsoft', type: 'Issue-to-PR Workflow', contextWindow: 'Repository', keyCapability: 'Translates GitHub issue descriptions directly into working pull requests' }
    ],
    keyMetrics: [
      { label: 'Lines of Code Written with AI', value: '46%–65%', context: 'Industry-wide software commits aided by generative tools' },
      { label: 'Time-to-Interactive for Prototypes', value: 'Minutes', context: 'Down from days/weeks for full-stack responsive web applications' },
      { label: 'SWE-bench Verified Top Score', value: '>55%', context: 'Up from under 4% in late 2023' }
    ],
    enterpriseImpact: [
      'Dramatic acceleration of digital product velocity: ideas can be tested in production in hours rather than quarters.',
      'Modernization of legacy codebases (migrating monoliths to modern modular microservices).',
      'Democratization of software creation: domain experts creating custom internal tools without dedicated dev teams.'
    ],
    openChallenges: [
      'Maintaining long-term software architectural coherence across thousands of agentic commits.',
      'Hidden architectural debt and subtle edge-case logic bugs in unread agent code.',
      'Security risks when agents have direct access to write and execute arbitrary bash commands in CI/CD pipelines.'
    ],
    paperCitations: [
      { title: 'Evaluating Large Language Models Trained on Code', authors: 'Chen et al. (OpenAI)', venueYear: 'arXiv:2107.03374' },
      { title: 'The Impact of AI Code Completion on Developer Productivity and Code Quality', authors: 'Peng et al. (GitHub Research & MIT)', venueYear: 'ACM 2023' }
    ]
  },
  {
    id: 'synthetic-data-distillation',
    blipNumber: 7,
    title: 'Synthetic Data Loops & Verifiable Self-Play',
    category: 'Architectures',
    quadrant: 'Architectures',
    radarStage: 'Adopt',
    radarAngle: 68,
    radarRadius: 115,
    oneLiner: 'Overcoming the human data exhaustion wall via self-rewarding model loops and automated verification pipelines.',
    timeline: '2024–2026 Production',
    maturityScore: 84,
    momentum: 'Rapid Growth',
    leadVisual: 'agentic_reasoning_mesh',
    abstract: 'With the public web’s high-quality human text largely exhausted for pre-training, frontier labs have turned to synthetic data generation. Rather than uncurated text, leading models are trained on mathematically verified equations, compiler-checked code execution, self-critique debates, and automated theorem provers. This closed-loop synthetic self-play allows models to surpass the average quality of human internet writing.',
    coreInnovations: [
      'Self-rewarding language models: model generates multiple candidate responses and judges its own outputs using strict criteria.',
      'Automated synthetic code mutation with continuous integration (CI) test-suite execution as ground truth.',
      'Curated synthetic textbook generation targeting rare edge cases and conceptual ambiguities.',
      'Synthetic visual and 3D rendering data for training vision-language-action spatial models.'
    ],
    oldParadigm: {
      title: 'Scraping the Raw Public Web',
      description: 'Indiscriminate web crawls containing spam, biased forum arguments, repetitive SEO fluff, and low-density text.'
    },
    newParadigm: {
      title: 'Compiler-Verified Synthetic Curricula',
      description: 'Programmatically generated problem sets verified by compilers, formal logic engines, and multi-model consensus.'
    },
    representativeModels: [
      { name: 'Cosmopedia & UltraData', creator: 'Hugging Face & Argilla', type: 'Curated Synthetic Pre-training', contextWindow: 'Agnostic', keyCapability: 'High-density educational textbooks generated by frontier models' },
      { name: 'Nemotron-4 340B Synthetic Suite', creator: 'NVIDIA', type: 'Enterprise Synthetic Pipeline', contextWindow: '4K', keyCapability: 'High-volume synthetic data generation for enterprise domain fine-tuning' }
    ],
    keyMetrics: [
      { label: 'Synthetic Token Ratio in Training', value: '40%–60%', context: 'Estimated proportion of synthetic data in modern 2025/2026 pre-training' },
      { label: 'Benchmark Parity with 1/5th Tokens', value: '80% Less Data', context: 'High-density synthetic textbooks vs noisy Common Crawl' }
    ],
    enterpriseImpact: [
      'Ability to bootstrap high-performing domain models for specialized niches (rare medical diseases, legacy mainframe COBOL).',
      'Removal of copyright and privacy infringement liabilities associated with scraped web corpuses.'
    ],
    openChallenges: [
      'Model collapse: recursive training on ungrounded synthetic text without external verifiers leads to catastrophic loss of linguistic diversity.',
      'Reward hacking in reinforcement learning when evaluation metrics have subtle loopholes.'
    ],
    paperCitations: [
      { title: 'Self-Rewarding Language Models', authors: 'Yuan et al. (Meta AI & NYU)', venueYear: 'ICML 2024' },
      { title: 'Textbooks Are All You Need (Phi Series)', authors: 'Li et al. (Microsoft Research)', venueYear: 'arXiv:2306.11644' }
    ]
  },

  // --- TRIAL RING (Radius ~145 to 205) ---
  {
    id: 'physical-ai-world-models',
    blipNumber: 8,
    title: 'Physical AI, World Models & Spatial Embodiment',
    category: 'Embodied AI',
    quadrant: 'Multimodal',
    radarStage: 'Trial',
    radarAngle: 245,
    radarRadius: 175,
    oneLiner: 'Generative models mastering Newtonian physics, 3D spatial representations, and closed-loop robotic manipulation.',
    timeline: '2025–2027 Frontier',
    maturityScore: 71,
    momentum: 'Surging',
    leadVisual: 'physical_robotics_ai',
    abstract: 'Generative AI is breaking out of the 2D digital screen into the three-dimensional physical world. By training on vast corpuses of high-resolution video, 3D lidar scans, and robotic teleoperation trajectories, models learn intuitive physics: gravity, friction, deformation, and spatial permanence. These "World Models" serve dual roles as generative video engines and predictive simulation environments for humanoid robotics and autonomous vehicles.',
    coreInnovations: [
      'Generative 3D world models synthesizing persistent, view-consistent 3D scenes from single video inputs (Gaussian Splatting + Transformers).',
      'End-to-end Vision-Language-Action (VLA) models mapping raw camera pixels directly to 7-DoF robotic joint torques.',
      'Predictive physics simulation: forecasting the outcome of physical interventions before executing hardware actions.',
      'Synthetic training in photorealistic physics engines (NVIDIA Omniverse, MuJoCo) transferred zero-shot to physical robots.'
    ],
    oldParadigm: {
      title: 'Hand-Coded Inverse Kinematics',
      description: 'Industrial robots programmed with rigid geometric pathing; unable to handle deformable objects or environmental clutter.'
    },
    newParadigm: {
      title: 'Foundation Model Spatial Policy (VLA)',
      description: 'Generalist model receives natural voice prompt ("pick up the red mug by its handle"), visualizes trajectory, and controls joints adaptively.'
    },
    representativeModels: [
      { name: 'World Labs Spatial Models', creator: 'World Labs (Fei-Fei Li)', type: 'Large World Model (LWM)', contextWindow: '3D Spatial', keyCapability: 'Interactive persistent 3D worlds with consistent physical laws' },
      { name: 'OpenAI Sora / Google Veo 2', creator: 'OpenAI / Google DeepMind', type: 'Generative World Simulator', contextWindow: 'Temporal', keyCapability: 'High-fidelity video with intuitive physical dynamics and camera control' },
      { name: 'OpenVLA / RT-2', creator: 'Stanford / Google DeepMind', type: 'Vision-Language-Action Model', contextWindow: 'Multimodal', keyCapability: 'Zero-shot robotic manipulation across multi-brand robotic arms' },
      { name: 'Figure 02 / Boston Dynamics Atlas', creator: 'Figure AI & Boston Dynamics', type: 'Humanoid Embodied Intelligence', contextWindow: 'Real-time', keyCapability: 'Factory floor automotive assembly and dynamic balance manipulation' }
    ],
    keyMetrics: [
      { label: 'Zero-Shot Task Generalization', value: '82.4%', context: 'Manipulating novel objects unseen during robotic training' },
      { label: '3D Scene Reconstruction Time', value: '<4.2 sec', context: 'From monocular smartphone clip to navigable NeRF/3DGS' },
      { label: 'Humanoid Deployment in Auto Plants', value: '5,000+ units', context: 'Projected industrial deployment across 2025–2026' }
    ],
    enterpriseImpact: [
      'Warehouse pick-and-pack operations handling arbitrary soft goods, vegetables, and irregular packaging.',
      'Rapid photorealistic asset and environment creation for spatial computing, gaming, and architectural previsualization.',
      'Autonomous fleet safety: training self-driving systems on rare generative edge-case collision scenarios.'
    ],
    openChallenges: [
      'Hallucinations in physical laws: models generating impossible deformations or fluid physics violations.',
      'Hardware cycle frequency: robotic actuators require 100Hz–1000Hz control loops, straining model inference speeds.',
      'Data bottleneck: real-world high-quality robotic teleoperation data is exponentially scarcer than internet text.'
    ],
    paperCitations: [
      { title: 'OpenVLA: An Open-Source Vision-Language-Action Model', authors: 'Kim et al. (Stanford, UC Berkeley)', venueYear: 'arXiv:2406.09246 (2024)' },
      { title: 'RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control', authors: 'Brohan et al. (Google DeepMind)', venueYear: 'CoRL 2023' }
    ]
  },
  {
    id: 'graphrag-million-context',
    blipNumber: 9,
    title: 'GraphRAG & Million-Token Context Evolution',
    category: 'Architectures',
    quadrant: 'Architectures',
    radarStage: 'Trial',
    radarAngle: 45,
    radarRadius: 170,
    oneLiner: 'Transcending naive vector similarity via structured knowledge graphs and massive million-token active context windows.',
    timeline: '2024–2026 Pilot',
    maturityScore: 86,
    momentum: 'Maturing',
    leadVisual: 'agentic_reasoning_mesh',
    abstract: 'Early Retrieval-Augmented Generation (RAG) relied on splitting documents into arbitrary text chunks and matching cosine similarity in vector space—frequently failing on holistic questions like "What are the common risk themes across all 50 acquisitions?". The current trend combines Knowledge Graph RAG (GraphRAG), which maps entity relationships hierarchically, with million-token native context windows (e.g. Gemini 2.0 Pro) that can ingest entire code repositories or hundreds of financial filings in a single prompt.',
    coreInnovations: [
      'Entity-relation graph extraction generating hierarchical community summaries across vast corpora.',
      'Needle-in-a-Haystack retrieval fidelity exceeding 99.8% across 1M–2M continuous tokens.',
      'Hybrid retrieval: combining semantic dense vectors, BM25 keyword search, and graph traversal algorithms.',
      'Context caching APIs reducing token input costs by up to 80% for repeatedly queried knowledge bases.'
    ],
    oldParadigm: {
      title: 'Top-K Vector Chunking',
      description: 'Document chopped into 500-token chunks; vector search retrieves top 5 fragments; fails on global queries and context synthesis.'
    },
    newParadigm: {
      title: 'GraphRAG + Massive Context Caching',
      description: 'Hierarchical knowledge graph models cross-document relationships; million-token context buffer ingests full source manuals.'
    },
    representativeModels: [
      { name: 'Gemini 1.5 & 2.0 Pro', creator: 'Google', type: 'Long-Context Frontier', contextWindow: '2M+ tokens', keyCapability: '1hr video, 30k lines of code, or 700k words in single prompt' },
      { name: 'Microsoft GraphRAG', creator: 'Microsoft Research', type: 'Open Graph Retrieval Engine', contextWindow: 'Agnostic', keyCapability: 'Hierarchical community detection and holistic corpus summarization' },
      { name: 'LlamaIndex & Neo4j Graph Integration', creator: 'Open Source Ecosystem', type: 'Hybrid RAG Framework', contextWindow: 'Agnostic', keyCapability: 'Automated extraction of property graphs for LLM contextual grounding' }
    ],
    keyMetrics: [
      { label: 'Long-Context Needle Accuracy', value: '99.7%', context: 'Tested across 1,000,000 tokens of dense technical prose' },
      { label: 'Holistic Query Comprehension', value: '+74%', context: 'Improvement in thematic synthesis compared to vanilla vector RAG' },
      { label: 'Context Caching Cost Savings', value: '75%–80%', context: 'Discount on recurring cached system prompts and documents' }
    ],
    enterpriseImpact: [
      'Due diligence automation: analyzing thousands of corporate filings simultaneously without losing cross-references.',
      'Whole-repository code analysis: asking questions about architectural decisions across 500,000 lines of legacy code.',
      'Elimination of brittle manual vector chunking and tuning pipelines.'
    ],
    openChallenges: [
      'High pre-computation cost of constructing and maintaining dynamic knowledge graphs on rapidly changing datasets.',
      'Time-to-first-token (TTFT) latency when ingesting hundreds of thousands of uncached tokens.',
      'Attention dilution (the "Lost in the Middle" phenomenon) on unstructured, noisy context pools.'
    ],
    paperCitations: [
      { title: 'From Local to Global: A Graph RAG Approach to Query-Focused Summarization', authors: 'Edge et al. (Microsoft Research)', venueYear: 'arXiv:2404.16130 (2024)' },
      { title: 'In-Context Retrieval-Augmented Generation for Extreme Multi-Label Classification', authors: 'Google DeepMind Research', venueYear: 'arXiv:2403.05530 (2024)' }
    ]
  },
  {
    id: 'governance-watermarking-safety',
    blipNumber: 10,
    title: 'Provenance, SynthID Watermarking & Regulatory Compliance',
    category: 'Governance',
    quadrant: 'Infrastructure',
    radarStage: 'Trial',
    radarAngle: 315,
    radarRadius: 180,
    oneLiner: 'Algorithmic authenticity tracking, cryptographic provenance (C2PA), and compliance standards under the EU AI Act.',
    timeline: '2024–2026 Pilot',
    maturityScore: 78,
    momentum: 'Rapid Growth',
    leadVisual: 'agentic_reasoning_mesh',
    abstract: 'As generative media becomes indistinguishable from reality, technical provenance and safety mechanisms have moved from theoretical discussions into mandatory production standards. Technologies like Google DeepMind SynthID embed imperceptible watermarks directly into model-generated audio, video, images, and text. Concurrently, the EU AI Act and global frameworks enforce risk-based compliance, transparency disclosure, and copyright registry requirements.',
    coreInnovations: [
      'Imperceptible, tamper-resilient watermarking (SynthID) embedded in digital latents, surviving cropping, compression, and recoloring.',
      'C2PA (Coalition for Content Provenance and Authenticity) cryptographic provenance manifests baked into camera firmware and generative outputs.',
      'Real-time automated safety filters screening for non-consensual imagery, biosecurity risks, and automated exploitation vectors.',
      'Transparent copyright licensing registries providing cryptographically verified training compensation models.'
    ],
    oldParadigm: {
      title: 'Unverifiable Open Generation',
      description: 'Zero provenance metadata; deepfakes and AI-generated outputs circulating without verifiable source attribution.'
    },
    newParadigm: {
      title: 'Cryptographic Provenance + Latent Watermarking',
      description: 'Every token and pixel cryptographically signed or embedded with verifiable, tamper-resistant watermarks.'
    },
    representativeModels: [
      { name: 'SynthID Open-Source', creator: 'Google DeepMind', type: 'Digital Watermarking Suite', contextWindow: 'Multimodal', keyCapability: 'Imperceptible watermarking for text, images, audio, and video' },
      { name: 'C2PA Content Credentials', creator: 'C2PA Coalition', type: 'Cryptographic Standard', contextWindow: 'Metadata', keyCapability: 'Tamper-evident manifest tracing editing history and AI origin' }
    ],
    keyMetrics: [
      { label: 'SynthID Detection Accuracy', value: '>99.2%', context: 'Robust against aggressive JPEG compression and cropping' },
      { label: 'EU AI Act Compliance Deadlines', value: '2025–2026', context: 'High-risk AI systems subject to mandatory audit requirements' }
    ],
    enterpriseImpact: [
      'Protection against brand reputation attacks and synthetic executive impersonation in social engineering fraud.',
      'Compliance with international regulatory mandates to avoid fines reaching up to 7% of global turnover.',
      'Legal clarity in enterprise copyright ownership of synthetic generation.'
    ],
    openChallenges: [
      'Adversarial attacks attempting to strip or spoof watermarking signals.',
      'Open-weight models: malicious actors stripping watermarking algorithms from locally compiled model weights.',
      'Balancing strict safety guardrail filters with creative and factual generation freedom.'
    ],
    paperCitations: [
      { title: 'Identifying AI-Generated Images with SynthID', authors: 'Google DeepMind Research', venueYear: 'Nature (2024)' },
      { title: 'Content Credentials: A Framework for Digital Provenance', authors: 'C2PA Technical Working Group', venueYear: 'Technical Specification v2.0 (2024)' }
    ]
  },

  // --- ASSESS RING (Radius ~220 to 275) ---
  {
    id: 'liquid-ssm-architectures',
    blipNumber: 11,
    title: 'State-Space Models (SSMs) & Hybrid Attention-Mamba',
    category: 'Architectures',
    quadrant: 'Architectures',
    radarStage: 'Assess',
    radarAngle: 55,
    radarRadius: 250,
    oneLiner: 'Sub-quadratic sequence scaling for infinite streaming sensor telemetry without transformer quadratic memory explosion.',
    timeline: '2025–2027 Research',
    maturityScore: 62,
    momentum: 'Surging',
    leadVisual: 'agentic_reasoning_mesh',
    abstract: 'Transformers exhibit $O(N^2)$ memory and compute complexity during generation, making continuous infinite streaming sensor ingestion or multi-day telemetry monitoring prohibitively expensive. State-Space Models (such as Mamba-2) and hybrid architectures (e.g. Jamba, combining Mamba and Transformer layers) achieve linear $O(N)$ computational complexity, unlocking infinite token horizons and constant memory state sizes during inference.',
    coreInnovations: [
      'Linear-time inference complexity with constant memory footprint regardless of stream duration.',
      'Hardware-aware selective state retention dynamically filtering irrelevant sensor noise.',
      'Hybrid layer interleaving: alternating Mamba recurrent layers with sparse Transformer attention.'
    ],
    oldParadigm: {
      title: 'Quadratic KV Cache Accumulation',
      description: 'Attention matrices grow with the square of sequence length, consuming all GPU VRAM on continuous sensor telemetry streams.'
    },
    newParadigm: {
      title: 'Recurrent State-Space Representation',
      description: 'Fixed-size hidden state compressed in linear time, processing millions of continuous tokens with zero VRAM growth.'
    },
    representativeModels: [
      { name: 'Mamba-2 & Falcon Mamba', creator: 'Together AI & TII', type: 'Pure State-Space Model', contextWindow: 'Infinite linear', keyCapability: 'Continuous sensor telemetry processing at 10x lower memory' },
      { name: 'Jamba 1.5', creator: 'AI21 Labs', type: 'Hybrid SSM-Transformer', contextWindow: '256K', keyCapability: 'Blends Transformer reasoning with Mamba streaming efficiency' }
    ],
    keyMetrics: [
      { label: 'Inference Throughput vs Transformer', value: '4.8× Faster', context: 'Measured on long context sequences exceeding 128k tokens' },
      { label: 'Memory Footprint at 1M Tokens', value: 'Constant (Fixed State)', context: 'Zero KV cache expansion across streaming sessions' }
    ],
    enterpriseImpact: [
      'Continuous 24/7 monitoring of industrial jet engine and power grid telemetry without stream truncation.',
      'Long-horizon financial algorithmic trading models digesting months of continuous tick-by-tick order book data.'
    ],
    openChallenges: [
      'Associative recall: SSMs struggle with needle-in-a-haystack lookups compared to full attention mechanisms.',
      'Lack of mature CUDA kernel ecosystem and compiler optimizations compared to FlashAttention.'
    ],
    paperCitations: [
      { title: 'Transformers are SSMs: Generalized Models and Efficient Algorithms Through Structured State Space Duality', authors: 'Dao & Gu (Carnegie Mellon & Princeton)', venueYear: 'ICML 2024' }
    ]
  },
  {
    id: 'generative-bci-neural',
    blipNumber: 12,
    title: 'Generative Neural Decoding & Non-Invasive BCI',
    category: 'Multimodal',
    quadrant: 'Multimodal',
    radarStage: 'Assess',
    radarAngle: 215,
    radarRadius: 245,
    oneLiner: 'Direct decoding of human cognitive brainwaves and neural signals into fluent text and visual reconstruction.',
    timeline: '2026–2028 Frontier',
    maturityScore: 48,
    momentum: 'Rapid Growth',
    leadVisual: 'hero_ai_trends_editorial',
    abstract: 'By training generative latent diffusion models and multimodal transformers on paired functional MRI (fMRI) scans, EEG signals, and stimulus data, researchers have demonstrated non-invasive reconstruction of perceived images and continuous speech directly from brain activity. Rather than typing or speaking, generative BCI models synthesize intent directly from cortical electrical activity.',
    coreInnovations: [
      'Cross-modal neural encoders mapping continuous EEG/fMRI latent spaces to semantic word embeddings.',
      'Visual cortex reconstruction: generating high-fidelity natural images corresponding to mental imagery.',
      'Non-invasive wearable consumer headsets translating imagined phonemes into synthetic speech.'
    ],
    oldParadigm: {
      title: 'Invasive Motor Cortex Spikes',
      description: 'Surgical brain implants tracking single-neuron firing rates, limited to basic 2D cursor movement.'
    },
    newParadigm: {
      title: 'Generative Semantic Reconstruction',
      description: 'Non-invasive neural caps paired with generative foundation models synthesizing continuous sentences and mental images.'
    },
    representativeModels: [
      { name: 'Mind-Video & Brain2Speech', creator: 'Stanford & UT Austin', type: 'Neural Generative Decoder', contextWindow: 'Temporal EEG', keyCapability: 'Reconstructs continuous video clips from human fMRI scans' },
      { name: 'Precision Neuroscience BCI', creator: 'Precision Neuroscience', type: 'High-Density Cortical Film', contextWindow: 'Real-time', keyCapability: 'Ultra-thin cranial film decoding motor intent for speech recovery' }
    ],
    keyMetrics: [
      { label: 'Semantic Accuracy (Word Error Rate)', value: '18.4%', context: 'Decoding continuous imagined speech non-invasively' },
      { label: 'Visual Image Reconstruction SSIM', value: '0.78', context: 'Structural similarity index to target image shown to subject' }
    ],
    enterpriseImpact: [
      'Restoration of fluent communication for patients suffering from ALS, locked-in syndrome, and severe brainstem strokes.',
      'Next-generation hands-free spatial computing and military teleoperation.'
    ],
    openChallenges: [
      'Inter-subject generalization: brain mapping varies widely across individuals, requiring custom calibration.',
      'Cognitive privacy and neural data protection: legal boundaries around unauthorized reading of mental states.'
    ],
    paperCitations: [
      { title: 'Semantic Reconstruction of Continuous Language from Non-Invasive Brain Recordings', authors: 'Tang et al. (UT Austin)', venueYear: 'Nature Neuroscience (2023)' }
    ]
  },
  {
    id: 'neuromorphic-photonic-compute',
    blipNumber: 13,
    title: 'Neuromorphic & Photonic Optical Inference Silicon',
    category: 'Infrastructure',
    quadrant: 'Infrastructure',
    radarStage: 'Assess',
    radarAngle: 330,
    radarRadius: 255,
    oneLiner: 'Analog optical tensor cores processing generative model weights at the speed of light with 1/100th thermal dissipation.',
    timeline: '2026–2028 Frontier',
    maturityScore: 51,
    momentum: 'Surging',
    leadVisual: 'agentic_reasoning_mesh',
    abstract: 'Electronic silicon GPUs face unavoidable physical limits: resistive thermal dissipation (heat) and memory bus bandwidth bottlenecks. Optical and neuromorphic computing architectures perform matrix-vector multiplications using light wavelengths propagating through silicon photonics waveguides, completing tensor operations at the speed of light with sub-milliwatt energy consumption.',
    coreInnovations: [
      'Wavelength-division multiplexing (WDM) calculating 64 simultaneous matrix multiplications on a single optical waveguide.',
      'Spiking neural networks (SNNs) firing only when signals change, mimicking biological brain energy efficiency.',
      'Zero resistive heat during passive light propagation through optical interferometers.'
    ],
    oldParadigm: {
      title: 'Electronic Thermal Throttling',
      description: '1,000-watt GPU racks constrained by copper interconnect resistance, cooling power plants, and thermal dissipation caps.'
    },
    newParadigm: {
      title: 'Photonic Light-Speed Tensor Cores',
      description: 'Passive optical waveguides calculating matrix dot-products with sub-picosecond latency and 99% less power.'
    },
    representativeModels: [
      { name: 'Lightmatter Envise / Passage', creator: 'Lightmatter', type: 'Photonic AI Interconnect & Compute', contextWindow: 'Agnostic', keyCapability: 'Laser-driven tensor processing for massive MoE serving' },
      { name: 'CogniFiber & Celestial AI Photonic Fabric', creator: 'Celestial AI', type: 'Photonic Memory Fabric', contextWindow: 'Agnostic', keyCapability: 'Optical compute-to-memory interconnects eliminating the memory wall' }
    ],
    keyMetrics: [
      { label: 'Energy Efficiency (TOPS/Watt)', value: '120× Better', context: 'Compared to conventional H100/B200 electronic silicon' },
      { label: 'Interconnect Latency', value: '<3.2 picoseconds', context: 'Light speed propagation across optical die interconnects' }
    ],
    enterpriseImpact: [
      'Enabling sustainable hyperscale AI data centers operating within constrained electrical grid envelopes.',
      'Ultra-low-latency high-frequency quantitative trading and real-time defense radar analysis.'
    ],
    openChallenges: [
      'Analog precision drift due to temperature fluctuations in optical waveguides requiring constant recalibration.',
      'Manufacturing yield and packaging complexity of co-packaged optics (CPO).'
    ],
    paperCitations: [
      { title: 'Deep Learning with Coherent Nanophotonic Circuits', authors: 'Shen et al. (MIT)', venueYear: 'Nature Photonics' }
    ]
  },
  {
    id: 'autonomous-multi-agent-swarms',
    blipNumber: 14,
    title: 'Self-Organizing Multi-Agent Swarms & Market Protocols',
    category: 'Workflows',
    quadrant: 'Workflows',
    radarStage: 'Assess',
    radarAngle: 140,
    radarRadius: 250,
    oneLiner: 'Decentralized economic agent swarms negotiating resources, smart contracts, and specialized sub-tasks autonomously.',
    timeline: '2025–2027 Frontier',
    maturityScore: 58,
    momentum: 'Rapid Growth',
    leadVisual: 'agentic_reasoning_mesh',
    abstract: 'Beyond single-agent loops, self-organizing multi-agent swarms operate with decentralized market economics. Rather than a hardcoded supervisor agent, specialized agents bid for computational jobs, contract secondary agents to perform sub-tasks, execute cryptographic micropayments, and reach multi-perspective consensus on complex enterprise strategies.',
    coreInnovations: [
      'Internal synthetic micro-economy: agents reward each other with cryptographic tokens based on quality scores.',
      'Dynamic coalition formation: assembling temporary specialized swarms for ad-hoc crisis response.',
      'Byzantine fault-tolerant consensus mechanisms filtering out rogue or hallucinating agents.'
    ],
    oldParadigm: {
      title: 'Monolithic Linear Pipelines',
      description: 'Single centralized orchestrator agent delegating tasks through static hardcoded switch statements.'
    },
    newParadigm: {
      title: 'Decentralized Autonomous Swarm Market',
      description: 'Heterogeneous agents dynamically discovering skills, negotiating service fees, and peer-reviewing outputs.'
    },
    representativeModels: [
      { name: 'Fetch.ai / ASI Alliance', creator: 'Artificial Superintelligence Alliance', type: 'Autonomous Economic Agents', contextWindow: 'Agnostic', keyCapability: 'Decentralized agent coordination for IoT and logistics' },
      { name: 'ChatDev 2.0 & CAMEL', creator: 'Open Source Community', type: 'Role-Playing Multi-Agent Swarms', contextWindow: 'Variable', keyCapability: 'Simulated software enterprise with CEO, CTO, and QA agents' }
    ],
    keyMetrics: [
      { label: 'Autonomous Swarm Negotiation Time', value: '<850ms', context: 'P2P auction settlement between autonomous agents' },
      { label: 'Consensus Quality Multiplier', value: '+34%', context: 'Reduction in strategic bias compared to single-agent plans' }
    ],
    enterpriseImpact: [
      'Algorithmic supply chain bidding and dynamic freight route allocation.',
      'Automated disaster relief logistics coordinating drones, medical supplies, and shelter capacity.'
    ],
    openChallenges: [
      'Swarm runaway behavior: recursive sub-contracting loops exhausting compute budgets.',
      'Regulatory liability: legal accountability when an autonomous swarm executes an unauthorized transaction.'
    ],
    paperCitations: [
      { title: 'CAMEL: Communicative Agents for "Mind" Exploration of Large Language Model Society', authors: 'Li et al. (KAUST)', venueYear: 'NeurIPS 2023' }
    ]
  },

  // --- HOLD RING (Radius ~290 to 335) - Legacy / Deprecated Patterns ---
  {
    id: 'hold-vanilla-rag',
    blipNumber: 15,
    title: 'Vanilla Fixed-Chunk Vector RAG',
    category: 'Architectures',
    quadrant: 'Architectures',
    radarStage: 'Hold',
    radarAngle: 38,
    radarRadius: 310,
    oneLiner: 'Arbitrary 500-token chunk vector similarity search. Incurring severe context fragmentation on global enterprise queries.',
    timeline: 'Deprecated (2022–2024 Pattern)',
    maturityScore: 95,
    momentum: 'Phasing Out',
    leadVisual: 'agentic_reasoning_mesh',
    abstract: 'Fixed-chunk vector search chops complex technical documents into isolated 300–500 token segments and computes cosine similarity. While acceptable for localized fact lookups, it fails catastrophically on thematic, holistic, or cross-document synthesis questions. Leading teams have migrated to GraphRAG, hybrid retrieval, and native million-token context caching.',
    coreInnovations: [
      'Legacy pattern: naive vector database embeddings and cosine distance thresholds.',
      'Replaced by: Knowledge Graph RAG, entity relationship extraction, and long-context cached prompts.'
    ],
    oldParadigm: {
      title: 'Top-5 Text Chunks',
      description: 'Chops document blindly into text fragments without understanding entity relations or hierarchical document structures.'
    },
    newParadigm: {
      title: 'Entity Knowledge Graph + 1M Context Caching',
      description: 'Hierarchical summaries capture global corpus themes, while native long context ingests full un-chunked source manuals.'
    },
    representativeModels: [
      { name: 'Legacy LangChain / Pinecone naive chunking', creator: 'Community', type: 'Naive Chunk Retrieval', contextWindow: '4K–8K', keyCapability: 'Basic semantic similarity lookup' }
    ],
    keyMetrics: [
      { label: 'Holistic Synthesis Failure Rate', value: '62%', context: 'Failure on multi-document cross-cutting risk analysis' },
      { label: 'Migration to GraphRAG', value: '+240%', context: 'Year-over-year enterprise transition away from naive chunking' }
    ],
    enterpriseImpact: [
      'Engineering teams actively refactoring early 2023 RAG proof-of-concepts into structured GraphRAG pipelines.'
    ],
    openChallenges: [
      'Migrating millions of legacy vector embeddings into clean relational property graphs.'
    ],
    paperCitations: [
      { title: 'From Local to Global: A Graph RAG Approach to Query-Focused Summarization', authors: 'Edge et al. (Microsoft Research)', venueYear: '2024' }
    ]
  },
  {
    id: 'hold-single-shot-prompting',
    blipNumber: 16,
    title: 'Single-Pass Prompts for Complex Logic',
    category: 'Workflows',
    quadrant: 'Workflows',
    radarStage: 'Hold',
    radarAngle: 130,
    radarRadius: 310,
    oneLiner: 'Expecting a single forward pass without tools, verification, or scratchpad reasoning to solve non-trivial business logic.',
    timeline: 'Deprecated (2022–2024 Pattern)',
    maturityScore: 92,
    momentum: 'Phasing Out',
    leadVisual: 'agentic_reasoning_mesh',
    abstract: 'Relying on a single giant system prompt in a single zero-shot forward pass to generate complex legal contracts, architectural code, or mathematical calculations consistently produces hallucinations. Industry standard practice has migrated to reasoning models with test-time compute, verification loops, and agentic workflows.',
    coreInnovations: [
      'Legacy pattern: single prompt generation with blind confidence.',
      'Replaced by: cyclic reflection loops (Reflexion), test-time reasoning tokens, and external tool verification.'
    ],
    oldParadigm: {
      title: 'Single Zero-Shot Forward Pass',
      description: 'Model outputs answers immediately without verification, error checking, or internal deliberation.'
    },
    newParadigm: {
      title: 'Deliberative Reasoning & Agentic Execution',
      description: 'Model plans steps, verifies assertions with interpreters, and iterates until correctness is proven.'
    },
    representativeModels: [
      { name: 'Legacy GPT-3.5 / Text-Davinci Prompts', creator: 'OpenAI', type: 'Zero-Shot Autoregressive', contextWindow: '4K', keyCapability: 'Single-pass text completion' }
    ],
    keyMetrics: [
      { label: 'Hallucination on Multi-Step Math', value: '48%–65%', context: 'Without internal reasoning chains or tool verification' }
    ],
    enterpriseImpact: [
      'Elimination of brittle 20-page prompt engineering files in favor of structured agent tools and thinking models.'
    ],
    openChallenges: [
      'Training non-technical users to utilize reasoning models and agent loops effectively.'
    ],
    paperCitations: [
      { title: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models', authors: 'Wei et al. (Google Research)', venueYear: 'NeurIPS 2022' }
    ]
  },
  {
    id: 'hold-cascaded-speech',
    blipNumber: 17,
    title: 'Cascaded Speech Pipelines (STT -> LLM -> TTS)',
    category: 'Multimodal',
    quadrant: 'Multimodal',
    radarStage: 'Hold',
    radarAngle: 228,
    radarRadius: 310,
    oneLiner: 'Stitching independent Whisper, text LLM, and ElevenLabs services together with 2.5s lag and vocal nuance destruction.',
    timeline: 'Deprecated (2022–2024 Pattern)',
    maturityScore: 96,
    momentum: 'Phasing Out',
    leadVisual: 'hero_ai_trends_editorial',
    abstract: 'Chaining three separate SaaS microservices for voice interaction introduces unacceptable round-trip latency, destroys vocal prosody, humor, and pauses, and prevents natural interruptions (barge-in). The modern standard is native continuous speech-to-speech omni models operating under 300ms.',
    coreInnovations: [
      'Legacy pattern: Whisper STT -> Text LLM -> TTS synthesizer.',
      'Replaced by: Native Omni speech tokens (Gemini Live, GPT-4o Realtime, Kyutai Moshi).'
    ],
    oldParadigm: {
      title: 'Cascaded Tri-Service Lag',
      description: 'Speech converted to text, text generated, text spoken back; 2,500ms latency with emotion stripped.'
    },
    newParadigm: {
      title: 'Native Duplex Audio Streaming',
      description: 'Direct audio tokenization in unified transformer; sub-300ms latency with full prosodic preservation.'
    },
    representativeModels: [
      { name: 'Chained Whisper + GPT-4 + ElevenLabs', creator: 'Legacy Integration Pattern', type: 'Cascaded Pipeline', contextWindow: 'Fragmented', keyCapability: 'Modular but high latency' }
    ],
    keyMetrics: [
      { label: 'Latency Differential', value: '8× Slower', context: '2,600ms cascaded vs 280ms native omni' },
      { label: 'Conversational Drop-off Rate', value: '44%', context: 'Users abandoning voice bots with >1.5s lag' }
    ],
    enterpriseImpact: [
      'Call center transformation: replacing robotic delays with fluid, human-like voice agents.'
    ],
    openChallenges: [
      'Streaming infrastructure costs for high-bandwidth bidirectional WebSocket connections.'
    ],
    paperCitations: [
      { title: 'Gemini 2.0 Technical Report', authors: 'Google DeepMind', venueYear: '2024' }
    ]
  },
  {
    id: 'hold-cloud-monolith',
    blipNumber: 18,
    title: 'Brute-Force Cloud Routing for Trivial QA',
    category: 'Infrastructure',
    quadrant: 'Infrastructure',
    radarStage: 'Hold',
    radarAngle: 320,
    radarRadius: 310,
    oneLiner: 'Routing simple grammar edits, classifications, and autocompletions to 400B+ cloud server farms at high cost.',
    timeline: 'Deprecated (2022–2024 Pattern)',
    maturityScore: 90,
    momentum: 'Phasing Out',
    leadVisual: 'agentic_reasoning_mesh',
    abstract: 'Sending every keystroke, sentence translation, or simple FAQ to massive proprietary cloud models is economically unsustainable and violates user privacy mandates. Modern architectures deploy speculative cascading: on-device or edge SLMs (1B–8B) resolve 70%+ of queries locally, escalating only genuine reasoning challenges to cloud frontiers.',
    coreInnovations: [
      'Legacy pattern: 100% of user traffic routed to expensive centralized cloud models.',
      'Replaced by: Speculative local edge routing with distilled Small Language Models (Phi-4, Gemma 2, Llama 3.2).'
    ],
    oldParadigm: {
      title: 'Centralized Cloud Monolith',
      description: 'High API costs, data privacy liabilities, and network latency on simple text transformations.'
    },
    newParadigm: {
      title: 'Edge Speculative Routing',
      description: 'Fast local SLMs handle routine tasks instantly; complex problems escalated selectively to cloud reasoning models.'
    },
    representativeModels: [
      { name: 'Legacy all-cloud API routing architectures', creator: 'Early SaaS Builders', type: 'Brute Force Routing', contextWindow: 'Cloud only', keyCapability: 'High cost per routine interaction' }
    ],
    keyMetrics: [
      { label: 'Cost Waste on Simple Queries', value: '75%–85%', context: 'Excessive cloud API bills compared to hybrid edge routing' }
    ],
    enterpriseImpact: [
      'Immediate 60%+ reduction in enterprise LLM API expenditure upon implementing local routing filters.'
    ],
    openChallenges: [
      'Tuning routing thresholds to prevent under-powered local models from answering questions beyond their capability.'
    ],
    paperCitations: [
      { title: 'Hybrid LLM Routing: Optimizing Cost and Accuracy Across Model Tiers', authors: 'Stanford NLP Lab', venueYear: '2024' }
    ]
  }
];

export const RADAR_STAGES = [
  {
    key: 'Adopt' as RadarStage,
    name: 'Adopt (Mainstream Production)',
    description: 'Proven technologies with high enterprise readiness and undeniable ROI. Recommended for immediate production deployment.',
  },
  {
    key: 'Trial' as RadarStage,
    name: 'Trial (Accelerating Frontier)',
    description: 'Rapidly maturing breakthroughs with proven prototypes and compelling benchmark jumps. Recommended for active enterprise pilots.',
  },
  {
    key: 'Assess' as RadarStage,
    name: 'Assess (Emerging Exploration)',
    description: 'Promising research breakthroughs with early implementations. Worth monitoring and exploring in R&D sandboxes.',
  },
  {
    key: 'Hold' as RadarStage,
    name: 'Hold / Deprecating Patterns',
    description: 'Legacy generative patterns currently being superseded by newer architectural breakthroughs.',
  }
];

export const LEGACY_PATTERNS_HOLD = TRENDS_DATA.filter(t => t.radarStage === 'Hold');

export const SECTOR_IMPACT = [
  {
    sector: 'Software & Cloud Engineering',
    shift: 'From Manual Coding to Systems Specification & Oversight',
    adoptionRate: '88%',
    description: 'Autonomous agents handle full-stack development, multi-file refactoring, migration of legacy monoliths, and continuous integration bug fixing. The primary human role has transitioned to architecture specification, security auditing, and system design.',
    flagshipUseCases: ['Autonomous pull request generation (SWE-bench verified)', 'Synthetic test-suite generation & mutation testing', 'Automated legacy codebase migration (COBOL/Java to Go/Rust)']
  },
  {
    sector: 'Healthcare & Life Sciences',
    shift: 'From Trial-and-Error to Generative Molecular Design',
    adoptionRate: '68%',
    description: 'Generative biological foundation models (AlphaFold 3, ESM3, Chai-1) simulate protein-ligand interactions, design de novo therapeutic antibodies, and generate synthetic patient cohorts for clinical trial optimization without privacy leaks.',
    flagshipUseCases: ['De novo protein and enzyme generation with specified catalytic sites', 'Clinical trial protocol drafting and electronic health record summarization', 'Multimodal patient diagnostic analysis (radiology scans + pathology notes)']
  },
  {
    sector: 'Creative Media, Film & Gaming',
    shift: 'From Static Asset Pipelines to Interactive World Simulators',
    adoptionRate: '82%',
    description: 'Generative video and 3D Gaussian splatting allow directors and game developers to generate photorealistic environments with physical consistency, dynamic camera motion, and real-time interactive generation.',
    flagshipUseCases: ['Real-time 3D game environment synthesis from natural language', 'Automated multilingual voice dubbing preserving acoustic actor timber', 'Generative storyboarding and previsualization in 4K video']
  },
  {
    sector: 'Enterprise Operations & Legal',
    shift: 'From Fragmented Knowledge to Autonomous Decision Agents',
    adoptionRate: '79%',
    description: 'GraphRAG and autonomous agent swarms synthesize cross-department knowledge, draft ironclad commercial agreements, verify regulatory compliance across global jurisdictions, and automate supply chain exceptions.',
    flagshipUseCases: ['Cross-jurisdictional compliance analysis (EU AI Act, GDPR, SEC filings)', 'Autonomous invoice and procurement dispute resolution', 'Self-updating enterprise knowledge graphs across Slack, Jira, and Google Drive']
  },
  {
    sector: 'Robotics & Physical Automation',
    shift: 'From Fixed Automation to General-Purpose Embodied AI',
    adoptionRate: '54%',
    description: 'Vision-Language-Action (VLA) foundation models give robotic arms and humanoid robots spatial common sense. Robots can now manipulate arbitrary unknown objects in unstructured environments without specialized reprogramming.',
    flagshipUseCases: ['Warehouse sorting of irregular packages and fragile items', 'Humanoid robotic assistance on automotive assembly lines', 'Agricultural harvesting robots adapting to variable crop geometry']
  }
];

export const ARCHITECTURE_COMPARISONS = [
  {
    id: 'scaling-paradigms',
    title: 'Pre-Training Scaling vs. Test-Time Inference Scaling',
    category: 'Model Architecture',
    left: {
      name: 'Classic Pre-Training Scaling (Chinchilla Laws)',
      summary: 'Scale model parameters (10B -> 70B -> 405B) and internet training tokens (1T -> 15T). Model has a fixed number of FLOPs per output token regardless of question difficulty.',
      strengths: ['Massive world knowledge retrieval', 'Low predictable latency per output token', 'Simpler training pipeline'],
      weaknesses: ['Diminishing returns on reasoning & math', 'Hallucinations on multi-step logic', 'Prohibitive multi-million-dollar training clusters']
    },
    right: {
      name: 'Test-Time Compute Scaling (System 2 Thinking)',
      summary: 'Model generates internal hidden reasoning tokens, evaluates candidate branches with verifiers, backtracks on errors, and explores solution trees at inference time.',
      strengths: ['Superhuman competitive math & coding accuracy', 'Self-correction without human intervention', 'Smaller base models (e.g. 32B) beating 400B+ giants'],
      weaknesses: ['High variable latency (10s-60s per complex query)', 'Serving cost unpredictability', 'Risk of overthinking simple queries']
    }
  },
  {
    id: 'speech-modality',
    title: 'Cascaded Speech Pipelines vs. Native Omni Speech-to-Speech',
    category: 'Multimodal Systems',
    left: {
      name: 'Legacy Cascaded Pipeline (STT -> LLM -> TTS)',
      summary: 'User speech converted to text via Whisper, passed to LLM for text generation, text streamed to TTS engine. 3 independent models chained together.',
      strengths: ['Modular: easily swap TTS or LLM vendor', 'Easy to filter and log text for auditing', 'Standard REST/gRPC architectural patterns'],
      weaknesses: ['Severe latency (1.8s - 3.5s total lag)', 'Complete loss of tone, emotion, pauses, laughter', 'Acoustic hallucinations propagate across boundaries']
    },
    right: {
      name: 'Native Omni Multimodal (Continuous Audio Tokens)',
      summary: 'Direct audio waveform ingestion and generation in a single unified transformer. End-to-end tokenization with sub-300ms duplex streaming.',
      strengths: ['Sub-300ms conversational latency matching human dialogue', 'Preserves sarcasm, emotional tone, background acoustics', 'Natural barge-in and conversational interruptions'],
      weaknesses: ['Complex high-bandwidth stateful WebSocket infrastructure', 'Difficult to intercept unsafe audio tokens mid-flight', 'Higher computational cost for continuous audio buffers']
    }
  },
  {
    id: 'retrieval-patterns',
    title: 'Vector Similarity RAG vs. GraphRAG & Million-Token Context',
    category: 'Knowledge Systems',
    left: {
      name: 'Classic Vector Chunk RAG',
      summary: 'Documents chunked into 500-token blocks, embedded into vector space, retrieved via top-K cosine similarity search.',
      strengths: ['Low setup complexity with standard vector databases', 'Fast sub-100ms retrieval queries', 'Cost-effective for simple fact lookup'],
      weaknesses: ['Fails on global thematic queries ("What are all the risks?")', 'Disconnected fragments lack relational context', 'Sensitive to arbitrary chunking boundaries']
    },
    right: {
      name: 'GraphRAG + Million-Token Ingestion',
      summary: 'Hierarchical knowledge graphs map entities and communities across documents, paired with 1M-2M token context windows for full-corpus synthesis.',
      strengths: ['Global understanding across thousands of documents', 'Clear provenance traceability across entity relationships', 'No context fragmentation; whole codebases ingested directly'],
      weaknesses: ['Higher graph pre-processing extraction compute', 'Large token context windows increase initial TTFT latency', 'Requires intelligent prompt caching to manage costs']
    }
  }
];
