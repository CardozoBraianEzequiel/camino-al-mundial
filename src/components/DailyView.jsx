import { useState } from 'react'
import { dailyContent, getUnlockedDayCount } from '../data/daily'

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
  POR: 'text-yellow-400 bg-yellow-400/10 border-yellow-500/30',
  DEF: 'text-blue-400 bg-blue-400/10 border-blue-500/30',
  MED: 'text-green-400 bg-green-400/10 border-green-500/30',
  DEL: 'text-red-400 bg-red-400/10 border-red-500/30',
}

// ── Panel: Hito ───────────────────────────────────────────────────────────────
function MilestonePanel({ milestone }) {
  return (
    <div className="bg-[#0e1f14] rounded-xl p-4 border border-white/5">
      <p className="text-xs uppercase tracking-widest text-amber-400/70 font-medium mb-3 flex items-center gap-1.5">
        🏅 Hito del día
      </p>
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{milestone.icon}</span>
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="text-xs bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/20 font-medium">
              {milestone.year}
            </span>
          </div>
          <h4 className="text-white font-bold text-sm leading-snug mb-2">{milestone.title}</h4>
          <p className="text-gray-400 text-xs leading-relaxed">{milestone.description}</p>
        </div>
      </div>
    </div>
  )
}

// ── Panel: Plantel ────────────────────────────────────────────────────────────
function SquadPanel({ squad, isArgentine }) {
  const [open, setOpen] = useState(false)
  const label = isArgentine ? '🇦🇷 Plantel Argentino' : '🌍 Plantel Histórico'
  const resultColor =
    squad.result === 'CAMPEÓN' ? 'bg-amber-500/15 text-amber-400 border-amber-500/30' :
    squad.result === 'SUBCAMPEÓN' ? 'bg-gray-500/15 text-gray-300 border-gray-500/30' :
    'bg-white/5 text-gray-500 border-white/10'

  return (
    <div className="bg-[#0e1f14] rounded-xl border border-white/5">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left p-4"
      >
        <p className="text-xs uppercase tracking-widest text-amber-400/70 font-medium mb-3">{label}</p>
        <div className="flex items-start gap-3">
          <Jersey kit={squad.kit} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-white font-bold text-sm">{squad.country} {squad.year}</span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${resultColor}`}>
                {squad.result}
              </span>
            </div>
            <p className="text-gray-500 text-xs">DT: {squad.coach} · {squad.competition}</p>
            <p className="text-gray-400 text-xs mt-1.5 leading-relaxed line-clamp-2">{squad.description}</p>
          </div>
          <span className="text-gray-600 flex-shrink-0 text-xs mt-1">{open ? '▲' : '▼'}</span>
        </div>
      </button>

      {open && (
        <div className="px-4 pb-4 border-t border-white/5 pt-3 animate-fade-up">
          <p className="text-gray-400 text-xs leading-relaxed mb-3">{squad.description}</p>
          <div className="grid grid-cols-2 gap-1.5">
            {squad.players.map((p, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className={`text-[10px] font-bold px-1.5 py-px rounded border flex-shrink-0 ${POS_COLOR[p.pos]}`}>
                  {p.pos}
                </span>
                <span className="text-gray-300 text-xs truncate">
                  {p.name}
                  {p.captain && <span className="text-amber-400 ml-1">(C)</span>}
                </span>
              </div>
            ))}
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

  const roundColor = {
    'Final': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    'Semifinal': 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    'Cuartos de Final': 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    'Octavos de Final': 'bg-teal-500/15 text-teal-400 border-teal-500/30',
    'Fase de Grupos': 'bg-green-500/15 text-green-400 border-green-500/30',
  }[match.round] || 'bg-white/5 text-gray-400 border-white/10'

  return (
    <div className="bg-[#0e1f14] rounded-xl border border-white/5 p-4">
      <p className="text-xs uppercase tracking-widest text-amber-400/70 font-medium mb-3">⚽ Partido Histórico ARG</p>

      {/* Score header */}
      <div className="flex items-center gap-2 flex-wrap mb-1">
        <span className="text-white font-black text-base">🇦🇷 ARG {match.score} {match.opponent}</span>
        {match.scoreDetail && <span className="text-gray-500 text-xs">{match.scoreDetail}</span>}
      </div>
      <div className="flex items-center gap-2 flex-wrap mb-2">
        <span className="text-amber-400 text-xs font-bold">{match.year}</span>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${roundColor}`}>{match.round}</span>
      </div>

      {/* Goals */}
      {match.goals.length > 0 && (
        <div className="flex gap-1.5 flex-wrap mb-3">
          {match.goals.map((g, i) => (
            <span key={i} className="text-[10px] bg-white/5 text-gray-400 px-1.5 py-0.5 rounded border border-white/10">
              ⚽ {g.player} {g.minute}'
            </span>
          ))}
        </div>
      )}

      <p className="text-gray-400 text-xs leading-relaxed mb-3">{match.description}</p>

      {/* Video */}
      {playing && match.highlightsYoutubeId ? (
        <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
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
          className="relative w-full rounded-lg overflow-hidden cursor-pointer group bg-black"
          style={{ paddingBottom: '42%' }}
          onClick={() => setPlaying(true)}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
            src={`https://img.youtube.com/vi/${match.highlightsYoutubeId}/mqdefault.jpg`}
            alt=""
            onError={e => { e.target.style.display = 'none' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
              <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      ) : null}

      {/* Buttons */}
      <div className="flex gap-2 mt-3 flex-wrap">
        {match.highlightsYoutubeId ? (
          <button
            onClick={() => setPlaying(v => !v)}
            className="flex items-center gap-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            {playing ? 'Cerrar video' : 'Ver highlights'}
          </button>
        ) : (
          <a
            href={searchUrl(`Argentina vs ${match.opponent} ${match.year} highlights resumen`)}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-red-600/80 hover:bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
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
          className="flex items-center gap-1.5 border border-white/15 hover:border-white/30 text-gray-400 hover:text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
      <div className="border border-white/5 rounded-2xl p-4 opacity-40 select-none">
        <div className="flex items-center gap-3">
          <span className="text-gray-700 text-xl">🔒</span>
          <div>
            <p className="text-gray-700 font-semibold text-sm">Día {day + 1} — {milestone.date}</p>
            <p className="text-gray-800 text-xs">Se desbloquea el {milestone.date}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`rounded-2xl border transition-colors ${
      isToday
        ? 'border-amber-500/40 bg-[#132218] shadow-lg shadow-amber-900/20'
        : 'border-white/10 bg-[#0f1d13] hover:border-white/20'
    }`}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-amber-400 font-black text-lg flex-shrink-0 tabular-nums">
            {String(day + 1).padStart(2, '0')}
          </span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-white font-bold text-sm">{milestone.date}</span>
              {isToday && (
                <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/30 animate-pulse font-medium">
                  HOY
                </span>
              )}
            </div>
            <p className="text-gray-500 text-xs truncate">{milestone.title} · {milestone.year}</p>
          </div>
        </div>
        <span className="text-gray-500 text-sm flex-shrink-0">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="px-4 pb-5 border-t border-white/5 pt-4 grid gap-3 md:grid-cols-2 animate-fade-up">
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
        <span className="text-xs uppercase tracking-widest text-amber-400/80 font-medium">Día a día</span>
        <h2 className="text-3xl md:text-4xl font-black text-white mt-2">Camino al Mundial</h2>
        <p className="text-gray-400 mt-2 text-sm">
          {unlockedCount} de {dailyContent.length} días desbloqueados — cada día: un hito, un plantel argentino, un plantel histórico y un partido
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
