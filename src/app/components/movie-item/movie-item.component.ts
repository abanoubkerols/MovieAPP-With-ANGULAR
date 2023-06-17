import { Component, Input } from '@angular/core';
import { Images_Size } from 'src/app/constants/imagesSizes';
import { Movie } from 'src/app/models/movie';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() itemData: Movie | null = null
  img_sizes= Images_Size

}
