import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { PopularMoviesComponent } from '../components/popular-movies/popular-movies.component';

const routes: Routes = [{ path: '**', component: PopularMoviesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
