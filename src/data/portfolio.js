export const profile = {
  name: 'Priyankan Vettivel',
  email: 'priyankanvettivel@gmail.com',
  github: 'https://github.com/priyankan-v',
  linkedin: 'https://lk.linkedin.com/in/priyankan-vettivel',
}
export const categories = [
  'All projects',
  'Robotics',
  'Embedded systems',
  'AI & vision',
]
// Summaries are based on the linked public repositories.
// Set image to a /images/projects/... path; null keeps the illustration.
export const projects = [
  {
    id: 'sawyer',
    number: '01',
    title: 'Sawyer motion control',
    shortLabel: 'JOINT & CARTESIAN CONTROL',
    category: 'Robotics',
    artwork: 'arm',
    image: null,
    imageAlt: '',
    tools: ['ROS 2', 'Python', 'PID control', 'Kinematics'],
    description:
      'ROS 2 motion-control software for the Sawyer manipulator, combining trajectory planning with joint feedback.',
    detail:
      'A ROS 2 motion-control application for Sawyer using quintic trajectory generation and a custom PID controller. The application compares reference joint states with measured feedback and sends corrected velocity commands through a ROS 2–ROS 1 bridge.',
    highlights: [
      'Quintic joint trajectories and relative Cartesian motion planning',
      'Custom joint PID with velocity feedforward',
      'Intera electric-gripper controls and cuff-button bindings',
      'Motion preview available; PID gains not yet validated on hardware',
    ],
    url: 'https://github.com/priyankan-v/Sawyer-Project',
  },
  {
    id: 'amrc',
    number: '02',
    title: 'Autonomous mobile robot control',
    shortLabel: 'SLAM & NAVIGATION',
    category: 'Robotics',
    artwork: 'map',
    image: null,
    imageAlt: '',
    tools: ['ROS 2', 'SLAM', 'Gazebo', 'LiDAR'],
    description:
      'A ROS 2 controller for autonomous mobile robots, using LiDAR-based mapping and navigation in simulation.',
    detail:
      'A generalized controller project for autonomous mobile robots in industrial environments. The project uses ROS 2 and SLAM Toolbox for LiDAR-based mapping and navigation, with initial simulation work in Gazebo and RViz.',
    highlights: [
      'ROS 2-based mobile robot control',
      'Environment mapping with SLAM Toolbox',
      'LiDAR-based navigation approach',
      'Initial simulation in Gazebo and RViz',
    ],
    url: 'https://github.com/priyankan-v/AMRC',
  },
  {
    id: 'medibox',
    number: '03',
    title: 'Medibox',
    shortLabel: 'MEDICATION REMINDERS',
    category: 'Embedded systems',
    artwork: 'board',
    image: null,
    imageAlt: '',
    tools: ['C++', 'Embedded systems'],
    description: 'An embedded C++ project for medication reminders.',
    detail:
      'A C++ embedded systems project for medication reminders. The repository contains the Medibox source code.',
    highlights: [
      'Medication reminder design',
      'Embedded application development in C++',
    ],
    url: 'https://github.com/priyankan-v/Medibox',
  },
  {
    id: 'switch',
    number: '04',
    title: 'Presence-based appliance control',
    shortLabel: 'PRESENCE-BASED CONTROL',
    category: 'Embedded systems',
    artwork: 'switch',
    image: null,
    imageAlt: '',
    tools: ['C++', 'Embedded systems'],
    description:
      'Embedded C++ control of home appliances based on human presence.',
    detail:
      'Killer-Switch is an embedded C++ project for controlling home appliances based on human presence. The implementation connects presence sensing with appliance switching.',
    highlights: [
      'Human-presence-based switching',
      'Home appliance control',
      'Embedded software in C++',
    ],
    url: 'https://github.com/priyankan-v/Killer-Switch',
  },
  {
    id: 'neural',
    number: '05',
    title: 'Neural network coursework',
    shortLabel: 'NEURAL NETWORKS',
    category: 'AI & vision',
    artwork: 'vision',
    image: null,
    imageAlt: '',
    tools: ['Jupyter', 'Neural networks'],
    description:
      'Jupyter-based coursework on neural networks for the EN2160 module.',
    detail:
      'Jupyter notebooks documenting neural network coursework for EN2160, including implementation exercises and experimentation with machine learning concepts.',
    highlights: [
      'Neural network coursework for EN2160',
      'Jupyter notebook exercises',
    ],
    url: 'https://github.com/priyankan-v/Assignment-3-on-Neural-Networks',
  },
  {
    id: 'image-processing',
    number: '06',
    title: 'Image processing and filtering',
    shortLabel: 'IMAGE TRANSFORMATIONS',
    category: 'AI & vision',
    artwork: 'vision',
    image: null,
    imageAlt: '',
    tools: ['Jupyter', 'Image processing'],
    description:
      'EN3160 coursework on intensity transformations and neighborhood filtering.',
    detail:
      'Jupyter notebooks for EN3160 covering intensity transformations, neighborhood filtering, and fundamental image processing operations.',
    highlights: [
      'Intensity transformations',
      'Neighborhood filtering',
      'Notebook-based image processing coursework',
    ],
    url: 'https://github.com/priyankan-v/Intensity-Transformations-and-Neighborhood-Filtering',
  },
]

