import { lazy } from 'solid-js';

export const routes = [
  {
    path: '/',
    component: lazy(() => import('./pages/Home')),
    children: []
  },
  {
    path: '/info',
    component: lazy(() => import('./pages/Info')),
    children: []
  },
  {
    path: '/projects',
    component: lazy(() => import('./pages/Projects')),
    children: []
  },
  {
    path: '/events',
    component: lazy(() => import('./pages/Events')),
    children: []
  },
];
