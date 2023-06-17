import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MovieCredits, MovieData, MovieImage, MovieVideoData } from '../models/movie';
import { of, switchMap } from 'rxjs';
import { GenreData } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseURL = 'https://api.themoviedb.org/3'
  apiKEY = 'ecc0e733a4063bd55121f97655fdda5f'




  constructor(private http: HttpClient) { }

  getMovies(type: string, count: number = 14) {
    return this.http.get<MovieData>(`${this.baseURL}/movie/${type}?api_key=${this.apiKEY}`).pipe(
      switchMap(res => {
        return of(res.results.slice(0, count))
      }))
  }




  getVideoMovies(id: string) {
    return this.http.get<MovieVideoData>(`${this.baseURL}/movie/${id}/videos?api_key=${this.apiKEY}`).pipe(
      switchMap(res => {
        return of(res.results)
      }))
  }


  gerGenresMovies() {
    return this.http.get<GenreData>(`${this.baseURL}/genre/movie/list?api_key=${this.apiKEY}`).pipe(
      switchMap(res => {
        return of(res.genres)
      }))
  }


  getMoviesBYGenre(genreId: string, page: number) {
    return this.http.get<MovieData>(`${this.baseURL}/discover/movie?with_genres=${genreId}&page=${page}&api_key=${this.apiKEY}`).pipe(
      switchMap(res => {
        return of(res.results)
      }))
  }
  getImagesMovies(id: string) {
    return this.http.get<MovieImage>(`${this.baseURL}/movie/${id}/images?api_key=${this.apiKEY}`)
  }


  getMovieDetailsMovie(id: string) {
    return this.http.get<Movie>(`${this.baseURL}/movie/${id}?api_key=${this.apiKEY}`)

  }


  PaginationMovies(page: number, search?: string) {
    const uri = search ? '/search/movie' : '/movie/popular'
    return this.http.get<MovieData>(`${this.baseURL}${uri}?page=${page}&query=${search}&api_key=${this.apiKEY}`).pipe(
      switchMap(res => {
        return of(res.results)
      }))
  }


  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(`${this.baseURL}/movie/${id}/credits?api_key=${this.apiKEY}`);
  }


  getTVs(type: string, count: number = 14) {
    return this.http.get<MovieData>(`${this.baseURL}/movie/${type}?api_key=${this.apiKEY}`).pipe(
      switchMap(res => {
        return of(res.results.slice(0, count))
      }))
  }




}
