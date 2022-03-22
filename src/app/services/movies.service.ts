import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credits, MovieDetails, NewsResponse } from '../interfaces/interfaces';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private params = new HttpParams()
      .set('api_key', apiKey);

  constructor(private http: HttpClient) { }


  searchMovies(query: string) {
    return this.http.get<NewsResponse>(`${URL}/search/movie?query=${query}`, {params: this.params});
  }

  getMovies(path: string, page: number = 1) {
    return this.http.get<NewsResponse>(`${URL}/movie/${path}?page=${page}`, {params: this.params});
  }

  getMovieDetails(id: number) {
    return this.http.get<MovieDetails>(`${URL}/movie/${id}`, {params: this.params});
  }

  getCredits(id: number) {
    return this.http.get<Credits>(`${URL}/movie/${id}/credits`, {params: this.params});
  }

}
