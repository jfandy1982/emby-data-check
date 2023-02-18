import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaItemStartComponent } from './media-item-start.component';

describe('MediaItemStartComponent', () => {
  let component: MediaItemStartComponent;
  let fixture: ComponentFixture<MediaItemStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaItemStartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaItemStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
