import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaItemsComponent } from './media-items.component';

describe('MediaItemsComponent', () => {
  let component: MediaItemsComponent;
  let fixture: ComponentFixture<MediaItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaItemsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
