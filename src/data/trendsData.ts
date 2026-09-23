export interface ModelSpec {
  name: string;
  creator: string;
  type: string;
  contextWindow: string;
  keyCapability: string;
}

export interface TrendItem {
  id: string;
  title: string;
  category: 'Architectures' | 'Workflows' | 'Multimodal' | 'Infrastructure' | 'Embodied AI' | 'Governance';
  radarStage: 'Adopt' | 'Trial' | 'Assess' | 'Hold';
  oneLiner: string;
  timeline: string;
  maturityScore: number; // 1-100
  momentum: 'Surging' | 'Rapid Growth' | 'Maturing' | 'Plateauing';
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
  {
    id: 'test-time-compute',
    title: 'Test-Time Compute & System 2 Reasoning',
    category: 'Architectures',
    radarStage: 'Adopt',
    oneLiner: 'Allocating computational budget at inference time through internal chains-of-thought, search trees, and verification loops.',
    timeline: '2024–2026 Focus',
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
    title: 'Autonomous Agentic Workflows & Model Context Protocol',
    category: 'Workflows',
    radarStage: 'Adopt',
    oneLiner: 'Evolution from isolated chat interfaces to multi-step tool-using agents, background workers, and standardized contextual protocols.',
    timeline: '2024–2026 Focus',
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
    title: 'Native Omni Multimodal & Sub-300ms Interaction',
    category: 'Multimodal',
    radarStage: 'Adopt',
    oneLiner: 'Direct continuous tokenization of audio, video, spatial frames, and text with zero cascaded latency or voice tone loss.',
    timeline: '2024–2026 Focus',
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
    id: 'physical-ai-world-models',
    title: 'Physical AI, World Models & Spatial Embodiment',
    category: 'Embodied AI',
    radarStage: 'Trial',
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
    id: 'slm-edge-sovereignty',
    title: 'Small Language Models (SLMs) & On-Device Edge AI',
    category: 'Infrastructure',
    radarStage: 'Adopt',
    oneLiner: 'Distilled 1B–8B parameter models running entirely offline on consumer silicon with near-zero latency and total data privacy.',
    timeline: '2024–2026 Focus',
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
    title: 'Open-Weights Frontier Parity & MoE Economics',
    category: 'Infrastructure',
    radarStage: 'Adopt',
    oneLiner: 'Mixture-of-Experts (MoE) architectures and algorithmic breakthroughs driving a 10× collapse in model training and inference costs.',
    timeline: '2024–2026 Focus',
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
    id: 'graphrag-million-context',
    title: 'GraphRAG & Million-Token Context Evolution',
    category: 'Architectures',
    radarStage: 'Adopt',
    oneLiner: 'Transcending naive vector similarity via structured knowledge graphs and massive million-token active context windows.',
    timeline: '2024–2026 Focus',
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
    id: 'synthetic-data-distillation',
    title: 'Synthetic Data Loops & Verifiable Self-Play',
    category: 'Architectures',
    radarStage: 'Adopt',
    oneLiner: 'Overcoming the human data exhaustion wall via self-rewarding model loops and automated verification pipelines.',
    timeline: '2024–2026 Focus',
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
  {
    id: 'ai-software-engineering',
    title: 'Generative Software Engineering & "Vibe Coding"',
    category: 'Workflows',
    radarStage: 'Adopt',
    oneLiner: 'Evolution from tab-autocomplete to full repository understanding, autonomous test generation, and natural-language software creation.',
    timeline: '2024–2026 Focus',
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
    id: 'governance-watermarking-safety',
    title: 'Provenance, SynthID Watermarking & Regulatory Compliance',
    category: 'Governance',
    radarStage: 'Adopt',
    oneLiner: 'Algorithmic authenticity tracking, cryptographic provenance (C2PA), and compliance standards under the EU AI Act.',
    timeline: '2024–2026 Focus',
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
  }
];

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

export const RADAR_STAGES = [
  {
    key: 'Adopt',
    name: 'Adopt (Mainstream Production)',
    description: 'Proven technologies with high enterprise readiness and undeniable ROI. Recommended for immediate production deployment.',
    color: 'emerald'
  },
  {
    key: 'Trial',
    name: 'Trial (Accelerating Frontier)',
    description: 'Rapidly maturing breakthroughs with proven prototypes and compelling benchmark jumps. Recommended for active enterprise pilots.',
    color: 'amber'
  },
  {
    key: 'Assess',
    name: 'Assess (Emerging Exploration)',
    description: 'Promising research breakthroughs with early implementations. Worth monitoring and exploring in R&D sandboxes.',
    color: 'blue'
  },
  {
    key: 'Hold',
    name: 'Hold / Deprecating Patterns',
    description: 'Legacy generative patterns currently being superseded by newer architectural breakthroughs.',
    color: 'rose'
  }
];

export const LEGACY_PATTERNS_HOLD = [
  {
    title: 'Vanilla Fixed-Chunk Vector RAG',
    reason: 'Suffers from context fragmentation and failure on holistic cross-document synthesis. Superseded by GraphRAG and million-token cached contexts.'
  },
  {
    title: 'Cascaded Speech (STT -> LLM -> TTS)',
    reason: 'Introduces 2–3 second latency and discards rich vocal prosody. Superseded by native end-to-end Omni speech-to-speech models.'
  },
  {
    title: 'Single-Pass Zero-Shot Prompts for Complex Logic',
    reason: 'Single forward passes hallucinate on multi-step reasoning. Superseded by reasoning models with test-time compute and verifiable tool use.'
  },
  {
    title: 'Brute-Force Cloud-Only Routing for Trivial Tasks',
    reason: 'Sending simple autocomplete or classification to 400B cloud models waste money. Superseded by local distilled SLMs (1B–8B).'
  }
];
