import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PicPopOverComponent } from './pic-pop-over/pic-pop-over.component';
import {PicPopVerService } from './pic-pop-over/pic-pop-ver.service'

@NgModule({
  declarations: [
    AppComponent,
    PicPopOverComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule
  ],
  providers: [PicPopVerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
