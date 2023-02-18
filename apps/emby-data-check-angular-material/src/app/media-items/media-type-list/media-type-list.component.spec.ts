import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaTypeListComponent } from './media-type-list.component';

describe('MediaTypeListComponent', () => {
  let component: MediaTypeListComponent;
  let fixture: ComponentFixture<MediaTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaTypeListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
