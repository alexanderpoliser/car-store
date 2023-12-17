import { Route } from "@angular/router";

export const APP_ROUTES: Route[] = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        loadComponent: () => import("./components/layout/layout.component").then((m) => m.LayoutComponent),
        children: [
            {
                path: 'home',
                loadChildren: () => import("./components/home/home-route").then((m) => m.homeRoute),
            },
            {
                path: 'cars',
                loadChildren: () => import("./components/cars/cars-route").then((m) => m.carsRoute),
            },
            {
                path: 'about',
                loadChildren: () => import("./components/about/about-route").then((m) => m.aboutRoute),
            },
            {
                path: 'parts',
                loadChildren: () => import("./components/parts/parts-route").then((m) => m.partsRoute),
            }
        ]
    },
   
  
]