import { ProjectsData } from './../data/projects';

import './Projects.css';

export default function Projects() {
  return (
    <div class='projects'>
      {ProjectsData.map((project, index) => {
        return (
          <div class='project'>
            <img src={project.image} alt='' class='project-image' />
            <p class='project-detail'>
              {project.title}, {project.label}, {project.date}
            </p>
          </div>
        );
      })}
    </div>
  );
}
