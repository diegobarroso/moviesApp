import { Component } from '@angular/core';
import { Genre, MovieDetails } from '../interfaces/interfaces';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  genres: Genre[] = [
    {
    id: 28,
    name: 'Action'
    },
    {
    id: 12,
    name: 'Adventure'
    },
    {
    id: 16,
    name: 'Animation'
    },
    {
    id: 35,
    name: 'Comedy'
    },
    {
    id: 80,
    name: 'Crime'
    },
    {
    id: 99,
    name: 'Documentary'
    },
    {
    id: 18,
    name: 'Drama'
    },
    {
    id: 10751,
    name: 'Family'
    },
    {
    id: 14,
    name: 'Fantasy'
    },
    {
    id: 36,
    name: 'History'
    },
    {
    id: 27,
    name: 'Horror'
    },
    {
    id: 10402,
    name: 'Music'
    },
    {
    id: 9648,
    name: 'Mystery'
    },
    {
    id: 10749,
    name: 'Romance'
    },
    {
    id: 878,
    name: 'Science Fiction'
    },
    {
    id: 10770,
    name: 'TV Movie'
    },
    {
    id: 53,
    name: 'Thriller'
    },
    {
    id: 10752,
    name: 'War'
    },
    {
    id: 37,
    name: 'Western'
    }
    ];

  favorites: MovieDetails[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  async ionViewWillEnter() {
    this.favorites = await this.localStorageService.loadFavorites();
  }


  async removeFavorite(event) {
    this.favorites = await this.localStorageService.loadFavorites();
  }

}
