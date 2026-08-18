import type { Profile } from '../types/content';

export const profile: Profile = {
  name: 'Qiu Binquan',
  role: 'Doctoral Student in Informatics and Data Science',
  affiliation: 'Graduate School of Advanced Science and Engineering, Hiroshima University',
  location: '',
  bio: 'I am a doctoral student in the Informatics and Data Science Program at Hiroshima University. My current research focuses on complex systems, including multi-agent system control and interventions in weather systems.\n\nI have worked on robotic-arm modeling and planning, participated in the development of robotic devices such as lower-limb exoskeletons and blood-drawing robots, and bring embedded application experience together with a mechanical engineering background.',
  interests: [
    'Robotics',
    'Multi-agent systems',
    'Motion control',
  ],
  education: [
    {
      institution: 'Hiroshima University',
      degree: 'Ph.D. Student',
      field: 'Informatics and Data Science Program',
      startYear: '2025',
      endYear: 'present',
    },
    {
      institution: 'Jiangxi University of Science and Technology',
      degree: 'M.Eng.',
      field: 'Mechanical Engineering',
      startYear: '2019',
      endYear: '2022',
    },
    {
      institution: 'Ningbo Institute of Materials Technology and Engineering, Chinese Academy of Sciences',
      degree: "Joint Master's Program",
      field: '',
      startYear: '2020',
      endYear: '2022',
    },
    {
      institution: 'Southwest Petroleum University',
      degree: 'B.Eng.',
      field: 'Process Equipment and Control Engineering',
      startYear: '2014',
      endYear: '2018',
    },
  ],
  projectExperience: [
    {
      organization: 'Ningbo Institute of Materials Technology and Engineering, Chinese Academy of Sciences',
      title: 'Robot Workcell Optimization Research',
      location: 'Ningbo, China',
      startYear: '2020',
      endYear: '2022',
      summary: 'Research on energy-efficient and collision-free robotic workcell automation.',
      highlights: [
        'Proposed methods for avoiding collisions with intermediate trajectory points.',
        'Developed concurrent optimization methods for robotic workcell layout and trajectory.',
        'Built kinematic and dynamic models of a KUKA robot using D-H conventions and the Newton-Euler method.',
        'Improved upper-computer control software for an automatic ultrasonic-peening robotic workcell using LabVIEW.',
      ],
    },
    {
      organization: 'Southwest Petroleum University',
      title: 'Pipeline Mechanical Behavior Analysis',
      location: 'Chengdu, China',
      startYear: '2017',
      endYear: '2018',
      summary: 'Research on the safety evaluation of oil and gas transportation pipelines under indentation damage.',
      highlights: [
        'Evaluated pipeline safety using Abaqus-based mechanical analysis.',
        'Studied the effects of displacement, indenter radius, internal pressure, and wall thickness on stress, strain, and dent depth.',
      ],
    },
  ],
  workExperience: [
    {
      organization: 'Chengdu Aixam Medical Technology Co. Ltd.',
      title: 'Motion Control Engineer',
      location: 'Chengdu, China',
      startYear: '2023',
      endYear: '2024',
      summary: 'Participated in the development of an intelligent blood drawing robot.',
      highlights: [
        'Established kinematic models for the robot and end-effector.',
        'Developed kinematic algorithms for motion control.',
        'Implemented hand-eye calibration and visual servoing for precise alignment with target blood vessels.',
      ],
    },
    {
      organization: 'Chongqing Institute of Bio-Intelligent Manufacturing',
      title: 'Assistant R&D Officer',
      location: 'Chongqing, China',
      startYear: '2022',
      endYear: '2023',
      summary: 'Participated in lower-limb exoskeleton development for rehabilitation assistance.',
      highlights: [
        'Developed STM32-based functions including CAN, USART, and FreeRTOS modules.',
        'Implemented real-time motor control and communication with Linux systems.',
        'Built kinematic and dynamic models for exoskeleton control.',
        'Implemented passive-mode position control for assisted gait training.',
      ],
    },
    {
      organization: 'HongHua Group Ltd.',
      title: 'Assistant Mechanical Engineer',
      location: 'Chengdu, China',
      startYear: '2018',
      endYear: '2019',
      summary: 'Participated in mechanical design work for drilling rig modification.',
      highlights: [
        'Worked on machine-part design for a drilling rig modification program.',
      ],
    },
  ],
  publications: [
    {
      authors: 'Qiu, Binquan, et al.',
      title: 'Concurrent layout and trajectory optimization for robot workcell toward energy-efficient and collision-free automation',
      venue: 'The International Journal of Advanced Manufacturing Technology',
      year: '2022',
    },
    {
      authors: 'Qiu, Binquan, et al.',
      title: 'Synchronous planning of trapezoidal trajectory for robot joints with optimal energy consumption',
      venue: 'Machine Design and Research',
      year: '2022',
    },
    {
      authors: 'Qiu, Binquan, et al.',
      title: 'A Feasible Method for Evaluating Energy Consumption of Industrial Robots',
      venue: '2021 IEEE 16th Conference on Industrial Electronics and Applications (ICIEA)',
      year: '2021',
    },
    {
      authors: 'Yu, Chunyu, Qiu, Binquan, et al.',
      title: 'Mechanical Behavior and Evaluation of Dented Pipe Caused by Cylindrical Indenter',
      venue: 'Journal of Failure Analysis and Prevention',
      year: '2019',
    },
    {
      authors: 'Qiu, Binquan, Jianlin Hu, and Jie Zhang',
      title: 'Failure analysis and mechanical behavior of dented pipeline dent caused by indenter',
      venue: 'Strength, Fracture and Complexity',
      year: '2018',
    },
  ],
  patents: [
    'CN115671548A',
    'CN114407019A',
    'CN114088024A',
    'CN113042577B',
    'CN206535398U',
  ],
  awards: [
    'SPRING fellow, Hiroshima University, 2025',
    'Outstanding employee, Chengdu Aixam Medical Technology Co. Ltd., 2024',
    'Merit student, Ningbo Institute of Materials Technology and Engineering, 2022',
    'First prize scholarship, Jiangxi University of Science and Technology, 2022',
    'Outstanding graduate, Southwest Petroleum University, 2018',
    'Second prize scholarship, Southwest Petroleum University, 2017',
    'Excellent student cadre, Southwest Petroleum University, 2016',
  ],
  skills: [
    {
      name: 'Programming and control',
      items: ['C++', 'STM32', 'FreeRTOS', 'CAN', 'USART'],
    },
    {
      name: 'Robotics and modeling',
      items: ['Kinematics', 'Dynamics', 'Visual servoing', 'Hand-eye calibration'],
    },
    {
      name: 'Engineering tools',
      items: ['MATLAB', 'LabVIEW', 'SolidWorks', 'Abaqus'],
    },
    {
      name: 'Languages',
      items: ['Chinese', 'English'],
    },
  ],
};
