import { Routes } from '@angular/router';

import { Letter } from './pages/letter/letter';
import { Links } from './pages/links/links';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'messages/1',
    pathMatch: 'full',
  },

  {
    path: 'messages/:id',
    component: Letter,
  },

  {
    path: 'links',
    component: Links,
  },

  {
    path: '**',
    component: NotFound,
  },
];
