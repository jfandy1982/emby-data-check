import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaItemDetailComponent } from './media-item-detail.component';

describe('MediaItemDetailComponent', () => {
  let component: MediaItemDetailComponent;
  let fixture: ComponentFixture<MediaItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaItemDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
