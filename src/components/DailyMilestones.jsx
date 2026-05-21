import { useState } from 'react'
import { milestones, MILESTONES_START } from '../data/milestones'

function getDayIndex() {
  const now = new Date()
  const diff = now - MILESTONES_START
  return Math.max(0, Math.floor(diff / 86400000))
}

function MilestoneCard({ milestone, unlocked, active }) {
  const [open, setOpen] = useState(false)

  if (!unlocked) {
    return (
      <div className="relative rounded-2xl border border-white/5 bg-[#0e1f14] p-5 opacity-50 select-none">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl grayscale">🔒</span>
          <span className="text-xs uppercase tracking-widest text-gray-600">
            {milestone.date}
          </span>
        </div>
        <p className="text-gray-700 font-semibold text-sm">
          Se desbloquea el {milestone.date}
        </p>
      </div>
    )
  }

  return (
    <button
      onClick={() => setOpen(o => !o)}
      className={`w-full text-left rounded-2xl border p-5 transition-all duration-300 cursor-pointer
        ${active
          ? 'border-amber-500/60 bg-[#1a2f1e] pulse-gold shadow-amber-900/40 shadow-lg'
          : 'border-white/10 bg-[#132218] hover:border-amber-500/40 hover:bg-[#1a2f1e]'}
      `}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3 flex-1">
          <span className="text-2xl">{milestone.icon}</span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs uppercase tracking-widest text-amber-400/80 font-medium">
                {milestone.date}
              </span>
              <span className="text-xs bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/20">
                {milestone.year}
              </span>
              {active && (
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full border border-green-500/30 animate-pulse">
                  Hoy
                </span>
              )}
            </div>
            <h3 className="text-white font-bold text-sm md:text-base mt-0.5">
              {milestone.title}
            </h3>
          </div>
        </div>
        <span className="text-gray-500 text-lg mt-1 flex-shrink-0">
          {open ? '▲' : '▼'}
        </span>
      </div>

      {open && (
        <p className="mt-3 text-gray-300 text-sm leading-relaxed border-t border-white/10 pt-3 animate-fade-up">
          {milestone.description}
        </p>
      )}
    </button>
  )
}

export default function DailyMilestones() {
  const dayIndex = getDayIndex()
  const unlockedCount = Math.min(dayIndex + 1, milestones.length)

  return (
    <section id="hitos" className="py-16 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest text-amber-400/80 font-medium">Un hito por día</span>
        <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
          Hitos Mundialistas
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          {unlockedCount} de {milestones.length} desbloqueados — uno nuevo cada día hasta el Mundial
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {milestones.map((m, i) => (
          <MilestoneCard
            key={m.day}
            milestone={m}
            unlocked={i < unlockedCount}
            active={i === dayIndex}
          />
        ))}
      </div>
    </section>
  )
}
