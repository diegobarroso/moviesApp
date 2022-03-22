import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { map, mergeMap, pluck } from 'rxjs/operators';
import { Movie, NewsResponse } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  textToSearch = '';
  suggestions: string[] = [];
  movies: Movie[] = [];
  searching = false;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getMovies('popular')
      .pipe(
        pluck('results'),
        mergeMap(results => results),
        map((m: Movie) => this.suggestions.push(m.title))
      )
      .subscribe();
  }


  search(query) {
    this.searching = true;

    if (query.detail.value.length === 0) {
      this.searching = false;
      this.movies.length = 0;
      this.movies = [];
      return;

    }
    this.moviesService.searchMovies(query.detail.value)
      .subscribe(resp => {
        this.movies = resp.results;
        this.searching = false;
      });
  }

  onClick(suggestion: string) {
    this.textToSearch = suggestion;
  }

}
