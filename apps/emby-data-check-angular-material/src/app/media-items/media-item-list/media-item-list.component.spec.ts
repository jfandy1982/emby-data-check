import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaItemListComponent } from './media-item-list.component';

describe('MediaItemListComponent', () => {
  let component: MediaItemListComponent;
  let fixture: ComponentFixture<MediaItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaItemListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
