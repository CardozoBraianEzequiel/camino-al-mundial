import { useState, useEffect } from 'react'

const TARGET = new Date('2026-06-11T20:00:00')

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
      <div
        className="rounded-2xl px-5 py-4 min-w-[88px] text-center"
        style={{
          background: 'rgba(116,172,223,0.08)',
          border: '1px solid rgba(116,172,223,0.3)',
          boxShadow: '0 0 20px rgba(116,172,223,0.06) inset',
        }}
      >
        <span className="text-5xl md:text-7xl font-black text-white tabular-nums leading-none">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="mt-2 text-xs uppercase tracking-widest font-semibold" style={{ color: '#74ACDF' }}>
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
        <p className="text-4xl font-bold text-white">¡El Mundial ya empezó!</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex gap-3 md:gap-5 items-end">
        <TimeBlock value={timeLeft.days}    label="Días" />
        <span className="text-4xl md:text-6xl font-black pb-6 leading-none" style={{ color: 'rgba(116,172,223,0.5)' }}>:</span>
        <TimeBlock value={timeLeft.hours}   label="Horas" />
        <span className="text-4xl md:text-6xl font-black pb-6 leading-none" style={{ color: 'rgba(116,172,223,0.5)' }}>:</span>
        <TimeBlock value={timeLeft.minutes} label="Minutos" />
        <span className="text-4xl md:text-6xl font-black pb-6 leading-none" style={{ color: 'rgba(116,172,223,0.5)' }}>:</span>
        <TimeBlock value={timeLeft.seconds} label="Segundos" />
      </div>
      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
        hasta el primer partido — 11 de junio de 2026
      </p>
    </div>
  )
}
