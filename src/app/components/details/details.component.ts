import { Component, Input, OnInit } from '@angular/core';
import { Cast, MovieDetails } from 'src/app/interfaces/interfaces';
import { MoviesService } from '../../services/movies.service';
import { ModalController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() id: number;

  movieDetails: MovieDetails;
  movieCast: Cast[];
  movieExists: boolean;

  hide = 150;

  constructor(private moviesService: MoviesService,
              private modalCtrl: ModalController,
              private localStorageService: LocalStorageService) { }

  async ngOnInit() {
    this.movieExists = await this.localStorageService.movieExists(this.id);

    this.moviesService.getMovieDetails(this.id)
      .subscribe(resp => this.movieDetails = resp);

    this.moviesService.getCredits(this.id)
      .subscribe(resp => {
        this.movieCast = resp.cast;
      });
  }


  back() {
    this.modalCtrl.dismiss(this.movieExists);
  }

  favorite() {
    this.localStorageService.saveMovie(this.movieDetails);
    this.movieExists = !this.movieExists;
  }

}
