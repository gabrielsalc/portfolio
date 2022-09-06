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
      'Practice react one scroll page, it was a part of two, this is the front end, a page that is like a tourism agency',
    stack: ['React', 'Html', 'CSS-SASS-Bootstrap'],
    sourceCode: 'https://github.com/gabrielsalc/proyectoMundosE',
    livePreview: 'https://frontmundose.herokuapp.com/',
  },
  {
    name: 'Laravel MundosE Project',
    description:
      'This is the second part of the previous project, this is an api that process incoming messages and load it to the data base, send me an email and a little front end to show incoming messages',
    stack: ['Laravel-Php', 'Html', 'CSS', 'Mysql'],
    sourceCode: 'https://github.com/gabrielsalc/MundosEBackend',
    livePreview: 'https://proyectomundose.herokuapp.com/mensajes',
},
{
  name: 'Crud poo php',
  description: 'Just a CRUD with Php and some Javascripts. It was my first project that has a variety of controls and secure connections to the database',
  stack: ['Php', 'Html', 'CSS', 'Javascript','Mysql'],
  sourceCode: 'https://github.com/gabrielsalc/crudphppuro',
},
{
  name: 'Spotify Like App',
  description: 'This was my first App, is a Spotify-like web that has a few songs, a search bar, cookies and users. It was made with plain php',
  stack: ['Php', 'Html', 'CSS', 'Mysql'],
  sourceCode: 'https://github.com/gabrielsalc/practica-php',
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
