import { Route } from "@angular/router";

export const aboutRoute: Route[] = [
    {
        path: '',
        loadComponent: () => import('./about.component').then((m) => m.AboutComponent)
    }
]