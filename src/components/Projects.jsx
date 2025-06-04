import { createSignal, For } from 'solid-js';

import { ProjectsData } from './../data/projects';

import './Projects.css';

export default function Projects() {
  const [projects, setProjects] = createSignal(ProjectsData);

  const handleProjectClick = (e) => {
    const projectElement = e.target.parentNode;
    const alreadyActive = projectElement.classList.contains('active');
    let anyElementActive = false;

    const elements = document.getElementsByClassName('project');

    for (const element of elements) {
      if (element.classList.contains('active')) {
        anyElementActive = true;
      }
    }

    if (!alreadyActive && !anyElementActive) {
      // Store the original position before adding the active class
      const rect = projectElement.getBoundingClientRect();
      const parentRect = projectElement.parentElement.getBoundingClientRect();

      // Calculate position relative to the parent
      const originalX = rect.left - parentRect.left;
      const originalY = rect.top - parentRect.top;

      // Set the CSS variables
      projectElement.style.setProperty('--original-x', `${originalX}px`);
      projectElement.style.setProperty('--original-y', `${originalY}px`);
    }

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
      // Add closing animation
      projectElement.classList.add('closing');
      projectElement.classList.remove('active');

      // Remove the closing class after animation completes
      setTimeout(() => {
        projectElement.classList.remove('closing');
      }, 400); // Match the animation duration
    } else {
      projectElement.classList.add('active');
      projectElement.classList.remove('inactive');
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
                <a
                  href='https://open.spotify.com/album/1Y2SsSgvDd46jrmstVNT9p?si=oWW0ZWUbThm6tcQsZT7ZfA'
                  target='_blank'
                  rel='noreferrer'
                >
                  Spotify,{' '}
                </a>
                <a
                  href='https://open.spotify.com/album/1Y2SsSgvDd46jrmstVNT9p?si=oWW0ZWUbThm6tcQsZT7ZfA'
                  target='_blank'
                  rel='noreferrer'
                >
                  Apple Music,{' '}
                </a>
                <a
                  href='https://open.spotify.com/album/1Y2SsSgvDd46jrmstVNT9p?si=oWW0ZWUbThm6tcQsZT7ZfA'
                  target='_blank'
                  rel='noreferrer'
                >
                  Bandcamp
                </a>
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
