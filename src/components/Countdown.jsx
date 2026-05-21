import { useState, useEffect } from 'react'

const TARGET = new Date('2026-06-11T20:00:00') // Primer partido del Mundial 2026

function getTimeLeft() {
  const diff = TARGET - Date.now()
  if (diff <= 0) return null
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

function TimeBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#132218] border border-amber-500/30 rounded-xl px-6 py-4 min-w-[90px] text-center shadow-lg">
        <span className="text-5xl md:text-7xl font-black text-amber-400 tabular-nums leading-none">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="mt-2 text-xs uppercase tracking-widest text-gray-400 font-medium">
        {label}
      </span>
    </div>
  )
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  if (!timeLeft) {
    return (
      <div className="text-center py-8">
        <p className="text-4xl font-bold text-amber-400">¡El Mundial ya empezó!</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex gap-3 md:gap-6 items-end">
        <TimeBlock value={timeLeft.days}    label="Días" />
        <span className="text-5xl md:text-7xl font-black text-amber-500/60 pb-6 leading-none">:</span>
        <TimeBlock value={timeLeft.hours}   label="Horas" />
        <span className="text-5xl md:text-7xl font-black text-amber-500/60 pb-6 leading-none">:</span>
        <TimeBlock value={timeLeft.minutes} label="Minutos" />
        <span className="text-5xl md:text-7xl font-black text-amber-500/60 pb-6 leading-none">:</span>
        <TimeBlock value={timeLeft.seconds} label="Segundos" />
      </div>
      <p className="text-gray-400 text-sm">hasta el primer partido — 11 de junio de 2026</p>
    </div>
  )
}
