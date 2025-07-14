import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: 'anthurium/blog',
        loadComponent: () => import('./blog/blog').then(m => m.Blog)
    },
    {
        path: 'anthurium/collection',
        loadComponent: () => import('./collection/collection').then(m => m.Collection)
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
