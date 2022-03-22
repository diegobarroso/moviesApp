import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowPairComponent } from './slideshow-pair/slideshow-pair.component';
import { DetailsComponent } from './details/details.component';

import { SwiperModule } from 'swiper/angular';



@NgModule({
  entryComponents: [
    DetailsComponent
  ],
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairComponent,
    DetailsComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    SwiperModule
  ]
})
export class ComponentsModule { }
