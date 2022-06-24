import { createSignal, For } from 'solid-js';

import { ProjectsData } from './../data/projects';

import './Projects.css';

export default function Projects() {
  const [projects, setProjects] = createSignal(ProjectsData);

  return (
    <div class='projects'>
      <For each={projects()}>
        {(project, i) => (
          <div class='project'>
            <img src={project.image} alt='' class='project-image' />
            <p class='project-detail'>
              <span>{project.title}</span>, {project.label},{' '}
              {project.date.substring(project.date.length - 4)}
            </p>
          </div>
        )}
      </For>
    </div>
  );
}
