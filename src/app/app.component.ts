import { Component } from '@angular/core';
import { Api500pxService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  photos: string[];

  constructor(private api500pxService: Api500pxService) {

  }

  handleSearchTag = (breed) => {
    fetch(this.api500pxService.DogImages(breed))
      .then(res => res.json())
      .then(resJson => {
        this.photos = resJson.message;
      });
  }
}
