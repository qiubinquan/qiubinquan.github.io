import type { Profile } from '../types/content';

export const profile: Profile = {
  name: 'Qiu Binquan',
  role: 'Robotics and Automation Engineer',
  affiliation: '',
  location: '',
  bio: 'Qiu Binquan works across robotics, automation, motion control, and mechanical engineering, with experience in industrial robot workcell optimization, medical robotics, lower-limb exoskeletons, and pipeline mechanical behavior analysis.',
  interests: [
    'Robotics and automation',
    'Motion control',
    'Robot kinematics and dynamics',
    'Energy-efficient robotic workcells',
    'Medical and rehabilitation robotics',
    'Mechanical behavior analysis',
  ],
  education: [
    {
      institution: 'Jiangxi University of Science and Technology',
      degree: 'Master',
      field: 'Mechanical Engineering',
      startYear: '2019',
      endYear: '2022',
    },
    {
      institution: 'Ningbo Institute of Materials Technology and Engineering, Chinese Academy of Sciences',
      degree: 'Joint Education Program',
      field: 'Master-level research training',
      startYear: '2020',
      endYear: '2022',
    },
    {
      institution: 'Southwest Petroleum University',
      degree: 'Bachelor',
      field: 'Process Equipment and Control Engineering',
      startYear: '2014',
      endYear: '2018',
    },
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
