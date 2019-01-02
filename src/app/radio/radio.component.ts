import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {
  @Input() name: string = 'radioGroup';
  @Input() id: string;
  @Input() content: string = '';

  constructor() { }

  ngOnInit() {
    console.log(this);
  }

}
