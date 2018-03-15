import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoComponent } from './photos/photo/photo.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
