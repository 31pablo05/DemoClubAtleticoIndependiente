export const sports = [
  {
    id: 'futbol',
    name: 'Fútbol Infantiles',
    icon: '⚽',
    description: 'Formación integral en fútbol para niños y adolescentes. Entrenamiento profesional con énfasis en técnica, táctica y valores deportivos.',
    categories: ['Sub-6', 'Sub-8', 'Sub-10', 'Sub-12', 'Sub-14'],
    schedule: 'Lunes a Viernes 10:00–12:00 | 17:00–18:00',
    color: 'red',
    images: ['/imagenes/infatiles/infantil2.jpg', '/imagenes/infatiles/infantil1.jpg', '/imagenes/infatiles/infantil3.jpg'],
    detailedSchedule: {
      'Lunes': ['10:00-12:00', '17:00-18:00'],
      'Martes': ['10:00-12:00', '17:00-18:00'],
      'Miércoles': ['10:00-12:00', '17:00-18:00'],
      'Jueves': ['10:00-12:00', '17:00-18:00'],
      'Viernes': ['10:00-12:00', '17:00-18:00']
    }
  },
  {
    id: 'baby-futbol',
    name: 'Baby Fútbol',
    icon: '👶⚽',
    description: 'Iniciación deportiva para los más pequeños. Actividades lúdicas que desarrollan coordinación, motricidad y amor por el deporte.',
    categories: ['Mixto 3-6 años'],
    schedule: 'Sábados 9:00–11:00',
    color: 'red',
    images: ['/imagenes/baby/baby1.jpg'],
    detailedSchedule: {
      'Sábado': ['9:00-11:00']
    }
  },
  {
    id: 'futbol-femenino',
    name: 'Fútbol Femenino',
    icon: '⚽💪',
    description: 'Espacio dedicado al desarrollo del fútbol femenino en todas sus categorías. Entrenamiento profesional y competitivo.',
    categories: ['Infantil', 'Juvenil', 'Mayor'],
    schedule: 'Martes y Jueves 18:00–20:00',
    color: 'red',
    images: ['/imagenes/futbol femenino/fem1.jpg', '/imagenes/futbol femenino/fem2.jpg', '/imagenes/futbol femenino/fem3.jpg', '/imagenes/futbol femenino/fem4.jpg'],
    detailedSchedule: {
      'Martes': ['18:00-20:00'],
      'Jueves': ['18:00-20:00']
    }
  },
  {
    id: 'handball',
    name: 'Handball',
    icon: '🤾',
    description: 'Desarrollo de habilidades técnicas y tácticas del handball. Formación de equipos competitivos en todas las categorías.',
    categories: ['Mini', 'Infantil', 'Juvenil', 'Mayor'],
    schedule: 'Lunes, Miércoles y Viernes 16:00–18:00',
    color: 'blue',
    images: ['/imagenes/handball/hand4.jpg', '/imagenes/handball/hand2.jpg', '/imagenes/handball/hand3.jpg', '/imagenes/handball/hand4.jpg', '/imagenes/handball/hand5.jpg'],
    detailedSchedule: {
      'Lunes': ['16:00-18:00'],
      'Miércoles': ['16:00-18:00'],
      'Viernes': ['16:00-18:00']
    }
  },
  {
    id: 'hockey',
    name: 'Hockey',
    icon: '🏑',
    description: 'Práctica de hockey sobre césped con entrenadores especializados. Desarrollo técnico y trabajo en equipo.',
    categories: ['Infantil', 'Juvenil', 'Mayor'],
    schedule: 'Martes y Jueves 15:00–17:00',
    color: 'pink',
    images: ['/imagenes/hockey/hock8.jpg', '/imagenes/hockey/hock2.jpg', '/imagenes/hockey/hock3.jpg', '/imagenes/hockey/hock4.jpg', '/imagenes/hockey/hock5.jpg', '/imagenes/hockey/hock6.jpg', '/imagenes/hockey/hock7.jpg', '/imagenes/hockey/hock8.jpg', '/imagenes/hockey/hock9.jpg', '/imagenes/hockey/hock10.jpg'],
    detailedSchedule: {
      'Martes': ['15:00-17:00'],
      'Jueves': ['15:00-17:00']
    }
  },
  {
    id: 'patin',
    name: 'Patín',
    icon: '⛸️',
    description: 'Patín artístico y de velocidad. Aprendizaje progresivo desde nivel inicial hasta avanzado con instructores especializados.',
    categories: ['Inicial', 'Intermedio', 'Avanzado'],
    schedule: 'Lunes a Viernes 14:00–16:00',
    color: 'purple',
    images: ['/imagenes/patin/pat1.jpg'],
    detailedSchedule: {
      'Lunes': ['14:00-16:00'],
      'Martes': ['14:00-16:00'],
      'Miércoles': ['14:00-16:00'],
      'Jueves': ['14:00-16:00'],
      'Viernes': ['14:00-16:00']
    }
  },
  {
    id: 'inferiores',
    name: 'Fútbol Inferiores',
    icon: '⚽🏆',
    description: 'Divisiones de ascenso del fútbol masculino. Formación táctica y competitiva para jugadores que buscan dar el salto al fútbol de alto nivel.',
    categories: ['9na División', '8va División', '7ma División'],
    schedule: 'Lunes a Viernes 17:00–19:00 | Sábados según fixture',
    color: 'red',
    images: ['/imagenes/primera/primera1.jpg', '/imagenes/primera/prim2.jpg', '/imagenes/primera/prim3.jpg'],
    detailedSchedule: {
      'Lunes': ['17:00-19:00'],
      'Martes': ['17:00-19:00'],
      'Miércoles': ['17:00-19:00'],
      'Jueves': ['17:00-19:00'],
      'Viernes': ['17:00-19:00'],
      'Sábado': ['Según fixture']
    }
  },
  {
    id: 'basquet',
    name: 'Básquet',
    icon: '🏀',
    description: 'Básquetbol formativo y competitivo. Entrenamiento integral que desarrolla fundamentos técnicos y juego en equipo.',
    categories: ['Mini', 'U13', 'U15', 'U17', 'Mayor'],
    schedule: 'Lunes, Miércoles y Viernes 18:00–20:00',
    color: 'orange',
    images: ['/imagenes/basquet/basquet1.jpg', '/imagenes/basquet/basquet2.jpg'],
    detailedSchedule: {
      'Lunes': ['18:00-20:00'],
      'Miércoles': ['18:00-20:00'],
      'Viernes': ['18:00-20:00']
    }
  }
];

export const sportColors = {
  red: 'bg-club-red',
  blue: 'bg-blue-600',
  pink: 'bg-pink-600',
  purple: 'bg-purple-600',
  orange: 'bg-orange-600'
};
