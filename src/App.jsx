import Countdown from './components/Countdown'
import DailyView from './components/DailyView'
import CaminoArgentina from './components/CaminoArgentina'
import SolDeMayo from './components/SolDeMayo'

const CELESTE = '#74ACDF'
const ORO     = '#F6B940'

export default function App() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#060918' }}>

      {/* Nav */}
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{ backgroundColor: 'rgba(6,9,24,0.92)', borderColor: `${CELESTE}18` }}
      >
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SolDeMayo size={28} />
            <span className="font-black text-lg tracking-tight" style={{ color: CELESTE }}>
              Camino al Mundial
            </span>
          </div>
          <div className="flex items-center gap-1">
            <a
              href="#dias"
              className="text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors"
              style={{ color: `${CELESTE}99` }}
              onMouseEnter={e => e.target.style.color = CELESTE}
              onMouseLeave={e => e.target.style.color = `${CELESTE}99`}
            >
              Días
            </a>
            <a
              href="#camino"
              className="text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors"
              style={{ color: `${CELESTE}99` }}
              onMouseEnter={e => e.target.style.color = CELESTE}
              onMouseLeave={e => e.target.style.color = `${CELESTE}99`}
            >
              Camino →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden arg-stripes">
        {/* Gradiente de fondo azul argentino */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(116,172,223,0.18) 0%, transparent 70%),
                         linear-gradient(180deg, #0a1530 0%, #060918 100%)`,
          }}
        />

        {/* Sol decorativo de fondo (grande y tenue) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="sol-spin opacity-[0.06]">
            <SolDeMayo size={520} />
          </div>
        </div>

        <div className="relative z-10 text-center px-4 pt-20 pb-16 max-w-5xl mx-auto">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
            style={{
              backgroundColor: `${CELESTE}12`,
              border: `1px solid ${CELESTE}40`,
              color: CELESTE,
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: CELESTE }} />
            Mundial 2026 · USA · Canada · Mexico
          </div>

          {/* Sol de Mayo principal */}
          <div className="flex justify-center mb-6 sol-glow">
            <SolDeMayo size={120} />
          </div>

          {/* Título */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-4">
            <span className="text-white">Camino al</span>
            <br />
            <span style={{ color: CELESTE }}>Mundial</span>
          </h1>

          {/* Franja de la bandera debajo del título */}
          <div className="flex justify-center mb-6 mt-5">
            <div className="flex flex-col gap-[3px] w-48 overflow-hidden rounded-sm opacity-70">
              <div className="h-[6px] rounded-full" style={{ backgroundColor: CELESTE }} />
              <div className="h-[6px] rounded-full bg-white" />
              <div className="h-[6px] rounded-full" style={{ backgroundColor: CELESTE }} />
            </div>
          </div>

          <p className="text-lg mb-12 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Cada día que falta desbloquea un hito histórico, un plantel argentino,
            un equipo legendario y un partido para revivir
          </p>

          <Countdown />

          <div className="mt-10">
            <a
              href="#dias"
              className="inline-block text-sm font-bold px-6 py-3 rounded-full transition-all"
              style={{
                border: `1px solid ${CELESTE}40`,
                color: `${CELESTE}CC`,
              }}
              onMouseEnter={e => {
                e.target.style.borderColor = `${CELESTE}80`
                e.target.style.color = CELESTE
                e.target.style.backgroundColor = `${CELESTE}0A`
              }}
              onMouseLeave={e => {
                e.target.style.borderColor = `${CELESTE}40`
                e.target.style.color = `${CELESTE}CC`
                e.target.style.backgroundColor = 'transparent'
              }}
            >
              Ver el día de hoy ↓
            </a>
          </div>
        </div>
      </header>

      {/* Separador bandera */}
      <div className="flex flex-col gap-[2px] px-0">
        <div className="h-[3px] w-full" style={{ backgroundColor: `${CELESTE}50` }} />
        <div className="h-[3px] w-full" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />
        <div className="h-[3px] w-full" style={{ backgroundColor: `${CELESTE}50` }} />
      </div>

      <main>
        <DailyView />

        {/* Separador */}
        <div className="flex flex-col gap-[2px] px-0">
          <div className="h-[3px] w-full" style={{ backgroundColor: `${CELESTE}50` }} />
          <div className="h-[3px] w-full" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />
          <div className="h-[3px] w-full" style={{ backgroundColor: `${CELESTE}50` }} />
        </div>

        <CaminoArgentina />
      </main>

      {/* Footer */}
      <footer
        className="border-t py-8 text-center text-sm"
        style={{ borderColor: `${CELESTE}15`, color: 'rgba(255,255,255,0.25)' }}
      >
        <div className="flex justify-center mb-3">
          <SolDeMayo size={32} />
        </div>
        <p>
          Hecho con ❤️ para el Mundial 2026 ·{' '}
          <a
            href="https://github.com/CardozoBraianEzequiel/camino-al-mundial"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: `${CELESTE}60` }}
            onMouseEnter={e => e.target.style.color = CELESTE}
            onMouseLeave={e => e.target.style.color = `${CELESTE}60`}
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}
