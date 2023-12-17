import { Route } from "@angular/router";

export const homeRoute: Route[] = [
    {
        path: '',
        loadComponent: () => import('./home.component').then((m) => m.HomeComponent)
    }
]