export const skillGroups = [
  {
    title: 'Programming languages',
    skills: ['C', 'C++', 'Python', 'Java', 'JavaScript'],
  },
  {
    title: 'Robotics & control',
    skills: ['ROS', 'ROS 2', 'Gazebo', 'SLAM', 'MATLAB', 'PID control'],
  },
  {
    title: 'Embedded platforms',
    skills: ['STM32', 'ESP32', 'Arduino', 'Firmware', 'Hardware interfacing'],
  },
  {
    title: 'AI & computer vision',
    skills: ['OpenCV', 'PyTorch', 'TensorFlow', 'NumPy', 'Jupyter'],
  },
  {
    title: 'Software & systems',
    skills: ['Linux', 'Node.js', 'MySQL', 'Networking'],
  },
  {
    title: 'Development tools',
    skills: ['Git', 'GitHub', 'Docker', 'Simulation'],
  },
]

export const education = [
  {
    label: 'Graduate study',
    institution: 'Oklahoma State University',
    degree: 'MS · Mechanical and Aerospace Engineering',
    description:
      'Graduate study in mechanical and aerospace engineering, with interests in robotics, control, and software integration.',
  },
  {
    label: 'Undergraduate education',
    institution: 'University of Moratuwa',
    degree: 'Electronic and Telecommunication Engineering',
    description:
      'Undergraduate training in electronics, embedded systems, and communication engineering.',
  },
]

// Roles, dates, locations, and skills supplied by Priyankan from LinkedIn.
export const experience = [
  {
    id: 'osu-graduate-assistant',
    role: 'Graduate Research and Teaching Assistant',
    organization: 'Oklahoma State University',
    period: 'Aug 2026 – Present',
    employment: 'Part-time',
    location: 'Stillwater, Oklahoma, United States',
    workplace: 'On-site',
    current: true,
    skills: ['Robotics', 'Robot Operating System (ROS)'],
  },
  {
    id: 'moratuwa-instructor-2026',
    role: 'Visiting Instructor',
    organization:
      'University of Moratuwa · Electronic and Telecommunication Engineering',
    period: 'Feb 2026 – May 2026',
    employment: 'Part-time',
    location: 'Moratuwa, Western Province, Sri Lanka',
    workplace: 'On-site',
    skills: ['University teaching', 'Classroom instruction'],
  },
  {
    id: 'senzmate-intern',
    role: 'Embedded Systems Engineer – Intern',
    organization: 'SenzMate AIoT Intelligence',
    period: 'Dec 2024 – Jun 2025',
    employment: 'Internship',
    location: 'Colombo, Western Province, Sri Lanka',
    workplace: 'On-site',
    skills: ['Embedded software', 'Embedded C'],
  },
  {
    id: 'moratuwa-instructor-2024',
    role: 'Visiting Instructor',
    organization:
      'University of Moratuwa · Electronic and Telecommunication Engineering',
    period: 'Jun 2024 – Dec 2024',
    employment: 'Part-time',
    location: 'Moratuwa, Western Province, Sri Lanka',
    workplace: 'On-site',
    description:
      'Conducted laboratory sessions and assessed student laboratory work for the EN2533 RD&C module.',
    skills: ['Classroom instruction', 'Team management'],
  },
]
