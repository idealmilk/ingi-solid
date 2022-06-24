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
              {project.title}, {project.label}, {project.date}
            </p>
          </div>
        )}
      </For>
    </div>
  );
}
