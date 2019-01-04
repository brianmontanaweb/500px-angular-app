import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky-menu',
  templateUrl: './sticky-menu.component.html',
  styleUrls: ['./sticky-menu.component.scss']
})
export class StickyMenuComponent implements OnInit {
  activeMenu = false;

  constructor() { }

  ngOnInit() {
  }

  stickyToggle = (active: boolean = this.activeMenu) => {
    this.activeMenu = !active;
  }

}
