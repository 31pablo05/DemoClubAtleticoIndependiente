import { useState } from 'react';

const sports = [
  { id: 'all', name: 'Todos', color: 'bg-club-red' },
  { id: 'futbol', name: 'Fútbol', color: 'bg-club-red' },
  { id: 'baby-futbol', name: 'Baby Fútbol', color: 'bg-club-red' },
  { id: 'futbol-femenino', name: 'Fútbol Femenino', color: 'bg-club-red' },
  { id: 'handball', name: 'Handball', color: 'bg-blue-600' },
  { id: 'hockey', name: 'Hockey', color: 'bg-pink-600' },
  { id: 'patin', name: 'Patín', color: 'bg-purple-600' },
  { id: 'basquet', name: 'Básquet', color: 'bg-orange-600' },
];

export default function SportFilter({ onFilterChange }) {
  const [selectedSport, setSelectedSport] = useState('all');

  const handleFilterChange = (sportId) => {
    setSelectedSport(sportId);
    if (onFilterChange) {
      onFilterChange(sportId);
    }
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {sports.map((sport) => (
        <button
          key={sport.id}
          onClick={() => handleFilterChange(sport.id)}
          className={`px-6 py-3 rounded-full font-medium tracking-wide transition-all duration-300 ${
            selectedSport === sport.id
              ? `${sport.color} text-white scale-105 shadow-lg`
              : 'bg-club-surface text-gray-300 hover:bg-club-card border border-club-gold border-opacity-30 hover:border-opacity-100'
          }`}
        >
          {sport.name}
        </button>
      ))}
    </div>
  );
}
