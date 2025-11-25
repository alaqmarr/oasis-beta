export const INDUSTRIES = [
  {
    id: 'automotive',
    title: 'Automotive',
    description: 'Precision instrumentation for vehicle manufacturing, testing, and assembly lines.',
    longDescription: 'The automotive industry demands the highest levels of precision and reliability. Oasis Group provides comprehensive solutions for engine testing, assembly line automation, and component quality control. Our sensors and measurement systems ensure compliance with rigorous automotive standards.',
    applications: ['Engine Test Benches', 'Paint Shop Automation', 'Assembly Line Robotics', 'Component Leak Testing', 'Tire Manufacturing'],
    products: ['Pressure Sensors', 'Flow Meters', 'Encoders', 'Limit Switches', 'Condition Monitoring']
  },
  {
    id: 'rail-transportation',
    title: 'Rail Transportation',
    description: 'Robust sensors and control systems for high-speed trains, metros, and signaling.',
    longDescription: 'Safety and reliability are paramount in rail transportation. We supply EN 50155 compliant sensors for rolling stock and trackside applications. From speed monitoring to bearing temperature analysis, our solutions help maintain the integrity of rail networks.',
    applications: ['Traction Control', 'Braking Systems', 'Door Control', 'Track Maintenance', 'Signaling Equipment'],
    products: ['Rail Sensors', 'Relays', 'Inertial Sensors', 'Temperature Sensors', 'Vacuum Contactors']
  },
  {
    id: 'thermal-power',
    title: 'Thermal Power',
    description: 'Critical monitoring solutions for boilers, turbines, and auxiliary plant systems.',
    longDescription: 'Thermal power plants operate under extreme conditions. Our instrumentation withstands high temperatures and pressures to monitor steam flow, combustion efficiency, and turbine vibration. We help maximize plant efficiency and safety.',
    applications: ['Boiler Control', 'Turbine Monitoring', 'Cooling Water Systems', 'Flue Gas Analysis', 'Ash Handling'],
    products: ['Flow Meters', 'Pressure Sensors', 'Temperature Sensors', 'Condition Monitoring', 'Radar Level Sensors']
  },
  {
    id: 'hydel-power',
    title: 'Hydel Power',
    description: 'Instrumentation for hydroelectric turbines, dams, and water management.',
    longDescription: 'Harnessing the power of water requires precise control. Oasis Group offers solutions for monitoring water flow, turbine speed, and generator health in hydroelectric plants. Our rugged sensors perform reliably in humid and wet environments.',
    applications: ['Turbine Speed Control', 'Water Level Monitoring', 'Gate Control', 'Bearing Temperature', 'Generator Protection'],
    products: ['Flow Meters', 'Encoders', 'Radar Level Sensors', 'Condition Monitoring', 'Relays']
  },
  {
    id: 'nuclear-power',
    title: 'Nuclear Power',
    description: 'High-reliability sensors for safety-critical nuclear plant applications.',
    longDescription: 'In the nuclear industry, there is no room for error. We provide qualified instrumentation for safety-related systems, radiation monitoring support, and reactor auxiliary systems, adhering to the strictest quality and safety standards.',
    applications: ['Coolant Flow Monitoring', 'Containment Pressure', 'Valve Position Indication', 'Diesel Generator Monitoring', 'Waste Handling'],
    products: ['Pressure Sensors', 'Flow Meters', 'Limit Switches', 'Vacuum Contactors', 'Temperature Sensors']
  },
  {
    id: 'wind-energy',
    title: 'Wind Energy',
    description: 'Sensors for wind turbine control, pitch regulation, and condition monitoring.',
    longDescription: 'Maximizing wind energy capture requires precise control. Our encoders and sensors monitor blade pitch, yaw position, and generator speed. Our condition monitoring systems help predict maintenance needs for offshore and onshore turbines.',
    applications: ['Pitch Control', 'Yaw Control', 'Generator Speed', 'Tower Vibration', 'Nacelle Orientation'],
    products: ['Encoders', 'Inertial Sensors', 'Condition Monitoring', 'Limit Switches', 'Relays']
  },
  {
    id: 'electrical-machines',
    title: 'Electrical Machines',
    description: 'Components for motors, generators, and transformers.',
    longDescription: 'We support manufacturers of electrical machines with critical components like vacuum contactors for switching and sensors for thermal protection. Our solutions enhance the performance and longevity of motors and generators.',
    applications: ['Motor Protection', 'Generator Control', 'Transformer Switching', 'Vibration Testing', 'Thermal Monitoring'],
    products: ['Vacuum Contactors', 'Temperature Sensors', 'Condition Monitoring', 'Relays', 'Encoders']
  },
  {
    id: 'defence',
    title: 'Defence',
    description: 'Ruggedized instrumentation for land, sea, and air defence systems.',
    longDescription: 'Defence applications require equipment that can survive the harshest environments. Oasis Group supplies MIL-spec grade sensors and controls for military vehicles, naval vessels, and aerospace support systems.',
    applications: ['Vehicle Stabilization', 'Weapon Systems', 'Naval Propulsion', 'Ground Support Equipment', 'Radar Systems'],
    products: ['Inertial Sensors', 'Encoders', 'Pressure Sensors', 'Relays', 'Limit Switches']
  },
  {
    id: 'mining',
    title: 'Mining',
    description: 'Heavy-duty sensors and controls for excavation, crushing, and material handling.',
    longDescription: 'The mining industry operates in dusty, vibrating, and hazardous environments. Our heavy-duty limit switches, radar level sensors, and conveyor monitoring systems are built to withstand these tough conditions.',
    applications: ['Conveyor Safety', 'Crusher Control', 'Excavator Monitoring', 'Ventilation Systems', 'Ore Processing'],
    products: ['Heavy Duty Limit Switches', 'Radar Level Sensors', 'Condition Monitoring', 'Flow Meters', 'Vacuum Contactors']
  },
  {
    id: 'heavy-engineering',
    title: 'Heavy Engineering',
    description: 'Instrumentation for large-scale machinery, cranes, and construction equipment.',
    longDescription: 'Heavy engineering projects rely on massive machinery. We provide the feedback devices and safety controls that ensure these machines operate precisely and safely, from giant cranes to earthmovers.',
    applications: ['Crane Load Monitoring', 'Hydraulic Press Control', 'Earthmoving Equipment', 'Tunnel Boring Machines', 'Steel Structure Assembly'],
    products: ['Encoders', 'Pressure Sensors', 'Limit Switches', 'Inertial Sensors', 'Relays']
  },
  {
    id: 'steel-plants',
    title: 'Steel Plants',
    description: 'High-temperature sensors and controls for blast furnaces and rolling mills.',
    longDescription: 'Steel production involves extreme heat and heavy loads. Our sensors are designed to survive in steel mills, monitoring temperature in furnaces, speed in rolling mills, and flow in cooling systems.',
    applications: ['Blast Furnace Control', 'Continuous Casting', 'Rolling Mill Speed', 'Coke Oven Monitoring', 'Cooling Water Flow'],
    products: ['Temperature Sensors', 'Encoders', 'Flow Meters', 'Vacuum Contactors', 'Heavy Duty Limit Switches']
  },
  {
    id: 'electrical-panels',
    title: 'Electrical Panels',
    description: 'Components for switchgear, control panels, and power distribution.',
    longDescription: 'Panel builders rely on our high-quality relays, meters, and switches. We provide the essential components that make up the nerve center of industrial automation and power distribution systems.',
    applications: ['Switchgear Control', 'Distribution Panels', 'Motor Control Centers', 'Automation Cabinets', 'Power Factor Correction'],
    products: ['Relays', 'Counters', 'Vacuum Contactors', 'Temperature Sensors', 'Industrial Printers']
  },
  {
    id: 'valve-automation',
    title: 'Valve Automation',
    description: 'Actuators and positioners for precise flow control in process industries.',
    longDescription: 'As a specialized division, Oasis Valves & Pneumatics offers complete valve automation solutions. We integrate actuators, positioners, and limit switches to provide precise control over process flows.',
    applications: ['Process Flow Control', 'Emergency Shutdown', 'Pipeline Isolation', 'Batching Systems', 'Tank Farm Management'],
    products: ['Limit Switches', 'Pressure Sensors', 'Flow Meters', 'Relays', 'Encoders']
  },
  {
    id: 'cnc-machines',
    title: 'CNC Machines',
    description: 'Precision feedback and control components for machine tools.',
    longDescription: 'CNC machines require micron-level precision. Our high-resolution encoders and responsive servo systems enable machine tools to achieve the accuracy and surface finish required in modern manufacturing.',
    applications: ['Spindle Control', 'Axis Positioning', 'Tool Changing', 'Coolant Systems', 'Workpiece Measurement'],
    products: ['Encoders', 'Servo Motors & Drives', 'Relays', 'Flow Meters', 'Limit Switches']
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    description: 'Explosion-proof instrumentation for upstream, midstream, and downstream operations.',
    longDescription: 'Safety is critical in Oil & Gas. We offer ATEX/IECEx certified instrumentation for hazardous areas. From wellhead monitoring to refinery process control, our solutions ensure safe and efficient operations.',
    applications: ['Wellhead Monitoring', 'Pipeline Metering', 'Refinery Processes', 'Tank Gauging', 'Safety Shutdown Systems'],
    products: ['Flow Meters', 'Pressure Sensors', 'Radar Level Sensors', 'Temperature Sensors', 'Valve Automation']
  },
  {
    id: 'cement',
    title: 'Cement',
    description: 'Robust sensors for dusty and abrasive cement manufacturing environments.',
    longDescription: 'Cement plants are harsh environments with high dust and vibration. Our radar level sensors for silos and heavy-duty switches for conveyors are specifically selected to perform reliably in these conditions.',
    applications: ['Silo Level Monitoring', 'Kiln Temperature', 'Crusher Control', 'Conveyor Safety', 'Bag Filter Monitoring'],
    products: ['Radar Level Sensors', 'Temperature Sensors', 'Heavy Duty Limit Switches', 'Condition Monitoring', 'Flow Meters']
  },
  {
    id: 'paper',
    title: 'Paper',
    description: 'Precision control for pulp processing and paper machines.',
    longDescription: 'Paper manufacturing requires precise speed and tension control. Our encoders and flow meters help maintain consistent paper quality and machine speed throughout the complex production process.',
    applications: ['Pulp Flow Control', 'Machine Speed Sync', 'Roller Tension', 'Drying Section Temp', 'Chemical Dosing'],
    products: ['Encoders', 'Flow Meters', 'Temperature Sensors', 'Pressure Sensors', 'Relays']
  },
  {
    id: 'food-processing',
    title: 'Food Processing',
    description: 'Hygienic instrumentation for food and beverage production.',
    longDescription: 'Hygiene and accuracy are key in food processing. We offer sanitary flow meters and sensors designed for CIP/SIP processes, ensuring food safety and consistent product quality.',
    applications: ['Mixing & Blending', 'Pasteurization', 'Filling Machines', 'CIP Systems', 'Packaging'],
    products: ['Flow Meters', 'Temperature Sensors', 'Pressure Sensors', 'Counters', 'Industrial Printers']
  },
  {
    id: 'breweries',
    title: 'Breweries',
    description: 'Process control solutions for brewing, fermentation, and bottling.',
    longDescription: 'Brewing is a delicate art requiring precise temperature and flow control. Our instrumentation helps master brewers maintain the perfect conditions for fermentation and filtration, ensuring the perfect brew every time.',
    applications: ['Mash Tun Temp', 'Fermentation Control', 'Filtration Flow', 'Kegging Lines', 'Bottle Labeling'],
    products: ['Temperature Sensors', 'Flow Meters', 'Pressure Sensors', 'Industrial Printers', 'Counters']
  }
];
