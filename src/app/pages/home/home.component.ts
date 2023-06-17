import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularMovies: Movie[] = []
  upcomingMovies: Movie[] = []
  topRatedMovies: Movie[] = []

  constructor(private movieService: MoviesService) {

  }

  ngOnInit(): void {
    this.movieService.getMovies('popular').subscribe((res) => {
      this.popularMovies = res
    })
    this.movieService.getMovies('top_rated').subscribe((res) => {
      this.topRatedMovies = res
    })
    this.movieService.getMovies('upcoming' , 12).subscribe((res) => {
      this.upcomingMovies  = res
    })
  }


}
