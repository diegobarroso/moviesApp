import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { PairPipe } from './pair.pipe';
import { GenrePipe } from './genre.pipe';



@NgModule({
  declarations: [
    ImagePipe,
    PairPipe,
    GenrePipe
  ],
  exports: [
    ImagePipe,
    PairPipe,
    GenrePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
