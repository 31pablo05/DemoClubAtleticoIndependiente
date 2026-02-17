import { useState } from 'react';

const weekDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', 
  '14:00', '15:00', '16:00', '17:00', 
  '18:00', '19:00', '20:00', '21:00'
];

const weeklySchedule = {
  'Lunes': [
    { time: '10:00', duration: 2, activity: 'Fútbol Infantiles', color: 'bg-club-red' },
    { time: '14:00', duration: 2, activity: 'Patín', color: 'bg-purple-600' },
    { time: '16:00', duration: 2, activity: 'Handball', color: 'bg-blue-600' },
    { time: '17:00', duration: 1, activity: 'Fútbol Infantiles', color: 'bg-club-red' },
    { time: '18:00', duration: 2, activity: 'Básquet', color: 'bg-orange-600' }
  ],
  'Martes': [
    { time: '10:00', duration: 2, activity: 'Fútbol Infantiles', color: 'bg-club-red' },
    { time: '14:00', duration: 2, activity: 'Patín', color: 'bg-purple-600' },
    { time: '15:00', duration: 2, activity: 'Hockey', color: 'bg-pink-600' },
    { time: '17:00', duration: 1, activity: 'Fútbol Infantiles', color: 'bg-club-red' },
    { time: '18:00', duration: 2, activity: 'Fútbol Femenino', color: 'bg-club-red' }
  ],
  'Miércoles': [
    { time: '10:00', duration: 2, activity: 'Fútbol Infantiles', color: 'bg-club-red' },
    { time: '14:00', duration: 2, activity: 'Patín', color: 'bg-purple-600' },
    { time: '16:00', duration: 2, activity: 'Handball', color: 'bg-blue-600' },
    { time: '17:00', duration: 1, activity: 'Fútbol Infantiles', color: 'bg-club-red' },
    { time: '18:00', duration: 2, activity: 'Básquet', color: 'bg-orange-600' }
  ],
  'Jueves': [
    { time: '10:00', duration: 2, activity: 'Fútbol Infantiles', color: 'bg-club-red' },
    { time: '14:00', duration: 2, activity: 'Patín', color: 'bg-purple-600' },
    { time: '15:00', duration: 2, activity: 'Hockey', color: 'bg-pink-600' },
    { time: '17:00', duration: 1, activity: 'Fútbol Infantiles', color: 'bg-club-red' },
    { time: '18:00', duration: 2, activity: 'Fútbol Femenino', color: 'bg-club-red' }
  ],
  'Viernes': [
    { time: '10:00', duration: 2, activity: 'Fútbol Infantiles', color: 'bg-club-red' },
    { time: '14:00', duration: 2, activity: 'Patín', color: 'bg-purple-600' },
    { time: '16:00', duration: 2, activity: 'Handball', color: 'bg-blue-600' },
    { time: '17:00', duration: 1, activity: 'Fútbol Infantiles', color: 'bg-club-red' },
    { time: '18:00', duration: 2, activity: 'Básquet', color: 'bg-orange-600' }
  ],
  'Sábado': [
    { time: '09:00', duration: 2, activity: 'Baby Fútbol', color: 'bg-club-red' }
  ],
  'Domingo': []
};

const colorLegend = [
  { name: 'Fútbol', color: 'bg-club-red' },
  { name: 'Handball', color: 'bg-blue-600' },
  { name: 'Hockey', color: 'bg-pink-600' },
  { name: 'Patín', color: 'bg-purple-600' },
  { name: 'Básquet', color: 'bg-orange-600' },
];

export default function ScheduleTable() {
  const [view, setView] = useState('weekly'); // 'weekly' or 'bysport'
  const [expandedSport, setExpandedSport] = useState(null);

  const getActivitiesForTimeSlot = (day, time) => {
    const daySchedule = weeklySchedule[day] || [];
    return daySchedule.filter(activity => activity.time === time);
  };

  const toggleView = () => {
    setView(view === 'weekly' ? 'bysport' : 'weekly');
  };

  if (view === 'weekly') {
    return (
      <div className="space-y-6">
        {/* Toggle Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={toggleView}
            className="bg-club-red hover:bg-club-red-2 text-white px-6 py-3 rounded-full font-display text-lg tracking-wider transition-all hover:scale-105"
          >
            Ver por Deporte
          </button>
        </div>

        {/* Color Legend */}
        <div className="flex flex-wrap gap-4 justify-center mb-8 p-6 bg-club-surface rounded-lg border border-club-gold border-opacity-30">
          <span className="text-club-gold font-semibold mr-4">Leyenda:</span>
          {colorLegend.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded ${item.color}`}></div>
              <span className="text-white text-sm">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Weekly Schedule Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr className="bg-club-surface">
                <th className="border border-club-gold border-opacity-30 p-3 text-club-gold font-display tracking-wider">
                  Horario
                </th>
                {weekDays.map((day) => (
                  <th
                    key={day}
                    className="border border-club-gold border-opacity-30 p-3 text-club-gold font-display tracking-wider"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time) => (
                <tr key={time} className="hover:bg-club-card transition-colors">
                  <td className="border border-club-gold border-opacity-20 p-3 text-white font-semibold text-center bg-club-surface">
                    {time}
                  </td>
                  {weekDays.map((day) => {
                    const activities = getActivitiesForTimeSlot(day, time);
                    return (
                      <td
                        key={`${day}-${time}`}
                        className="border border-club-gold border-opacity-20 p-2"
                      >
                        {activities.map((activity, idx) => (
                          <div
                            key={idx}
                            className={`${activity.color} text-white text-xs p-2 rounded mb-1 font-medium text-center`}
                          >
                            {activity.activity}
                          </div>
                        ))}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // By Sport View
  return (
    <div className="space-y-6">
      {/* Toggle Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={toggleView}
          className="bg-club-red hover:bg-club-red-2 text-white px-6 py-3 rounded-full font-display text-lg tracking-wider transition-all hover:scale-105"
        >
          Ver Semanal
        </button>
      </div>

      {/* By Sport Accordion */}
      <div className="space-y-4">
        {colorLegend.map((sport) => {
          const isExpanded = expandedSport === sport.name;
          
          // Get all activities for this sport
          const sportActivities = [];
          Object.entries(weeklySchedule).forEach(([day, activities]) => {
            activities.forEach(activity => {
              if (activity.color === sport.color) {
                sportActivities.push({ ...activity, day });
              }
            });
          });

          return (
            <div
              key={sport.name}
              className="bg-club-surface rounded-lg border border-club-gold border-opacity-30 overflow-hidden"
            >
              <button
                onClick={() => setExpandedSport(isExpanded ? null : sport.name)}
                className="w-full flex items-center justify-between p-6 hover:bg-club-card transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded ${sport.color}`}></div>
                  <span className="text-white font-display text-2xl tracking-wider">
                    {sport.name}
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 text-club-gold transition-transform ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isExpanded && (
                <div className="p-6 border-t border-club-gold border-opacity-30">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sportActivities.map((activity, idx) => (
                      <div
                        key={idx}
                        className="bg-club-card p-4 rounded border border-club-gold border-opacity-20"
                      >
                        <div className="text-club-gold font-semibold mb-2">
                          {activity.day}
                        </div>
                        <div className="text-white">
                          {activity.time} - {parseInt(activity.time.split(':')[0]) + activity.duration}:00
                        </div>
                        <div className="text-gray-400 text-sm mt-1">
                          {activity.activity}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
