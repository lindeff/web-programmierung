import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: 'details',
        loadComponent: () => import('./details/details').then(m => m.Details)
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about').then(m => m.About)
    },
        {
        path: 'contact',
        loadComponent: () => import('./contact/contact').then(m => m.Contact)
    },
];
