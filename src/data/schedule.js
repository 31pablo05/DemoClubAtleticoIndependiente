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
    { time: '10:00-12:00', activity: 'Fútbol Infantiles', sport: 'futbol', color: 'red' },
    { time: '14:00-16:00', activity: 'Patín', sport: 'patin', color: 'purple' },
    { time: '16:00-18:00', activity: 'Handball', sport: 'handball', color: 'blue' },
    { time: '17:00-18:00', activity: 'Fútbol Infantiles', sport: 'futbol', color: 'red' },
    { time: '18:00-20:00', activity: 'Básquet', sport: 'basquet', color: 'orange' }
  ],
  'Martes': [
    { time: '10:00-12:00', activity: 'Fútbol Infantiles', sport: 'futbol', color: 'red' },
    { time: '14:00-16:00', activity: 'Patín', sport: 'patin', color: 'purple' },
    { time: '15:00-17:00', activity: 'Hockey', sport: 'hockey', color: 'pink' },
    { time: '17:00-18:00', activity: 'Fútbol Infantiles', sport: 'futbol', color: 'red' },
    { time: '18:00-20:00', activity: 'Fútbol Femenino', sport: 'futbol-femenino', color: 'red' }
  ],
  'Miércoles': [
    { time: '10:00-12:00', activity: 'Fútbol Infantiles', sport: 'futbol', color: 'red' },
    { time: '14:00-16:00', activity: 'Patín', sport: 'patin', color: 'purple' },
    { time: '16:00-18:00', activity: 'Handball', sport: 'handball', color: 'blue' },
    { time: '17:00-18:00', activity: 'Fútbol Infantiles', sport: 'futbol', color: 'red' },
    { time: '18:00-20:00', activity: 'Básquet', sport: 'basquet', color: 'orange' }
  ],
  'Jueves': [
    { time: '10:00-12:00', activity: 'Fútbol Infantiles', sport: 'futbol', color: 'red' },
    { time: '14:00-16:00', activity: 'Patín', sport: 'patin', color: 'purple' },
    { time: '15:00-17:00', activity: 'Hockey', sport: 'hockey', color: 'pink' },
    { time: '17:00-18:00', activity: 'Fútbol Infantiles', sport: 'futbol', color: 'red' },
    { time: '18:00-20:00', activity: 'Fútbol Femenino', sport: 'futbol-femenino', color: 'red' }
  ],
  'Viernes': [
    { time: '10:00-12:00', activity: 'Fútbol Infantiles', sport: 'futbol', color: 'red' },
    { time: '14:00-16:00', activity: 'Patín', sport: 'patin', color: 'purple' },
    { time: '16:00-18:00', activity: 'Handball', sport: 'handball', color: 'blue' },
    { time: '17:00-18:00', activity: 'Fútbol Infantiles', sport: 'futbol', color: 'red' },
    { time: '18:00-20:00', activity: 'Básquet', sport: 'basquet', color: 'orange' }
  ],
  'Sábado': [
    { time: '09:00-11:00', activity: 'Baby Fútbol', sport: 'baby-futbol', color: 'red' }
  ],
  'Domingo': []
};

export const sportColorMap = {
  red: '#e71c22',
  blue: '#2563eb',
  pink: '#db2777',
  purple: '#9333ea',
  orange: '#ea580c'
};
