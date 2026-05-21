// Sol de Mayo — 16 rayos rectos + 16 rayos ondulados alternados, con cara
export default function SolDeMayo({ size = 160, className = '' }) {
  const toRad = d => (d * Math.PI) / 180

  const CENTER_R      = 38
  const INNER_R       = 45
  const OUTER_STR_R   = 74
  const OUTER_WAVY_R  = 68

  const elements = []

  for (let i = 0; i < 32; i++) {
    const angle  = toRad(i * 11.25 - 90)
    const isWavy = i % 2 === 1

    if (!isWavy) {
      // Rayo recto (triángulo)
      const hw = toRad(4.5)
      const x1 = INNER_R * Math.cos(angle - hw)
      const y1 = INNER_R * Math.sin(angle - hw)
      const x2 = INNER_R * Math.cos(angle + hw)
      const y2 = INNER_R * Math.sin(angle + hw)
      const xt = OUTER_STR_R * Math.cos(angle)
      const yt = OUTER_STR_R * Math.sin(angle)
      elements.push(
        <polygon key={i} points={`${x1},${y1} ${x2},${y2} ${xt},${yt}`} fill="#F6B940" />
      )
    } else {
      // Rayo ondulado (llama con bezier)
      const hw = toRad(5.5)
      const x1 = INNER_R * Math.cos(angle - hw)
      const y1 = INNER_R * Math.sin(angle - hw)
      const x2 = INNER_R * Math.cos(angle + hw)
      const y2 = INNER_R * Math.sin(angle + hw)
      const xt = OUTER_WAVY_R * Math.cos(angle)
      const yt = OUTER_WAVY_R * Math.sin(angle)

      const px = -Math.sin(angle)
      const py =  Math.cos(angle)
      const bulge = 9
      const mid = 0.55
      const mx = OUTER_WAVY_R * mid * Math.cos(angle)
      const my = OUTER_WAVY_R * mid * Math.sin(angle)

      elements.push(
        <path
          key={i}
          d={`M ${x1},${y1} Q ${mx + px * bulge},${my + py * bulge} ${xt},${yt} Q ${mx - px * bulge},${my - py * bulge} ${x2},${y2} Z`}
          fill="#F6B940"
        />
      )
    }
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="-82 -82 164 164"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rayos */}
      {elements}

      {/* Círculo central */}
      <circle cx="0" cy="0" r={CENTER_R} fill="#F6B940" />

      {/* Cara */}
      {/* Cejas */}
      <path d="M -16,-17 Q -11,-23 -5,-17" stroke="#7A4A00" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <path d="M  5,-17 Q  11,-23  16,-17" stroke="#7A4A00" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      {/* Ojos */}
      <ellipse cx="-11" cy="-9" rx="4" ry="5.5" fill="#7A4A00" />
      <ellipse cx=" 11" cy="-9" rx="4" ry="5.5" fill="#7A4A00" />
      {/* Brillo en ojos */}
      <circle cx="-9.5" cy="-11" r="1.5" fill="#F6D080" opacity="0.6"/>
      <circle cx=" 12.5" cy="-11" r="1.5" fill="#F6D080" opacity="0.6"/>
      {/* Nariz */}
      <ellipse cx="0" cy="2" rx="2.2" ry="3" fill="#7A4A00" />
      {/* Boca / sonrisa */}
      <path d="M -13,12 Q 0,22 13,12" stroke="#7A4A00" strokeWidth="2.8" fill="none" strokeLinecap="round"/>
      {/* Mejillas */}
      <ellipse cx="-20" cy="7" rx="5" ry="4" fill="#E89020" opacity="0.35"/>
      <ellipse cx=" 20" cy="7" rx="5" ry="4" fill="#E89020" opacity="0.35"/>
    </svg>
  )
}
