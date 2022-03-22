import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SwiperComponent } from 'swiper/angular';
import { Movie, MovieDetails } from '../../interfaces/interfaces';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideshowBackdropComponent {
  @Input() movies: Movie[] | MovieDetails[];
  @Input() showLoadMore = false;
  @Input() slider = true;
  @Output() stillFavorite = new EventEmitter<boolean>();
  @Output() more = new EventEmitter();
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor(private modalCtrl: ModalController) { }

  async movieDetails(id: number) {
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: {
        id
      }
    });
    modal.present();
    const { data: favorite } = await modal.onWillDismiss();
    if (!favorite) {
      this.stillFavorite.emit(true);
    };
  }

  loadMore() {
    const currentSlide = this.movies.length;
    this.more.emit();
    setTimeout(() => {
      this.swiper.swiperRef.slideTo(currentSlide);
    }, 500);
  }

}
