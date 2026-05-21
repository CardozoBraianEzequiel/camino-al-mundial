import { useState } from 'react'
import { dailyContent, getUnlockedDayCount } from '../data/daily'

const CELESTE = '#74ACDF'
const ORO     = '#F6B940'

// ── Jersey SVG ────────────────────────────────────────────────────────────────
function Jersey({ kit }) {
  const { primary, secondary, stripes } = kit
  const pid = `s-${primary.replace('#', '')}`
  return (
    <svg width="48" height="56" viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <defs>
        {stripes && (
          <pattern id={pid} patternUnits="userSpaceOnUse" width="10" height="1">
            <rect width="5" height="1" fill={primary} />
            <rect x="5" width="5" height="1" fill={secondary} />
          </pattern>
        )}
      </defs>
      <path
        d="M28,22 L0,38 L16,50 L16,105 L84,105 L84,50 L100,38 L72,22 L62,12 Q50,18 38,12 Z"
        fill={stripes ? `url(#${pid})` : primary}
        stroke={secondary} strokeWidth="2"
      />
      <path d="M38,12 Q50,22 62,12 Q56,32 44,32 Q38,32 38,12 Z" fill={secondary} />
      <path d="M28,22 L0,38 L16,50 L28,38 Z" fill={secondary} opacity="0.5" />
      <path d="M72,22 L100,38 L84,50 L72,38 Z" fill={secondary} opacity="0.5" />
    </svg>
  )
}

// ── Posición colores ───────────────────────────────────────────────────────────
const POS_COLOR = {
  POR: { bg: 'rgba(246,185,64,0.12)',  border: 'rgba(246,185,64,0.35)',  text: '#F6B940' },
  DEF: { bg: 'rgba(116,172,223,0.12)', border: 'rgba(116,172,223,0.35)', text: '#74ACDF' },
  MED: { bg: 'rgba(134,239,172,0.10)', border: 'rgba(134,239,172,0.30)', text: '#86efac' },
  DEL: { bg: 'rgba(248,113,113,0.10)', border: 'rgba(248,113,113,0.30)', text: '#f87171' },
}

// ── Panel: Hito ───────────────────────────────────────────────────────────────
function MilestonePanel({ milestone }) {
  return (
    <div
      className="rounded-xl p-4"
      style={{ background: 'rgba(10,18,40,0.8)', border: `1px solid ${CELESTE}18` }}
    >
      <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: `${CELESTE}90` }}>
        🏅 Hito del día
      </p>
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{milestone.icon}</span>
        <div>
          <span
            className="text-xs font-bold px-2 py-0.5 rounded-full inline-block mb-1"
            style={{ backgroundColor: `${ORO}18`, color: ORO, border: `1px solid ${ORO}35` }}
          >
            {milestone.year}
          </span>
          <h4 className="text-white font-bold text-sm leading-snug mb-2">{milestone.title}</h4>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {milestone.description}
          </p>
        </div>
      </div>
    </div>
  )
}

