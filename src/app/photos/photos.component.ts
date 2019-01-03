import {Component, OnInit, Input} from '@angular/core';
import {Photo, Api500pxService} from '../shared';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: Photo[];

  constructor(private api500pxService: Api500pxService) {
  }

  ngOnInit() {
    this.photos = this.api500pxService.photos;
  }
}
