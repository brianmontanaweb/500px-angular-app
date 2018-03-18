import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoComponent } from './photos/photo/photo.component';
import { Api500pxService } from './shared';
import { SearchComponent } from './search/search.component';
import { StickyMenuComponent } from './sticky-menu/sticky-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    PhotoComponent,
    SearchComponent,
    StickyMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Api500pxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
