import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchHeroesComponent } from './components/search-heroes/search-heroes.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: 'searcheroe/:text', component: SearchHeroesComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });