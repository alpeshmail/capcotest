import { Component, OnInit, HostListener } from '@angular/core';
import { PicPopVerService,PhotoModel } from './pic-pop-ver.service'
import { photoState } from './pic-pop-over.animation'

@Component({
  selector: 'app-pic-pop-over',
  templateUrl: './pic-pop-over.component.html',
  styleUrls: ['./pic-pop-over.component.css'],
  animations:[photoState]
})
export class PicPopOverComponent implements OnInit {

  PhotoList : PhotoModel[];
  constructor(private picPopVerService:PicPopVerService) {
    // this.PhotoList = [
    //   {Path:"assets/images/img1.jpg",State:'inactive'},
    //   {Path:"assets/images/img2.jpg",State:'inactive'},
    //   {Path:"assets/images/img3.jpg",State:'inactive'},
    //   {Path:"assets/images/img4.jpg",State:'inactive'},
    //   {Path:"assets/images/img5.jpg",State:'inactive'},
    //   {Path:"assets/images/img6.jpg",State:'inactive'},
    //   {Path:"assets/images/img7.jpg",State:'inactive'},
    //   {Path:"assets/images/img8.jpg",State:'inactive'},
    //   {Path:"assets/images/img9.jpg",State:'inactive'},
    //   {Path:"assets/images/img10.jpg",State:'inactive'},
    //   {Path:"assets/images/img11.jpg",State:'inactive'},
    //   {Path:"assets/images/img12.jpg",State:'inactive'},
    // ];
   }

  ngOnInit() {
    this.populateItems();
  }

  populateItems(){
    this.picPopVerService.getPhotoList().subscribe(res => {
      this.PhotoList = res;
    });
  }

  @HostListener('mouseenter') onMouseEnter(photoItem) {
    photoItem.State = (photoItem.State === 'active' ? 'inactive' : 'active');
  }

  @HostListener('mouseleave') onMouseLeave(photoItem) {
    photoItem.State = (photoItem.State === 'active' ? 'inactive' : 'active');
  }

}
