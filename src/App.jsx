import Countdown from './components/Countdown'
import DailyMilestones from './components/DailyMilestones'
import WorldCupSection from './components/WorldCupSection'
import ArgentinaMatches from './components/ArgentinaMatches'

const NAV_LINKS = [
  { href: '#hitos',     label: 'Hitos' },
  { href: '#planteles', label: 'Planteles' },
  { href: '#partidos',  label: 'Partidos ARG' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a1a0f] text-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a1a0f]/90 backdrop-blur border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-black text-amber-400 text-lg tracking-tight">⚽ Camino al Mundial</span>
          <div className="flex gap-1">
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-400 hover:text-white text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
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
            Camino al
            <br />
            <span className="text-amber-400">Mundial</span>
          </h1>

          <p className="text-gray-400 text-lg mb-12 max-w-md mx-auto">
            Faltan solo días para que empiece el torneo más grande del mundo
          </p>

          <Countdown />

          <div className="flex justify-center gap-4 mt-12 flex-wrap">
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="border border-white/20 hover:border-amber-500/60 text-gray-300 hover:text-white
                  text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:bg-amber-500/5"
              >
                {l.label} ↓
              </a>
            ))}
          </div>
        </div>
      </header>

      <div className="h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent mx-4 max-w-5xl md:mx-auto" />

      <main className="max-w-5xl mx-auto">
        <DailyMilestones />
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mx-4" />
        <WorldCupSection />
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mx-4" />
        <ArgentinaMatches />
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-gray-600 text-sm">
        <p>
          Hecho con ❤️ para el Mundial 2026 ·{' '}
          <a
            href="https://github.com/CardozoBraianEzequiel/camino-al-mundial"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}
