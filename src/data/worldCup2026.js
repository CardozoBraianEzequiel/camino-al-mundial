// Datos del Mundial 2026 — Grupo J (Argentina) y bracket de eliminación directa
// Fuente: FIFA / Wikipedia (sorteo diciembre 2025)

export const argGroupStage = {
  group: 'J',
  groupTeams: [
    { name: 'Argentina', flag: '🇦🇷' },
    { name: 'Algeria',   flag: '🇩🇿' },
    { name: 'Austria',   flag: '🇦🇹' },
    { name: 'Jordan',    flag: '🇯🇴' },
  ],
  matches: [
    {
      date: '2026-06-16',
      dateLabel: '16 de junio',
      opponent: 'Algeria',
      opponentFlag: '🇩🇿',
      stadium: 'Arrowhead Stadium',
      city: 'Kansas City',
      timeArg: '22:00 ARG',
    },
    {
      date: '2026-06-22',
      dateLabel: '22 de junio',
      opponent: 'Austria',
      opponentFlag: '🇦🇹',
      stadium: 'AT&T Stadium',
      city: 'Arlington',
      timeArg: '14:00 ARG',
    },
    {
      date: '2026-06-27',
      dateLabel: '27 de junio',
      opponent: 'Jordan',
      opponentFlag: '🇯🇴',
      stadium: 'AT&T Stadium',
      city: 'Arlington',
      timeArg: '23:00 ARG',
    },
  ],
}