// ── Panel: Plantel ────────────────────────────────────────────────────────────
function SquadPanel({ squad, isArgentine }) {
  const [open, setOpen] = useState(false)
  const label = isArgentine ? '🇦🇷 Plantel Argentino' : '🌍 Plantel Histórico'

  const resultStyle =
    squad.result === 'CAMPEÓN'
      ? { bg: `${ORO}18`, text: ORO, border: `${ORO}35` }
      : squad.result === 'SUBCAMPEÓN'
      ? { bg: 'rgba(180,180,180,0.12)', text: '#ccc', border: 'rgba(180,180,180,0.3)' }
      : { bg: 'rgba(255,255,255,0.05)', text: 'rgba(255,255,255,0.4)', border: 'rgba(255,255,255,0.12)' }

  return (
    <div
      className="rounded-xl"
      style={{ background: 'rgba(10,18,40,0.8)', border: `1px solid ${CELESTE}18` }}
    >
      <button onClick={() => setOpen(o => !o)} className="w-full text-left p-4">
        <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: `${CELESTE}90` }}>
          {label}
        </p>
        <div className="flex items-start gap-3">
          <Jersey kit={squad.kit} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-white font-bold text-sm">{squad.country} {squad.year}</span>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: resultStyle.bg,
                  color: resultStyle.text,
                  border: `1px solid ${resultStyle.border}`,
                }}
              >
                {squad.result}
              </span>
            </div>
            <p className="text-xs mb-1.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
              DT: {squad.coach}
            </p>
            <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {squad.description}
            </p>
          </div>
          <span className="flex-shrink-0 text-xs mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
            {open ? '▲' : '▼'}
          </span>
        </div>
      </button>

      {open && (
        <div
          className="px-4 pb-4 pt-3 animate-fade-up"
          style={{ borderTop: `1px solid ${CELESTE}15` }}
        >
          <p className="text-xs leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
            {squad.description}
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {squad.players.map((p, i) => {
              const pc = POS_COLOR[p.pos]
              return (
                <div key={i} className="flex items-center gap-1.5">
                  <span
                    className="text-[10px] font-bold px-1.5 py-px rounded flex-shrink-0"
                    style={{ backgroundColor: pc.bg, color: pc.text, border: `1px solid ${pc.border}` }}
                  >
                    {p.pos}
                  </span>
                  <span className="text-xs truncate" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {p.name}
                    {p.captain && <span style={{ color: ORO }}> (C)</span>}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

// ── Panel: Partido ────────────────────────────────────────────────────────────
function MatchPanel({ match }) {
  const [playing, setPlaying] = useState(false)

  const searchUrl = q => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`

  const roundColors = {
    'Final':          { bg: `${ORO}18`,              text: ORO,      border: `${ORO}35` },
    'Semifinal':      { bg: 'rgba(192,132,252,0.12)', text: '#c084fc', border: 'rgba(192,132,252,0.35)' },
    'Cuartos de Final': { bg: `${CELESTE}15`,         text: CELESTE,  border: `${CELESTE}35` },
    'Octavos de Final': { bg: 'rgba(52,211,153,0.12)', text: '#34d399', border: 'rgba(52,211,153,0.3)' },
    'Fase de Grupos':   { bg: 'rgba(134,239,172,0.1)', text: '#86efac', border: 'rgba(134,239,172,0.25)' },
  }
  const rc = roundColors[match.round] || { bg: 'rgba(255,255,255,0.05)', text: '#aaa', border: 'rgba(255,255,255,0.12)' }

  return (
    <div
      className="rounded-xl p-4"
      style={{ background: 'rgba(10,18,40,0.8)', border: `1px solid ${CELESTE}18` }}
    >
      <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: `${CELESTE}90` }}>
        ⚽ Partido Histórico ARG
      </p>

      <div className="mb-1">
        <span className="text-white font-black text-base">
          🇦🇷 ARG {match.score} {match.opponent}
        </span>
        {match.scoreDetail && (
          <span className="text-xs ml-2" style={{ color: 'rgba(255,255,255,0.35)' }}>{match.scoreDetail}</span>
        )}
      </div>

      <div className="flex items-center gap-2 flex-wrap mb-2">
        <span className="font-bold text-xs" style={{ color: ORO }}>{match.year}</span>
        <span
          className="text-xs font-bold px-2 py-0.5 rounded-full"
          style={{ backgroundColor: rc.bg, color: rc.text, border: `1px solid ${rc.border}` }}
        >
          {match.round}
        </span>
      </div>

      {match.goals.length > 0 && (
        <div className="flex gap-1.5 flex-wrap mb-3">
          {match.goals.map((g, i) => (
            <span
              key={i}
              className="text-[10px] px-1.5 py-0.5 rounded"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.45)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              ⚽ {g.player} {g.minute}'
            </span>
          ))}
        </div>
      )}

      <p className="text-xs leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
        {match.description}
      </p>

      {/* Video embed o thumbnail */}
      {playing && match.highlightsYoutubeId ? (
        <div className="relative w-full rounded-lg overflow-hidden mb-3" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${match.highlightsYoutubeId}?autoplay=1&rel=0`}
            title={`ARG vs ${match.opponent} ${match.year}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : match.highlightsYoutubeId ? (
        <div
          className="relative w-full rounded-lg overflow-hidden cursor-pointer group mb-3"
          style={{ paddingBottom: '42%', backgroundColor: '#05091a' }}
          onClick={() => setPlaying(true)}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
            src={`https://img.youtube.com/vi/${match.highlightsYoutubeId}/mqdefault.jpg`}
            alt=""
            onError={e => { e.target.style.display = 'none' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl"
              style={{ backgroundColor: '#cc0000' }}
            >
              <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      ) : null}

      <div className="flex gap-2 flex-wrap">
        {match.highlightsYoutubeId ? (
          <button
            onClick={() => setPlaying(v => !v)}
            className="flex items-center gap-1.5 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
            style={{ backgroundColor: '#cc0000' }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            {playing ? 'Cerrar' : 'Highlights'}
          </button>
        ) : (
          <a
            href={searchUrl(`Argentina vs ${match.opponent} ${match.year} highlights`)}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
            style={{ backgroundColor: 'rgba(204,0,0,0.75)' }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            Buscar highlights
          </a>
        )}
        <a
          href={
            match.fullMatchYoutubeId
              ? `https://www.youtube.com/watch?v=${match.fullMatchYoutubeId}`
              : searchUrl(match.fullMatchSearch)
          }
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
          style={{ border: `1px solid ${CELESTE}30`, color: `${CELESTE}CC` }}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Partido completo
        </a>
      </div>
    </div>
  )
}

// ── Day Card ──────────────────────────────────────────────────────────────────
function DayCard({ content, unlocked, isToday }) {
  const [open, setOpen] = useState(isToday)
  const { day, milestone } = content

  if (!unlocked) {
    return (
      <div
        className="rounded-2xl p-4 select-none"
        style={{
          border: `1px solid rgba(255,255,255,0.04)`,
          backgroundColor: 'rgba(10,15,35,0.4)',
          opacity: 0.4,
        }}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl" style={{ color: 'rgba(255,255,255,0.2)' }}>🔒</span>
          <div>
            <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.2)' }}>
              Día {day + 1} — {milestone.date}
            </p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.12)' }}>
              Se desbloquea el {milestone.date}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="rounded-2xl transition-colors"
      style={{
        border: `1px solid ${isToday ? `${CELESTE}50` : `${CELESTE}18`}`,
        backgroundColor: isToday ? 'rgba(12,24,55,0.95)' : 'rgba(8,14,32,0.85)',
        boxShadow: isToday ? `0 0 30px rgba(116,172,223,0.08)` : 'none',
      }}
    >
      {/* Header del día */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3 min-w-0">
          {/* Número del día */}
          <span
            className="font-black text-xl flex-shrink-0 tabular-nums w-8 text-right"
            style={{ color: ORO }}
          >
            {String(day + 1).padStart(2, '0')}
          </span>

          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-white font-bold text-sm">{milestone.date}</span>
              {isToday && (
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full animate-pulse"
                  style={{
                    backgroundColor: `${CELESTE}20`,
                    color: CELESTE,
                    border: `1px solid ${CELESTE}45`,
                  }}
                >
                  HOY
                </span>
              )}
            </div>
            <p className="text-xs truncate" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {milestone.title} · {milestone.year}
            </p>
          </div>
        </div>

        <span className="text-sm flex-shrink-0" style={{ color: 'rgba(255,255,255,0.25)' }}>
          {open ? '▲' : '▼'}
        </span>
      </button>

      {/* Contenido expandido */}
      {open && (
        <div
          className="px-4 pb-5 pt-4 grid gap-3 md:grid-cols-2 animate-fade-up"
          style={{ borderTop: `1px solid ${CELESTE}18` }}
        >
          <MilestonePanel milestone={content.milestone} />
          <MatchPanel match={content.match} />
          <SquadPanel squad={content.argentineSquad} isArgentine={true} />
          <SquadPanel squad={content.historicSquad} isArgentine={false} />
        </div>
      )}
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function DailyView() {
  const unlockedCount = getUnlockedDayCount()

  return (
    <section id="dias" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <span
          className="text-xs uppercase tracking-widest font-bold"
          style={{ color: `${CELESTE}80` }}
        >
          Día a día
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white mt-2">Camino al Mundial</h2>
        <p className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
          {unlockedCount} de {dailyContent.length} días desbloqueados — cada día: un hito, dos planteles y un partido
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {dailyContent.map((content, i) => (
          <DayCard
            key={i}
            content={content}
            unlocked={i < unlockedCount}
            isToday={i === unlockedCount - 1}
          />
        ))}
      </div>
    </section>
  )
}
