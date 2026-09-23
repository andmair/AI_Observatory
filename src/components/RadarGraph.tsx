import React, { useState } from 'react';
import { TrendItem, STAGE_THEMES, RADAR_QUADRANTS, RadarStage } from '../data/trendsData';
import { Compass, ArrowUpRight, Eye, EyeOff, Sparkles, Check, HelpCircle } from 'lucide-react';

interface RadarGraphProps {
  trends: TrendItem[];
  onSelectTrend: (trend: TrendItem) => void;
  hoveredTrendId: string | null;
  setHoveredTrendId: (id: string | null) => void;
  selectedStageFilter: string;
  setSelectedStageFilter: (stage: string) => void;
  selectedQuadrantFilter: string;
  setSelectedQuadrantFilter: (quadrant: string) => void;
}

// Concise, human-readable labels designed to prevent text collisions on the radar canvas
const SHORT_TITLES: Record<number, {
  shortTitle: string;
  anchor: 'start' | 'end';
  dx: number;
  dy: number;
}> = {
  // Q1: Top Right (dx > 0, textAnchor = 'start')
  1: { shortTitle: 'Test-Time Compute', anchor: 'start', dx: 18, dy: -2 },
  7: { shortTitle: 'Synthetic Data', anchor: 'start', dx: 18, dy: -4 },
  9: { shortTitle: 'GraphRAG & 1M Context', anchor: 'start', dx: 18, dy: -2 },
  11: { shortTitle: 'Hybrid Mamba (SSMs)', anchor: 'start', dx: 18, dy: -4 },
  15: { shortTitle: 'Vanilla RAG [Legacy]', anchor: 'start', dx: 18, dy: 0 },

  // Q2: Top Left (dx < 0, textAnchor = 'end')
  2: { shortTitle: 'Agentic Workflows (MCP)', anchor: 'end', dx: -18, dy: -2 },
  6: { shortTitle: 'Vibe Coding & SE', anchor: 'end', dx: -18, dy: 0 },
  14: { shortTitle: 'Agent Swarm Markets', anchor: 'end', dx: -18, dy: -2 },
  16: { shortTitle: 'Single-Pass Prompts [Legacy]', anchor: 'end', dx: -18, dy: 0 },

  // Q3: Bottom Left (dx < 0, textAnchor = 'end')
  3: { shortTitle: 'Native Omni Modality', anchor: 'end', dx: -18, dy: 0 },
  8: { shortTitle: 'Physical AI & Robotics', anchor: 'end', dx: -18, dy: -2 },
  12: { shortTitle: 'Generative BCI', anchor: 'end', dx: -18, dy: 0 },
  17: { shortTitle: 'Cascaded Speech [Legacy]', anchor: 'end', dx: -18, dy: 0 },

  // Q4: Bottom Right (dx > 0, textAnchor = 'start')
  4: { shortTitle: 'Edge SLMs & Sovereignty', anchor: 'start', dx: 18, dy: 0 },
  5: { shortTitle: 'MoE Economics Parity', anchor: 'start', dx: 18, dy: 0 },
  10: { shortTitle: 'SynthID & Provenance', anchor: 'start', dx: 18, dy: 0 },
  13: { shortTitle: 'Photonic Silicon', anchor: 'start', dx: 18, dy: -4 },
  18: { shortTitle: 'Cloud Monolith QA [Legacy]', anchor: 'start', dx: 18, dy: 0 },
};

