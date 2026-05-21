import { useState } from 'react'
import { squads } from '../data/squads'

const POSITION_ORDER = { POR: 0, DEF: 1, MED: 2, DEL: 3 }
const POSITION_LABEL = { POR: 'Porteros', DEF: 'Defensores', MED: 'Mediocampistas', DEL: 'Delanteros' }
const POSITION_COLOR = {
  POR: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  DEF: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
  MED: 'text-green-400 bg-green-400/10 border-green-400/30',
  DEL: 'text-red-400 bg-red-400/10 border-red-400/30',
}

function Jersey({ kit, size = 'lg' }) {
  const s = size === 'lg' ? 120 : 60
  const { primary, secondary, stripes } = kit

  return (
    <svg width={s} height={s * 1.15} viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {stripes && (
          <pattern id={`stripes-${primary}`} patternUnits="userSpaceOnUse" width="10" height="1">
            <rect width="5" height="1" fill={primary} />
            <rect x="5" width="5" height="1" fill={secondary} />
          </pattern>
        )}
      </defs>
      {/* Cuerpo */}
      <path
        d="M28,22 L0,38 L16,50 L16,105 L84,105 L84,50 L100,38 L72,22 L62,12 Q50,18 38,12 Z"
        fill={stripes ? `url(#stripes-${primary})` : primary}
        stroke={secondary}
        strokeWidth="2"
      />
      {/* Cuello */}
      <path
        d="M38,12 Q50,22 62,12 Q56,32 44,32 Q38,32 38,12 Z"
        fill={secondary}
        stroke={secondary}
        strokeWidth="1"
      />
      {/* Mangas */}
      <path d="M28,22 L0,38 L16,50 L28,38 Z" fill={secondary} opacity="0.6" />
      <path d="M72,22 L100,38 L84,50 L72,38 Z" fill={secondary} opacity="0.6" />
    </svg>
  )
}

function PlayerCard({ player }) {
  return (
    <div className="flex items-center gap-3 bg-[#0e1f14] border border-white/5 rounded-xl p-3 hover:border-white/15 transition-colors">
      <span className="text-amber-400 font-black text-lg w-7 text-right flex-shrink-0">
        {player.number}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-white font-semibold text-sm truncate">
          {player.name}
          {player.captain && <span className="ml-1 text-amber-400 text-xs">(C)</span>}
        </p>
      </div>
      <span className={`text-xs font-bold px-2 py-0.5 rounded-full border flex-shrink-0 ${POSITION_COLOR[player.position]}`}>
        {player.position}
      </span>
    </div>
  )
}

function groupByPosition(players) {
  const groups = {}
  const seen = new Set()
  players.forEach(p => {
    if (seen.has(p.name)) return
    seen.add(p.name)
    if (!groups[p.position]) groups[p.position] = []
    groups[p.position].push(p)
  })
  return Object.entries(groups).sort(([a], [b]) => POSITION_ORDER[a] - POSITION_ORDER[b])
}

export default function WorldCupSection() {
  const [selected, setSelected] = useState(squads[0].id)
  const squad = squads.find(s => s.id === selected)
  const grouped = groupByPosition(squad.players)

  return (
    <section id="planteles" className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest text-amber-400/80 font-medium">Equipos históricos</span>
        <h2 className="text-3xl md:text-4xl font-black text-white mt-2">Planteles Mundialistas</h2>
        <p className="text-gray-400 mt-2 text-sm">Los equipos que hicieron historia</p>
      </div>

      {/* Selector */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {squads.map(s => (
          <button
            key={s.id}
            onClick={() => setSelected(s.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all
              ${selected === s.id
                ? 'bg-amber-400 text-black border-amber-400'
                : 'border-white/20 text-gray-300 hover:border-white/40 hover:text-white'
              }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Card del equipo */}
      <div className="bg-[#132218] border border-white/10 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 p-6 border-b border-white/10 bg-[#1a2f1e]">
          <div className="flex gap-4 items-end">
            <div className="flex flex-col items-center gap-1">
              <Jersey kit={squad.kitHome} size="lg" />
              <span className="text-gray-400 text-xs">Local</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Jersey kit={squad.kitAway} size="lg" />
              <span className="text-gray-400 text-xs">Visitante</span>
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start flex-wrap">
              <h3 className="text-2xl font-black text-white">{squad.country} {squad.year}</h3>
              <span className={`text-xs font-bold px-3 py-1 rounded-full border
                ${squad.result === 'CAMPEÓN'
                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                  : 'bg-white/5 text-gray-400 border-white/10'}`}>
                {squad.result}
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-1">
              <span className="text-gray-500">Sede:</span> {squad.host} &nbsp;·&nbsp;
              <span className="text-gray-500">DT:</span> {squad.coach}
            </p>
            <p className="text-gray-500 text-sm mt-1">
              {squad.players.filter((p, i, a) => a.findIndex(x => x.name === p.name) === i).length} jugadores
            </p>
          </div>
        </div>

        {/* Players */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {grouped.map(([pos, players]) => (
              <div key={pos}>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">
                  {POSITION_LABEL[pos]}
                </h4>
                <div className="flex flex-col gap-2">
                  {players.map(p => <PlayerCard key={`${p.number}-${p.name}`} player={p} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
