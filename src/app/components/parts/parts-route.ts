import { Route } from "@angular/router";

export const partsRoute: Route[] = [
    {
        path: '',
        loadComponent: () => import('./parts.component').then((m) => m.PartsComponent)
    }
]