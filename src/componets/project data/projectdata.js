// projectData.js
import Task from '../../assets/task pics.png'
import Ecom from '../../assets/e commerce.png'
import Bankist from '../../assets/bankistpng.png'
import Swifdrop from '../../assets/Feature graphic.png'

const projects = [
  {
    id: 4,
    name: 'Swifdrop App',
    image: Swifdrop,
    description: 'Swifdrop is a food delivery app featuring user, vendor, and rider sections with live payments via Paystack. Tap "Review Work" to visit the landing page and access download options ',
    technologies: ['Flutter', 'Node Js', 'Typescript'],
    projectLink: 'https://swifdrop.ng/',
    // githubLink: 'https://github.com/yourusername/project1',
  },
    {
      id: 1,
      name: 'Task app',
      image: Task,
      description: 'Description of Project 1',
      technologies: ['React', 'Bootstrap', 'Node.Js'],
      projectLink: 'https://task-beta-ruddy.vercel.app',
      githubLink: 'https://github.com/Chimelu/task',
    },
    {   
         id : 2,
        name: 'E commerce App',
        image: Ecom,
        description: 'Description of Project 1',
        technologies: ['React', 'Bootstrap', '...'],
        projectLink: 'https://ecom-nine-rouge.vercel.app/',
        githubLink: 'https://github.com/Chimelu/ecom',
      },
      {
        id: 4,
        name: 'Bankist App',
        image: Bankist,
        description: 'Description of Project 1',
        technologies: ['VanillaJS', 'CSS', '...'],
        projectLink: 'https://bankist-peach.vercel.app/',
        githubLink: 'https://github.com/yourusername/project1',
      },
    
      {
        id: 3,
        name: 'Making payments with paystack API',
        image: '',
        description: 'Description of Project 1',
        technologies: ['Node.js', 'paystack API', '...'],
        projectLink: 'https://paystacknode.onrender.com',
        githubLink: 'https://github.com/Chimelu/node-paystack',
      },
  
  

    
      
    

  ];
  
  export default projects;
  