import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'home', component: HomeComponent},
    {path: '**', component: PageNotFoundComponent},
];
