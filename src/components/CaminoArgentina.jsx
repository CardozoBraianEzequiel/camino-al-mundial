import { useState } from 'react'
import { argGroupStage, pathFirst, pathSecond } from '../data/worldCup2026'
import Flag from './Flag'

const CELESTE = '#74ACDF'
const ORO = '#F6B940'

function MatchCard({ match }) {
  const today = new Date()
  const matchDate = new Date(match.date)
  const isPast = matchDate < today

  return (
    <div
      className="rounded-xl p-4 flex items-center gap-4"
      style={{
        background: 'rgba(116,172,223,0.06)',
        border: `1px solid rgba(116,172,223,0.2)`,
      }}
    >
      <div className="w-10 flex items-center justify-center">
        <Flag name={match.opponent} size={24} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-bold text-white flex items-center gap-1.5 flex-wrap">
          <Flag name="Argentina" size={16} /> Argentina vs {match.opponent} <Flag name={match.opponent} size={16} />
        </div>
        <div className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
          {match.dateLabel} · {match.timeArg}
        </div>
        <div className="text-xs mt-0.5 truncate" style={{ color: 'rgba(255,255,255,0.3)' }}>
          {match.stadium}, {match.city}
        </div>
      </div>
      <div className="shrink-0">
        <span
          className="text-xs font-bold px-2 py-1 rounded-full"
          style={
            isPast
              ? { background: 'rgba(116,172,223,0.15)', color: CELESTE, border: `1px solid ${CELESTE}30` }
              : { background: 'rgba(246,185,64,0.12)', color: ORO, border: '1px solid rgba(246,185,64,0.3)' }
          }
        >
          {isPast ? 'Jugado' : 'Próximo'}
        </span>
      </div>
    </div>
  )
}

function OpponentChip({ opponent, selected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(selected ? null : opponent.name)}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold transition-all"
      style={{
        background: selected ? `${CELESTE}18` : 'rgba(255,255,255,0.04)',
        border: selected ? `1px solid ${CELESTE}55` : '1px solid rgba(255,255,255,0.1)',
        color: selected ? CELESTE : 'rgba(255,255,255,0.65)',
        boxShadow: selected ? `0 0 10px ${CELESTE}18` : 'none',
      }}
    >
      <Flag name={opponent.name} size={16} />
      <span>{opponent.name}</span>
    </button>
  )
}

function RoundCard({ roundData, index, total, selectedOpponent, onSelectOpponent }) {
  const selected = roundData.opponents.find(o => o.name === selectedOpponent)
  const isLast = index === total - 1

  return (
    <div className="flex gap-3 md:gap-4">
      {/* Timeline */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center font-black text-xs z-10 shrink-0"
          style={{ background: CELESTE, color: '#060918' }}
        >
          {roundData.emoji}
        </div>
        {!isLast && (
          <div
            className="w-px flex-1 mt-1"
            style={{ background: `${CELESTE}25`, minHeight: '40px' }}
          />
        )}
      </div>

      {/* Card */}
      <div className={`flex-1 ${!isLast ? 'pb-6' : 'pb-2'}`}>
        <div
          className="rounded-2xl p-5"
          style={{
            background: 'rgba(116,172,223,0.04)',
            border: `1px solid rgba(116,172,223,0.14)`,
          }}
        >
          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
            <h3 className="font-black text-white text-lg leading-tight">{roundData.round}</h3>
            <span className="text-xs font-semibold shrink-0" style={{ color: `${CELESTE}70` }}>
              {roundData.dates}
            </span>
          </div>
          <p className="text-sm font-bold mb-1" style={{ color: CELESTE }}>
            {roundData.description}
          </p>
          <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)' }}>
            {roundData.context}
          </p>

          <div className="flex flex-wrap gap-2">
            {roundData.opponents.map(opp => (
              <OpponentChip
                key={opp.name}
                opponent={opp}
                selected={selectedOpponent === opp.name}
                onSelect={onSelectOpponent}
              />
            ))}
          </div>

          {selected && (
            <div
              className="mt-4 p-3 rounded-xl text-sm leading-relaxed"
              style={{
                background: `${CELESTE}0C`,
                border: `1px solid ${CELESTE}22`,
                color: 'rgba(255,255,255,0.72)',
              }}
            >
              <span className="font-bold" style={{ color: CELESTE }}>
                {roundData.id === 'final' ? '🏆 Final vs ' : '🤔 Si llega '}
                {selected.name}:{' '}
              </span>
              {selected.note}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CaminoArgentina() {
  const [position, setPosition] = useState('first')
  const [selectedOpponents, setSelectedOpponents] = useState({})

  const path = position === 'first' ? pathFirst : pathSecond

  const handleSelect = (roundId, teamName) => {
    setSelectedOpponents(prev => ({ ...prev, [roundId]: teamName }))
  }

  const handlePositionChange = pos => {
    setPosition(pos)
    setSelectedOpponents({})
  }

  return (
    <section id="camino" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            style={{
              backgroundColor: `${CELESTE}12`,
              border: `1px solid ${CELESTE}40`,
              color: CELESTE,
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: ORO }} />
            Copa del Mundo 2026 · Grupo J
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
            El Camino de <span style={{ color: CELESTE }}>Argentina</span>
          </h2>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Tocá un rival posible en cada ronda para ver el análisis del cruce
          </p>
        </div>

        {/* Group Stage */}
        <div className="mb-10">
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: `${CELESTE}70` }}
          >
            ⚽ Fase de Grupos — Grupo J
          </h3>
          <div
            className="rounded-2xl p-4 mb-4 flex flex-wrap gap-3 items-center"
            style={{
              background: 'rgba(116,172,223,0.07)',
              border: `1px solid rgba(116,172,223,0.2)`,
            }}
          >
            {argGroupStage.groupTeams.map(t => (
              <div key={t.name} className="flex items-center gap-1.5">
                <Flag name={t.name} size={16} />
                <span
                  className="text-sm font-semibold"
                  style={{ color: t.name === 'Argentina' ? CELESTE : 'rgba(255,255,255,0.7)' }}
                >
                  {t.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {argGroupStage.matches.map((match, i) => (
              <MatchCard key={i} match={match} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ background: `${CELESTE}18` }} />

        {/* Position toggle */}
        <div className="mb-8">
          <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
            ¿Cómo termina Argentina en el grupo?
          </p>
          <div className="flex gap-2">
            {[
              { key: 'first',  data: pathFirst },
              { key: 'second', data: pathSecond },
            ].map(({ key, data }) => (
              <button
                key={key}
                onClick={() => handlePositionChange(key)}
                className="px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
                style={
                  position === key
                    ? { background: CELESTE, color: '#060918', border: 'none' }
                    : {
                        background: 'rgba(116,172,223,0.07)',
                        color: `${CELESTE}90`,
                        border: `1px solid ${CELESTE}22`,
                      }
                }
              >
                {data.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bracket path */}
        <div>
          {path.rounds.map((round, index) => (
            <RoundCard
              key={`${position}-${round.id}`}
              roundData={round}
              index={index}
              total={path.rounds.length}
              selectedOpponent={selectedOpponents[round.id] ?? null}
              onSelectOpponent={teamName => handleSelect(round.id, teamName)}
            />
          ))}
        </div>

        <p className="text-xs text-center mt-6" style={{ color: 'rgba(255,255,255,0.18)' }}>
          * Los rivales mostrados son los equipos reales de cada grupo según el sorteo oficial de la FIFA.
          Los terceros clasificados en 16avos dependen de los resultados de grupos.
        </p>
      </div>
    </section>
  )
}
