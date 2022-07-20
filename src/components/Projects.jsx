import { createSignal, For } from 'solid-js';

import { ProjectsData } from './../data/projects';

import './Projects.css';

export default function Projects() {
  const [projects, setProjects] = createSignal(ProjectsData);

  const handleProjectClick = (e) => {
    const alreadyActive = e.target.parentNode.classList.contains('active');
    let anyElementActive = false;

    const elements = document.getElementsByClassName('project');

    for (const element of elements) {
      if (element.classList.contains('active')) {
        anyElementActive = true;
      }
    }

    console.log(alreadyActive);
    console.log(anyElementActive);

    for (const element of elements) {
      if (anyElementActive && !alreadyActive) {
        element.classList.remove('active');
        element.classList.add('inactive');
      } else if (anyElementActive && alreadyActive) {
        element.classList.remove('active');
        element.classList.remove('inactive');
      } else {
        element.classList.add('inactive');
      }
    }

    if (alreadyActive) {
      e.target.parentNode.classList.remove('active');
    } else {
      e.target.parentNode.classList.add('active');
      e.target.parentNode.classList.remove('inactive');
    }
  };

  return (
    <div class='projects'>
      <For each={projects()}>
        {(project, i) => (
          <div class='project'>
            <img
              src={project.image}
              alt=''
              class='project-image'
              onClick={(e) => handleProjectClick(e)}
            />
            <p class='project-details'>
              <span>{project.title}</span>, {project.label},{' '}
              {project.date.substring(project.date.length - 4)}
            </p>
            <div class='active-project-details'>
              <h3>{project.title}</h3>
              <p>
                INGI debuts on Scuffed Recordings with three tracks spanning
                anthemic breaks, wonky UK techno and percussive club music.
              </p>
              <div class='release-info'>
                <p>
                  {' '}
                  <span>{project.label}</span>
                </p>
                <p>{project.date}</p>
              </div>
              <div class='streaming'>
                <a href='#'>Spotify, </a>
                <a href='#'>Apple Music, </a>
                <a href='#'>Bandcamp</a>
              </div>
              <div class='credit'>
                Mastered by <span>Rob Small</span>
              </div>
              <div class='credit'>
                Artwork by <span>Todd Stiefelmayer</span>
              </div>
            </div>
          </div>
        )}
      </For>
    </div>
  );
}
