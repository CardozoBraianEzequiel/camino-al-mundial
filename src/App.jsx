import Countdown from './components/Countdown'
import DailyView from './components/DailyView'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a1a0f] text-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a1a0f]/90 backdrop-blur border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-black text-amber-400 text-lg tracking-tight">⚽ Camino al Mundial</span>
          <a
            href="#dias"
            className="text-gray-400 hover:text-white text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
          >
            Días →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d2a14] via-[#0a1a0f] to-[#0a1a0f] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg, transparent, transparent 40px, rgba(255,255,255,0.15) 40px, rgba(255,255,255,0.15) 42px
            ), repeating-linear-gradient(
              90deg, transparent, transparent 60px, rgba(255,255,255,0.1) 60px, rgba(255,255,255,0.1) 62px
            )`,
          }}
        />
        <div className="relative z-10 text-center px-4 pt-20 pb-16 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400
            text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            Mundial 2026 · USA · Canada · Mexico
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-4">
            Camino al<br /><span className="text-amber-400">Mundial</span>
          </h1>
          <p className="text-gray-400 text-lg mb-12 max-w-md mx-auto">
            Cada día que falta desbloquea un hito histórico, un plantel argentino, un equipo legendario y un partido para revivir
          </p>
          <Countdown />
          <div className="mt-10">
            <a
              href="#dias"
              className="border border-white/20 hover:border-amber-500/60 text-gray-300 hover:text-white
                text-sm font-semibold px-6 py-3 rounded-full transition-all hover:bg-amber-500/5 inline-block"
            >
              Ver el día de hoy ↓
            </a>
          </div>
        </div>
      </header>

      <div className="h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent mx-4 max-w-5xl md:mx-auto" />

      <main>
        <DailyView />
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-gray-600 text-sm">
        <p>
          Hecho con ❤️ para el Mundial 2026 ·{' '}
          <a
            href="https://github.com/CardozoBraianEzequiel/camino-al-mundial"
            target="_blank" rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}
