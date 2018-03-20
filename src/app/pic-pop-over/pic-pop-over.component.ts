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
    
   }

  ngOnInit() {
    this.populateItems();
  }

  populateItems(){
    this.picPopVerService.getPhotoList().subscribe(res => {
      this.PhotoList = res;
    });
  }

  @HostListener('mouseenter') onMouseEnter(event : MouseEvent, photoItem : PhotoModel) {
    let calState = this.getMousePosition(event);
    photoItem.State = calState;
  }

  @HostListener('mouseleave') onMouseLeave( photoItem : PhotoModel) {
    //photoItem.State = (photoItem.State === 'active' ? 'inactive' : 'active');
    photoItem.State = 'inactive' ;
  }

  getMousePosition(event: MouseEvent){
    //const direction = event.type === 'mouseenter' ? 'active' : 'out';
    const direction =  'active'
    const host = event.target as HTMLElement;
    const w = host.offsetWidth;
    const h = host.offsetHeight;

    const x = (event.pageX - host.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
    const y = (event.pageY - host.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
    const states = ['top', 'right', 'bottom', 'left'];
    const side = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;

    let calState : string = `${states[side]}-${direction}`
    //return states[side];
    return calState;
  }

}
