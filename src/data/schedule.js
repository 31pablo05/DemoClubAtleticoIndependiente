export const weekDays = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo'
];

export const timeSlots = [
  '09:00', '10:00', '11:00', '12:00',
  '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00'
];

export const weeklySchedule = {
  'Lunes': [
    { time: '10:00-12:00', activity: 'Fútbol Infantiles',  sport: 'futbol',          color: 'red'    },
    { time: '14:00-16:00', activity: 'Patín',              sport: 'patin',           color: 'purple' },
    { time: '16:00-18:00', activity: 'Handball',           sport: 'handball',        color: 'blue'   },
    { time: '17:00-18:00', activity: 'Fútbol Infantiles',  sport: 'futbol',          color: 'red'    },
    { time: '18:00-20:00', activity: 'Básquet',            sport: 'basquet',         color: 'orange' },
  ],
  'Martes': [
    { time: '10:00-12:00', activity: 'Fútbol Infantiles',  sport: 'futbol',          color: 'red'    },
    { time: '14:00-16:00', activity: 'Patín',              sport: 'patin',           color: 'purple' },
    { time: '15:00-17:00', activity: 'Hockey',             sport: 'hockey',          color: 'pink'   },
    { time: '17:00-18:00', activity: 'Fútbol Infantiles',  sport: 'futbol',          color: 'red'    },
    { time: '18:00-20:00', activity: 'Fútbol Femenino',    sport: 'futbol-femenino', color: 'red'    },
  ],
  'Miércoles': [
    { time: '10:00-12:00', activity: 'Fútbol Infantiles',  sport: 'futbol',          color: 'red'    },
    { time: '14:00-16:00', activity: 'Patín',              sport: 'patin',           color: 'purple' },
    { time: '16:00-18:00', activity: 'Handball',           sport: 'handball',        color: 'blue'   },
    { time: '17:00-18:00', activity: 'Fútbol Infantiles',  sport: 'futbol',          color: 'red'    },
    { time: '18:00-20:00', activity: 'Básquet',            sport: 'basquet',         color: 'orange' },
  ],
  'Jueves': [
    { time: '10:00-12:00', activity: 'Fútbol Infantiles',  sport: 'futbol',          color: 'red'    },
    { time: '14:00-16:00', activity: 'Patín',              sport: 'patin',           color: 'purple' },
    { time: '15:00-17:00', activity: 'Hockey',             sport: 'hockey',          color: 'pink'   },
    { time: '17:00-18:00', activity: 'Fútbol Infantiles',  sport: 'futbol',          color: 'red'    },
    { time: '18:00-20:00', activity: 'Fútbol Femenino',    sport: 'futbol-femenino', color: 'red'    },
  ],
  'Viernes': [
    { time: '10:00-12:00', activity: 'Fútbol Infantiles',  sport: 'futbol',          color: 'red'    },
    { time: '14:00-16:00', activity: 'Patín',              sport: 'patin',           color: 'purple' },
    { time: '16:00-18:00', activity: 'Handball',           sport: 'handball',        color: 'blue'   },
    { time: '17:00-18:00', activity: 'Fútbol Infantiles',  sport: 'futbol',          color: 'red'    },
    { time: '18:00-20:00', activity: 'Básquet',            sport: 'basquet',         color: 'orange' },
  ],
  'Sábado': [
    { time: '09:00-11:00', activity: 'Baby Fútbol',        sport: 'baby-futbol',     color: 'red'    },
  ],
  'Domingo': [],
};

// ── Color palette — consistent with club brand ────────────
// Primary: --red #D42B2B matches the site's CSS variable
export const sportColorMap: Record<string, string> = {
  red:    '#D42B2B',  // Club red — Fútbol / Fútbol Femenino / Baby Fútbol
  blue:   '#2563EB',  // Handball
  pink:   '#DB2777',  // Hockey
  purple: '#9333EA',  // Patín
  orange: '#EA580C',  // Básquet
};

// ── Background tints (10% opacity) for card/row fills ─────
export const sportColorMapSoft: Record<string, string> = {
  red:    'rgba(212,43,43,0.12)',
  blue:   'rgba(37,99,235,0.12)',
  pink:   'rgba(219,39,119,0.12)',
  purple: 'rgba(147,51,234,0.12)',
  orange: 'rgba(234,88,12,0.12)',
};

// ── Sport metadata — icons + display labels ───────────────
export const sportMeta: Record<string, { icon: string; label: string }> = {
  'futbol':          { icon: '⚽', label: 'Fútbol'          },
  'futbol-femenino': { icon: '⚽', label: 'Fútbol Femenino' },
  'baby-futbol':     { icon: '⚽', label: 'Baby Fútbol'     },
  'handball':        { icon: '🤾', label: 'Handball'        },
  'hockey':          { icon: '🏑', label: 'Hockey'          },
  'patin':           { icon: '⛸️', label: 'Patín'           },
  'basquet':         { icon: '🏀', label: 'Básquet'         },
};