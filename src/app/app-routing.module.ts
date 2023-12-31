import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { GenresComponent } from './pages/genres/genres.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'genres', component:GenresComponent
  },
  {
    path: 'movies', component: MoviesComponent
  },
  {
    path: 'movies/genres/:genreId', component: MoviesComponent
  },
  {
    path: 'movie/:id', component: MovieDetailsComponent
  },
  {
    path: '**', redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
