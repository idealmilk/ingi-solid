import { createSignal, For } from 'solid-js';

import { ProjectsData } from './../data/projects';

import './Projects.css';

export default function Projects() {
  const [projects, setProjects] = createSignal(ProjectsData);
  const [isBaseGridDimmed, setIsBaseGridDimmed] = createSignal(false);

  const handleProjectClick = (e, isOverlay = false) => {
    if (isOverlay) {
      // Handle clicking on an active project in the overlay
      const projectElement = e.target.parentNode;
      projectElement.classList.remove('active');
      projectElement.classList.add('closing');

      // Remove the closing class after animation completes
      setTimeout(() => {
        projectElement.classList.remove('closing');
      }, 400); // Match the animation duration

      setIsBaseGridDimmed(false);
      return;
    }

    const projectElement = e.target.parentNode;
    const overlayGrid = document.querySelector('.projects.overlay');
    const overlayProject =
      overlayGrid.children[
        Array.from(projectElement.parentNode.children).indexOf(projectElement)
      ];

    // Calculate position relative to viewport
    const rect = projectElement.getBoundingClientRect();
    const parentRect = projectElement.parentElement.getBoundingClientRect();

    // Calculate position relative to the parent
    const originalX = rect.left - parentRect.left;
    const originalY = rect.top - parentRect.top;

    // Set the CSS variables
    overlayProject.style.setProperty('--original-x', `${originalX}px`);
    overlayProject.style.setProperty('--original-y', `${originalY}px`);

    // Activate the overlay project
    overlayProject.classList.add('active');

    // Dim the base grid
    setIsBaseGridDimmed(true);
  };

  return (
    <div class='projects-container'>
      {/* Base grid - always maintains layout */}
      <div class={`projects base ${isBaseGridDimmed() ? 'dimmed' : ''}`}>
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

      {/* Overlay grid - handles animations */}
      <div class='projects overlay'>
        <For each={projects()}>
          {(project, i) => (
            <div class='project'>
              <img
                src={project.image}
                alt=''
                class='project-image'
                onClick={(e) => handleProjectClick(e, true)}
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
    </div>
  );
}
