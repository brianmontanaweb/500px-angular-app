import {Component, OnInit} from '@angular/core';
import {Photo, Api500pxService} from '../shared';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos = [];

  constructor(private api500pxService: Api500pxService) {
  }

  ngOnInit() {
    this.photos = this.api500pxService.photos;
  }

}
