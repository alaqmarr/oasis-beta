export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  subIndustries: string[]; // IDs of industries in this category
}

export const CATEGORIES: Category[] = [
  {
    id: 'mobility',
    title: 'Mobility',
    description: 'Advanced sensing and control solutions for automotive and rail transportation sectors.',
    image: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=1074&auto=format&fit=crop',
    subIndustries: ['automotive', 'rail-transportation']
  },
  {
    id: 'energy',
    title: 'Energy',
    description: 'Comprehensive instrumentation for oil & gas, thermal, hydel, nuclear, and wind power.',
    image: 'https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?q=80&w=1024&auto=format&fit=crop',
    subIndustries: ['oil-gas', 'thermal-power', 'hydel-power', 'nuclear-power', 'wind-energy']
  },
  {
    id: 'defence',
    title: 'Defence',
    description: 'Ruggedized, MIL-spec grade systems for aerospace, marine, and armored vehicle applications.',
    image: 'https://images.unsplash.com/photo-1542876975-6334b6aeb70d?q=80&w=1170&auto=format&fit=crop',
    subIndustries: ['defence']
  },
  {
    id: 'water-waste-management',
    title: 'Water & Waste Management',
    description: 'Precise monitoring solutions for water treatment and waste management facilities.',
    image: 'https://images.unsplash.com/photo-1725581561083-f6d6f3558aea?q=80&w=1132&auto=format&fit=crop',
    subIndustries: ['water-waste-management']
  },
  {
    id: 'mining-metal',
    title: 'Mining & Metal',
    description: 'Heavy-duty controls for mining operations and steel plant automation.',
    image: 'https://images.unsplash.com/photo-1662251773377-104e93441427?q=80&w=1408&auto=format&fit=crop',
    subIndustries: ['mining', 'steel-plants']
  },
  {
    id: 'storage-power',
    title: 'Storage Power',
    description: 'Innovative solutions for energy storage systems and power distribution.',
    image: 'https://images.unsplash.com/photo-1764948935347-3f21c9c31945?q=80&w=1170&auto=format&fit=crop',
    subIndustries: ['energy-storage-panels']
  }
];
