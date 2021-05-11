import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { MovieComponent } from '../components/movie/movie.component';
import { PopularMoviesComponent } from '../components/popular-movies/popular-movies.component';
import { SearchedMoviesComponent } from '../components/searched-movies/searched-movies.component';

const routes: Routes = [
  { path: 'popular', component: PopularMoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'search/:searched', component: SearchedMoviesComponent },
  { path: '**', redirectTo: 'popular', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
