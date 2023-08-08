const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://austingayler.github.io/',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Austin Gayler',
  role: 'Software Engineer',
  description:
    "I'm a software engineer with a focus on the front-end. I've worked across numerous business domains, and have an eye for responsive, pixel-perfect design in websites that are a pleasure to use. My background is in computer science (though my interest in technology began far before that), and my experience across the whole software stack allow me to work with everything from websites for smaller business to complex web applications.",
  resume: 'https://austingayler.github.io/cv.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/austin-gayler-661ba092/',
    github: 'https://github.com/austingayler',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Zash',
    description:
      'iOS/Android application to assist stroke detection study participants and help them set up IoT device with local WiFi credentials via Bluetooth',
    stack: ['React Native', 'TypeScript', 'Expo', 'Bluetooth'],
    livePreview: 'https://apps.apple.com/us/app/zash-study/id6443660746',
    img: '/zash.jpg',
  },
  {
    name: 'Homesite Construction Dashboard',
    description:
      'Admin dashboard to manage construction details of 50,000 homes for a homebuilding company',
    stack: [
      'React',
      'TypeScript',
      'SASS',
      'Storybook',
      'react-testing-library',
    ],
    img: '/lennar.png',
  },
  {
    name: 'WAC3',
    description:
      'Management of IoT devices and weather/topographical data for avalanche control',
    stack: ['Leaflet', 'Vue', 'jQuery', 'PHP', 'SQL'],
    livePreview:
      'https://www.wyssenavalanche.com/en/software-services/wac-3-cockpit-and-additional-modules/',
    img: '/wac.jpg',
  },

  {
    name: 'GAN Training',
    description:
      'Training a GAN to replicate my photographic style on my personal archive of landscape photos',
    stack: ['Python', 'Google Cloud'],
    sourceCode: 'https://github.com/austingayler/photovision',
    img: '/gan.png',
  },
  {
    name: 'Lateral',
    description: 'A suite of web interfaces for human-assisted ML training',
    stack: ['React', 'SASS', 'HTML Canvas', 'Storybook'],
    livePreview: 'https://www.lateral.io/',
    img: '/lateral.png',
  },
  {
    name: 'Staff Management Dashboard',
    description:
      'Admin dashboard for managing users of a staff credentialing app, integrating NFC and GPS data',
    stack: ['React', 'SASS', 'Leaflet', 'NFC'],
    img: '/pz2.png',
  },
  {
    name: 'Jumbotron Event Contest Entry',
    description:
      'Infrastructure for promotions entered by 15,000 people simultaneously at Major League Baseball games',
    stack: ['React', 'SASS', 'Knex', 'NodeJS', 'AWS Lambda', 'AWS S3'],
    img: '/sx.png',
  },
  {
    name: 'PintPass',
    description:
      'iOS/Android applications for increasing engagement at craft breweries',
    stack: ['Hapi', 'Express', 'Android', 'iOS', 'Python Scripting'],
    livePreview: 'http://pintpass.com/',
  },
  {
    name: 'Audio Analysis',
    description:
      'Web interface and infrastructure for a client to upload audio, run them through different state-of-the-art audio analysis tools (speaker diarization, sentiment analysis, etc), and visualize the results',
    stack: [
      'Django',
      'React',
      'Recharts',
      'Azure Cognitive Services',
      'Amazon Transcribe/Comprehend',
    ],
  },
  {
    name: 'Reddit Bot',
    description:
      'Reddit bot that posts alternative music links for music posted in a subreddit',
    stack: ['Python', 'Reddit API', 'Youtube API'],
    sourceCode: 'https://github.com/austingayler/reddit-music-linker-bot',
  },
  {
    name: 'Sharelift',
    description:
      'Mobile applications for ridesharing, leveraging the culture of the ski community of Bozeman, MT',
    stack: ['Angular', 'MeteorJS', 'MongoDB', 'Cordova'],
    livePreview: 'https://www.shareliftapp.com/',
    img: '/sharelift.png',
  },
  {
    name: 'Pythia',
    description: 'Raspberry Pi web interface for hobby projects',
    stack: ['PHP', 'Apache', 'MySQL', 'HTML/Bootstrap'],
    sourceCode: 'https://github.com/austingayler/pythial',
    img: '/pythia.png',
  },
  {
    name: 'fauxexposure',
    description:
      'Android camera application to simulate different modes of photography, such as long exposures',
    stack: ['Android', 'Java', 'DIY Computational Photography'],
    sourceCode: 'https://github.com/austingayler/fauxexposure',
  },
  {
    name: 'Last.fm Downloader',
    description:
      'Script to download recommended music based on your Last.fm history',
    stack: ['Java', 'Last.fm API'],
    sourceCode: 'https://github.com/austingayler/rec_me',
  },
  {
    name: 'MSU Exponent Blog',
    description: 'Blog for local university newspaper',
    stack: ['PHP', 'HTML', 'Wordpress'],
    img: '/exponent.png',
  },
  {
    name: 'Pure Data Sound Design',
    description:
      'Math-heavy design of sound effects and synthesizer noises using Pure Data',
    stack: ['Pure Data'],
    img: '/puredata.png',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  // email:
  //   'https://docs.google.com/document/d/1cIj6TkM4JMPNzJObETxWyv5ZRQc_mdMdHwSbEZVuYIc/',
}

export { header, about, projects, skills, contact }
