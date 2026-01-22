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
    id: 'temperature-sensor',
    name: 'Temperature Sensor',
    description: 'Accurate temperature monitoring for process control and safety systems.'
  },
  {
    id: 'pressure-sensor',
    name: 'Pressure Sensor',
    description: 'Reliable pressure measurement for hydraulic, pneumatic, and process applications.'
  },
  {
    id: 'vibration-sensor',
    name: 'Vibration Sensor',
    description: 'Condition monitoring and predictive maintenance through vibration analysis.'
  },
  {
    id: 'flow-meter',
    name: 'Flow Meter',
    description: 'Precise flow measurement for liquids and gases in industrial processes.'
  },
  {
    id: 'pressure-transmitter',
    name: 'Pressure Transmitter',
    description: 'Industrial-grade pressure measurement with 4-20mA or digital output.'
  },
  {
    id: 'level-sensor',
    name: 'Level Sensor',
    description: 'Tank and vessel level monitoring using radar, ultrasonic, or capacitive technology.'
  }
];

// Industry to Products mapping based on user specifications
export const INDUSTRY_PRODUCTS: Record<string, string[]> = {
  // Railway: speed sensors, temperature sensor and pressure sensor
  'rail-transportation': ['speed-sensor', 'temperature-sensor', 'pressure-sensor'],

  // Automotive: same as railway + vibration sensors
  automotive: ['speed-sensor', 'temperature-sensor', 'pressure-sensor', 'vibration-sensor'],

  // Oil and gas, thermal and hydel power and nuclear, wind energy: flow meter, temperature sensor, pressure transmitter, level sensors and vibration sensors
  'oil-gas': ['flow-meter', 'temperature-sensor', 'pressure-transmitter', 'level-sensor', 'vibration-sensor'],
  'thermal-power': ['flow-meter', 'temperature-sensor', 'pressure-transmitter', 'level-sensor', 'vibration-sensor'],
  'hydel-power': ['flow-meter', 'temperature-sensor', 'pressure-transmitter', 'level-sensor', 'vibration-sensor'],
  'nuclear-power': ['flow-meter', 'temperature-sensor', 'pressure-transmitter', 'level-sensor', 'vibration-sensor'],
  'wind-energy': ['flow-meter', 'temperature-sensor', 'pressure-transmitter', 'level-sensor', 'vibration-sensor'],

  // Defence: vibration sensor, temperature sensor, speed sensor, pressure sensor
  defence: ['vibration-sensor', 'temperature-sensor', 'speed-sensor', 'pressure-sensor'],

  // Water and waste water management: flow meters, pressure sensors, level sensors, temperature sensor
  'water-waste-management': ['flow-meter', 'pressure-sensor', 'level-sensor', 'temperature-sensor']
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
