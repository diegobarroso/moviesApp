import { Pipe, PipeTransform } from '@angular/core';
import { MovieDetails } from '../interfaces/interfaces';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(genres: MovieDetails[], genre: string): MovieDetails[] {
    return genres.filter(m => m.genres.some(g => g.name === genre));
  }

}
