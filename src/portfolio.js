import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://morganbb104.github.io/HW_20_Portfolio_withReact/',
  title: 'Home',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Gabriel Salcedo',
  role: 'Back-End/Front-End Developer',
  description:
    'Full Stack developer from Argentina',
  resume: 'https://drive.google.com/file/d/1R8n5vOD3wt2SsEeWvwRpJxkhYUGkBNio/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/gabsalel/',
    github: 'https://github.com/gabrielsalc',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'React MundosE Project',
    description:
      'Page that i did during the Full Stack Course',
    stack: ['React', 'Html', 'CSS-SASS-Bootstrap'],
    sourceCode: 'https://github.com/gabrielsalc/proyectoMundosE',
    livePreview: 'https://frontmundose.herokuapp.com/',
  },
  {
    name: 'Event Planner',
    description:
      'Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse whats happening in your local area.',
    stack: ['swiper.js', 'npm', 'jawsdb','handlebars','express','nodejs'],
    sourceCode: 'https://github.com/Morganbb104/Event_Planner_project2',
    livePreview: 'https://obscure-chamber-98928.herokuapp.com/',
  },
  {
    name: 'Resource Planner',
    description:
      'Resource Planner is able to distrute the current resource including human resource,time and budget in one company in order to help user to manahe their projects',
    stack: ['html-css-javascript', 'sequelize', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'SASS',
  'JavaScript',
  'React',
  'PHP',
  'Laravel',
  'MySQL',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gabrielsalcedo.gs@gmail.com',
}

export { header, about, projects, skills, contact }
