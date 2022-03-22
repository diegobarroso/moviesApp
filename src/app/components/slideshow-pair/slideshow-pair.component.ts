import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfaces';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slideshow-pair',
  templateUrl: './slideshow-pair.component.html',
  styleUrls: ['./slideshow-pair.component.scss'],
})
export class SlideshowPairComponent {

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
