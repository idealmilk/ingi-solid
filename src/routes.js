import { lazy } from 'solid-js';

export const routes = [
  {
    path: '/',
    component: lazy(() => import('./pages/Home')),
  },
  {
    path: '/info',
    component: lazy(() => import('./pages/Info')),
  },
  {
    path: '/projects',
    component: lazy(() => import('./pages/Projects')),
  },
  {
    path: '/events',
    component: lazy(() => import('./pages/Events')),
  },
];
