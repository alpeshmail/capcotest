import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicPopOverComponent } from './pic-pop-over.component';

describe('PicPopOverComponent', () => {
  let component: PicPopOverComponent;
  let fixture: ComponentFixture<PicPopOverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicPopOverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicPopOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
