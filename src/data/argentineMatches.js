// 21 partidos históricos de Argentina en Mundiales
// Orden: 2014 Final primero, luego alternando reciente / clásico
// highlightsYoutubeId: ID de YouTube (null = búsqueda automática)
export const argentineMatches = [
  // ── DÍA 0 ── Puerta de entrada: la más dolorosa antes de Qatar ────────────
  {
    id: 1,
    year: 2014,
    round: 'Final',
    opponent: 'Alemania',
    score: '0 - 1',
    scoreDetail: '(AET)',
    stadium: 'Estadio Maracaná, Río de Janeiro',
    goals: [],
    description:
      'La final más dolorosa antes de Qatar. Higuaín falló dos manos a mano en el primer tiempo. En el minuto 113 del alargue, Schürrle centró y Götze la controló en el pecho y la volteó ante Romero. Messi ganó el Balón de Oro pero no pudo levantar la Copa. Ese dolor sembró la semilla de lo que vendría en 2022.',
    highlightsYoutubeId: null,
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs Germany 2014 World Cup Final full match',
  },

  // ── DÍA 1 ── Clásico: primera Copa del Mundo ─────────────────────────────
  {
    id: 2,
    year: 1978,
    round: 'Final',
    opponent: 'Países Bajos',
    score: '3 - 1',
    scoreDetail: '(AET)',
    stadium: 'Estadio Monumental, Buenos Aires',
    goals: [
      { player: 'Kempes', minute: 37 },
      { player: 'Kempes', minute: 104 },
      { player: 'Bertoni', minute: 114 },
    ],
    description:
      'La primera Copa del Mundo argentina, ganada en casa ante 71.000 personas. Kempes fue imparable: marcó el 1-0 en el primer tiempo, luego el 2-1 en el alargue tras una gambeta en el área. Bertoni cerró el marcador. El papel picado azul y blanco cayendo desde las tribunas del Monumental quedó grabado en la historia.',
    highlightsYoutubeId: 'AE0iHiP5j7U',
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs Netherlands 1978 World Cup Final full match',
  },

  // ── DÍA 2 ── Reciente: la mejor final de todos los tiempos ───────────────
  {
    id: 3,
    year: 2022,
    round: 'Final',
    opponent: 'Francia',
    score: '3 - 3',
    scoreDetail: '(AET — 4-2 en penales)',
    stadium: 'Estadio Lusail, Qatar',
    goals: [
      { player: 'Messi (pen.)', minute: 23 },
      { player: 'Di María', minute: 36 },
      { player: 'Messi', minute: 108 },
    ],
    description:
      'El mejor partido de la historia del fútbol. Argentina dominaba 2-0 cuando Mbappé marcó dos goles en 97 segundos. En el alargue, Messi volvió a marcar para el 3-2, pero Mbappé completó su hat-trick con un penal. En la definición, el Dibu atajó a Coman y Tchouaméni. Messi levantó la Copa del Mundo.',
    highlightsYoutubeId: 'R0HHKMVKJHA',
    fullMatchYoutubeId: 'R0HHKMVKJHA',
    fullMatchSearch: 'Argentina vs France 2022 World Cup Final full match',
  },

  // ── DÍA 3 ── Clásico: el partido más icónico de la historia ──────────────
  {
    id: 4,
    year: 1986,
    round: 'Cuartos de Final',
    opponent: 'Inglaterra',
    score: '2 - 1',
    stadium: 'Estadio Azteca, Ciudad de México',
    goals: [
      { player: 'Maradona', minute: 51 },
      { player: 'Maradona', minute: 55 },
    ],
    description:
      'El partido más icónico de la historia del fútbol. En el minuto 51, "La Mano de Dios": Maradona tocó con la mano izquierda sin que el árbitro la viera. Cuatro minutos después marcó el "Gol del Siglo": partió desde el mediocampo y gambeteó a cinco jugadores ingleses. Lineker descontó pero fue tarde.',
    highlightsYoutubeId: 'PBMsER3dHRg',
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs England 1986 World Cup quarter final full match',
  },

  // ── DÍA 4 ── Reciente: el gol de Rojo que nos salvó ─────────────────────
  {
    id: 5,
    year: 2018,
    round: 'Fase de Grupos',
    opponent: 'Nigeria',
    score: '2 - 1',
    stadium: 'Estadio Krestovski, San Petersburgo',
    goals: [
      { player: 'Messi', minute: 14 },
      { player: 'Rojo', minute: 86 },
    ],
    description:
      'Después del 0-3 ante Croacia, Argentina necesitaba ganar o quedaba eliminada. Messi controló de pecho, acomodó y clavó de zurda para el 1-0. Nigeria empató de penal. En el 86, Mercado centró, Rojo llegó desde atrás y voló la pelota al fondo de la red. El festejo de Messi fue el más desatado de su carrera.',
    highlightsYoutubeId: null,
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs Nigeria 2018 World Cup Rojo goal full match',
  },

  // ── DÍA 5 ── Clásico: la segunda Copa del Mundo ──────────────────────────
  {
    id: 6,
    year: 1986,
    round: 'Final',
    opponent: 'Alemania Occidental',
    score: '3 - 2',
    stadium: 'Estadio Azteca, Ciudad de México',
    goals: [
      { player: 'Brown', minute: 23 },
      { player: 'Valdano', minute: 55 },
      { player: 'Burruchaga', minute: 83 },
    ],
    description:
      'Argentina ganó su segunda Copa del Mundo con un gol de Burruchaga a 7 minutos del final. Los alemanes habían empatado 2-2 a los 80 minutos. Maradona filtró el pase definitivo y Burruchaga, mano a mano con Schumacher, la clavó al fondo. Diego, a los 25 años, levantó la Copa en el Azteca.',
    highlightsYoutubeId: 'GZ8DxHEe8sA',
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs West Germany 1986 World Cup final full match',
  },

  // ── DÍA 6 ── Reciente: la noche de Messi y Álvarez en Qatar ──────────────
  {
    id: 7,
    year: 2022,
    round: 'Semifinal',
    opponent: 'Croacia',
    score: '3 - 0',
    stadium: 'Estadio Lusail, Qatar',
    goals: [
      { player: 'Messi (pen.)', minute: 34 },
      { player: 'Álvarez', minute: 39 },
      { player: 'Álvarez', minute: 69 },
    ],
    description:
      'La noche en que Messi superó el récord de asistencias mundialistas de Maradona. Julián Álvarez recorrió 60 metros gambeteando a tres croatas para el segundo gol. Livakovic fue el mejor arquero de Qatar hasta ese partido; Argentina lo dejó en papeles.',
    highlightsYoutubeId: 'v67S0oYkJJw',
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs Croatia 2022 World Cup semifinal full match',
  },

  // ── DÍA 7 ── Clásico: el gol de Caniggia que tumbó a Brasil ──────────────
  {
    id: 8,
    year: 1990,
    round: 'Octavos de Final',
    opponent: 'Brasil',
    score: '1 - 0',
    stadium: 'Estadio Olímpico, Turín',
    goals: [
      { player: 'Caniggia', minute: 81 },
    ],
    description:
      'Brasil dominaba el partido con Maradona prácticamente fuera de forma. Pero Diego inventó una gambeta genial y filtró el pase para Caniggia, que cabeceó solo al gol. El festejo de Maradona, llorando de rodillas, es una imagen eterna del fútbol argentino.',
    highlightsYoutubeId: null,
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs Brazil 1990 World Cup round of 16 Caniggia goal',
  },

  // ── DÍA 8 ── Reciente: el Dibu, el show, el épico 4-3 ────────────────────
  {
    id: 9,
    year: 2022,
    round: 'Cuartos de Final',
    opponent: 'Países Bajos',
    score: '2 - 2',
    scoreDetail: '(AET — 4-3 en penales)',
    stadium: 'Estadio Lusail, Qatar',
    goals: [
      { player: 'Molina', minute: 35 },
      { player: 'Messi (pen.)', minute: 73 },
    ],
    description:
      'Argentina ganaba 2-0 a 10 minutos del final cuando Weghorst marcó dos goles y llevó el partido a penales. El Dibu Martínez fue el héroe: atajos dos disparos y su show psicológico fue memorable. Messi desafió a Van Gaal en cámara: "¿Qué mirás, bobo?".',
    highlightsYoutubeId: null,
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs Netherlands 2022 World Cup quarterfinal Dibu Martinez',
  },

  // ── DÍA 9 ── Clásico 94: la cara de Maradona ─────────────────────────────
  {
    id: 10,
    year: 1994,
    round: 'Fase de Grupos',
    opponent: 'Grecia',
    score: '4 - 0',
    stadium: 'Foxboro Stadium, Boston',
    goals: [
      { player: 'Batistuta', minute: 2 },
      { player: 'Maradona', minute: 60 },
      { player: 'Batistuta', minute: 78 },
      { player: 'Batistuta', minute: 90 },
    ],
    description:
      'En el minuto 60, Maradona recibió de Caniggia, la acomodó y la clavó de zurda. Corrió hacia la cámara con los ojos desorbitados y el grito desgarrador. Una imagen que quedó grabada como una de las más icónicas del fútbol. Sería uno de sus últimos grandes momentos en un Mundial.',
    highlightsYoutubeId: 'szsMJERIjOs',
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs Greece 1994 World Cup Maradona goal full match',
  },

  // ── DÍA 10 ── Reciente: Messi en el Maracaná chico ───────────────────────
  {
    id: 11,
    year: 2022,
    round: 'Octavos de Final',
    opponent: 'Australia',
    score: '2 - 1',
    stadium: 'Estadio Ahmad bin Ali, Al Rayyan',
    goals: [
      { player: 'Messi', minute: 35 },
      { player: 'Álvarez', minute: 57 },
    ],
    description:
      'El primer gol de Messi en eliminatorias directas de un Mundial. Gambeteó entre tres australianos con un movimiento súbito y la metió abajo del palo. En el segundo tiempo, la gambeta entre tres australianos más fue considerada una de las mejores del torneo. Argentina sufrió al final con un gol de Mack Neil, pero clasificó.',
    highlightsYoutubeId: null,
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs Australia 2022 World Cup round of 16 Messi goal',
  },

  // ── DÍA 11 ── Clásico 90: la noche de Nápoles ────────────────────────────
  {
    id: 12,
    year: 1990,
    round: 'Semifinal',
    opponent: 'Italia',
    score: '1 - 1',
    scoreDetail: '(AET — 4-3 en penales)',
    stadium: 'Estadio San Paolo, Nápoles',
    goals: [
      { player: 'Caniggia', minute: 67 },
    ],
    description:
      'La noche más emotiva de Italia 90. Argentina jugó en Nápoles, la ciudad donde Maradona era un dios. Diego pidió al pueblo napolitano que apoyara a Argentina. Goycochea atajos dos penales (Donadoni y Serena) y Argentina pasó a la final entre silbidos del resto de Italia.',
    highlightsYoutubeId: null,
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs Italy 1990 World Cup semifinal Naples penalty shootout',
  },

  // ── DÍA 12 ── Reciente 2014: el gol de Di María en el 118 ────────────────
  {
    id: 13,
    year: 2014,
    round: 'Octavos de Final',
    opponent: 'Suiza',
    score: '1 - 0',
    scoreDetail: '(AET)',
    stadium: 'Arena Corinthians, São Paulo',
    goals: [
      { player: 'Di María', minute: 118 },
    ],
    description:
      'Argentina sufrió ante Suiza durante 118 minutos. Entonces Di María cortó hacia adentro, recibió el pase de Messi y remató cruzado al fondo de la red. Sin ese gol, Argentina no habría llegado a la final de Brasil. El "Fideo" lo hizo cuando más se necesitaba.',
    highlightsYoutubeId: null,
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs Switzerland 2014 World Cup Di Maria extra time goal',
  },

  // ── DÍA 13 ── Clásico 98: Owen, Beckham y los penales ────────────────────
  {
    id: 14,
    year: 1998,
    round: 'Octavos de Final',
    opponent: 'Inglaterra',
    score: '2 - 2',
    scoreDetail: '(AET — 3-4 en penales)',
    stadium: 'Stade Geoffroy-Guichard, Saint-Étienne',
    goals: [
      { player: 'Batistuta (pen.)', minute: 6 },
      { player: 'Zanetti', minute: 45 },
    ],
    description:
      'Uno de los mejores partidos de la historia mundialista. Owen marcó uno de los mejores goles individuales de todos los tiempos a los 18 años. Zanetti anotó de córner corto en el límite del primer tiempo. Beckham fue expulsado. Roa atajó dos penales pero Argentina cayó igual.',
    highlightsYoutubeId: null,
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs England 1998 World Cup round of 16 Owen Beckham full match',
  },

  // ── DÍA 14 ── Reciente 2014: el partido de Romero ────────────────────────
  {
    id: 15,
    year: 2014,
    round: 'Semifinal',
    opponent: 'Países Bajos',
    score: '0 - 0',
    scoreDetail: '(AET — 4-2 en penales)',
    stadium: 'Arena de São Paulo, São Paulo',
    goals: [],
    description:
      'El partido de Sergio Romero. Sin marcar ningún gol en 120 minutos, Argentina pasó gracias a las atajadas del arquero en los penales (a Robben y Sneijder). Mascherano fue un monstruo defensivo. Messi pasó apagado pero llegaron a la final. "¡El que no salta es un inglés!"',
    highlightsYoutubeId: null,
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs Netherlands 2014 World Cup semifinal penalty shootout',
  },

  // ── DÍA 15 ── Reciente 2018: el partido que presentó a Mbappé ────────────
  {
    id: 16,
    year: 2018,
    round: 'Octavos de Final',
    opponent: 'Francia',
    score: '3 - 4',
    stadium: 'Estadio Kazán Arena, Kazán',
    goals: [
      { player: 'Di María', minute: 41 },
      { player: 'Mercado', minute: 48 },
      { player: 'Agüero', minute: 93 },
    ],
    description:
      'El partido que le presentó Mbappé al mundo. Pavard anotó un golazo de volea para empatar. Luego Mbappé fue imparable: dos goles en 4 minutos. Argentina descontó con un Agüero en el 93 para el 3-4 final. Era el fin del camino para Messi en Rusia. Cuatro años después llegaría la revancha.',
    highlightsYoutubeId: null,
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs France 2018 World Cup round of 16 Mbappe full match',
  },

  // ── DÍA 16 ── Clásico 2006: el mejor gol colectivo de un Mundial ──────────
  {
    id: 17,
    year: 2006,
    round: 'Fase de Grupos',
    opponent: 'Serbia y Montenegro',
    score: '6 - 0',
    stadium: 'AOL Arena, Hamburgo',
    goals: [
      { player: 'Rodríguez', minute: 6 },
      { player: 'Crespo', minute: 31 },
      { player: 'Crespo', minute: 49 },
      { player: 'Tevez', minute: 78 },
      { player: 'Messi', minute: 88 },
      { player: 'Saviola', minute: 90 },
    ],
    description:
      'Una de las actuaciones más brillantes de Argentina en un Mundial. El gol colectivo del 2-0, con 24 toques consecutivos, fue elegido el mejor gol del torneo. Messi ingresó como suplente y anotó a los 18 años con su primer toque. El mundo comenzaba a entender que Messi era diferente.',
    highlightsYoutubeId: null,
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs Serbia Montenegro 2006 World Cup 6-0 highlights',
  },

  // ── DÍA 17 ── Reciente 2014: Higuaín define en cuartos ───────────────────
  {
    id: 18,
    year: 2014,
    round: 'Cuartos de Final',
    opponent: 'Bélgica',
    score: '1 - 0',
    stadium: 'Estadio Nacional Mané Garrincha, Brasilia',
    goals: [
      { player: 'Higuaín', minute: 8 },
    ],
    description:
      'Messi centró desde la derecha, el arquero rechazó y Higuaín la clavó a los 8 minutos. Argentina aguantó el 1-0 durante 82 minutos más. Messi golpeó el palo en el segundo tiempo con un mano a mano. Romero fue clave bajo los tres palos. Los cuartos de Messi que sí se ganaron.',
    highlightsYoutubeId: null,
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs Belgium 2014 World Cup quarterfinal Higuain goal',
  },

  // ── DÍA 18 ── Reciente 2010: el offside de Tévez ─────────────────────────
  {
    id: 19,
    year: 2010,
    round: 'Octavos de Final',
    opponent: 'México',
    score: '3 - 1',
    stadium: 'Soccer City, Johannesburgo',
    goals: [
      { player: 'Tévez', minute: 26 },
      { player: 'Higuaín', minute: 33 },
      { player: 'Tévez', minute: 52 },
    ],
    description:
      'El partido del "gol fantasma" de Tévez: marcó claramente en offside pero el linesman no lo vio y el gol fue válido. México protestó durante todo el partido. El primer gol de Tévez, una volea desde fuera del área que entró al ángulo, fue de antología. Con Maradona en el banco, Argentina era imparable... hasta Alemania.',
    highlightsYoutubeId: null,
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs Mexico 2010 World Cup round of 16 Tevez offside goal',
  },

  // ── DÍA 19 ── Clásico 94: el doblete de Caniggia ─────────────────────────
  {
    id: 20,
    year: 1994,
    round: 'Fase de Grupos',
    opponent: 'Nigeria',
    score: '2 - 1',
    stadium: 'Foxboro Stadium, Boston',
    goals: [
      { player: 'Batistuta (pen.)', minute: 30 },
      { player: 'Caniggia', minute: 89 },
    ],
    description:
      'Nigeria lideraba 1-0 y Argentina sufría. Batistuta empató de penal. En el minuto 89, Maradona filtró un pase y Caniggia cabeceó al gol para el 2-1. El mismo Maradona que días después sería suspendido por doping positivo, dejando huérfano al equipo. Una de sus últimas asistencias mundialistas.',
    highlightsYoutubeId: null,
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs Nigeria 1994 World Cup group match Caniggia',
  },

  // ── DÍA 20 ── Reciente 2022: el renacer tras Arabia ──────────────────────
  {
    id: 21,
    year: 2022,
    round: 'Fase de Grupos',
    opponent: 'México',
    score: '2 - 0',
    stadium: 'Estadio Lusail, Qatar',
    goals: [
      { player: 'Messi', minute: 64 },
      { player: 'Enzo Fernández', minute: 87 },
    ],
    description:
      'Después del 1-2 ante Arabia Saudita (el mayor shock del Mundial), Argentina necesitaba ganar o quedaba eliminada. En el 64, Messi recibió, se acomodó y clavó un remate cruzado bajo ante Ochoa. Enzo Fernández, en su primer Mundial, clavó un obús desde 25 metros. El sueño de Qatar seguía vivo.',
    highlightsYoutubeId: null,
    fullMatchYoutubeId: null,
    fullMatchSearch: 'Argentina vs Mexico 2022 World Cup group stage Messi goal full match',
  },
]
