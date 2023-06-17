import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = []
  genreId: string | null = null
  searchValue: string = ''
  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {



    this.activatedRoute.params.pipe(take(1)).subscribe((params) => {
      if (params['genreId']) {
        this.genreId = params['genreId']
        this.getMoviesByGenre(params['genreId'], 1)
      }
      else {
        this.getPageMovies(1)
      }
    })




  }

  getPageMovies(page: number, searchkey?: string) {
    this.moviesService.PaginationMovies(page, searchkey).subscribe((movies) => {
      this.movies = movies
    })
  }

  getMoviesByGenre(genreId: string, page: number) {
    this.moviesService.getMoviesBYGenre(genreId, page).subscribe((data) => {
      this.movies = data
    })
  }


  paginate(event: any) {


    const pageNumber = event.page + 1
    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNumber)
    } else {
      if (this.searchValue) {
        this.getPageMovies(pageNumber, this.searchValue)
      }
      else {
        this.getPageMovies(pageNumber)
      }
    }

  }


  searched() {
    if (this.searchValue) {


      this.getPageMovies(1, this.searchValue)
    }
  }
}
