import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfaces';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideshowPosterComponent {

  @Input() movies: Movie[] = [];

  constructor(private modalCtrl: ModalController) { }

  async movieDetails(id: number) {
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }

}

