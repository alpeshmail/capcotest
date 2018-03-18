import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; 
import { of } from 'rxjs/observable/of';


@Injectable()
export class PicPopVerService {

  private photos : PhotoModel[];
  constructor() {
    this.photos = [
      {Path:"assets/images/img1.jpg",State:'inactive'},
      {Path:"assets/images/img2.jpg",State:'inactive'},
      {Path:"assets/images/img3.jpg",State:'inactive'},
      {Path:"assets/images/img4.jpg",State:'inactive'},
      {Path:"assets/images/img5.jpg",State:'inactive'},
      {Path:"assets/images/img6.jpg",State:'inactive'},
      {Path:"assets/images/img7.jpg",State:'inactive'},
      {Path:"assets/images/img8.jpg",State:'inactive'},
      {Path:"assets/images/img9.jpg",State:'inactive'},
      {Path:"assets/images/img10.jpg",State:'inactive'},
      {Path:"assets/images/img11.jpg",State:'inactive'},
      {Path:"assets/images/img12.jpg",State:'inactive'},
    ];
  }

  getPhotoList () : Observable<PhotoModel[]> {
      return Observable.of(this.photos);
  }

}


export class PhotoModel{
  public  Path : string;
  public State :string;
}