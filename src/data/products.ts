import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'flow-meters',
    title: 'Flow Meters',
    description: 'High-precision flow measurement solutions for liquids, gases, and steam.',
    longDescription: 'Our comprehensive range of flow meters includes electromagnetic, ultrasonic, vortex, and turbine technologies. Designed for accuracy and reliability, they are essential for process optimization in water management, chemical processing, and oil & gas industries.',
    features: [
      'High accuracy measurement (±0.5%)',
      'Wide range of flow rates and pipe sizes',
      'Digital display with 4-20mA output',
      'Explosion-proof housing available',
      'HART and Modbus communication',
      'Low maintenance design'
    ],
    specs: {
      'Types': 'Electromagnetic / Ultrasonic / Vortex / Turbine',
      'Accuracy': '±0.5% of reading',
      'Temp Range': '-40°C to +250°C',
      'Pressure': 'Up to 100 bar',
      'Output': '4-20mA, HART, Modbus',
      'Material': 'SS316L / Hastelloy / PTFE'
    },
    applications: ['Water & Wastewater', 'Chemical Processing', 'Oil & Gas', 'Food & Beverage', 'Pharmaceuticals'],
    image: 'https://placehold.co/800x600/e2e8f0/1e293b?text=Flow+Meters'
  },
  {
    id: 'pressure-transmitters',
    title: 'Pressure Transmitters',
    description: 'Robust pressure sensing technology for critical monitoring and control.',
    longDescription: 'Oasis pressure transmitters deliver exceptional stability and accuracy. Suitable for gauge, absolute, and differential pressure measurement, they are built to withstand harsh industrial environments.',
    features: [
      'High stability and repeatability',
      'Wide pressure ranges (Vacuum to 1000 bar)',
      'Robust stainless steel construction',
      'Fast response time',
      'Overpressure protection',
      'Compact design'
    ],
    specs: {
      'Range': '0-1 bar to 0-1000 bar',
      'Accuracy': '±0.25% FS',
      'Output': '4-20mA / 0-10V',
      'Connection': '1/4" NPT, 1/2" NPT, G1/4"',
      'Temp Range': '-40°C to +125°C',
      'Protection': 'IP65 / IP67'
    },
    applications: ['Hydraulics', 'Process Control', 'HVAC', 'Automotive Testing', 'Medical Equipment']
  },
  {
    id: 'temperature-sensors',
    title: 'Temperature Sensors',
    description: 'Advanced temperature measurement instruments including RTDs and Thermocouples.',
    longDescription: 'We offer a wide array of temperature sensing solutions including RTDs, thermocouples, and thermistors. Designed for precision and durability, our sensors ensure optimal thermal management in critical processes.',
    features: [
      'High accuracy RTDs (Pt100, Pt1000)',
      'Wide range thermocouples (Type K, J, etc.)',
      'Fast thermal response',
      'Custom probe lengths',
      'Vibration resistant',
      'Various connection heads'
    ],
    specs: {
      'Types': 'Pt100 / Pt1000 / Type K / Type J',
      'Range': '-200°C to +1200°C',
      'Accuracy': 'Class A / Class B',
      'Sheath': 'SS316 / Inconel',
      'Diameter': '3mm to 12mm',
      'Connection': '2-wire / 3-wire / 4-wire'
    },
    applications: ['Furnaces', 'Plastic Processing', 'Food Safety', 'Power Generation', 'Chemical Reactors']
  },
  {
    id: 'speed-sensors',
    title: 'Speed Sensors',
    description: 'Reliable speed monitoring for rotating machinery and rail applications.',
    longDescription: 'Our speed sensors are designed to provide accurate rotational speed feedback. Widely used in rail transportation and heavy machinery, they ensure safe and efficient operation of motors, turbines, and axles.',
    features: [
      'Non-contact sensing',
      'High frequency response',
      'Rugged metal housing',
      'Resistant to vibration and shock',
      'Easy installation',
      'Wide operating temperature'
    ],
    specs: {
      'Technology': 'Hall Effect / Inductive',
      'Output': 'Square Wave / Sine Wave',
      'Frequency': 'Up to 20kHz',
      'Gap': '0.5mm to 4mm',
      'Protection': 'IP67 / IP68',
      'Temp Range': '-40°C to +120°C'
    },
    applications: ['Rail Traction', 'Turbines', 'Motors', 'Conveyors', 'Wind Energy']
  },
  {
    id: 'space-heaters',
    title: 'Space Heaters',
    description: 'Industrial heating solutions for condensation prevention and temperature maintenance.',
    longDescription: 'Oasis space heaters are designed to prevent condensation and maintain temperature in electrical panels, switchgear, and motor enclosures. They ensure the longevity of sensitive electronic components.',
    features: [
      'Self-regulating PTC elements',
      'Compact design',
      'DIN rail mounting',
      'Safety touch-safe housing',
      'Integrated thermostat options',
      'Energy efficient'
    ],
    specs: {
      'Power': '10W to 500W',
      'Voltage': '110-240V AC/DC',
      'Element': 'PTC Thermistor',
      'Housing': 'Anodized Aluminum / Plastic',
      'Protection': 'IP20',
      'Connection': 'Terminal Block'
    },
    applications: ['Control Panels', 'Switchgear', 'Motor Enclosures', 'ATM Machines', 'Traffic Signals']
  },
  {
    id: 'level-sensors',
    title: 'Level Sensors',
    description: 'Precise level measurement for liquids and solids using Radar and Ultrasonic technology.',
    longDescription: 'Our level sensors provide continuous non-contact measurement for storage tanks and silos. Unaffected by dust, vapors, or temperature changes, they are ideal for cement, water, and chemical industries.',
    features: [
      'Non-contact Radar / Ultrasonic',
      'High accuracy',
      'Unaffected by process conditions',
      'Easy setup via display',
      'Suitable for solids and liquids',
      'Explosion-proof options'
    ],
    specs: {
      'Technology': 'FMCW Radar / Ultrasonic',
      'Range': 'Up to 100m',
      'Accuracy': '±2mm',
      'Output': '4-20mA HART',
      'Temp': '-40°C to +200°C',
      'Pressure': '-1 to 40 bar'
    },
    applications: ['Silos', 'Tanks', 'Water Treatment', 'Chemical Storage', 'Food Processing']
  },
  {
    id: 'encoders',
    title: 'Encoders',
    description: 'Rotary encoders for precise position and speed feedback in automation.',
    longDescription: 'We provide incremental and absolute encoders for motion control. With high resolution and robust mechanical design, they are essential for CNC machines, robotics, and automated systems.',
    features: [
      'High resolution (up to 16-bit)',
      'Incremental and Absolute',
      'Optical and Magnetic',
      'Heavy-duty bearing design',
      'Various shaft options',
      'Fieldbus interfaces'
    ],
    specs: {
      'Resolution': 'Up to 65536 PPR',
      'Output': 'HTL / TTL / SSI / EtherCAT',
      'Shaft': 'Solid / Hollow',
      'Speed': 'Up to 12,000 RPM',
      'Protection': 'IP65 / IP67',
      'Temp': '-40°C to +100°C'
    },
    applications: ['CNC Machines', 'Robotics', 'Elevators', 'Cranes', 'Wind Turbines']
  },
  {
    id: 'resolvers',
    title: 'Resolvers',
    description: 'Rugged rotary position sensors for harsh environments and high-temperature applications.',
    longDescription: 'Resolvers are robust analog rotary sensors used where digital encoders might fail. They offer extreme durability against vibration, shock, and high temperatures, making them ideal for heavy industry and aerospace.',
    features: [
      'Absolute position feedback',
      'Extreme durability',
      'High temperature resistance',
      'Resistant to radiation',
      'No onboard electronics',
      'High speed operation'
    ],
    specs: {
      'Input Voltage': '4V - 10V RMS',
      'Frequency': '1kHz - 10kHz',
      'Accuracy': '±10 arcmin',
      'Temp Range': '-55°C to +155°C',
      'Speed': 'Up to 20,000 RPM',
      'Shock': '100g'
    },
    applications: ['Servo Motors', 'Mining Equipment', 'Steel Mills', 'Aerospace', 'Electric Vehicles']
  },
  {
    id: 'counters',
    title: 'Mechanical & Pneumatic Counters',
    description: 'Reliable counting solutions for production tracking and process automation.',
    longDescription: 'From simple mechanical stroke counters to pneumatic counters for hazardous areas, Oasis provides reliable totalizing solutions. Essential for production lines, packaging, and textile machinery.',
    features: [
      'No power supply required (Mechanical)',
      'Explosion proof (Pneumatic)',
      'High visibility display',
      'Reset and non-reset options',
      'Robust construction',
      'Long service life'
    ],
    specs: {
      'Type': 'Stroke / Revolution / Pneumatic',
      'Digits': '4 / 5 / 6',
      'Speed': 'Up to 1000 CPM',
      'Drive': 'Shaft / Lever / Air Pulse',
      'Mounting': 'Base / Panel',
      'Material': 'Plastic / Metal'
    },
    applications: ['Production Lines', 'Textile Machinery', 'Packaging', 'Flow Counting', 'Printing Presses']
  },
  {
    id: 'relays',
    title: 'Relays',
    description: 'High-performance switching relays for industrial control and safety circuits.',
    longDescription: 'Our industrial relays ensure reliable switching for automation systems. We offer general-purpose, power, and safety relays designed to guarantee system integrity and protection.',
    features: [
      'High switching capacity',
      'Long electrical life',
      'Compact DIN-rail mounting',
      'LED status indication',
      'Gold-plated contacts option',
      'Wide coil voltage range'
    ],
    specs: {
      'Rating': 'Up to 16A',
      'Coil': '12VDC / 24VDC / 230VAC',
      'Config': 'SPDT / DPDT / 4PDT',
      'Dielectric': '4kV',
      'Operate Time': '< 15ms',
      'Mounting': 'Socket / PCB'
    },
    applications: ['Control Panels', 'PLC Interface', 'Motor Control', 'Safety Circuits', 'Building Automation']
  },
  {
    id: 'industrial-printers',
    title: 'Industrial Printers',
    description: 'Rugged thermal transfer printers for industrial labeling and coding.',
    longDescription: 'Designed for 24/7 operation, our industrial printers deliver high-quality labels for product traceability and logistics. Built with metal frames to withstand harsh manufacturing environments.',
    features: [
      'Robust metal construction',
      'High print speed',
      'Easy media loading',
      'Multiple connectivity options',
      'Ribbon save technology',
      'High resolution (up to 600 dpi)'
    ],
    specs: {
      'Method': 'Thermal Transfer / Direct Thermal',
      'Resolution': '203 / 300 / 600 dpi',
      'Width': 'Up to 168mm',
      'Speed': 'Up to 14 ips',
      'Interface': 'USB / Ethernet / Serial',
      'Memory': 'Flash / SDRAM'
    },
    applications: ['Product Labeling', 'Logistics', 'Asset Tracking', 'Compliance Marking', 'Inventory']
  },
  {
    id: 'condition-monitoring',
    title: 'Condition Monitoring Systems',
    description: 'Real-time asset health monitoring to prevent downtime and optimize maintenance.',
    longDescription: 'Our condition monitoring systems use vibration and temperature analysis to detect early signs of equipment failure. This predictive maintenance approach maximizes uptime and reduces costs.',
    features: [
      'Real-time vibration analysis',
      'Temperature trending',
      'Wireless sensor nodes',
      'Cloud-based analytics',
      'Automated alarms',
      'Easy installation'
    ],
    specs: {
      'Parameters': 'Vibration, Temperature',
      'Frequency': '10Hz to 10kHz',
      'Comm': 'Wireless Mesh / Modbus',
      'Battery': 'Up to 5 Years',
      'Protection': 'IP67',
      'Cert': 'ATEX / IECEx'
    },
    applications: ['Motors', 'Pumps', 'Fans', 'Gearboxes', 'Compressors']
  },
  {
    id: 'vacuum-contactors',
    title: 'Vacuum Contactors',
    description: 'Reliable high-voltage switching for motors and transformers.',
    longDescription: 'Oasis vacuum contactors provide safe switching for medium voltage applications. The vacuum interrupter technology ensures long life, low maintenance, and compact design for motor starters and capacitor banks.',
    features: [
      'Maintenance-free',
      'Long electrical life',
      'Compact and lightweight',
      'Low chopping current',
      'High switching frequency',
      'Silent operation'
    ],
    specs: {
      'Voltage': '3.3kV / 6.6kV / 11kV',
      'Current': 'Up to 630A',
      'Life': '1 Million Operations',
      'Control': '110V / 220V AC/DC',
      'Standard': 'IEC 60470',
      'Poles': '3-Pole'
    },
    applications: ['Motor Starters', 'Transformers', 'Capacitor Banks', 'Mining', 'Steel Mills']
  },
  {
    id: 'limit-switches',
    title: 'Limit Switches',
    description: 'Heavy-duty switches for position detection in harsh environments.',
    longDescription: 'Built for heavy industry, our limit switches ensure reliable end-of-travel detection. Featuring rugged metal housings and positive opening contacts, they are essential for cranes, conveyors, and mining equipment.',
    features: [
      'Rugged die-cast housing',
      'High mechanical durability',
      'Positive opening contacts',
      'Various actuator heads',
      'Oil and dust tight',
      'High temp models available'
    ],
    specs: {
      'Rating': '10A @ 250VAC',
      'Config': '1NO + 1NC / 2NO + 2NC',
      'Life': '10 Million Cycles',
      'Protection': 'IP66 / IP67',
      'Temp': '-25°C to +80°C',
      'Conduit': 'M20 / 1/2" NPT'
    },
    applications: ['Cranes', 'Conveyors', 'Material Handling', 'Mining', 'Steel Plants']
  },
  {
    id: 'proximity-sensors',
    title: 'Proximity Sensors',
    description: 'Inductive and capacitive sensors for non-contact object detection.',
    longDescription: 'Our proximity sensors offer reliable detection of metal and non-metal objects without physical contact. Widely used in automation for position sensing, counting, and speed monitoring.',
    features: [
      'Non-contact detection',
      'High switching frequency',
      'Robust metal/plastic housing',
      'Short circuit protection',
      'LED status indicator',
      'IP67 protection'
    ],
    specs: {
      'Type': 'Inductive / Capacitive',
      'Range': '1mm to 50mm',
      'Output': 'PNP / NPN / 2-wire',
      'Voltage': '10-30VDC / 90-250VAC',
      'Freq': 'Up to 5kHz',
      'Temp': '-25°C to +70°C'
    },
    applications: ['Assembly Lines', 'Machine Tools', 'Packaging', 'Automotive', 'Robotics']
  }
];
