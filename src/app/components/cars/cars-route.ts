import { Route } from "@angular/router";

export const carsRoute: Route[] = [
    {
        path: '',
        loadComponent: () => import('./cars.component').then((m) => m.CarsComponent)
    }
]