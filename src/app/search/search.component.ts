import { Component, Input } from '@angular/core';
import { Api500pxService} from '../shared';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() handleSearchTag: Function;
  breeds: string[];

  constructor(private api500pxService: Api500pxService) {
    fetch(this.api500pxService.DogBreeds())
      .then(res => res.json())
      .then(resJson => {
        const breedsObj = resJson.message;
        const breeds = Object.keys(breedsObj);

        for (const key in breedsObj) {
          if (breedsObj[key].length) {
            breedsObj[key].map(el => `${key}-${el}`).forEach(el => breeds.push(el));
          }
        }

        this.breeds = breeds;
      });
    }
}
