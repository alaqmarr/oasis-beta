// Product definitions and industry mappings

export interface Product {
  id: string;
  name: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'speed-sensor',
    name: 'Speed Sensor',
    description: 'High-precision speed measurement for rotating machinery and vehicles.'
  },
  {
    id: 'vibration-sensor',
    name: 'Vibration Sensor',
    description: 'Condition monitoring and predictive maintenance through vibration analysis.'
  },
  {
    id: 'temperature-sensor',
    name: 'Temperature Sensor',
    description: 'Accurate temperature monitoring for process control and safety systems.'
  },
  {
    id: 'temperature-transmitter',
    name: 'Temperature Transmitter',
    description: 'Industrial-grade temperature measurement with 4-20mA or digital output.'
  },
  {
    id: 'pressure-sensor',
    name: 'Pressure Sensor',
    description: 'Reliable pressure measurement for hydraulic, pneumatic, and process applications.'
  },
  {
    id: 'pressure-transmitter',
    name: 'Pressure Transmitter',
    description: 'Industrial-grade pressure measurement with 4-20mA or digital output.'
  },
  {
    id: 'flow-meter',
    name: 'Flow Meter',
    description: 'Precise flow measurement for liquids and gases in industrial processes.'
  },
  {
    id: 'level-transmitter',
    name: 'Level Transmitter',
    description: 'Tank and vessel level monitoring using radar, ultrasonic, or capacitive technology.'
  },
  {
    id: 'limit-switch',
    name: 'Limit Switch',
    description: 'Heavy-duty position sensing for valve automation and machinery control.'
  },
  {
    id: 'vacuum-contactor',
    name: 'Vacuum Contactor',
    description: 'High-performance switching for motors and power distribution systems.'
  },
  {
    id: 'remote-monitoring-system',
    name: 'Remote Monitoring System',
    description: 'Real-time monitoring and data acquisition for critical assets and processes.'
  }
];

// Industry to Products mapping based on user specifications
export const INDUSTRY_PRODUCTS: Record<string, string[]> = {
  // Automotive: Speed sensors, Vibration Sensors, Temperature Sensors
  automotive: ['speed-sensor', 'vibration-sensor', 'temperature-sensor'],

  // Railway: Speed Sensors, Vibration sensors, Temperature sensors, Pressure sensors, Remote Monitoring System
  'rail-transportation': [
    'speed-sensor',
    'vibration-sensor',
    'temperature-sensor',
    'pressure-sensor',
    'remote-monitoring-system'
  ],

  // Oil and Gas: Flow meters, Temperature Transmitters, Level Transmitters, Pressure Transmitters, Limit Switches, Vacuum Contactors
  'oil-gas': [
    'flow-meter',
    'temperature-transmitter',
    'level-transmitter',
    'pressure-transmitter',
    'limit-switch',
    'vacuum-contactor'
  ],

  // Thermal Power: Same as Oil and Gas
  'thermal-power': [
    'flow-meter',
    'temperature-transmitter',
    'level-transmitter',
    'pressure-transmitter',
    'limit-switch',
    'vacuum-contactor'
  ],

  // Nuclear Power: Same as Oil and Gas
  'nuclear-power': [
    'flow-meter',
    'temperature-transmitter',
    'level-transmitter',
    'pressure-transmitter',
    'limit-switch',
    'vacuum-contactor'
  ],

  // Hydel Power: Flow Meters, Level Transmitters, Temperature Transmitters
  'hydel-power': ['flow-meter', 'level-transmitter', 'temperature-transmitter'],

  // Wind Energy: Vibration Sensors and Temperature Transmitters
  'wind-energy': ['vibration-sensor', 'temperature-transmitter'],

  // Defense: Vibration Sensors, Temperature Sensors, Remote Monitoring System
  defence: ['vibration-sensor', 'temperature-sensor', 'remote-monitoring-system'],

  // Waste Water: Flow Meters, Pressure Transmitters, Level Transmitters
  'water-waste-management': ['flow-meter', 'pressure-transmitter', 'level-transmitter'],

  // Mining and Processing: Same as Oil and Gas
  mining: [
    'flow-meter',
    'temperature-transmitter',
    'level-transmitter',
    'pressure-transmitter',
    'limit-switch',
    'vacuum-contactor'
  ],

  // Steel Plants / Metals: Same as Mining
  'steel-plants': [
    'flow-meter',
    'temperature-transmitter',
    'level-transmitter',
    'pressure-transmitter',
    'limit-switch',
    'vacuum-contactor'
  ],

  // Energy Storage Panels: Temperature Sensors and Vibration Sensors
  'energy-storage-panels': ['temperature-sensor', 'vibration-sensor']
};

// Helper function to get products for an industry
export function getProductsForIndustry(industryId: string): Product[] {
  const productIds = INDUSTRY_PRODUCTS[industryId];

  if (!productIds) {
    // Fallback: return all products if no specific mapping exists
    return PRODUCTS;
  }

  return productIds.map((id) => PRODUCTS.find((p) => p.id === id)).filter((p): p is Product => p !== undefined);
}

// Get all industries that use a specific product
export function getIndustriesForProduct(productId: string): string[] {
  return Object.entries(INDUSTRY_PRODUCTS)
    .filter(([_, products]) => products.includes(productId))
    .map(([industryId]) => industryId);
}
