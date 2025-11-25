export const PRODUCTS = [
  {
    id: 'flow-meters',
    title: 'Flow Meters',
    description: 'High-precision flow measurement solutions for liquids, gases, and steam in industrial applications.',
    longDescription: 'Our comprehensive range of flow meters is designed to meet the diverse needs of modern industry. From electromagnetic to ultrasonic and vortex technologies, we ensure accurate and reliable flow measurement for process optimization and control.',
    features: [
      'High accuracy measurement (±0.5%)',
      'Wide range of flow rates and pipe sizes',
      'Digital display with 4-20mA output',
      'Explosion-proof housing available',
      'Low maintenance design',
      'HART and Modbus communication protocols'
    ],
    specs: {
      'Measurement Type': 'Electromagnetic / Ultrasonic / Vortex / Turbine',
      'Accuracy': '±0.5% of reading',
      'Temperature Range': '-40°C to +250°C',
      'Pressure Rating': 'Up to 100 bar',
      'Output Signal': '4-20mA, HART, Modbus',
      'Material': 'Stainless Steel 316L / Hastelloy / PTFE'
    },
    applications: ['Water & Wastewater', 'Chemical Processing', 'Oil & Gas', 'Food & Beverage', 'Pharmaceuticals']
  },
  {
    id: 'pressure-sensors',
    title: 'Pressure Sensors',
    description: 'Robust pressure sensing technology for critical monitoring and control in harsh environments.',
    longDescription: 'Oasis pressure sensors deliver exceptional stability and accuracy in the most demanding industrial applications. Our portfolio includes pressure transmitters, transducers, and gauges suitable for measuring gauge, absolute, and differential pressure.',
    features: [
      'High stability and repeatability',
      'Wide pressure ranges (Vacuum to 1000 bar)',
      'Robust stainless steel construction',
      'Fast response time',
      'Overpressure protection',
      'Compact design for space-constrained applications'
    ],
    specs: {
      'Pressure Range': '0-1 bar to 0-1000 bar',
      'Accuracy': '±0.25% FS',
      'Output': '4-20mA / 0-10V',
      'Process Connection': '1/4" NPT, 1/2" NPT, G1/4"',
      'Operating Temp': '-40°C to +125°C',
      'Protection': 'IP65 / IP67'
    },
    applications: ['Hydraulics & Pneumatics', 'Process Control', 'HVAC', 'Automotive Testing', 'Medical Equipment']
  },
  {
    id: 'temperature-sensors',
    title: 'Temperature Sensors',
    description: 'Advanced temperature measurement instruments ensuring process stability and safety.',
    longDescription: 'We offer a wide array of temperature sensing solutions including RTDs, thermocouples, and thermistors. Designed for precision and durability, our sensors ensure optimal thermal management in critical industrial processes.',
    features: [
      'High accuracy RTDs (Pt100, Pt1000)',
      'Wide temperature range thermocouples',
      'Fast thermal response',
      'Custom probe lengths and diameters',
      'Vibration resistant design',
      'Various connection heads available'
    ],
    specs: {
      'Sensor Type': 'Pt100 / Pt1000 / Type K / Type J',
      'Range': '-200°C to +1200°C',
      'Accuracy': 'Class A / Class B',
      'Sheath Material': 'SS316 / Inconel',
      'Diameter': '3mm to 12mm',
      'Connection': '2-wire / 3-wire / 4-wire'
    },
    applications: ['Furnaces & Ovens', 'Plastic Processing', 'Food Safety', 'Chemical Reactors', 'Power Generation']
  },
  {
    id: 'band-heaters',
    title: 'Band Heaters',
    description: 'Efficient heating solutions for industrial machinery and plastic processing equipment.',
    longDescription: 'Our high-performance band heaters provide uniform heat transfer for cylindrical surfaces. Ideal for injection molding machines and extruders, they are designed for energy efficiency and long operational life.',
    features: [
      'Uniform heat distribution',
      'High watt density capabilities',
      'Energy efficient insulation',
      'Custom sizes and clamping mechanisms',
      'Durable construction',
      'Integrated thermocouples available'
    ],
    specs: {
      'Sheath Material': 'Stainless Steel / Aluminized Steel',
      'Insulation': 'Mica / Ceramic',
      'Max Temperature': '450°C (Mica) / 700°C (Ceramic)',
      'Voltage': '110V / 230V / 415V',
      'Watt Density': 'Up to 8 W/cm²',
      'Termination': 'Leads / Screw Terminals / Plugs'
    },
    applications: ['Injection Molding', 'Extrusion', 'Blow Molding', 'Pipe Heating', 'Drum Heating']
  },
  {
    id: 'rail-sensors',
    title: 'Rail Sensors',
    description: 'Specialized sensors for railway applications, ensuring safety and operational efficiency.',
    longDescription: 'Engineered for the rigorous demands of the railway industry, our sensors monitor speed, temperature, and position. They are built to withstand extreme vibration, shock, and environmental conditions typical of rail transport.',
    features: [
      'EN 50155 railway standard compliant',
      'High vibration and shock resistance',
      'Wide operating temperature range',
      'EMC protected',
      'Long service life',
      'Maintenance-free operation'
    ],
    specs: {
      'Type': 'Speed / Temperature / Vibration',
      'Output': 'Current / Voltage / Frequency',
      'Protection': 'IP68',
      'Temp Range': '-40°C to +85°C',
      'Housing': 'Stainless Steel / Anodized Aluminum',
      'Connector': 'M12 / Heavy Duty'
    },
    applications: ['High Speed Trains', 'Metro Systems', 'Locomotives', 'Track Monitoring', 'Signaling Systems']
  },
  {
    id: 'relays',
    title: 'Relays',
    description: 'High-performance relays for switching and control in automation systems.',
    longDescription: 'Our portfolio of industrial relays ensures reliable switching for control circuits. From safety relays to general-purpose interface relays, we provide solutions that guarantee system integrity and protection.',
    features: [
      'High switching capacity',
      'Long electrical and mechanical life',
      'Compact DIN-rail mounting',
      'LED status indication',
      'Gold-plated contacts available',
      'Wide coil voltage range'
    ],
    specs: {
      'Contact Rating': 'Up to 16A',
      'Coil Voltage': '12VDC / 24VDC / 110VAC / 230VAC',
      'Contact Config': 'SPDT / DPDT / 4PDT',
      'Dielectric Strength': '4kV',
      'Operate Time': '< 15ms',
      'Mounting': 'Socket / PCB'
    },
    applications: ['Control Panels', 'PLC Interface', 'Motor Control', 'Safety Circuits', 'Building Automation']
  },
  {
    id: 'industrial-printers',
    title: 'Industrial Printers',
    description: 'Rugged printing solutions for labeling, coding, and marking in industrial settings.',
    longDescription: 'Designed for harsh industrial environments, our printers deliver high-quality thermal transfer and direct thermal printing. Ideal for product traceability, logistics, and compliance labeling.',
    features: [
      'Robust metal construction',
      'High print speed and resolution',
      'Easy media loading',
      'Multiple connectivity options',
      '24/7 continuous operation',
      'Ribbon save technology'
    ],
    specs: {
      'Print Method': 'Thermal Transfer / Direct Thermal',
      'Resolution': '203 dpi / 300 dpi / 600 dpi',
      'Print Width': 'Up to 168mm',
      'Speed': 'Up to 14 ips',
      'Interface': 'USB / Ethernet / Serial / Wireless',
      'Memory': 'Flash / SDRAM'
    },
    applications: ['Product Labeling', 'Shipping & Logistics', 'Asset Tracking', 'Compliance Marking', 'Inventory Management']
  },
  {
    id: 'vacuum-contactors',
    title: 'Vacuum Contactors',
    description: 'Reliable switching devices for high-voltage applications and motor control.',
    longDescription: 'Oasis vacuum contactors provide safe and efficient switching for medium voltage motors and transformers. The vacuum interrupter technology ensures long life, low maintenance, and compact design.',
    features: [
      'Maintenance-free vacuum interrupters',
      'Long electrical life',
      'Compact and lightweight',
      'Low chopping current',
      'High switching frequency',
      'Silent operation'
    ],
    specs: {
      'Rated Voltage': '3.3kV / 6.6kV / 11kV',
      'Rated Current': 'Up to 630A',
      'Making Capacity': '4kA - 6kA',
      'Mechanical Life': '1 Million Operations',
      'Control Voltage': '110V / 220V AC/DC',
      'Standard': 'IEC 60470'
    },
    applications: ['Motor Starters', 'Transformer Switching', 'Capacitor Banks', 'Mining Equipment', 'Steel Mills']
  },
  {
    id: 'condition-monitoring',
    title: 'Condition Monitoring',
    description: 'Systems for real-time asset health monitoring to prevent downtime and optimize maintenance.',
    longDescription: 'Our condition monitoring systems utilize advanced vibration and temperature analysis to detect early signs of equipment failure. This predictive approach maximizes uptime and reduces maintenance costs.',
    features: [
      'Real-time vibration analysis',
      'Temperature trending',
      'Wireless sensor nodes',
      'Cloud-based data analytics',
      'Automated alarm notifications',
      'Easy installation and retrofit'
    ],
    specs: {
      'Parameters': 'Vibration (Velocity/Acceleration), Temp',
      'Frequency Range': '10Hz to 10kHz',
      'Communication': 'Wireless Mesh / Modbus / 4-20mA',
      'Battery Life': 'Up to 5 Years',
      'Protection': 'IP67',
      'Certification': 'ATEX / IECEx'
    },
    applications: ['Motors & Pumps', 'Fans & Blowers', 'Gearboxes', 'Compressors', 'Conveyors']
  },
  {
    id: 'inertial-sensors',
    title: 'Inertial Sensors',
    description: 'Precision sensors for motion tracking, stabilization, and navigation applications.',
    longDescription: 'We provide high-performance accelerometers, gyroscopes, and IMUs for precise motion sensing. These sensors are essential for stabilization, navigation, and dynamic analysis in industrial and aerospace applications.',
    features: [
      'High bias stability',
      'Low noise performance',
      'Multi-axis sensing (3-axis / 6-axis)',
      'Digital and analog outputs',
      'Compact MEMS technology',
      'Temperature compensated'
    ],
    specs: {
      'Range': '±2g to ±200g (Accel) / ±2000°/s (Gyro)',
      'Bandwidth': 'DC to 1kHz',
      'Interface': 'SPI / I2C / UART / CAN',
      'Temp Range': '-40°C to +105°C',
      'Shock Limit': '10,000g',
      'Package': 'SMD / Rugged Module'
    },
    applications: ['Robotics', 'Platform Stabilization', 'Vehicle Navigation', 'Structural Health', 'Antenna Pointing']
  },
  {
    id: 'counters',
    title: 'Counters',
    description: 'Digital and mechanical counters for production tracking and process automation.',
    longDescription: 'Oasis counters offer reliable counting and totalizing for industrial processes. From simple mechanical stroke counters to advanced digital preset counters, we cover all counting requirements.',
    features: [
      'High visibility displays',
      'High counting speeds',
      'Non-volatile memory',
      'Preset capabilities with relay output',
      'Multi-function (Count/Timer/Tach)',
      'Robust housing'
    ],
    specs: {
      'Type': 'Electronic / Electromechanical',
      'Display': 'LED / LCD / Mechanical Wheels',
      'Count Speed': 'Up to 10kHz',
      'Supply Voltage': '12-24VDC / 110-230VAC',
      'Input': 'NPN / PNP / Contact',
      'Protection': 'IP65 (Front)'
    },
    applications: ['Production Lines', 'Packaging Machines', 'Textile Machinery', 'Flow Totalizing', 'Length Measurement']
  },
  {
    id: 'encoders',
    title: 'Encoders',
    description: 'Rotary and linear encoders for precise position and speed feedback.',
    longDescription: 'Our incremental and absolute encoders provide critical feedback for motion control systems. With high resolution and robust mechanical design, they ensure precise positioning in automation equipment.',
    features: [
      'High resolution (up to 16-bit)',
      'Incremental and Absolute (Single/Multi-turn)',
      'Optical and Magnetic technologies',
      'Heavy-duty bearing design',
      'Various shaft and mounting options',
      'Fieldbus interfaces available'
    ],
    specs: {
      'Resolution': 'Up to 65536 PPR',
      'Output': 'HTL / TTL / SSI / Profibus / EtherCAT',
      'Shaft': 'Solid / Hollow / Blind Hollow',
      'Speed': 'Up to 12,000 RPM',
      'Protection': 'IP65 / IP67',
      'Temp Range': '-40°C to +100°C'
    },
    applications: ['CNC Machines', 'Robotics', 'Elevators', 'Cranes', 'Wind Turbines']
  },
  {
    id: 'limit-switches',
    title: 'Heavy Duty Limit Switches',
    description: 'Durable switches for end-of-travel detection in heavy machinery and cranes.',
    longDescription: 'Built for the toughest environments, our heavy-duty limit switches ensure reliable position detection. They feature rugged metal housings and high-quality contacts for long service life in harsh conditions.',
    features: [
      'Rugged aluminum die-cast housing',
      'High mechanical durability',
      'Positive opening contacts',
      'Various actuator heads (Roller, Plunger, Lever)',
      'Oil and dust tight',
      'High temperature models available'
    ],
    specs: {
      'Contact Rating': '10A @ 250VAC',
      'Configuration': '1NO + 1NC / 2NO + 2NC',
      'Mechanical Life': '10 Million Cycles',
      'Protection': 'IP66 / IP67',
      'Temp Range': '-25°C to +80°C',
      'Conduit Entry': 'M20 / PG13.5 / 1/2" NPT'
    },
    applications: ['Cranes & Hoists', 'Conveyors', 'Material Handling', 'Mining Equipment', 'Steel Plants']
  },
  {
    id: 'radar-level-sensors',
    title: 'Radar Level Sensors',
    description: 'Non-contact level measurement for liquids and solids in storage tanks and silos.',
    longDescription: 'Our radar level transmitters use advanced FMCW technology for continuous non-contact level measurement. They are unaffected by temperature, pressure, or vapors, making them ideal for challenging process conditions.',
    features: [
      'Non-contact measurement',
      'High accuracy (±2mm)',
      'Unaffected by process conditions',
      'Easy setup via display or HART',
      'Suitable for liquids and solids',
      'Explosion-proof approvals'
    ],
    specs: {
      'Frequency': '26GHz / 80GHz',
      'Range': 'Up to 100m',
      'Accuracy': '±2mm',
      'Output': '4-20mA HART',
      'Process Temp': '-40°C to +200°C',
      'Process Pressure': '-1 to 40 bar'
    },
    applications: ['Chemical Storage', 'Water Treatment', 'Cement Silos', 'Oil Tanks', 'Food Processing']
  },
  {
    id: 'servo-motors',
    title: 'Servo Motors & Drives',
    description: 'High-dynamic motion control systems for precise positioning and automation.',
    longDescription: 'Oasis servo systems deliver high torque, speed, and precision. Combined with our advanced servo drives, they offer dynamic performance for demanding automation tasks.',
    features: [
      'High torque density',
      'Low inertia rotors',
      'High resolution feedback',
      'Compact design',
      'Integrated brake option',
      'Advanced tuning algorithms'
    ],
    specs: {
      'Power Range': '50W to 15kW',
      'Rated Speed': '3000 RPM / 6000 RPM',
      'Peak Torque': 'Up to 300% of rated',
      'Feedback': '20-bit / 23-bit Absolute Encoder',
      'Protection': 'IP65',
      'Communication': 'EtherCAT / CANopen / Pulse Train'
    },
    applications: ['Packaging Machines', 'CNC Machinery', 'Robotics', 'Textile Machines', 'Printing Presses']
  }
];