// Bracket oficial FIFA — Argentina como 1° del Grupo J
// M86: 1°J vs 2°H → M95 → M100 (QF) → M102 (SF) → M104 (Final)
export const pathFirst = {
  label: '1° del Grupo',
  rounds: [
    {
      id: 'r32',
      round: 'Dieciseisavos',
      emoji: '32',
      dates: '28 jun – 3 jul',
      description: 'vs 2° del Grupo H',
      context:
        'Al terminar primero, Argentina se cruza con el segundo del Grupo H, que tiene a España, Uruguay, Arabia Saudita y Cabo Verde.',
      opponents: [
        { name: 'España',        flag: '🇪🇸', note: 'Campeones de la Eurocopa 2024. Juego de posesión asfixiante.' },
        { name: 'Uruguay',       flag: '🇺🇾', note: 'El clásico rioplatense. Nuñez, Valverde y Araújo.' },
        { name: 'Arabia Saudita',flag: '🇸🇦', note: 'Los mismos que nos ganaron en Qatar 2022. ¿Otra vez?' },
        { name: 'Cabo Verde',    flag: '🇨🇻', note: 'El rival menos peligroso del grupo.' },
      ],
    },
    {
      id: 'r16',
      round: 'Octavos de Final',
      emoji: '16',
      dates: '4 – 7 jul',
      description: 'vs 2° Grupo D o 2° Grupo G',
      context:
        'El rival viene del duelo entre segundos del Grupo D (USA, Paraguay, Australia, Turquía) y el Grupo G (Bélgica, Egipto, Irán, Nueva Zelanda).',
      opponents: [
        { name: 'Bélgica',      flag: '🇧🇪', note: 'Generación renovada con Doku y Trossard. Muy peligrosos.' },
        { name: 'EE.UU.',       flag: '🇺🇸', note: 'Locales. El estadio en contra. Partido de presión máxima.' },
        { name: 'Paraguay',     flag: '🇵🇾', note: 'Rival sudamericano, siempre complicado para Argentina.' },
        { name: 'Turquía',      flag: '🇹🇷', note: 'Sólidos y físicos. Arda Güler como figura.' },
        { name: 'Egipto',       flag: '🇪🇬', note: 'Con Mo Salah en plena madurez futbolística.' },
        { name: 'Nueva Zelanda',flag: '🇳🇿', note: 'El rival más accesible del bracket.' },
      ],
    },
    {
      id: 'qf',
      round: 'Cuartos de Final',
      emoji: 'QF',
      dates: '9 – 11 jul',
      description: 'vs 1° Grupo B o 1° Grupo K',
      context:
        'El bracket de Canadá (local) y Portugal. Uno de los dos llega a cuartos de final.',
      opponents: [
        { name: 'Portugal',  flag: '🇵🇹', note: 'Con Vitinha, Bernardo y Leao. Una de las mejores generaciones de su historia.' },
        { name: 'Colombia',  flag: '🇨🇴', note: 'La revelación de CONMEBOL con James Rodríguez y Luis Díaz.' },
        { name: 'Canadá',    flag: '🇨🇦', note: 'Anfitriones. Davies, Johnston y una multitud empujándolos.' },
        { name: 'Suiza',     flag: '🇨🇭', note: 'Siempre mejor de lo esperado. Xhaka como capitán veterano.' },
      ],
    },
    {
      id: 'sf',
      round: 'Semifinal',
      emoji: 'SF',
      dates: '14 – 15 jul',
      description: 'vs equipo del bracket C/F/L',
      context:
        'El lado del cuadro con Brasil, Países Bajos e Inglaterra. El partido más esperado del torneo.',
      opponents: [
        { name: 'Brasil',          flag: '🇧🇷', note: '¿La primera semifinal Argentina-Brasil en un Mundial?' },
        { name: 'Países Bajos',    flag: '🇳🇱', note: 'La revancha del 78 y el 22. La última vez ganamos los dos.' },
        { name: 'Inglaterra',      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', note: 'La revancha del 86 y el 98. Maradona vive.' },
        { name: 'Marruecos',       flag: '🇲🇦', note: 'La sorpresa de Qatar, quieren repetirlo en su primer no-africano.' },
      ],
    },
    {
      id: 'final',
      round: 'Final',
      emoji: '🏆',
      dates: '19 de julio · MetLife Stadium, Nueva Jersey',
      description: 'vs el campeón del otro bracket',
      context:
        'El otro lado del cuadro tiene a Alemania, Francia y España. Cualquier final sería histórica.',
      opponents: [
        { name: 'Alemania', flag: '🇩🇪', note: 'La revancha perfecta. 2014 fue de ellos. 2026 puede ser nuestro.' },
        { name: 'Francia',  flag: '🇫🇷', note: 'La revancha de Qatar 2022. Mbappé de nuevo enfrente.' },
        { name: 'España',   flag: '🇪🇸', note: 'Si llegan desde el otro lado del cuadro, sería una final de ensueño.' },
        { name: 'EE.UU.',   flag: '🇺🇸', note: 'El sueño americano en su propio Mundial. Partido político y futbolístico.' },
      ],
    },
  ],
}

// Bracket oficial FIFA — Argentina como 2° del Grupo J
// M84: 2°J vs 1°H → M93 → M98 (QF) → M101 (SF) → M104 (Final)
export const pathSecond = {
  label: '2° del Grupo',
  rounds: [
    {
      id: 'r32',
      round: 'Dieciseisavos',
      emoji: '32',
      dates: '28 jun – 3 jul',
      description: 'vs 1° del Grupo H',
      context:
        'Al terminar segundo, Argentina choca directo con el ganador del Grupo H. El favorito es España.',
      opponents: [
        { name: 'España',        flag: '🇪🇸', note: 'Los favoritos del Grupo H. Campeones de la Euro 2024.' },
        { name: 'Uruguay',       flag: '🇺🇾', note: 'Si dan la sorpresa y lideran el grupo.' },
        { name: 'Arabia Saudita',flag: '🇸🇦', note: '¿Una sorpresa como en Qatar 2022 primero y de vuelta en 16avos? Improbable.' },
        { name: 'Cabo Verde',    flag: '🇨🇻', note: 'El escenario más optimista si ganaron el Grupo H.' },
      ],
    },
    {
      id: 'r16',
      round: 'Octavos de Final',
      emoji: '16',
      dates: '4 – 7 jul',
      description: 'vs 2° Grupo K o 2° Grupo L',
      context:
        'El camino pasa por el bracket de Portugal/Colombia y el de Inglaterra/Croacia. Rivales de mucho nivel.',
      opponents: [
        { name: 'Colombia', flag: '🇨🇴', note: 'Si terminan segundos del Grupo K detrás de Portugal.' },
        { name: 'Croacia',  flag: '🇭🇷', note: 'Siempre difíciles. Terceros en Qatar 2022. Modrić como bandera.' },
        { name: 'Portugal', flag: '🇵🇹', note: 'Si terminan segundos detrás de Colombia en el Grupo K.' },
        { name: 'Ghana',    flag: '🇬🇭', note: 'Si sorprenden en el Grupo L con Kudus como figura.' },
      ],
    },
    {
      id: 'qf',
      round: 'Cuartos de Final',
      emoji: 'QF',
      dates: '9 – 11 jul',
      description: 'vs 1° Grupo D o 1° Grupo G',
      context:
        'EE.UU. quiere brillar en casa. Bélgica tiene una generación renovada y hambrienta.',
      opponents: [
        { name: 'EE.UU.',   flag: '🇺🇸', note: 'Juegan de locales. El estadio lleno en contra.' },
        { name: 'Bélgica',  flag: '🇧🇪', note: 'Generación nueva con Doku, Trossard y De Bruyne.' },
        { name: 'Turquía',  flag: '🇹🇷', note: 'Si lideran el Grupo D con Arda Güler como estrella.' },
        { name: 'Egipto',   flag: '🇪🇬', note: 'Con Salah en plena madurez futbolística.' },
      ],
    },
    {
      id: 'sf',
      round: 'Semifinal',
      emoji: 'SF',
      dates: '14 – 15 jul',
      description: 'vs equipo del bracket E/I/F',
      context:
        'El lado más duro del cuadro: Alemania, Francia y Países Bajos acechan en este bracket.',
      opponents: [
        { name: 'Alemania',      flag: '🇩🇪', note: 'El eterno rival. ¿La revancha definitiva del 2014?' },
        { name: 'Francia',       flag: '🇫🇷', note: 'Mbappé y compañía. El rival más temido del planeta.' },
        { name: 'Países Bajos',  flag: '🇳🇱', note: 'La maquinaria naranja de Van Dijk y Gakpo.' },
        { name: 'Senegal',       flag: '🇸🇳', note: 'Si hacen historia como Marruecos hizo en Qatar.' },
      ],
    },
    {
      id: 'final',
      round: 'Final',
      emoji: '🏆',
      dates: '19 de julio · MetLife Stadium, Nueva Jersey',
      description: 'vs el campeón del otro bracket',
      context:
        'El otro lado tiene a Brasil, Países Bajos e Inglaterra. Cualquier final sería la más grande de los últimos años.',
      opponents: [
        { name: 'Brasil',       flag: '🇧🇷', note: 'Una final Argentina-Brasil sería la más grande de la historia.' },
        { name: 'Inglaterra',   flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', note: '60 años esperando ser campeones. La revancha del 66 en tierra americana.' },
        { name: 'Países Bajos', flag: '🇳🇱', note: 'Tres finales perdidas. Buscan la primera Copa del Mundo.' },
        { name: 'Portugal',     flag: '🇵🇹', note: 'Si hacen el torneo de su vida y llegan al otro lado.' },
      ],
    },
  ],
}
