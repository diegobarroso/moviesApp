import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  nowPlaying: Movie[] = [];
  topRated: Movie[] = [];
  popularMovies: Movie[] = [];
  page = 0;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
      this.getMovies();
      this.getTopRated();
      this.getPopularMovies();
  }

  getMovies() {
    this.moviesService.getMovies('now_playing', ++this.page)
    .subscribe(resp => this.nowPlaying = [...this.nowPlaying, ...resp.results]);
  }

  getTopRated() {
    this.moviesService.getMovies('top_rated')
      .subscribe(resp => this.topRated = resp.results);
  }

  getPopularMovies() {
    this.moviesService.getMovies('popular')
      .subscribe(resp => this.popularMovies = resp.results);
  }

  loadMore() {
    this.getMovies();
  }

}
