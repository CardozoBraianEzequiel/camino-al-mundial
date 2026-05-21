import { useState } from 'react'
import { matches } from '../data/matches'

function VideoPlayer({ match }) {
  const [playing, setPlaying] = useState(false)

  const searchUrl = (query) =>
    `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`

  if (playing && match.highlightsYoutubeId) {
    return (
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute inset-0 w-full h-full rounded-xl"
          src={`https://www.youtube.com/embed/${match.highlightsYoutubeId}?autoplay=1&rel=0`}
          title={`Argentina vs ${match.opponent} ${match.year}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {/* Thumbnail / Placeholder */}
      <div
        className={`relative w-full rounded-xl overflow-hidden bg-[#0a1a0f] border border-white/10
          ${match.highlightsYoutubeId ? 'cursor-pointer group' : ''}`}
        style={{ paddingBottom: '56.25%' }}
        onClick={() => match.highlightsYoutubeId && setPlaying(true)}
      >
        {match.highlightsYoutubeId ? (
          <>
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
              src={`https://img.youtube.com/vi/${match.highlightsYoutubeId}/maxresdefault.jpg`}
              alt={`Thumbnail ${match.opponent} ${match.year}`}
              onError={e => { e.target.style.display = 'none' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl
                group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
              Ver highlights
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 gap-2">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">Video no configurado</span>
          </div>
        )}
      </div>

      {/* Botones */}
      <div className="flex gap-2 flex-wrap">
        {match.highlightsYoutubeId ? (
          <button
            onClick={() => setPlaying(true)}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold
              px-4 py-2 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Ver highlights
          </button>
        ) : (
          <a
            href={searchUrl(`Argentina vs ${match.opponent} ${match.year} highlights resumen`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600/80 hover:bg-red-600 text-white text-sm font-semibold
              px-4 py-2 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Buscar highlights
          </a>
        )}

        <a
          href={
            match.fullMatchYoutubeId
              ? `https://www.youtube.com/watch?v=${match.fullMatchYoutubeId}`
              : searchUrl(match.fullMatchSearch)
          }
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-gray-300
            hover:text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          {match.fullMatchYoutubeId ? 'Partido completo' : 'Buscar partido completo'}
        </a>
      </div>
    </div>
  )
}

function MatchCard({ match }) {
  const [expanded, setExpanded] = useState(false)

  const roundColors = {
    'Final': 'bg-amber-500/20 text-amber-400 border-amber-500/40',
    'Semifinal': 'bg-purple-500/20 text-purple-400 border-purple-500/40',
    'Cuartos de Final': 'bg-blue-500/20 text-blue-400 border-blue-500/40',
    'Fase de Grupos': 'bg-green-500/20 text-green-400 border-green-500/40',
  }
  const roundColor = roundColors[match.round] || 'bg-white/10 text-gray-400 border-white/20'

  return (
    <div className="bg-[#132218] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">
      {/* Header */}
      <div className="p-5 border-b border-white/10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="text-amber-400 font-black text-lg">{match.year}</span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${roundColor}`}>
                {match.round}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center">
                <p className="text-white font-black text-2xl leading-none">🇦🇷 ARG</p>
              </div>
              <div className="text-center">
                <p className="text-amber-400 font-black text-3xl leading-none">
                  {match.score}
                </p>
                {match.scoreDetail && (
                  <p className="text-gray-500 text-xs mt-0.5">{match.scoreDetail}</p>
                )}
              </div>
              <div className="text-center">
                <p className="text-white font-black text-xl leading-none">{match.opponent}</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-2">{match.stadium}</p>
          </div>
        </div>

        {/* Goals */}
        <div className="flex gap-2 flex-wrap mt-3">
          {match.goals.map((g, i) => (
            <span key={i} className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-lg border border-white/10">
              ⚽ {g.player} <span className="text-gray-500">{g.minute}'</span>
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="p-5">
        <p className="text-gray-300 text-sm leading-relaxed">
          {expanded ? match.description : match.description.slice(0, 150) + '…'}
        </p>
        <button
          onClick={() => setExpanded(e => !e)}
          className="text-amber-400 text-xs font-semibold mt-1 hover:text-amber-300 transition-colors"
        >
          {expanded ? 'Ver menos' : 'Leer más'}
        </button>

        <div className="mt-4">
          <VideoPlayer match={match} />
        </div>
      </div>
    </div>
  )
}

export default function ArgentinaMatches() {
  return (
    <section id="partidos" className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest text-amber-400/80 font-medium">Selección Argentina</span>
        <h2 className="text-3xl md:text-4xl font-black text-white mt-2">Partidos Históricos</h2>
        <p className="text-gray-400 mt-2 text-sm">
          Los partidos que quedaron grabados en la historia — hacé click en el video para ver los highlights
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {matches.map(match => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </section>
  )
}
