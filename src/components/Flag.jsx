const CODES = {
  'Argentina':           'ar',
  'Alemania':            'de',
  'Alemania Occidental': 'de',
  'Francia':             'fr',
  'Países Bajos':        'nl',
  'Inglaterra':          'gb-eng',
  'Brasil':              'br',
  'Italia':              'it',
  'España':              'es',
  'Uruguay':             'uy',
  'Croacia':             'hr',
  'Nigeria':             'ng',
  'Grecia':              'gr',
  'Australia':           'au',
  'Suiza':               'ch',
  'Bélgica':             'be',
  'México':              'mx',
  'Serbia y Montenegro': 'rs',
  'Algeria':             'dz',
  'Austria':             'at',
  'Jordan':              'jo',
  'Arabia Saudita':      'sa',
  'Cabo Verde':          'cv',
  'EE.UU.':              'us',
  'Paraguay':            'py',
  'Turquía':             'tr',
  'Egipto':              'eg',
  'Nueva Zelanda':       'nz',
  'Irán':                'ir',
  'Portugal':            'pt',
  'Colombia':            'co',
  'Canadá':              'ca',
  'Marruecos':           'ma',
  'Senegal':             'sn',
  'Ghana':               'gh',
  'Panamá':              'pa',
  'DR Congo':            'cd',
  'Uzbekistán':          'uz',
  'Curaçao':             'cw',
  'Costa de Marfil':     'ci',
  'Corea del Sur':       'kr',
  'Japón':               'jp',
  'Suecia':              'se',
  'Túnez':               'tn',
  'Iraq':                'iq',
  'Noruega':             'no',
  'Bosnia y Herzegovina':'ba',
  'Qatar':               'qa',
  'Dinamarca':           'dk',
  'Irlanda del Norte':   'gb-nir',
  'Escocia':             'gb-sct',
  'Sudáfrica':           'za',
  'Rep. Checa':          'cz',
}

export default function Flag({ name, size = 18 }) {
  const code = CODES[name]
  if (!code) return null
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      alt={name}
      style={{
        height: `${size}px`,
        width: 'auto',
        borderRadius: '2px',
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
      }}
    />
  )
}