export const RadarGraph: React.FC<RadarGraphProps> = ({
  trends,
  onSelectTrend,
  hoveredTrendId,
  setHoveredTrendId,
  selectedStageFilter,
  setSelectedStageFilter,
  selectedQuadrantFilter,
  setSelectedQuadrantFilter,
}) => {
  const [activeTooltipItem, setActiveTooltipItem] = useState<TrendItem | null>(null);
  const [showNodeLabels, setShowNodeLabels] = useState<boolean>(true);

  // SVG Geometry Constants
  // Generous 820x820 coordinate space leaves 80px margins on all four sides of the 330 radius outer ring
  const viewBoxSize = 820;
  const center = 410;

  // Exact concentric ring radii in SVG units
  const ringRadii = {
    Adopt: 115,
    Trial: 190,
    Assess: 260,
    Hold: 330,
  };

  // Filter items based on selected ring and quadrant
  const isItemVisible = (item: TrendItem) => {
    const stageMatch = selectedStageFilter === 'All' || item.radarStage === selectedStageFilter;
    const quadMatch = selectedQuadrantFilter === 'All' || item.quadrant === selectedQuadrantFilter;
    return stageMatch && quadMatch;
  };

  // Calibrated coordinate calculation placing each item perfectly within its designated ring band
  const getCoordinates = (item: TrendItem) => {
    let calibratedRadius = item.radarRadius;

    if (item.radarStage === 'Adopt') {
      calibratedRadius = 68 + (item.radarRadius % 35);
    } else if (item.radarStage === 'Trial') {
      calibratedRadius = 145 + (item.radarRadius % 25);
    } else if (item.radarStage === 'Assess') {
      calibratedRadius = 222 + (item.radarRadius % 15);
    } else if (item.radarStage === 'Hold') {
      calibratedRadius = 295;
    }

    const angleRad = (item.radarAngle * Math.PI) / 180;
    const x = center + calibratedRadius * Math.cos(angleRad);
    const y = center - calibratedRadius * Math.sin(angleRad);
    return { x, y, calibratedRadius };
  };

  // Dynamic positioning for hover card to ensure it never obscures the active node
  const getTooltipPositionStyle = () => {
    if (!activeTooltipItem) return {};
    const coords = getCoordinates(activeTooltipItem);
    // If node is in the bottom half, show tooltip at top; if in top half, show at bottom
    if (coords.y > center) {
      return { top: '16px', left: '50%', transform: 'translateX(-50%)' };
    } else {
      return { bottom: '16px', left: '50%', transform: 'translateX(-50%)' };
    }
  };

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 shadow-xs">
      
      {/* Header Bar with Ring Legend & Node Label Toggle */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-200/80">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-1">
            <Compass className="w-4 h-4 text-stone-700" />
            <span>Topological Mapping // Concentric Rings</span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif font-medium text-stone-900">
            Interactive AI Technology Radar Chart
          </h3>
          <p className="text-xs text-stone-600 mt-1 max-w-xl">
            Concentric maturity rings evaluate generative AI paradigms from production adoption to deprecated legacy patterns. Click any node or badge to filter.
          </p>
        </div>

        {/* Action Controls: Labels Toggle & Ring Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Node Labels Display Toggle */}
          <button
            onClick={() => setShowNodeLabels(!showNodeLabels)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer flex items-center gap-1.5 ${
              showNodeLabels
                ? 'bg-stone-100 text-stone-900 border-stone-300 shadow-2xs'
                : 'bg-white text-stone-600 border-stone-200 hover:text-stone-900'
            }`}
            title="Toggle readable technology titles on the chart canvas"
          >
            {showNodeLabels ? <Eye className="w-3.5 h-3.5 text-stone-700" /> : <EyeOff className="w-3.5 h-3.5 text-stone-400" />}
            <span>Labels: {showNodeLabels ? 'Visible' : 'Hidden'}</span>
          </button>

          {/* Ring Filter Buttons */}
          {(['All', 'Adopt', 'Trial', 'Assess', 'Hold'] as const).map((stage) => {
            const isAll = stage === 'All';
            const isSelected = selectedStageFilter === stage;
            const theme = !isAll ? STAGE_THEMES[stage as RadarStage] : null;

            return (
              <button
                key={stage}
                onClick={() => setSelectedStageFilter(stage)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-300'
                }`}
              >
                {!isAll && theme && (
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: theme.blipBg }}
                  />
                )}
                <span>{stage}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Graph Layout: SVG Canvas on Left, Interactive Catalog Index on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
        
        {/* Left: SVG Concentric Radar Graph */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative select-none">
          <div className="w-full max-w-[620px] aspect-square relative">
            <svg
              viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
              className="w-full h-full overflow-visible drop-shadow-xs"
              aria-label="Generative AI Technology Radar Diagram"
            >
              <defs>
                {/* Subtle drop shadow filter for floating badges to guarantee 100% legibility */}
                <filter id="badgeShadow" x="-10%" y="-10%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#1C1917" floodOpacity="0.08" />
                </filter>
                <filter id="cornerCardShadow" x="-10%" y="-10%" width="125%" height="135%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#1C1917" floodOpacity="0.06" />
                </filter>
              </defs>

              {/* Outer Boundary Fill */}
              <circle
                cx={center}
                cy={center}
                r={ringRadii.Hold}
                fill="#FCFAF7"
                stroke="#E7E5E4"
                strokeWidth="1.5"
              />

              {/* Ring 4: HOLD (Outermost - Radius 330) */}
              <circle
                cx={center}
                cy={center}
                r={ringRadii.Hold}
                fill={STAGE_THEMES.Hold.ringFill}
                stroke={STAGE_THEMES.Hold.ringStroke}
                strokeWidth="1.5"
                strokeDasharray="5 5"
                className={selectedStageFilter === 'Hold' ? 'stroke-2' : 'opacity-85'}
              />

              {/* Ring 3: ASSESS (Radius 260) */}
              <circle
                cx={center}
                cy={center}
                r={ringRadii.Assess}
                fill={STAGE_THEMES.Assess.ringFill}
                stroke={STAGE_THEMES.Assess.ringStroke}
                strokeWidth="1.5"
                className={selectedStageFilter === 'Assess' ? 'stroke-2' : 'opacity-90'}
              />

              {/* Ring 2: TRIAL (Radius 190) */}
              <circle
                cx={center}
                cy={center}
                r={ringRadii.Trial}
                fill={STAGE_THEMES.Trial.ringFill}
                stroke={STAGE_THEMES.Trial.ringStroke}
                strokeWidth="1.5"
                className={selectedStageFilter === 'Trial' ? 'stroke-2' : 'opacity-95'}
              />

              {/* Ring 1: ADOPT (Innermost Core - Radius 115) */}
              <circle
                cx={center}
                cy={center}
                r={ringRadii.Adopt}
                fill={STAGE_THEMES.Adopt.ringFill}
                stroke={STAGE_THEMES.Adopt.ringStroke}
                strokeWidth="2"
                className={selectedStageFilter === 'Adopt' ? 'stroke-[2.5]' : ''}
              />

              {/* Quadrant Divider Axes: East-West & North-South */}
              <line
                x1={center - ringRadii.Hold}
                y1={center}
                x2={center + ringRadii.Hold}
                y2={center}
                stroke="#D6D3D1"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />
              <line
                x1={center}
                y1={center - ringRadii.Hold}
                x2={center}
                y2={center + ringRadii.Hold}
                stroke="#D6D3D1"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />

              {/* Center Pivot Point */}
              <circle cx={center} cy={center} r="6" fill="#1C1917" />
              <circle cx={center} cy={center} r="14" fill="none" stroke="#78716C" strokeWidth="1" strokeDasharray="2 2" />

              {/* -------------------------------------------------------------------------
                  SPATIALLY DECOUPLED QUADRANT CORNER CARDS
                  Positioned strictly outside the outer ring (r=330) in the four 80px canvas margins.
                  Guarantees ZERO overlap with blips, rings, or radial axes!
              ------------------------------------------------------------------------- */}
              <g className="cursor-pointer">
                {/* Q1: Top Right - Architectures & Models */}
                <g
                  onClick={() => setSelectedQuadrantFilter(selectedQuadrantFilter === 'Architectures' ? 'All' : 'Architectures')}
                  className="transition-transform hover:scale-[1.02]"
                >
                  <rect
                    x="545"
                    y="18"
                    width="250"
                    height="46"
                    rx="10"
                    fill="#FFFFFF"
                    stroke={selectedQuadrantFilter === 'Architectures' ? '#7C3AED' : '#E2E8F0'}
                    strokeWidth={selectedQuadrantFilter === 'Architectures' ? '2' : '1.2'}
                    filter="url(#cornerCardShadow)"
                  />
                  <rect x="545" y="18" width="5" height="46" rx="2.5" fill="#7C3AED" />
                  <text x="560" y="36" fill="#5B21B6" fontSize="11px" fontFamily="monospace" fontWeight="bold">
                    Q1 · ARCHITECTURES & MODELS
                  </text>
                  <text x="560" y="52" fill="#6B7280" fontSize="9.5px" fontFamily="sans-serif">
                    Reasoning · Scaling · SSMs (5 Items)
                  </text>
                </g>

                {/* Q2: Top Left - Workflows & Agents */}
                <g
                  onClick={() => setSelectedQuadrantFilter(selectedQuadrantFilter === 'Workflows' ? 'All' : 'Workflows')}
                  className="transition-transform hover:scale-[1.02]"
                >
                  <rect
                    x="25"
                    y="18"
                    width="250"
                    height="46"
                    rx="10"
                    fill="#FFFFFF"
                    stroke={selectedQuadrantFilter === 'Workflows' ? '#0D9488' : '#E2E8F0'}
                    strokeWidth={selectedQuadrantFilter === 'Workflows' ? '2' : '1.2'}
                    filter="url(#cornerCardShadow)"
                  />
                  <rect x="25" y="18" width="5" height="46" rx="2.5" fill="#0D9488" />
                  <text x="40" y="36" fill="#0F766E" fontSize="11px" fontFamily="monospace" fontWeight="bold">
                    Q2 · WORKFLOWS & AGENTS
                  </text>
                  <text x="40" y="52" fill="#6B7280" fontSize="9.5px" fontFamily="sans-serif">
                    MCP · Vibe Coding · Swarms (4 Items)
                  </text>
                </g>

                {/* Q3: Bottom Left - Multimodal & Embodied AI */}
                <g
                  onClick={() => setSelectedQuadrantFilter(selectedQuadrantFilter === 'Multimodal' ? 'All' : 'Multimodal')}
                  className="transition-transform hover:scale-[1.02]"
                >
                  <rect
                    x="25"
                    y="756"
                    width="250"
                    height="46"
                    rx="10"
                    fill="#FFFFFF"
                    stroke={selectedQuadrantFilter === 'Multimodal' ? '#EA580C' : '#E2E8F0'}
                    strokeWidth={selectedQuadrantFilter === 'Multimodal' ? '2' : '1.2'}
                    filter="url(#cornerCardShadow)"
                  />
                  <rect x="25" y="756" width="5" height="46" rx="2.5" fill="#EA580C" />
                  <text x="40" y="774" fill="#C2410C" fontSize="11px" fontFamily="monospace" fontWeight="bold">
                    Q3 · MULTIMODAL & EMBODIED AI
                  </text>
                  <text x="40" y="790" fill="#6B7280" fontSize="9.5px" fontFamily="sans-serif">
                    Omni · Robotics · BCI (4 Items)
                  </text>
                </g>

                {/* Q4: Bottom Right - Infrastructure & Edge */}
                <g
                  onClick={() => setSelectedQuadrantFilter(selectedQuadrantFilter === 'Infrastructure' ? 'All' : 'Infrastructure')}
                  className="transition-transform hover:scale-[1.02]"
                >
                  <rect
                    x="545"
                    y="756"
                    width="250"
                    height="46"
                    rx="10"
                    fill="#FFFFFF"
                    stroke={selectedQuadrantFilter === 'Infrastructure' ? '#0284C7' : '#E2E8F0'}
                    strokeWidth={selectedQuadrantFilter === 'Infrastructure' ? '2' : '1.2'}
                    filter="url(#cornerCardShadow)"
                  />
                  <rect x="545" y="756" width="5" height="46" rx="2.5" fill="#0284C7" />
                  <text x="560" y="774" fill="#0369A1" fontSize="11px" fontFamily="monospace" fontWeight="bold">
                    Q4 · INFRASTRUCTURE & EDGE
                  </text>
                  <text x="560" y="790" fill="#6B7280" fontSize="9.5px" fontFamily="sans-serif">
                    Edge SLMs · MoE · Silicon (5 Items)
                  </text>
                </g>
              </g>

              {/* -------------------------------------------------------------------------
                  RING BADGES ALONG THE NORTH VERTICAL AXIS (CORRIDOR 70° TO 120°)
                  Equipped with solid white backing pills to mask the grid line beneath.
                  High contrast, zero text collision, fully clickable to filter.
              ------------------------------------------------------------------------- */}
              <g className="cursor-pointer">
                {/* 1. ADOPT BADGE (Radius ~62) */}
                <g
                  onClick={() => setSelectedStageFilter(selectedStageFilter === 'Adopt' ? 'All' : 'Adopt')}
                  className="transition-transform hover:scale-105"
                >
                  <rect
                    x={center - 48}
                    y="336"
                    width="96"
                    height="24"
                    rx="12"
                    fill="#FFFFFF"
                    stroke={STAGE_THEMES.Adopt.ringStroke}
                    strokeWidth="1.5"
                    filter="url(#badgeShadow)"
                  />
                  <circle cx={center - 36} cy="348" r="4" fill={STAGE_THEMES.Adopt.blipBg} />
                  <text
                    x={center - 26}
                    y="348"
                    dominantBaseline="central"
                    fill="#065F46"
                    fontSize="10px"
                    fontFamily="monospace"
                    fontWeight="700"
                    letterSpacing="0.05em"
                  >
                    ADOPT
                  </text>
                </g>

                {/* 2. TRIAL BADGE (Radius ~152) */}
                <g
                  onClick={() => setSelectedStageFilter(selectedStageFilter === 'Trial' ? 'All' : 'Trial')}
                  className="transition-transform hover:scale-105"
                >
                  <rect
                    x={center - 48}
                    y="246"
                    width="96"
                    height="24"
                    rx="12"
                    fill="#FFFFFF"
                    stroke={STAGE_THEMES.Trial.ringStroke}
                    strokeWidth="1.5"
                    filter="url(#badgeShadow)"
                  />
                  <circle cx={center - 36} cy="258" r="4" fill={STAGE_THEMES.Trial.blipBg} />
                  <text
                    x={center - 26}
                    y="258"
                    dominantBaseline="central"
                    fill="#92400E"
                    fontSize="10px"
                    fontFamily="monospace"
                    fontWeight="700"
                    letterSpacing="0.05em"
                  >
                    TRIAL
                  </text>
                </g>

                {/* 3. ASSESS BADGE (Radius ~225) */}
                <g
                  onClick={() => setSelectedStageFilter(selectedStageFilter === 'Assess' ? 'All' : 'Assess')}
                  className="transition-transform hover:scale-105"
                >
                  <rect
                    x={center - 50}
                    y="173"
                    width="100"
                    height="24"
                    rx="12"
                    fill="#FFFFFF"
                    stroke={STAGE_THEMES.Assess.ringStroke}
                    strokeWidth="1.5"
                    filter="url(#badgeShadow)"
                  />
                  <circle cx={center - 38} cy="185" r="4" fill={STAGE_THEMES.Assess.blipBg} />
                  <text
                    x={center - 28}
                    y="185"
                    dominantBaseline="central"
                    fill="#1E40AF"
                    fontSize="10px"
                    fontFamily="monospace"
                    fontWeight="700"
                    letterSpacing="0.05em"
                  >
                    ASSESS
                  </text>
                </g>

                {/* 4. HOLD BADGE (Radius ~295) */}
                <g
                  onClick={() => setSelectedStageFilter(selectedStageFilter === 'Hold' ? 'All' : 'Hold')}
                  className="transition-transform hover:scale-105"
                >
                  <rect
                    x={center - 65}
                    y="103"
                    width="130"
                    height="24"
                    rx="12"
                    fill="#FFFFFF"
                    stroke={STAGE_THEMES.Hold.ringStroke}
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    filter="url(#badgeShadow)"
                  />
                  <circle cx={center - 53} cy="115" r="4" fill={STAGE_THEMES.Hold.blipBg} />
                  <text
                    x={center - 43}
                    y="115"
                    dominantBaseline="central"
                    fill="#9F1239"
                    fontSize="9.5px"
                    fontFamily="monospace"
                    fontWeight="700"
                    letterSpacing="0.04em"
                  >
                    HOLD (LEGACY)
                  </text>
                </g>
              </g>

              {/* -------------------------------------------------------------------------
                  ALL 18 INTERACTIVE TECHNOLOGY BLIPS & COLLISION-FREE LABELS
              ------------------------------------------------------------------------- */}
              {trends.map((item) => {
                const { x, y } = getCoordinates(item);
                const isHovered = hoveredTrendId === item.id || activeTooltipItem?.id === item.id;
                const visible = isItemVisible(item);
                const theme = STAGE_THEMES[item.radarStage];
                const labelCfg = SHORT_TITLES[item.blipNumber] || {
                  shortTitle: item.title,
                  anchor: x >= center ? 'start' : 'end',
                  dx: x >= center ? 16 : -16,
                  dy: 0,
                };

                return (
                  <g
                    key={item.id}
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => {
                      setHoveredTrendId(item.id);
                      setActiveTooltipItem(item);
                    }}
                    onMouseLeave={() => {
                      setHoveredTrendId(null);
                      setActiveTooltipItem(null);
                    }}
                    onClick={() => onSelectTrend(item)}
                    opacity={visible ? (hoveredTrendId && !isHovered ? 0.35 : 1) : 0.15}
                  >
                    {/* Outer Animated Pulse Halo on Hover */}
                    {isHovered && (
                      <circle
                        cx={x}
                        cy={y}
                        r="24"
                        fill="none"
                        stroke={theme.blipBg}
                        strokeWidth="2"
                        className="animate-ping opacity-60"
                      />
                    )}

                    {/* Secondary Highlight Halo */}
                    {isHovered && (
                      <circle
                        cx={x}
                        cy={y}
                        r="20"
                        fill={theme.glowColor}
                      />
                    )}

                    {/* Main Blip Circle */}
                    <circle
                      cx={x}
                      cy={y}
                      r={isHovered ? 14 : 11.5}
                      fill={theme.blipBg}
                      stroke="#FFFFFF"
                      strokeWidth={isHovered ? '2.5' : '2'}
                      className="filter drop-shadow-xs transition-all duration-150"
                    />

                    {/* Centered Monospace Node Number */}
                    <text
                      x={x}
                      y={y}
                      dominantBaseline="central"
                      textAnchor="middle"
                      fill={theme.blipText}
                      fontSize={isHovered ? '11px' : '9.5px'}
                      fontFamily="monospace"
                      fontWeight="bold"
                      className="pointer-events-none select-none"
                    >
                      {item.blipNumber}
                    </text>

                    {/* Readable Node Title Label with White Stroke Halo
                        The white stroke halo masks any grid line or circle edge behind the letters,
                        ensuring that text is 100% legible without overlapping or clutter. */}
                    {(showNodeLabels || isHovered) && (
                      <text
                        x={x + labelCfg.dx}
                        y={y + labelCfg.dy}
                        dominantBaseline="central"
                        textAnchor={labelCfg.anchor}
                        paintOrder="stroke fill"
                        stroke="#FFFFFF"
                        strokeWidth="4.5"
                        strokeLinejoin="round"
                        fill={isHovered ? '#000000' : '#1C1917'}
                        fontSize={isHovered ? '11.5px' : '10px'}
                        fontFamily="sans-serif"
                        fontWeight={isHovered ? '700' : '600'}
                        className="pointer-events-none select-none tracking-tight"
                      >
                        {item.blipNumber}. {labelCfg.shortTitle}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Floating Detail Tooltip on Hover
                Dynamically positioned at the top or bottom to guarantee it never obscures the active node! */}
            {activeTooltipItem && (
              <div 
                className="absolute z-30 pointer-events-none p-4 bg-stone-900 text-stone-100 rounded-xl shadow-2xl border border-stone-700 w-72 max-w-[90vw] animate-in fade-in zoom-in-95 duration-150"
                style={getTooltipPositionStyle()}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span 
                      className="w-2 h-2 rounded-full inline-block shrink-0"
                      style={{ backgroundColor: STAGE_THEMES[activeTooltipItem.radarStage].blipBg }}
                    />
                    <span className="font-semibold text-stone-200">
                      {activeTooltipItem.radarStage} Ring
                    </span>
                  </div>
                  <span className="text-stone-400 font-medium">Node #{activeTooltipItem.blipNumber}</span>
                </div>
                <div className="font-serif text-sm font-medium text-white mb-1.5 leading-snug">
                  {activeTooltipItem.title}
                </div>
                <p className="text-[11px] text-stone-300 leading-relaxed line-clamp-2 mb-2.5 font-sans">
                  {activeTooltipItem.oneLiner}
                </p>
                <div className="text-[10px] text-stone-400 font-mono flex items-center justify-between pt-2 border-t border-stone-800">
                  <span>Maturity: <strong className="text-white">{activeTooltipItem.maturityScore}/100</strong></span>
                  <span className="text-emerald-400 underline">Click to inspect monograph</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Quadrant Filter Tabs & Color-Coded Item Index */}
        <div className="lg:col-span-5 flex flex-col h-full justify-between">
          
          {/* Quadrant Filter Pills */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-stone-500 mb-2">
              <span>Filter by Quadrant Domain</span>
              <span className="text-stone-400">Click to isolate</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setSelectedQuadrantFilter(selectedQuadrantFilter === 'All' ? 'Architectures' : 'All')}
                className={`p-2.5 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                  selectedQuadrantFilter === 'All'
                    ? 'bg-stone-900 text-white border-stone-900 font-medium shadow-xs'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="font-semibold">All Quadrants</div>
                <div className="text-[10px] text-stone-400 mt-0.5">18 Total Technologies</div>
              </button>

              {RADAR_QUADRANTS.map((quad) => {
                const count = trends.filter((t) => t.quadrant === quad.id).length;
                const isSelected = selectedQuadrantFilter === quad.id;

                return (
                  <button
                    key={quad.id}
                    onClick={() => setSelectedQuadrantFilter(isSelected ? 'All' : quad.id)}
                    className={`p-2.5 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-stone-900 text-white border-stone-900 font-medium shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="font-semibold truncate">{quad.title}</div>
                    <div className="text-[10px] text-stone-400 mt-0.5">{count} technologies</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Color-Coded Technological Index Scroll List */}
          <div className="border border-stone-200 rounded-xl overflow-hidden bg-stone-50/50">
            <div className="px-4 py-2.5 bg-stone-100/90 border-b border-stone-200 text-xs font-mono font-medium text-stone-700 flex items-center justify-between">
              <span>Radar Technology Index ({trends.filter(isItemVisible).length} visible)</span>
              <span className="text-[11px] text-stone-500">Node # · Title · Ring</span>
            </div>
            
            <div className="max-h-[340px] overflow-y-auto divide-y divide-stone-200/60 p-1">
              {trends.map((item) => {
                const isHovered = hoveredTrendId === item.id;
                const visible = isItemVisible(item);
                const theme = STAGE_THEMES[item.radarStage];

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredTrendId(item.id)}
                    onMouseLeave={() => setHoveredTrendId(null)}
                    onClick={() => onSelectTrend(item)}
                    className={`p-2.5 rounded-lg flex items-center justify-between gap-3 text-xs transition-all cursor-pointer ${
                      !visible
                        ? 'opacity-30'
                        : isHovered
                        ? 'bg-white shadow-xs scale-[1.01]'
                        : 'hover:bg-white/80'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Node Number with Ring Color Badge */}
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center font-mono font-bold text-[10px] shrink-0 text-white shadow-2xs"
                        style={{ backgroundColor: theme.blipBg }}
                      >
                        {item.blipNumber}
                      </span>
                      <span className="font-medium text-stone-900 truncate">
                        {item.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder}`}>
                        {item.radarStage}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
