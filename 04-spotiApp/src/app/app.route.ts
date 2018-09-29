import { Routes } from '@angular/router'
import { HomeComponent } from './component/home/home.component'
import { SearchComponent } from './component/search/search.component'

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
]