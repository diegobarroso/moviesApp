/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { MovieDetails } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  movies: MovieDetails[] = [];
  private _storage: Storage | null = null;

  constructor(private storage: Storage,
              private toastCtrl: ToastController) {
    this.init();
    this.loadFavorites();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }



  saveMovie(movie: MovieDetails) {
    const index = this.movies.findIndex(m => m.id === movie.id);
    let message = '';

    if (index > -1) {
      this.movies.splice(index, 1);
      message = 'Movie deleted from favorites';
    } else {
      this.movies.push(movie);
      message = 'Movie added to favorites';
    }
    this._storage.set('movies', this.movies);
    this.presentToast(message);
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }


  async loadFavorites() {
    const movies = await this.storage.get('movies');
    this.movies = movies || [];
    return this.movies;
  }

  async movieExists(id: number) {
    await this.loadFavorites();
    return this.movies.findIndex(m => m.id === id) > -1;
  }

}
