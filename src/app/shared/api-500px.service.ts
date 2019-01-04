import {Injectable} from '@angular/core';

@Injectable()
export class Api500pxService {

  constructor() {
  }

  DogBreeds = () => {
    return 'https://dog.ceo/api/breeds/list/all';
  }

  DogImages = (breed) => {
    return `https://dog.ceo/api/breed/${breed}/images`;
  }

}
