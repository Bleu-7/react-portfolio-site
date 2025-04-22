import figmaProject from '../images/figma-project-image.png';
import reactProject from '../images/react-project-image.png';
import phpProject from '../images/php-project-image.png';


const projectsData = [
    {
      id: 1,
      title: "Exercise & Nutrition Tracking App",
      description: "Ongoing project tasking me with creating a brand new mobile app from scratch. High fidelity prototype made with Figma.",
      image: figmaProject,
      demo: "https://www.figma.com/proto/sOvPY8rgKNyDGJnvryyUL5/Journey-High-Fidelity-Mockup?page-id=2971%3A250&node-id=3028-2758&p=f&viewport=256%2C225%2C0.14&t=VS8gNTFKKmNELXZf-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3028%3A2758",
    },
    {
      id: 2,
      title: "Fictional Video Game Review Site",
      description: "Latest PHP & MySQL project that tasked me with creating a simple Content Management System (CMS) backend with RSS syndication.",
      image: phpProject,
      demo: "https://students.gaim.ucf.edu/~jo591696/dig3134/assignment06/login.php",
    },
    {
      id: 3,
      title: "Basic Quiz App",
      description: "Past React Native project that tasked me with creating a simple quiz application that accurately displays questions, answers, and final results to the end user.",
      image: reactProject,
      demo: "https://youtu.be/xr_dNs-er3A",
    }
  ];

  export default projectsData;