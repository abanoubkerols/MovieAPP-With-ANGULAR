import { Movie, MovieCredits, MovieImage, MovieVideo } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Images_Size } from 'src/app/constants/imagesSizes';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: null | Movie = null
  img_sizes = Images_Size
  moviesVideos: MovieVideo[] = []
  moviesImages: MovieImage | null = null
  moviesCredit: MovieCredits | null = null
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {

  }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe((params) => {
      this.getMovie(params['id'])
      this.getMovieVideos(params['id'])
      this.getMoviesImages(params['id'])
      this.getMovieCredits(params['id'])
    })
  }

  getMovie(id: string) {
    this.moviesService.getMovieDetailsMovie(id).subscribe((movie) => {
      this.movie = movie
    })
  }

  getMovieVideos(id: string) {
    this.moviesService.getVideoMovies(id).subscribe((data) => {
      this.moviesVideos = data
    })
  }

  getMoviesImages(id: string) {
    this.moviesService.getImagesMovies(id).subscribe((movieImg) => {
      this.moviesImages = movieImg
    })
  }

  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((movieCreditsData) => {
      this.moviesCredit = movieCreditsData;
    });
  }
}
