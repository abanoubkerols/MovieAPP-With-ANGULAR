import { MoviesService } from 'src/app/services/movies.service';
import { Component } from '@angular/core';
import { Genre } from 'src/app/models/genre';


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent {

  genres: Genre[] = []

  constructor(private moviesService: MoviesService) {

  }

  ngOnInit(): void {
    this.moviesService.gerGenresMovies().subscribe(date => {
      this.genres = date
    })

  }
}
